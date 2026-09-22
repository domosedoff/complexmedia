import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CommercialSeoLinksProps = {
  title: string;
  text: string;
  links: Array<{ href: string; label: string }>;
  ctaLabel: string;
};

export function CommercialSeoLinks({
  title,
  text,
  links,
  ctaLabel,
}: CommercialSeoLinksProps) {
  return (
    <section className="rounded-2xl border border-[--color-accent-red]/30 bg-secondary-dark/70 p-8 shadow-lg md:p-10">
      <h2 className="mb-4 text-2xl font-bold text-text-light md:text-3xl">
        {title}
      </h2>
      <p className="max-w-3xl leading-relaxed text-text-muted">{text}</p>
      <nav aria-label="Связанные материалы" className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="inline-flex items-center gap-2 font-semibold text-text-light transition-colors hover:text-[--color-accent-red]"
          >
            {link.label}
            <ArrowRight size={16} />
          </Link>
        ))}
      </nav>
      <Link
        href="/contact"
        className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[--color-accent-red] px-6 py-3 font-semibold text-white transition-colors hover:bg-[--color-accent-red-hover]"
      >
        {ctaLabel}
        <ArrowRight size={18} />
      </Link>
    </section>
  );
}
