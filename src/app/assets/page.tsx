"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { brands, R2_BASE_URL } from "@/lib/assets-data";
import type { BrandAsset } from "@/lib/assets-data";

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
      {/* Preview */}
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

      {/* Info */}
      <div className="flex flex-1 flex-col p-3">
        <p
          className="line-clamp-2 text-xs font-medium text-[var(--color-text-primary)]"
          title={asset.fileName}
        >
          {asset.fileName}
        </p>
        <p className="mt-1 text-[10px] text-[var(--color-text-muted)]">
          {asset.category}
        </p>
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
  const [activeBrand, setActiveBrand] = useState<string>(brandParam || "all");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [activeType, setActiveType] = useState<string>("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (brandParam && brands.some((b) => b.slug === brandParam)) {
      setActiveBrand(brandParam);
    }
  }, [brandParam]);

  const totalAssets = useMemo(
    () => brands.reduce((sum, b) => sum + b.categories.reduce((s, c) => s + c.assets.length, 0), 0),
    []
  );

  const selectedBrand = brands.find((b) => b.slug === activeBrand);

  const categories = useMemo(() => {
    if (activeBrand === "all") {
      const allCats = new Set<string>();
      brands.forEach((b) => b.categories.forEach((c) => allCats.add(c.name)));
      return Array.from(allCats).sort();
    }
    return selectedBrand?.categories.map((c) => c.name) || [];
  }, [activeBrand, selectedBrand]);

  const filteredAssets = useMemo(() => {
    let assets: (BrandAsset & { accentColor: string })[] = [];

    const brandsToSearch = activeBrand === "all" ? brands : brands.filter((b) => b.slug === activeBrand);

    brandsToSearch.forEach((brand) => {
      brand.categories.forEach((cat) => {
        if (activeCategory !== "all" && cat.name !== activeCategory) return;
        cat.assets.forEach((asset) => {
          if (activeType !== "all" && asset.fileType !== activeType) return;
          assets.push({ ...asset, accentColor: brand.accentColor });
        });
      });
    });

    if (search.trim()) {
      const q = search.toLowerCase();
      assets = assets.filter(
        (a) =>
          a.fileName.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q) ||
          a.brand.toLowerCase().includes(q)
      );
    }

    return assets;
  }, [activeBrand, activeCategory, activeType, search]);

  return (
    <div className="min-h-screen bg-[var(--color-surface-900)]">
      {/* Header */}
      <header className="border-b border-[var(--color-surface-600)] bg-[var(--color-surface-900)]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-brand-gold)]">
              <span className="text-lg font-bold text-[var(--color-surface-900)]">S</span>
            </div>
            <div>
              <span className="text-sm font-semibold tracking-wider uppercase text-[var(--color-text-primary)]">
                Brand Assets
              </span>
              <span className="ml-2 rounded bg-[var(--color-surface-600)] px-2 py-0.5 font-[var(--font-mono)] text-[10px] text-[var(--color-text-muted)]">
                {totalAssets} arquivos
              </span>
            </div>
          </Link>
          <Link
            href="/"
            className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
          >
            &larr; Guidelines
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-[1440px] px-6 py-8">
        {/* Hero */}
        <div className="mb-12">
          <span className="section-label">biblioteca de assets</span>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">
            Arquivos da <span className="text-[var(--color-brand-gold)]">Marca</span>
          </h1>
          <p className="mt-3 max-w-2xl text-base text-[var(--color-text-secondary)]">
            Logos, materiais gráficos, apresentações, guias e todos os assets do ecossistema Save.
            Clique em qualquer arquivo para download.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center">
          {/* Search */}
          <div className="relative flex-1">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar por nome, marca ou categoria..."
              className="w-full rounded-xl border border-[var(--color-surface-600)] bg-[var(--color-surface-800)] px-4 py-3 pl-10 text-sm text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] outline-none transition-colors focus:border-[var(--color-brand-gold)]"
            />
            <span className="absolute top-3.5 left-3.5 text-sm text-[var(--color-text-muted)]">
              &#x1F50D;
            </span>
          </div>

          {/* Brand filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => { setActiveBrand("all"); setActiveCategory("all"); }}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                activeBrand === "all"
                  ? "bg-[var(--color-brand-gold)] text-[var(--color-surface-900)]"
                  : "border border-[var(--color-surface-500)] text-[var(--color-text-secondary)] hover:border-[var(--color-text-muted)]"
              }`}
            >
              Todas ({totalAssets})
            </button>
            {brands.map((brand) => {
              const count = brand.categories.reduce((s, c) => s + c.assets.length, 0);
              return (
                <button
                  key={brand.slug}
                  onClick={() => { setActiveBrand(brand.slug); setActiveCategory("all"); }}
                  className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                    activeBrand === brand.slug
                      ? "text-[var(--color-surface-900)]"
                      : "border border-[var(--color-surface-500)] text-[var(--color-text-secondary)] hover:border-[var(--color-text-muted)]"
                  }`}
                  style={
                    activeBrand === brand.slug
                      ? { backgroundColor: brand.accentColor }
                      : undefined
                  }
                >
                  {brand.name} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Secondary filters */}
        <div className="mb-8 flex flex-wrap gap-4">
          {/* Category filter */}
          {categories.length > 1 && (
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory("all")}
                className={`rounded-lg px-3 py-1.5 text-xs transition-all ${
                  activeCategory === "all"
                    ? "bg-[var(--color-surface-600)] text-[var(--color-text-primary)]"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
                }`}
              >
                Todas categorias
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-lg px-3 py-1.5 text-xs transition-all ${
                    activeCategory === cat
                      ? "bg-[var(--color-surface-600)] text-[var(--color-text-primary)]"
                      : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {/* Type filter */}
          <div className="ml-auto flex gap-2">
            {["all", "image", "document", "presentation"].map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`rounded-lg px-3 py-1.5 text-xs transition-all ${
                  activeType === type
                    ? "bg-[var(--color-surface-600)] text-[var(--color-text-primary)]"
                    : "text-[var(--color-text-muted)] hover:text-[var(--color-text-secondary)]"
                }`}
              >
                {type === "all" ? "Todos tipos" : fileTypeLabels[type]}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="mb-6 font-[var(--font-mono)] text-xs text-[var(--color-text-muted)]">
          {filteredAssets.length} arquivo{filteredAssets.length !== 1 ? "s" : ""} encontrado
          {filteredAssets.length !== 1 ? "s" : ""}
        </p>

        {/* Asset Grid */}
        {filteredAssets.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
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
      </div>

      {/* Footer */}
      <footer className="mt-16 border-t border-[var(--color-surface-600)] py-8">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-[var(--color-text-muted)]">
              Hospedado no Cloudflare R2 &middot; CDN global &middot;{" "}
              <span className="font-[var(--font-mono)]">{totalAssets} assets</span>
            </p>
            <Link
              href="/"
              className="text-xs text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
            >
              &larr; Voltar para Brand Guidelines
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
