"use client";

interface SizeSelectorProps {
  sizes: number[];
  selected: number | null;
  onChange: (size: number) => void;
}

export function SizeSelector({ sizes, selected, onChange }: SizeSelectorProps) {
  return (
    <div>
      <label className="text-sm text-muted-custom mb-2 block">Tamanho</label>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onChange(size)}
            className={`w-10 h-10 rounded-md text-sm font-medium transition-all border ${
              selected === size
                ? "border-gold text-gold bg-gold/[0.08]"
                : "border-border-subtle text-muted-custom hover:text-silver hover:border-silver/20"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
