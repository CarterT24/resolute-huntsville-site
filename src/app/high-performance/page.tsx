import { PageHero, SiteShell } from "@/components/site-shell";

export default function HighPerformancePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="High-Performance Building"
        title="Homes designed to feel better, last longer, and perform over time."
        body="High-performance building is about more than efficiency. It is about creating homes that are more comfortable, more durable, and better suited for everyday life across every season."
      />
      <main className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            "Greater comfort in every season",
            "Improved energy efficiency",
            "Healthier indoor air",
            "Durability-focused decisions that reduce avoidable issues over time",
          ].map((item) => (
            <div key={item} className="rounded-[1.75rem] border border-[#e6dac9] bg-[#fcfaf6] p-8 text-base leading-7 text-[#5b5148]">
              {item}
            </div>
          ))}
        </div>
        <div className="mt-12 max-w-4xl text-lg leading-8 text-[#5b5148]">
          <p>
            We believe a home should not only look beautiful on move-in day. It should continue to deliver comfort, performance, and peace of mind over the long haul. That mindset shapes the way we think about details, materials, and how a home comes together as a complete system.
          </p>
        </div>
      </main>
    </SiteShell>
  );
}
