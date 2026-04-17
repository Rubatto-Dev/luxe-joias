"use client";

import { getCategories } from "@/lib/products";

const categoryLabels: Record<string, string> = {
  todos: "Todos",
  aliancas: "Alianças",
  aneis: "Anéis",
  correntes: "Correntes masculinas",
  brincos: "Brincos",
  pingentes: "Pingentes",
};

interface CategoryFilterProps {
  active: string;
  onChange: (cat: string) => void;
}

export function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  const categories = getCategories();

  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`whitespace-nowrap px-4 py-2 rounded-full text-sm transition-all border ${
            active === cat
              ? "border-gold text-gold bg-gold/[0.08]"
              : "border-border-subtle text-muted-custom hover:text-silver hover:border-silver/20"
          }`}
        >
          {categoryLabels[cat] || cat}
        </button>
      ))}
    </div>
  );
}
