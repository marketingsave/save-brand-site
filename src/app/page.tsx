import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import BrandSection from "@/components/BrandSection";

const brands = [
  {
    id: "saveco",
    index: "03",
    name: "Save Co.",
    assetsSlug: "save-co",
    tagline: "Inteligência Empresarial",
    description:
      "A Save Co. é a vertical de inteligência do ecossistema. Estrutura o negócio do cliente com estratégia tributária, contabilidade inteligente e planejamento financeiro. Atende CEOs, fundadores e empresários que querem tomar decisões com base em dados.",
    audience: "CEOs, Fundadores",
    purpose: "Estrutura o negócio",
    accentColor: "#FFD156",
    colors: [
      { hex: "#FFD156", name: "Dourado", usage: "Cor primária" },
      { hex: "#E5E2E0", name: "Cinza Claro", usage: "Backgrounds" },
      { hex: "#333333", name: "Cinza Escuro", usage: "Texto principal" },
      { hex: "#969699", name: "Cinza Médio", usage: "Texto secundário" },
    ],
    typography: {
      logo: "Stolzl",
      body: "IBM Plex Sans",
      hierarchy: [
        "H1: 140pt / 140pt leading",
        "H2: 55pt / 60pt leading",
        "H3: 34pt / 39pt leading",
        "Body: 21pt / 31pt leading",
        "Descritivo: 18pt / 21pt leading",
      ],
    },
    logoRules: {
      minDigital: "140px",
      minPrint: "30mm",
      symbolDigital: "30px",
      symbolPrint: "5mm",
    },
  },
  {
    id: "partners",
    index: "04",
    name: "Save Partners",
    assetsSlug: "save-partners",
    tagline: "Expansão & Crescimento",
    description:
      "A Save Partners é a vertical de expansão. Conecta contadores, advogados e profissionais que querem acelerar o crescimento de seus clientes através de parcerias estratégicas com o ecossistema Save.",
    audience: "Contadores, Advogados",
    purpose: "Acelera crescimento",
    accentColor: "#549B82",
    colors: [
      { hex: "#1E1E1E", name: "Preto", usage: "Background primário" },
      { hex: "#549B82", name: "Verde Sage", usage: "Accent principal" },
      { hex: "#757C7C", name: "Cinza Esverdeado", usage: "Texto secundário" },
      { hex: "#E5E2E0", name: "Cinza Claro", usage: "Backgrounds claros" },
      { hex: "#F2F2F2", name: "Cinza Ultra Claro", usage: "Superfícies" },
    ],
    typography: {
      logo: "Stolzl",
      body: "IBM Plex Sans",
      hierarchy: [
        "H1: 140pt / 140pt leading",
        "H2: 55pt / 60pt leading",
        "H3: 34pt / 39pt leading",
        "Body: 21pt / 31pt leading",
        "Descritivo: 18pt / 21pt leading",
      ],
    },
    logoRules: {
      minDigital: "210px",
      minPrint: "50mm",
      symbolDigital: "30px",
      symbolPrint: "5mm",
    },
  },
  {
    id: "educacao",
    index: "05",
    name: "Save Educação",
    assetsSlug: "save-educacao",
    tagline: "Formação & Desenvolvimento",
    description:
      "A Save Educação é a vertical de formação do ecossistema. Desenvolve o potencial de profissionais em transição de carreira, oferecendo capacitação em contabilidade, gestão e inteligência tributária.",
    audience: "Profissionais em transição",
    purpose: "Desenvolve potencial",
    accentColor: "#496B96",
    colors: [
      { hex: "#1C2838", name: "Azul Navy", usage: "Cor primária" },
      { hex: "#496B96", name: "Azul Médio", usage: "Accent / destaque" },
      { hex: "#EAEDEF", name: "Cinza Azulado", usage: "Backgrounds claros" },
      { hex: "#33383D", name: "Cinza Escuro", usage: "Texto principal" },
      { hex: "#E5E2E0", name: "Cinza Claro", usage: "Superfícies" },
    ],
    typography: {
      logo: "Stolzl",
      body: "IBM Plex Sans",
      hierarchy: [
        "H1: 140pt / 140pt leading",
        "H2: 55pt / 60pt leading",
        "H3: 34pt / 39pt leading",
        "Body: 21pt / 31pt leading",
        "Descritivo: 18pt / 21pt leading",
      ],
    },
    logoRules: {
      minDigital: "220px",
      minPrint: "50mm",
      symbolDigital: "30px",
      symbolPrint: "5mm",
    },
  },
  {
    id: "libria",
    index: "06",
    name: "Libr.ia",
    assetsSlug: "libria",
    tagline: "Consultoria Digital Inteligente",
    description:
      "A Libr.ia é a submarca de consultoria digital do ecossistema. Com tom acessível e levemente irreverente (inspirado na Nubank), simplifica a contabilidade para diversos perfis de público com tecnologia e linguagem clara.",
    audience: "Diversos perfis",
    purpose: "Simplifica contabilidade",
    accentColor: "#00C1FF",
    colors: [
      { hex: "#00C1FF", name: "Azul Céu", usage: "Energia / destaque" },
      { hex: "#01263E", name: "Azul Petróleo", usage: "Robustez / fundos" },
      { hex: "#2D87C8", name: "Azul Oceano", usage: "Equilíbrio" },
      { hex: "#8AAEC0", name: "Azul Nevoado", usage: "Leveza" },
      { hex: "#29373F", name: "Azul Grafite", usage: "Firmeza / texto" },
    ],
    typography: {
      logo: "Golos",
      body: "Inter",
      hierarchy: [
        "Display: Golos Semibold",
        "Heading: Golos Regular",
        "Body: Inter Regular",
        "Caption: Inter ExtraLight",
        "Strong: Inter ExtraBold",
      ],
    },
    logoRules: {
      minDigital: "140px",
      minPrint: "30mm",
      symbolDigital: "30px",
      symbolPrint: "5mm",
    },
  },
  {
    id: "saveid",
    index: "07",
    name: "Save ID",
    assetsSlug: "save-id",
    tagline: "Certificação Digital",
    description:
      "A Save ID é a submarca de certificação digital do ecossistema. Oferece produtos e serviços de identidade digital para parceiros, com visual marcante em amarelo e preto que transmite segurança e modernidade.",
    audience: "Parceiros",
    purpose: "Produtos/serviços digitais",
    accentColor: "#FFFF00",
    colors: [
      { hex: "#FFFF00", name: "Amarelo Primário", usage: "Cor principal" },
      { hex: "#E0D917", name: "Amarelo Sombra", usage: "Variação" },
      { hex: "#232222", name: "Preto/Charcoal", usage: "Background" },
      { hex: "#333333", name: "Cinza Escuro", usage: "Texto" },
      { hex: "#E6E3E1", name: "Cinza Claro", usage: "Superfícies" },
      { hex: "#CCCCCC", name: "Cinza Médio", usage: "Bordas" },
    ],
    typography: {
      logo: "Sans-serif Geométrica",
      body: "IBM Plex Sans",
    },
    logoRules: {
      minDigital: "140px",
      minPrint: "30mm",
      symbolDigital: "30px",
      symbolPrint: "5mm",
    },
  },
];

const functionalColors = [
  { hex: "#2163E2", name: "Azul", usage: "Links / info" },
  { hex: "#28DD8C", name: "Verde Claro", usage: "Sucesso leve" },
  { hex: "#3ABF4C", name: "Verde", usage: "Sucesso" },
  { hex: "#8E11FF", name: "Roxo", usage: "Destaque especial" },
  { hex: "#CE4444", name: "Vermelho", usage: "Erro / alerta" },
  { hex: "#EFAF49", name: "Laranja", usage: "Aviso" },
];

const ecosystem = [
  {
    name: "Save Co.",
    frente: "Inteligência",
    color: "#FFD156",
    href: "#saveco",
  },
  {
    name: "Save Partners",
    frente: "Expansão",
    color: "#549B82",
    href: "#partners",
  },
  {
    name: "Save Educação",
    frente: "Formação",
    color: "#496B96",
    href: "#educacao",
  },
  {
    name: "Libr.ia",
    frente: "Consultoria Digital",
    color: "#00C1FF",
    href: "#libria",
  },
  {
    name: "Save ID",
    frente: "Certificação Digital",
    color: "#FFFF00",
    href: "#saveid",
  },
];

const voiceAttributes = [
  { label: "Claro e direto", desc: "Sem rodeios, sem jargão desnecessário" },
  {
    label: "Estratégico e objetivo",
    desc: "Cada palavra tem propósito e direção",
  },
  {
    label: "Confiável, sem exageros",
    desc: "Autoridade construída com fatos, não hipérboles",
  },
  {
    label: "Com opinião e estrutura",
    desc: "Posicionamento claro com fundamentação",
  },
  {
    label: "Inspirador com propósito",
    desc: "Motivação ancorada em resultados reais",
  },
  {
    label: "Assertivo, sem agressividade",
    desc: "Firmeza com respeito e empatia",
  },
];

const powerVerbs = [
  "Ampliar",
  "Impulsionar",
  "Fortalecer",
  "Conectar",
  "Transformar",
  "Estruturar",
  "Destravar",
  "Facilitar",
];

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-surface-900)] via-[var(--color-surface-800)] to-[var(--color-surface-900)]" />
        <div className="absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[var(--color-brand-gold)]/5 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6">
          <span className="section-label">[00] brand guidelines</span>

          <h1 className="type-h2 mt-4 max-w-4xl" style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}>
            O ecossistema{" "}
            <span className="text-[var(--color-brand-gold)]">Save</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
            Single source of truth para identidade visual, tom de voz, padrões
            de design e a voz de cada marca do ecossistema Save.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#ecossistema"
              className="rounded-full bg-[var(--color-brand-gold)] px-8 py-3 text-sm font-semibold text-[var(--color-surface-900)] transition-all hover:brightness-110"
            >
              Explorar Guidelines
            </a>
            <a
              href="#marcas"
              className="rounded-full border border-[var(--color-surface-500)] px-8 py-3 text-sm font-semibold text-[var(--color-text-primary)] transition-all hover:border-[var(--color-text-muted)]"
            >
              Ver Marcas
            </a>
            <a
              href="/assets"
              className="rounded-full border border-[var(--color-brand-gold)]/30 px-8 py-3 text-sm font-semibold text-[var(--color-brand-gold)] transition-all hover:bg-[var(--color-brand-gold)]/10"
            >
              Download Assets
            </a>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "5", label: "Marcas documentadas" },
              { value: "9", label: "Capítulos do guideline" },
              { value: "+10k", label: "Empresas impactadas" },
              { value: "+R$3.1bi", label: "Em operações" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-[var(--color-brand-gold)] md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Overview */}
      <section
        id="ecossistema"
        className="border-t border-[var(--color-surface-600)] py-24"
      >
        <div className="mx-auto max-w-[1440px] px-6">
          <span className="section-label">[01] visão geral</span>
          <h2 className="type-h2 mt-4 mb-6">
            Ecossistema Save
          </h2>
          <p className="mb-16 max-w-3xl text-base leading-relaxed text-[var(--color-text-secondary)]">
            O Save é um ecossistema criado para estar ao lado do empresário.
            Oferece estrutura para decisões, inteligência à rotina e estratégia
            para impulsionar o que precisa avançar. <strong>O impulso para o seu próximo nível.</strong>
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5" id="marcas">
            {ecosystem.map((brand) => (
              <a
                key={brand.name}
                href={brand.href}
                className="brand-card group flex flex-col justify-between rounded-2xl bg-[var(--color-surface-800)] p-6"
              >
                <div>
                  <div
                    className="mb-4 h-1 w-12 rounded-full"
                    style={{ backgroundColor: brand.color }}
                  />
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                    {brand.name}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    {brand.frente}
                  </p>
                </div>
                <span
                  className="mt-6 inline-block text-sm font-medium transition-transform group-hover:translate-x-1"
                  style={{ color: brand.color }}
                >
                  Ver identidade &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-t border-[var(--color-surface-600)] py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <span className="section-label">[02] pilares do sistema</span>
          <h2 className="type-h2 mt-4 mb-12">
            Explore o Brand System
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Guidelines",
                desc: "Identidade de marca, voz e personalidade",
                count: "3 seções",
                href: "#persona",
                color: "var(--color-brand-gold)",
              },
              {
                title: "Identidade Visual",
                desc: "Cores, tipografia, logos por marca",
                count: "5 marcas",
                href: "#saveco",
                color: "var(--color-accent-partners)",
              },
              {
                title: "Tom de Voz",
                desc: "Como falamos em cada contexto",
                count: "2 personas",
                href: "#voz",
                color: "var(--color-accent-libria)",
              },
              {
                title: "Referência Rápida",
                desc: "Guia condensado para uso diário",
                count: "1 página",
                href: "#referencia",
                color: "var(--color-accent-educacao)",
              },
            ].map((pillar) => (
              <a
                key={pillar.title}
                href={pillar.href}
                className="brand-card group flex flex-col rounded-2xl bg-[var(--color-surface-800)] p-8"
              >
                <span
                  className="mb-6 font-[var(--font-mono)] text-3xl font-bold"
                  style={{ color: pillar.color }}
                >
                  {pillar.count}
                </span>
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  {pillar.desc}
                </p>
                <span className="mt-auto pt-6 text-sm font-medium text-[var(--color-text-secondary)] transition-colors group-hover:text-[var(--color-text-primary)]">
                  Explorar &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Persona */}
      <section
        id="persona"
        className="border-t border-[var(--color-surface-600)] py-24"
      >
        <div className="mx-auto max-w-[1440px] px-6">
          <span className="section-label">[02.1] brand persona</span>
          <h2 className="type-h2 mt-4 mb-6">
            O Estrategista Confiável
          </h2>
          <p className="mb-16 max-w-3xl text-base leading-relaxed text-[var(--color-text-secondary)]">
            A persona do ecossistema Save é um profissional visionário mas
            realista, orientado por dados, que constrói relações de parceria com
            autonomia e confiança mútua.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="brand-card rounded-2xl bg-[var(--color-surface-800)] p-8">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--color-brand-gold)]">
                Mix de Arquétipos
              </h3>
              <div className="space-y-4">
                {[
                  { name: "Sábio", pct: 60 },
                  { name: "Criador", pct: 20 },
                  { name: "Prestativo", pct: 20 },
                ].map((arch) => (
                  <div key={arch.name}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="text-[var(--color-text-primary)]">
                        {arch.name}
                      </span>
                      <span className="text-[var(--color-text-muted)]">
                        {arch.pct}%
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-[var(--color-surface-600)]">
                      <div
                        className="h-full rounded-full bg-[var(--color-brand-gold)]"
                        style={{ width: `${arch.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="brand-card rounded-2xl bg-[var(--color-surface-800)] p-8">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--color-brand-gold)]">
                Perfil
              </h3>
              <dl className="space-y-3 text-sm">
                {[
                  ["Idade mental", "38 anos"],
                  ["Gênero", "Masculino"],
                  ["Estilo", "Elegante, funcional"],
                  ["Liderança", "Visionário, data-driven"],
                  ["Relação com cliente", "Parceria, autonomia"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between">
                    <dt className="text-[var(--color-text-muted)]">{label}</dt>
                    <dd className="font-medium text-[var(--color-text-primary)]">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="brand-card rounded-2xl bg-[var(--color-surface-800)] p-8">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--color-brand-gold)]">
                Marcos Adriano Silva
              </h3>
              <p className="mb-4 text-sm italic text-[var(--color-text-secondary)]">
                &ldquo;O Mentor Estrategista&rdquo;
              </p>
              <p className="mb-3 text-xs text-[var(--color-text-muted)]">
                Sábio 50% + Herói 25% + Guardião 25%
              </p>
              <div className="space-y-2">
                {[
                  "Inteligência Tributária",
                  "Virar a chave",
                  "Legado",
                  "Resultado",
                ].map((word) => (
                  <span
                    key={word}
                    className="mr-2 inline-block rounded-full border border-[var(--color-surface-500)] px-3 py-1 text-xs text-[var(--color-text-secondary)]"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voice & Tone */}
      <section
        id="voz"
        className="border-t border-[var(--color-surface-600)] py-24"
      >
        <div className="mx-auto max-w-[1440px] px-6">
          <span className="section-label">[02.2] tom de voz</span>
          <h2 className="type-h2 mt-4 mb-6">
            Como Falamos
          </h2>
          <p className="mb-4 max-w-3xl text-base leading-relaxed text-[var(--color-text-secondary)]">
            Posicionamento: Inovador, Maduro, Contemporâneo, Autoritário,
            Elegante, Elite.
          </p>
          <p className="mb-16 max-w-3xl text-sm text-[var(--color-text-muted)]">
            Benchmarks: Eidra, Altor, Accenture Song, Huge, Saffron, Wolff
            Olins, Google
          </p>

          <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {voiceAttributes.map((attr) => (
              <div
                key={attr.label}
                className="brand-card rounded-2xl bg-[var(--color-surface-800)] p-6"
              >
                <h4 className="text-base font-semibold text-[var(--color-text-primary)]">
                  {attr.label}
                </h4>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  {attr.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mb-16">
            <h3 className="mb-6 text-xl font-semibold">Power Verbs</h3>
            <div className="flex flex-wrap gap-3">
              {powerVerbs.map((verb) => (
                <span
                  key={verb}
                  className="rounded-full bg-[var(--color-brand-gold)]/10 px-5 py-2 text-sm font-medium text-[var(--color-brand-gold)]"
                >
                  {verb}
                </span>
              ))}
            </div>
          </div>

          {/* Libr.ia voice */}
          <div className="brand-card rounded-2xl bg-[var(--color-surface-800)] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-12 rounded-full bg-[var(--color-accent-libria)]" />
              <h3 className="text-lg font-semibold">
                Libr.ia —{" "}
                <span className="text-[var(--color-accent-libria)]">
                  O Especialista Perspicaz
                </span>
              </h3>
            </div>
            <p className="mb-4 text-sm text-[var(--color-text-secondary)]">
              Tom: Didatismo irônico (estilo Nubank) + Insight do cotidiano
              (estilo Posto Ipiranga) + Trocadilhos inteligentes
            </p>
            <div className="rounded-xl bg-[var(--color-surface-700)] p-6">
              <p className="text-sm italic text-[var(--color-accent-libria)]">
                &ldquo;O Leão não é vegetariano e o prazo não é eterno. Já
                mandou seus documentos ou vai deixar ele ficar faminto?&rdquo;
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Atalho",
                "Facilitar",
                "Fluir",
                "Destravar",
                "Tranquilidade",
                "Leveza",
                "Liberdade",
              ].map((word) => (
                <span
                  key={word}
                  className="rounded-full bg-[var(--color-accent-libria)]/10 px-4 py-1.5 text-xs font-medium text-[var(--color-accent-libria)]"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Identity Sections */}
      {brands.map((brand) => (
        <BrandSection key={brand.id} {...brand} />
      ))}

      {/* Functional Colors */}
      <section
        id="cores"
        className="border-t border-[var(--color-surface-600)] py-24"
      >
        <div className="mx-auto max-w-[1440px] px-6">
          <span className="section-label">[08] cores funcionais</span>
          <h2 className="type-h2 mt-4 mb-6">
            Paleta Funcional Compartilhada
          </h2>
          <p className="mb-12 text-base text-[var(--color-text-secondary)]">
            Cores utilizadas por todas as marcas do ecossistema para estados e
            feedback visual.
          </p>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
            {functionalColors.map((color) => (
              <div key={color.hex} className="text-center">
                <div
                  className="color-swatch mx-auto mb-3 max-w-[120px]"
                  style={{ backgroundColor: color.hex }}
                />
                <p className="text-sm font-medium text-[var(--color-text-primary)]">
                  {color.name}
                </p>
                <p className="font-[var(--font-mono)] text-xs text-[var(--color-text-muted)]">
                  {color.hex}
                </p>
                <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                  {color.usage}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="border-t border-[var(--color-surface-600)] py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <span className="section-label">[09] cultura</span>
          <h2 className="type-h2 mt-4 mb-12">
            10 Princípios da Cultura Save
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "Priorize sempre o cliente",
              "Missão dada é missão cumprida",
              "Assuma a responsabilidade",
              "Somos um time e não uma família",
              "Seja uma referência",
              "Nada está em seu ponto máximo",
              "Esteja atento às oportunidades",
              "Liberdade com responsabilidade",
              "Compromisso com a excelência",
              "Nunca deixe o time na mão",
            ].map((principle, i) => (
              <div
                key={i}
                className="brand-card rounded-2xl bg-[var(--color-surface-800)] p-6"
              >
                <span className="font-[var(--font-mono)] text-2xl font-bold text-[var(--color-brand-gold)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-sm font-medium text-[var(--color-text-primary)]">
                  {principle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section
        id="referencia"
        className="border-t border-[var(--color-surface-600)] py-24"
      >
        <div className="mx-auto max-w-[1440px] px-6">
          <span className="section-label">[10] referência rápida</span>
          <h2 className="type-h2 mt-4 mb-12">
            Referência Rápida
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-surface-500)]">
                  <th className="py-4 pr-6 text-left font-[var(--font-mono)] text-xs uppercase text-[var(--color-text-muted)]">
                    Marca
                  </th>
                  <th className="py-4 pr-6 text-left font-[var(--font-mono)] text-xs uppercase text-[var(--color-text-muted)]">
                    Cor Principal
                  </th>
                  <th className="py-4 pr-6 text-left font-[var(--font-mono)] text-xs uppercase text-[var(--color-text-muted)]">
                    Fonte Logo
                  </th>
                  <th className="py-4 pr-6 text-left font-[var(--font-mono)] text-xs uppercase text-[var(--color-text-muted)]">
                    Fonte Corpo
                  </th>
                  <th className="py-4 text-left font-[var(--font-mono)] text-xs uppercase text-[var(--color-text-muted)]">
                    Público
                  </th>
                </tr>
              </thead>
              <tbody>
                {brands.map((brand) => (
                  <tr
                    key={brand.id}
                    className="border-b border-[var(--color-surface-600)]"
                  >
                    <td className="py-4 pr-6">
                      <a
                        href={`#${brand.id}`}
                        className="font-medium text-[var(--color-text-primary)] hover:underline"
                      >
                        {brand.name}
                      </a>
                    </td>
                    <td className="py-4 pr-6">
                      <div className="flex items-center gap-3">
                        <div
                          className="h-5 w-5 rounded"
                          style={{
                            backgroundColor: brand.accentColor,
                          }}
                        />
                        <span className="font-[var(--font-mono)] text-xs text-[var(--color-text-secondary)]">
                          {brand.accentColor}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 pr-6 text-[var(--color-text-secondary)]">
                      {brand.typography.logo}
                    </td>
                    <td className="py-4 pr-6 text-[var(--color-text-secondary)]">
                      {brand.typography.body}
                    </td>
                    <td className="py-4 text-[var(--color-text-secondary)]">
                      {brand.audience}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Naming Architecture */}
          <div className="brand-card mt-12 rounded-2xl bg-[var(--color-surface-800)] p-8">
            <h3 className="mb-4 text-lg font-semibold">
              Arquitetura de Naming
            </h3>
            <p className="mb-4 text-sm text-[var(--color-text-secondary)]">
              Ao criar novos produtos ou serviços dentro do ecossistema, use o
              formato:
            </p>
            <p className="mb-6 text-2xl font-bold text-[var(--color-brand-gold)]">
              Save [Conceito]
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Save Core",
                "Save Talks",
                "Save Tech",
                "Save Lab",
              ].map((name) => (
                <span
                  key={name}
                  className="rounded-lg bg-[var(--color-surface-700)] px-4 py-2 font-[var(--font-mono)] text-sm text-[var(--color-text-secondary)]"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="border-t border-[var(--color-surface-600)] py-24">
        <div className="mx-auto max-w-[1440px] px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label">[11] manifesto</span>
            <blockquote className="type-h3 mt-8 font-light text-[var(--color-text-primary)]">
              &ldquo;Todo negócio começa como um sonho. Somos um ecossistema
              criado para estar ao seu lado. Oferecemos estrutura para suas
              decisões, inteligência à rotina e estratégia para impulsionar o
              que precisa avançar.&rdquo;
            </blockquote>
            <p className="mt-8 text-xl font-bold text-[var(--color-brand-gold)]">
              Save — O impulso para o seu próximo nível.
            </p>
          </div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </>
  );
}
