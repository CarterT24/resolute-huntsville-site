import { PageHero, SiteShell } from "@/components/site-shell";

const steps = [
  ["Discovery", "We start by understanding your goals, the project itself, and the kind of building experience you want from start to finish."],
  ["Planning", "Before construction begins, we work to create clarity around scope, communication, expectations, and execution."],
  ["Build", "Our build process is driven by craftsmanship, disciplined coordination, and steady communication throughout the project."],
  ["Delivery", "The finished result should feel complete, intentional, and built to serve your family well over time."],
] as const;

export default function ProcessPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Our Process"
        title="A building process built to create confidence, not chaos."
        body="We believe clients should know what is happening, what comes next, and how decisions are being handled. A strong process creates a better experience and a better finished product."
      />
      <main className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-4">
          {steps.map(([title, body], index) => (
            <article key={title} className="rounded-[1.75rem] border border-[#e6dac9] bg-[#fcfaf6] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8c6a43]">0{index + 1}</p>
              <h2 className="mt-5 text-2xl font-semibold text-[#1f1a17]">{title}</h2>
              <p className="mt-4 text-base leading-7 text-[#5b5148]">{body}</p>
            </article>
          ))}
        </div>
      </main>
    </SiteShell>
  );
}
