import Image from "next/image";
import { PageHero, SiteShell } from "@/components/site-shell";

export default function CustomHomesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Custom Homes"
        title="Custom homes built with clarity, craftsmanship, and long-term value."
        body="We build custom homes for Huntsville clients who want more than a standard plan. Our goal is to create homes that reflect the way you live while delivering the quality, comfort, and durability that matter for years to come."
      />
      <main className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
          <section className="space-y-6 text-lg leading-8 text-[#5b5148]">
            <p>
              Every custom home starts with understanding the client, the property, and the priorities that matter most. We believe the process should feel grounded, thoughtful, and well-led from the beginning.
            </p>
            <p>
              That means clear conversations, disciplined planning, and building with the kind of care that creates a home you can be proud of for years.
            </p>
          </section>
          <section className="overflow-hidden rounded-[1.75rem] border border-[#e6dac9] bg-white shadow-[0_20px_50px_rgba(60,41,19,0.06)]">
            <div className="relative aspect-[5/4]">
              <Image
                src="/images/espalier-rear.jpg"
                alt="Rear exterior of a custom home by Resolute Homes"
                fill
                className="object-cover"
              />
            </div>
          </section>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="overflow-hidden rounded-[1.75rem] border border-[#e6dac9] bg-white shadow-[0_20px_50px_rgba(60,41,19,0.06)]">
            <div className="relative aspect-[4/3]">
              <Image src="/images/espalier-kitchen.jpg" alt="Custom kitchen interior" fill className="object-cover" />
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-[#e6dac9] bg-white shadow-[0_20px_50px_rgba(60,41,19,0.06)]">
            <div className="relative aspect-[4/3]">
              <Image src="/images/espalier-bath.jpg" alt="Luxury bathroom interior" fill className="object-cover" />
            </div>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-[#e6dac9] bg-white shadow-[0_20px_50px_rgba(60,41,19,0.06)]">
            <div className="relative aspect-[4/3]">
              <Image src="/images/shady-kitchen.jpg" alt="Kitchen by Resolute Homes" fill className="object-cover" />
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-[1.75rem] border border-[#e6dac9] bg-[#fcfaf6] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8c6a43]">What to expect</p>
          <ul className="mt-6 space-y-4 text-base leading-7 text-[#5b5148]">
            <li>• Clear early-stage project conversations</li>
            <li>• Guidance through planning and scope alignment</li>
            <li>• Craftsmanship-focused execution</li>
            <li>• Communication that keeps the project moving</li>
            <li>• A finished home built for comfort, durability, and daily life</li>
          </ul>
        </div>
      </main>
    </SiteShell>
  );
}
