import Link from "next/link";
import { ReactNode } from "react";

const navItems = [
  { href: "/custom-homes", label: "Custom Homes" },
  { href: "/remodels-additions", label: "Remodels & Additions" },
  { href: "/high-performance", label: "High-Performance" },
  { href: "/process", label: "Process" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f6f1e8] text-[#1f1a17]">
      <header className="sticky top-0 z-20 border-b border-black/5 bg-[#f8f3eb]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <Link href="/" className="block">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8c6a43]">Resolute Homes</p>
            <p className="mt-1 text-sm text-[#6e6257]">Huntsville, Alabama</p>
          </Link>
          <nav className="hidden gap-6 text-sm text-[#5a5048] lg:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-[#1f1a17]">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#1f1a17] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#342c27]"
          >
            Schedule a Consultation
          </Link>
        </div>
      </header>
      {children}
      <footer className="border-t border-black/5 bg-[#f3ede3]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-[#6a5e53] lg:px-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-semibold uppercase tracking-[0.24em] text-[#8c6a43]">Resolute Homes</p>
            <p className="mt-2 max-w-xl leading-7">
              Custom homes, remodels, and additions in Huntsville built with craftsmanship, clarity, and high-performance principles.
            </p>
          </div>
          <div className="space-y-1 text-left md:text-right">
            <p>Huntsville, Alabama</p>
            <p>hello@resolutehomes.co</p>
            <p>(256) 000-0000</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="border-b border-black/5 bg-[linear-gradient(180deg,#f8f3eb_0%,#f3ede3_100%)]">
      <div className="mx-auto max-w-7xl px-6 py-18 lg:px-10 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8c6a43]">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-[#1f1a17] sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5b5148] sm:text-xl">{body}</p>
      </div>
    </section>
  );
}
