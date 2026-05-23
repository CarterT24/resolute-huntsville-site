import Image from "next/image";
import { PageHero, SiteShell } from "@/components/site-shell";

const gallery = [
  "/images/espalier/FullSizeRender(2).jpg",
  "/images/espalier/FullSizeRender(5).jpg",
  "/images/espalier/FullSizeRender.jpg",
  "/images/espalier/FullSizeRender(3).jpg",
  "/images/espalier/FullSizeRender(6).jpg",
  "/images/espalier/FullSizeRender(8).jpg",
  "/images/espalier/FullSizeRender(9).jpg",
  "/images/espalier/FullSizeRender(10).jpg",
  "/images/espalier/FullSizeRender(11).jpg",
  "/images/espalier/FullSizeRender(12).jpg",
  "/images/espalier/FullSizeRender(13).jpg",
  "/images/espalier/FullSizeRender(15).jpg",
  "/images/espalier/FullSizeRender(19).jpg",
  "/images/espalier/FullSizeRender(20).jpg",
  "/images/espalier/FullSizeRender(18).jpg",
  "/images/espalier/FullSizeRender(14).jpg",
];

export default function EspalierDrivePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Project • Espalier Drive"
        title="A custom home built with warmth, detail, and long-term quality in mind."
        body="Espalier Drive reflects the kind of work we want Resolute Homes to be known for — thoughtful execution, refined finishes, and a finished product that feels both elevated and deeply livable."
      />
      <main className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <section className="space-y-6 text-lg leading-8 text-[#5b5148]">
            <p>
              This project captures the balance we care about most: timeless design, high-end finish quality, and a home that feels strong, welcoming, and carefully built from the ground up.
            </p>
            <p>
              From the exterior presence to the interior detailing, Espalier Drive gives a clear picture of the craftsmanship and aesthetic direction we bring to custom home work.
            </p>
          </section>
          <section className="overflow-hidden rounded-[2rem] bg-white shadow-[0_25px_70px_rgba(54,37,20,0.10)]">
            <div className="relative aspect-[5/4]">
              <Image src="/images/espalier/FullSizeRender(2).jpg" alt="Espalier Drive exterior" fill className="object-cover" priority />
            </div>
          </section>
        </div>

        <section className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {gallery.map((src, index) => (
            <div key={src} className="overflow-hidden rounded-[2rem] bg-white shadow-[0_25px_70px_rgba(54,37,20,0.10)]">
              <div className="relative aspect-[4/3]">
                <Image src={src} alt={`Espalier Drive photo ${index + 1}`} fill className="object-cover" />
              </div>
            </div>
          ))}
        </section>
      </main>
    </SiteShell>
  );
}
