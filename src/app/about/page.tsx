import { PageHero, SiteShell } from "@/components/site-shell";

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About Resolute Homes"
        title="Built around craftsmanship, trust, and doing the work the right way."
        body="Resolute Homes exists to help clients build and improve homes with a process that feels clear, thoughtful, and grounded in lasting quality."
      />
      <main className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <section className="space-y-6 text-lg leading-8 text-[#5b5148]">
            <p>
              Our work is guided by craftsmanship, communication, and values that matter. We believe building should feel honest, well-led, and anchored by a commitment to doing things with care.
            </p>
            <p>
              Whether the project is a custom home, a major remodel, or an addition, our goal is to create a finished result that reflects disciplined execution and long-term thinking.
            </p>
          </section>
          <section className="rounded-[1.75rem] border border-[#e6dac9] bg-[#fcfaf6] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8c6a43]">What matters to us</p>
            <ul className="mt-6 space-y-4 text-base leading-7 text-[#5b5148]">
              <li>• Craftsmanship without shortcuts</li>
              <li>• Communication that creates confidence</li>
              <li>• Homes built for long-term comfort and durability</li>
              <li>• A process that respects the client and the work</li>
            </ul>
          </section>
        </div>

        <section className="mt-16 rounded-[2rem] border border-[#e3d5c4] bg-[#f8f3eb] p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8c6a43]">Why Resolute</p>
          <div className="mt-5 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <h2 className="text-3xl font-semibold tracking-tight text-[#1f1a17] sm:text-4xl">
              The name reflects the kind of work we believe in and the way we believe it should be done.
            </h2>
            <div className="space-y-6 text-lg leading-8 text-[#5b5148]">
              <p>
                To be resolute is to be steady, grounded, and committed to what lasts. For us, that means approaching each project with conviction, integrity, and the discipline to do the work the right way.
              </p>
              <p>
                Rooted in faith, we want our homes and our process to reflect something deeper than appearance alone. We care about craftsmanship, trust, durability, and building in a way that holds up over time.
              </p>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
