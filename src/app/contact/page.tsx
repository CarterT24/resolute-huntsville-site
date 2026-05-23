import { PageHero, SiteShell } from "@/components/site-shell";

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Start the conversation about your project."
        body="If you are planning a custom home, remodel, or addition in Huntsville, we would be glad to learn more about what you are building and how we can help."
      />
      <main className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <section className="rounded-[1.75rem] border border-[#e6dac9] bg-[#fcfaf6] p-8">
            <h2 className="text-2xl font-semibold text-[#1f1a17]">Schedule a consultation</h2>
            <p className="mt-4 text-base leading-7 text-[#5b5148]">
              The best next step is a conversation about your vision, timeline, and what matters most in the project. We can use this section for a real form later.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#eadfce] bg-white px-5 py-4">
                <p className="text-sm font-semibold text-[#1f1a17]">Email</p>
                <p className="mt-2 text-sm text-[#5b5148]">hello@resolutehomes.co</p>
              </div>
              <div className="rounded-2xl border border-[#eadfce] bg-white px-5 py-4">
                <p className="text-sm font-semibold text-[#1f1a17]">Phone</p>
                <p className="mt-2 text-sm text-[#5b5148]">(256) 000-0000</p>
              </div>
            </div>
          </section>
          <section className="rounded-[1.75rem] border border-[#d9c7af] bg-[#1f1a17] p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d7b892]">Service area</p>
            <h2 className="mt-5 text-2xl font-semibold">Huntsville and surrounding areas</h2>
            <p className="mt-4 text-base leading-7 text-[#ddd2c7]">
              We are building a Huntsville presence centered on custom homes, remodels, additions, and high-performance thinking.
            </p>
          </section>
        </div>
      </main>
    </SiteShell>
  );
}
