import { PageHero, SiteShell } from "@/components/site-shell";

export default function RemodelsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Remodels & Additions"
        title="Thoughtful remodels and additions that improve the way your home lives."
        body="We take on major remodels and additions for homeowners who want to improve the way their home looks, feels, and functions. Every project is approached with careful planning and a focus on delivering a result that feels seamless and lasting."
      />
      <main className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          <section className="space-y-6 text-lg leading-8 text-[#5b5148]">
            <p>
              Remodel work requires more than good design ideas. It requires communication, decision-making, sequencing, and attention to detail so the finished space feels intentional instead of pieced together.
            </p>
            <p>
              Whether the goal is more space, better flow, or a more refined finished product, we approach remodels with the same care and discipline we bring to custom homes.
            </p>
          </section>
          <section className="rounded-[1.75rem] border border-[#e6dac9] bg-[#fcfaf6] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8c6a43]">Common project types</p>
            <ul className="mt-6 space-y-4 text-base leading-7 text-[#5b5148]">
              <li>• Major interior remodels</li>
              <li>• Kitchen and living-area transformations</li>
              <li>• Primary suite renovations</li>
              <li>• Home additions that feel integrated with the existing structure</li>
              <li>• Updates that improve comfort, performance, and livability</li>
            </ul>
          </section>
        </div>
      </main>
    </SiteShell>
  );
}
