"use client";

import { useState } from "react";

interface ColorSwatchProps {
  hex: string;
  name: string;
  usage?: string;
}

export default function ColorSwatch({ hex, name, usage }: ColorSwatchProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const isLight =
    parseInt(hex.slice(1, 3), 16) * 0.299 +
      parseInt(hex.slice(3, 5), 16) * 0.587 +
      parseInt(hex.slice(5, 7), 16) * 0.114 >
    186;

  return (
    <button
      onClick={handleCopy}
      className="group w-full text-left"
      title={`Copiar ${hex}`}
    >
      <div
        className="color-swatch mb-3 flex items-end justify-between p-4"
        style={{ backgroundColor: hex }}
      >
        <span
          className={`font-[var(--font-mono)] text-xs font-medium ${isLight ? "text-[#333]" : "text-white"}`}
        >
          {copied ? "Copiado!" : hex}
        </span>
      </div>
      <p className="text-sm font-medium text-[var(--color-text-primary)]">
        {name}
      </p>
      {usage && (
        <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">
          {usage}
        </p>
      )}
    </button>
  );
}
