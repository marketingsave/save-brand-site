"use client";

import { useState } from "react";

const faqItems = [
  {
    q: "O que é o ecossistema Save?",
    a: "O Save é um ecossistema de inteligência empresarial composto por 3 verticais principais (Save Co., Save Partners, Save Educação) e submarcas especializadas (Libr.ia, Save ID). Juntos, impactam +10k empresas com +R$3.1bi em operações.",
  },
  {
    q: "Como usar as cores de cada marca?",
    a: "Cada marca possui sua paleta primária e secundária definida neste guideline. Use as cores primárias para elementos de destaque e branding, as secundárias para fundos e elementos de suporte. Nunca misture paletas entre marcas sem seguir as regras de convivência do ecossistema.",
  },
  {
    q: "Quais são as regras universais de uso de logo?",
    a: "Os logos nunca devem ser distorcidos, ter cores alteradas fora da paleta, receber sombras/efeitos, ser cortados ou ter a tipografia alterada. Rotação apenas em eixos ortogonais (0/90/180/270°). Cada marca tem tamanhos mínimos específicos para digital e impresso.",
  },
  {
    q: "Como funciona a arquitetura de naming?",
    a: 'Ao criar novos produtos ou serviços dentro do ecossistema Save, use o formato: "Save [Conceito]". Exemplos: Save Core, Save Talks, Save Tech, Save Lab.',
  },
  {
    q: "Onde encontro os arquivos de marca?",
    a: 'Todos os assets de marca (logos em PNG, SVG, AI, assinaturas de email, wallpapers, apresentações, cartões de visita, capas de LinkedIn) estão disponíveis no Drive compartilhado: "G:\\Drives compartilhados\\BRANDING\\01. Branding".',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="border-t border-[var(--color-surface-600)] py-24">
      <div className="mx-auto max-w-[1440px] px-6">
        <span className="section-label">[05] perguntas frequentes</span>
        <h2 className="mt-4 mb-12 text-3xl font-bold md:text-4xl">FAQ</h2>

        <div className="mx-auto max-w-3xl space-y-0">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="border-b border-[var(--color-surface-600)]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between py-6 text-left"
              >
                <span className="pr-4 text-base font-medium text-[var(--color-text-primary)] md:text-lg">
                  {item.q}
                </span>
                <span
                  className={`shrink-0 text-xl text-[var(--color-text-muted)] transition-transform duration-300 ${openIndex === i ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
              <div
                className={`accordion-content ${openIndex === i ? "open" : ""}`}
              >
                <p className="pb-6 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
