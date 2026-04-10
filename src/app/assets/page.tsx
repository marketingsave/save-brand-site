"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Logo from "@/components/Logo";
import { brands as allBrands } from "@/lib/assets-data";
import type { BrandAsset } from "@/lib/assets-data";

// Only show logo categories — hide all other materials
const LOGO_CATEGORIES = ["Arquivos Da Marca", "Logo", "Logos"];

const brands = allBrands
  .map((brand) => ({
    ...brand,
    categories: brand.categories.filter((cat) =>
      LOGO_CATEGORIES.includes(cat.name)
    ),
  }))
  .filter((brand) => brand.categories.length > 0);

const fileTypeIcons: Record<string, string> = {
  image: "🖼",
  document: "📄",
  presentation: "📊",
};

const fileTypeLabels: Record<string, string> = {
  image: "Imagens",
  document: "Documentos",
  presentation: "Apresentações",
};

function AssetCard({ asset, accentColor }: { asset: BrandAsset; accentColor: string }) {
  const isImage = asset.fileType === "image";
  const ext = asset.fileName.split(".").pop()?.toUpperCase() || "";

  return (
    <a
      href={asset.url}
      target="_blank"
      rel="noopener noreferrer"
      className="brand-card group flex flex-col overflow-hidden rounded-xl bg-[var(--color-surface-800)]"
    >
      <div className="relative flex h-40 items-center justify-center overflow-hidden bg-[var(--color-surface-700)]">
        {isImage ? (
          <img
            src={asset.url}
            alt={asset.fileName}
            className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <span className="text-4xl">{fileTypeIcons[asset.fileType] || "📁"}</span>
        )}
        <span
          className="absolute top-2 right-2 rounded px-2 py-0.5 text-[10px] font-bold uppercase"
          style={{ backgroundColor: accentColor, color: "#0A0A0A" }}
        >
          {ext}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-3">
        <p
          className="line-clamp-2 text-xs font-medium text-[var(--color-text-primary)]"
          title={asset.fileName}
        >
          {asset.fileName}
        </p>
        <p className="mt-1 text-[10px] text-[var(--color-text-muted)]">{asset.category}</p>
        <span
          className="mt-auto pt-2 text-xs font-medium transition-colors"
          style={{ color: accentColor }}
        >
          Download &darr;
        </span>
      </div>
    </a>
  );
}

export default function AssetsPageWrapper() {
  return (
    <Suspense>
      <AssetsPage />
    </Suspense>
  );
}

function AssetsPage() {
  const searchParams = useSearchParams();
  const brandParam = searchParams.get("brand");

  const initialBrand =
    brandParam && brands.some((b) => b.slug === brandParam)
      ? brandParam
      : brands[0].slug;

  const [activeBrandSlug, setActiveBrandSlug] = useState<string>(initialBrand);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeType, setActiveType] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const totalAssets = useMemo(
    () => brands.reduce((sum, b) => sum + b.categories.reduce((s, c) => s + c.assets.length, 0), 0),
    []
  );

  const activeBrand = brands.find((b) => b.slug === activeBrandSlug) || brands[0];
  const brandTotal = activeBrand.categories.reduce((s, c) => s + c.assets.length, 0);

  const handleBrandChange = (slug: string) => {
    setActiveBrandSlug(slug);
    setActiveCategory("all");
    setSearch("");
    setSidebarOpen(false);
  };

  const filteredAssets = useMemo(() => {
    let assets: (BrandAsset & { accentColor: string })[] = [];

    activeBrand.categories.forEach((cat) => {
      if (activeCategory !== "all" && cat.name !== activeCategory) return;
      cat.assets.forEach((asset) => {
        if (activeType !== "all" && asset.fileType !== activeType) return;
        assets.push({ ...asset, accentColor: activeBrand.accentColor });
      });
    });

    if (search.trim()) {
      const q = search.toLowerCase();
      assets = assets.filter(
        (a) =>
          a.fileName.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q)
      );
    }

    return assets;
  }, [activeBrand, activeCategory, activeType, search]);

  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-surface-900)]">
      {/* ── Top Header ── */}
      <header className="sticky top-0 z-30 border-b border-[var(--color-surface-600)] bg-[var(--color-surface-900)]/90 backdrop-blur-md">
        <div className="flex items-center justify-between px-4 py-4 lg:px-6">
          <div className="flex items-center gap-3">
            {/* Hamburger (mobile only) */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="mr-1 flex h-8 w-8 items-center justify-center rounded-lg text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface-700)] hover:text-[var(--color-text-primary)] lg:hidden"
              aria-label="Abrir menu"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <rect y="2" width="16" height="1.5" rx="0.75" />
                <rect y="7.25" width="16" height="1.5" rx="0.75" />
                <rect y="12.5" width="16" height="1.5" rx="0.75" />
              </svg>
            </button>
            <Logo label="Brand Assets" />
            <span className="rounded bg-[var(--color-surface-600)] px-2 py-0.5 font-[var(--font-mono)] text-[10px] text-[var(--color-text-muted)]">
              {totalAssets} arquivos
            </span>
          </div>
          <Link
            href="/"
            className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
          >
            &larr; Guidelines
          </Link>
        </div>
      </header>

      {/* ── Body: Sidebar + Main ── */}
      <div className="flex flex-1">

        {/* ── Sidebar overlay (mobile) ── */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/60 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* ── Sidebar ── */}
        <aside
          className={`
            fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-[var(--color-surface-600)]
            bg-[var(--color-surface-900)] transition-transform duration-300 ease-in-out
            lg:sticky lg:top-[73px] lg:h-[calc(100vh-73px)] lg:translate-x-0
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          {/* Close button (mobile) */}
          <div className="flex items-center justify-between border-b border-[var(--color-surface-700)] px-4 py-4 lg:hidden">
            <span className="text-sm font-medium text-[var(--color-text-primary)]">Marcas</span>
            <button
              onClick={() => setSidebarOpen(false)}
              className="flex h-7 w-7 items-center justify-center rounded-md text-[var(--color-text-muted)] hover:bg-[var(--color-surface-700)]"
            >
              ✕
            </button>
          </div>

          {/* Sidebar scroll area */}
          <div className="flex flex-1 flex-col overflow-y-auto">
            <div className="px-4 pb-2 pt-5 lg:pt-5">
              <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-widest text-[var(--color-text-muted)]">
                Marcas
              </p>
            </div>

            <nav className="flex-1 space-y-0.5 px-2 pb-4">
              {brands.map((brand) => {
                const count = brand.categories.reduce((s, c) => s + c.assets.length, 0);
                const isActive = brand.slug === activeBrandSlug;

                return (
                  <div key={brand.slug}>
                    {/* Brand button */}
                    <button
                      onClick={() => handleBrandChange(brand.slug)}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left transition-all ${
                        isActive
                          ? "font-medium text-[var(--color-text-primary)]"
                          : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-700)] hover:text-[var(--color-text-primary)]"
                      }`}
                      style={
                        isActive
                          ? { backgroundColor: `${brand.accentColor}18` }
                          : undefined
                      }
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className="h-2 w-2 shrink-0 rounded-full transition-colors"
                          style={{
                            backgroundColor: isActive ? brand.accentColor : "transparent",
                            border: `1.5px solid ${isActive ? brand.accentColor : "var(--color-surface-500)"}`,
                          }}
                        />
                        <span className="text-sm">{brand.name}</span>
                      </div>
                      <span className="text-[10px] text-[var(--color-text-muted)]">{count}</span>
                    </button>

                    {/* Category sub-items (expanded for active brand) */}
                    {isActive && (
                      <div className="ml-[22px] mt-0.5 border-l border-[var(--color-surface-600)] pl-3 pb-2">
                        <button
                          onClick={() => setActiveCategory("all")}
                          className={`flex w-full items-center justify-between rounded px-2 py-1.5 text-xs transition-all ${
                            activeCategory === "all"
                              ? "font-medium text-[var(--color-text-primary)]"
                              : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
                          }`}
                        >
                          <span>Todos</span>
                          <span className="text-[10px] opacity-60">{brandTotal}</span>
                        </button>
                        {brand.categories.map((cat) => (
                          <button
                            key={cat.name}
                            onClick={() => setActiveCategory(cat.name)}
                            className={`flex w-full items-center justify-between rounded px-2 py-1.5 text-xs transition-all ${
                              activeCategory === cat.name
                                ? "font-medium text-[var(--color-text-primary)]"
                                : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
                            }`}
                          >
                            <span className="line-clamp-1 text-left">{cat.name}</span>
                            <span className="ml-1 shrink-0 text-[10px] opacity-50">
                              {cat.assets.length}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Sidebar footer */}
            <div className="border-t border-[var(--color-surface-700)] px-4 py-3">
              <p className="text-[10px] text-[var(--color-text-muted)]">
                Cloudflare R2 &middot; CDN global
              </p>
            </div>
          </div>
        </aside>

        {/* ── Main Content ── */}
        <main className="flex-1 min-w-0 px-5 py-7 lg:px-8 lg:py-8">

          {/* Breadcrumb / Brand header */}
          <div className="mb-7">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="h-3 w-3 shrink-0 rounded-full"
                style={{ backgroundColor: activeBrand.accentColor }}
              />
              <h1 className="text-xl font-bold text-[var(--color-text-primary)] lg:text-2xl">
                {activeBrand.name}
              </h1>
              {activeCategory !== "all" && (
                <>
                  <span className="text-[var(--color-text-muted)]">/</span>
                  <span
                    className="text-sm font-medium lg:text-base"
                    style={{ color: activeBrand.accentColor }}
                  >
                    {activeCategory}
                  </span>
                </>
              )}
            </div>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">
              {brandTotal} arquivos &middot; {activeBrand.categories.length} categorias
            </p>
          </div>

          {/* Mobile: Brand horizontal scroll tabs */}
          <div className="mb-4 -mx-5 overflow-x-auto px-5 lg:hidden">
            <div className="flex gap-2 pb-1" style={{ width: "max-content" }}>
              {brands.map((brand) => (
                <button
                  key={brand.slug}
                  onClick={() => handleBrandChange(brand.slug)}
                  className={`rounded-full px-4 py-2 text-xs font-medium whitespace-nowrap transition-all ${
                    activeBrandSlug === brand.slug
                      ? "text-[var(--color-surface-900)]"
                      : "border border-[var(--color-surface-500)] text-[var(--color-text-secondary)]"
                  }`}
                  style={
                    activeBrandSlug === brand.slug
                      ? { backgroundColor: brand.accentColor }
                      : undefined
                  }
                >
                  {brand.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile: Category scroll tabs */}
          {activeBrand.categories.length > 1 && (
            <div className="mb-5 -mx-5 overflow-x-auto px-5 lg:hidden">
              <div className="flex gap-1.5 pb-1" style={{ width: "max-content" }}>
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`rounded-lg px-3 py-1.5 text-xs transition-all ${
                    activeCategory === "all"
                      ? "bg-[var(--color-surface-600)] text-[var(--color-text-primary)] font-medium"
                      : "text-[var(--color-text-muted)] border border-[var(--color-surface-600)]"
                  }`}
                >
                  Todos
                </button>
                {activeBrand.categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`rounded-lg px-3 py-1.5 text-xs whitespace-nowrap transition-all ${
                      activeCategory === cat.name
                        ? "bg-[var(--color-surface-600)] text-[var(--color-text-primary)] font-medium"
                        : "text-[var(--color-text-muted)] border border-[var(--color-surface-600)]"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Search + Type filter */}
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar arquivo ou categoria..."
                className="w-full rounded-xl border border-[var(--color-surface-600)] bg-[var(--color-surface-800)] px-4 py-2.5 pl-9 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none transition-colors focus:border-[var(--color-brand-gold)]"
              />
              <span className="absolute top-2.5 left-3 text-sm text-[var(--color-text-muted)]">
                &#x1F50D;
              </span>
            </div>

            <div className="flex gap-1 rounded-xl border border-[var(--color-surface-600)] bg-[var(--color-surface-800)] p-1">
              {["all", "image", "document", "presentation"].map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`rounded-lg px-3 py-1.5 text-xs transition-all ${
                    activeType === type
                      ? "bg-[var(--color-surface-600)] text-[var(--color-text-primary)] font-medium"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
                  }`}
                >
                  {type === "all" ? "Todos" : fileTypeLabels[type]}
                </button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p className="mb-4 font-[var(--font-mono)] text-xs text-[var(--color-text-muted)]">
            {filteredAssets.length} arquivo{filteredAssets.length !== 1 ? "s" : ""} encontrado
            {filteredAssets.length !== 1 ? "s" : ""}
          </p>

          {/* Asset Grid */}
          {filteredAssets.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
              {filteredAssets.map((asset, i) => (
                <AssetCard key={`${asset.r2Key}-${i}`} asset={asset} accentColor={asset.accentColor} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <span className="text-4xl">📂</span>
              <p className="mt-4 text-lg font-medium text-[var(--color-text-primary)]">
                Nenhum arquivo encontrado
              </p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                Tente ajustar os filtros ou a busca
              </p>
            </div>
          )}

          {/* Footer */}
          <footer className="mt-16 border-t border-[var(--color-surface-700)] pt-6">
            <div className="flex items-center justify-between">
              <p className="text-[10px] text-[var(--color-text-muted)]">
                Hospedado no Cloudflare R2 &middot; CDN global &middot;{" "}
                <span className="font-[var(--font-mono)]">{totalAssets} assets</span>
              </p>
              <Link
                href="/"
                className="text-xs text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
              >
                &larr; Brand Guidelines
              </Link>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
