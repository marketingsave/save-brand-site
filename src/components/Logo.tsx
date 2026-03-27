import Link from "next/link";

const SYMBOL_URL =
  "https://bucket.savecompany.com.br/branding/save-co/arquivos-da-marca/logos-save-co/svg/save_co._simbolo_monocromatica_amarelo_transparente.svg";

interface LogoProps {
  label?: string;
  href?: string;
  className?: string;
}

export default function Logo({ label = "Brand Guidelines", href = "/", className = "" }: LogoProps) {
  return (
    <Link href={href} className={`flex items-center gap-3 ${className}`}>
      <img
        src={SYMBOL_URL}
        alt="Save Company"
        className="h-16 w-16 object-contain"
        loading="eager"
      />
      <div className="hidden h-4 w-px bg-[var(--color-surface-500)] sm:block" />
      <div className="hidden flex-col sm:flex">
        <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[var(--color-brand-gold)] leading-none">
          Save Company
        </span>
        <span className="text-xs font-medium tracking-wider uppercase text-[var(--color-text-muted)] leading-tight">
          {label}
        </span>
      </div>
    </Link>
  );
}
