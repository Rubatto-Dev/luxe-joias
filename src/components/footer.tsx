import Link from "next/link";
import { Logo } from "./logo";

const categories = [
  { href: "/produtos?categoria=aliancas", label: "Aliancas" },
  { href: "/produtos?categoria=aneis", label: "Aneis" },
  { href: "/produtos?categoria=correntes", label: "Correntes" },
  { href: "/produtos?categoria=brincos", label: "Brincos" },
];

export function Footer() {
  return (
    <footer className="bg-bg-footer border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-3">
          <Logo size={32} />
          <div>
            <div className="text-silver text-xs tracking-[0.2em]">LUXE JOIAS</div>
            <div className="text-muted-custom text-[9px] tracking-[0.15em]">PRATAS 925</div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="text-muted-custom text-sm hover:text-silver transition-colors"
            >
              {cat.label}
            </Link>
          ))}
        </div>

        <div className="text-muted-custom text-sm text-center md:text-right">
          <div>Goiania, GO</div>
          <div>@luxejoias._ &middot; linktr.ee/luxejoias._</div>
        </div>
      </div>
    </footer>
  );
}
