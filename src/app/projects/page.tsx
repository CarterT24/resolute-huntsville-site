import Image from "next/image";
import Link from "next/link";
import { PageHero, SiteShell } from "@/components/site-shell";

const projects = [
  {
    title: "Espalier Drive",
    href: "/projects/espalier-drive",
    image: "/images/espalier-hero.jpg",
    summary: "A custom home project that reflects Resolute's premium, craftsmanship-first approach.",
  },
  {
    title: "Shady Lane",
    href: "/custom-homes",
    image: "/images/shady-kitchen.jpg",
    summary: "A polished custom home with strong interior detailing and a refined finished feel.",
  },
  {
    title: "Remodel Work",
    href: "/remodels-additions",
    image: "/images/espalier-bath.jpg",
    summary: "Major remodel and addition work shaped by the same discipline, clarity, and finish quality as our custom homes.",
  },
];

export default function ProjectsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Projects"
        title="Selected work that reflects the way we build."
        body="Explore a growing collection of custom home and remodel projects that show the craftsmanship, quality, and design sensibility behind Resolute Homes."
      />
      <main className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-[2rem] bg-white shadow-[0_25px_70px_rgba(54,37,20,0.10)]">
              <div className="relative aspect-[5/4]">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-7">
                <h2 className="text-2xl font-semibold text-[#1f1a17]">{project.title}</h2>
                <p className="mt-4 text-base leading-7 text-[#5b5148]">{project.summary}</p>
                <Link href={project.href} className="mt-6 inline-flex text-sm font-semibold text-[#8c6a43] transition hover:text-[#5f4528]">
                  View project →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
