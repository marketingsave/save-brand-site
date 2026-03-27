const footerSections = [
  {
    title: "brandbook",
    links: [
      { label: "Ecossistema", href: "#ecossistema" },
      { label: "Brand Persona", href: "#persona" },
      { label: "Tom de Voz", href: "#voz" },
      { label: "Referência Rápida", href: "#referencia" },
    ],
  },
  {
    title: "identidade visual",
    links: [
      { label: "Save Co.", href: "#saveco" },
      { label: "Save Partners", href: "#partners" },
      { label: "Save Educação", href: "#educacao" },
      { label: "Libr.ia", href: "#libria" },
      { label: "Save ID", href: "#saveid" },
    ],
  },
  {
    title: "fundamentos",
    links: [
      { label: "Cores", href: "#cores" },
      { label: "Tipografia", href: "#tipografia" },
      { label: "Logos", href: "#logos" },
      { label: "Fotografia", href: "#fotografia" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-surface-600)] bg-[var(--color-surface-800)]">
      <div className="mx-auto max-w-[1440px] px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-brand-gold)]">
                <span className="text-lg font-bold text-[var(--color-surface-900)]">
                  S
                </span>
              </div>
              <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                Save Ecosystem
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
              O impulso para o seu próximo nível.
            </p>
            <p className="mt-4 font-[var(--font-mono)] text-xs text-[var(--color-text-muted)]">
              Brand Guidelines v2.0
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 font-[var(--font-mono)] text-xs font-medium tracking-wider uppercase text-[var(--color-text-muted)]">
                [{section.title}]
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-surface-600)] pt-8 md:flex-row">
          <p className="text-xs text-[var(--color-text-muted)]">
            &copy; {new Date().getFullYear()} Save Ecosystem. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-[var(--color-text-muted)]">
            +10k empresas &middot; +R$3.1bi operações &middot; +200 parceiros
          </p>
        </div>
      </div>
    </footer>
  );
}
