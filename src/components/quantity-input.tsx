"use client";

import { Minus, Plus } from "lucide-react";

interface QuantityInputProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export function QuantityInput({ value, onChange, min = 1, max = 10 }: QuantityInputProps) {
  return (
    <div>
      <label className="text-sm text-muted-custom mb-2 block">Quantidade</label>
      <div className="inline-flex items-center border border-border-subtle rounded-md">
        <button
          onClick={() => onChange(Math.max(min, value - 1))}
          className="w-10 h-10 flex items-center justify-center text-muted-custom hover:text-silver transition-colors"
        >
          <Minus className="w-4 h-4" />
        </button>
        <span className="w-10 h-10 flex items-center justify-center text-silver text-sm border-x border-border-subtle">
          {value}
        </span>
        <button
          onClick={() => onChange(Math.min(max, value + 1))}
          className="w-10 h-10 flex items-center justify-center text-muted-custom hover:text-silver transition-colors"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
