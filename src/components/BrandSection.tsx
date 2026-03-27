"use client";

import ColorSwatch from "./ColorSwatch";

interface BrandColor {
  hex: string;
  name: string;
  usage?: string;
}

interface BrandSectionProps {
  id: string;
  index: string;
  name: string;
  tagline: string;
  description: string;
  audience: string;
  purpose: string;
  accentColor: string;
  assetsSlug?: string;
  colors: BrandColor[];
  typography: {
    logo: string;
    body: string;
    hierarchy?: string[];
  };
  logoRules: {
    minDigital: string;
    minPrint: string;
    symbolDigital: string;
    symbolPrint: string;
  };
}

export default function BrandSection({
  id,
  index,
  name,
  tagline,
  description,
  audience,
  purpose,
  accentColor,
  colors,
  typography,
  logoRules,
  assetsSlug,
}: BrandSectionProps) {
  return (
    <section
      id={id}
      className="border-t border-[var(--color-surface-600)] py-24"
    >
      <div className="mx-auto max-w-[1440px] px-6">
        <span className="section-label">[{index}] identidade visual</span>

        <div className="mt-4 mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-4xl font-bold md:text-5xl">
              <span style={{ color: accentColor }}>{name}</span>
            </h2>
            <p className="mt-2 text-lg text-[var(--color-text-secondary)]">
              {tagline}
            </p>
          </div>
          <div className="flex gap-8 text-sm">
            <div>
              <span className="block font-[var(--font-mono)] text-xs uppercase text-[var(--color-text-muted)]">
                Público
              </span>
              <span className="text-[var(--color-text-primary)]">
                {audience}
              </span>
            </div>
            <div>
              <span className="block font-[var(--font-mono)] text-xs uppercase text-[var(--color-text-muted)]">
                Propósito
              </span>
              <span className="text-[var(--color-text-primary)]">
                {purpose}
              </span>
            </div>
          </div>
        </div>

        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)]">
            {description}
          </p>
          {assetsSlug && (
            <a
              href={`/assets?brand=${assetsSlug}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-medium transition-all hover:brightness-110"
              style={{ borderColor: accentColor, color: accentColor }}
            >
              Download Assets &darr;
            </a>
          )}
        </div>

        {/* Colors */}
        <div className="mb-16">
          <h3 className="mb-8 text-xl font-semibold">Paleta de Cores</h3>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {colors.map((color) => (
              <ColorSwatch key={color.hex} {...color} />
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="mb-16">
          <h3 className="mb-8 text-xl font-semibold">Tipografia</h3>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="brand-card rounded-2xl bg-[var(--color-surface-800)] p-8">
              <span className="font-[var(--font-mono)] text-xs uppercase text-[var(--color-text-muted)]">
                Fonte do Logo
              </span>
              <p
                className="type-specimen mt-4 text-4xl font-bold"
                style={{ color: accentColor }}
              >
                {typography.logo}
              </p>
            </div>
            <div className="brand-card rounded-2xl bg-[var(--color-surface-800)] p-8">
              <span className="font-[var(--font-mono)] text-xs uppercase text-[var(--color-text-muted)]">
                Fonte do Corpo
              </span>
              <p className="type-specimen mt-4 text-4xl font-bold text-[var(--color-text-primary)]">
                {typography.body}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
                <br />
                abcdefghijklmnopqrstuvwxyz
                <br />
                0123456789 !@#$%&*
              </p>
            </div>
          </div>
          {typography.hierarchy && (
            <div className="brand-card mt-8 rounded-2xl bg-[var(--color-surface-800)] p-8">
              <span className="font-[var(--font-mono)] text-xs uppercase text-[var(--color-text-muted)]">
                Hierarquia Tipográfica
              </span>
              <div className="mt-6 space-y-4">
                {typography.hierarchy.map((level, i) => (
                  <div
                    key={i}
                    className="flex items-baseline gap-4 border-b border-[var(--color-surface-600)] pb-4 last:border-0"
                  >
                    <span className="shrink-0 font-[var(--font-mono)] text-xs text-[var(--color-text-muted)]">
                      {level.split(":")[0]}
                    </span>
                    <span
                      className="text-[var(--color-text-primary)]"
                      style={{
                        fontSize: `${Math.max(14, 36 - i * 6)}px`,
                        fontWeight: i < 2 ? 700 : i < 4 ? 500 : 400,
                      }}
                    >
                      {level.split(":")[1]?.trim() || level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Logo Rules */}
        <div>
          <h3 className="mb-8 text-xl font-semibold">
            Regras de Uso do Logo
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Logo Digital Min.", value: logoRules.minDigital },
              { label: "Logo Print Min.", value: logoRules.minPrint },
              { label: "Símbolo Digital Min.", value: logoRules.symbolDigital },
              { label: "Símbolo Print Min.", value: logoRules.symbolPrint },
            ].map((rule) => (
              <div
                key={rule.label}
                className="brand-card rounded-2xl bg-[var(--color-surface-800)] p-6"
              >
                <span className="font-[var(--font-mono)] text-xs uppercase text-[var(--color-text-muted)]">
                  {rule.label}
                </span>
                <p
                  className="mt-3 text-2xl font-bold"
                  style={{ color: accentColor }}
                >
                  {rule.value}
                </p>
              </div>
            ))}
          </div>

          <div className="brand-card mt-8 rounded-2xl bg-[var(--color-surface-800)] p-8">
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--color-functional-red)]">
              Proibido
            </h4>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {[
                "Distorcer",
                "Alterar cores",
                "Cortar",
                "Trocar tipografia",
                "Sombras/efeitos",
                "Gradientes",
                "Rotação livre",
                "Alterar opacidade",
                "Adicionar contorno",
                "Enfeites",
              ].map((rule) => (
                <div
                  key={rule}
                  className="flex items-center gap-2 rounded-lg bg-[var(--color-surface-700)] px-3 py-2"
                >
                  <span className="text-xs text-[var(--color-functional-red)]">
                    ✕
                  </span>
                  <span className="text-xs text-[var(--color-text-secondary)]">
                    {rule}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
