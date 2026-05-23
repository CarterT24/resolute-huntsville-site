import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";

const services = [
  {
    title: "Custom Homes",
    body:
      "Custom homes built for clients who want thoughtful design, a disciplined process, and a finished result that feels elevated and lasting.",
    href: "/custom-homes",
  },
  {
    title: "Remodels & Additions",
    body:
      "Major remodels and additions shaped with the same attention to quality, livability, and long-term value as a new custom home.",
    href: "/remodels-additions",
  },
  {
    title: "High-Performance Building",
    body:
      "A building approach that prioritizes comfort, durability, and better everyday living long after construction is complete.",
    href: "/high-performance",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    body: "We begin by understanding your goals, your property, and the kind of home or remodel experience you want to create.",
  },
  {
    step: "02",
    title: "Planning",
    body: "We align expectations, scope, communication, and execution so the project starts with clarity and direction.",
  },
  {
    step: "03",
    title: "Build",
    body: "Our work is guided by craftsmanship, coordination, and disciplined decision-making from start to finish.",
  },
  {
    step: "04",
    title: "Delivery",
    body: "The finished result should feel refined, lasting, and fully considered — not just complete.",
  },
];

export default function Home() {
  return (
    <SiteShell>
      <main className="bg-[#f7f2ea]">
        <section className="relative isolate overflow-hidden border-b border-black/5 bg-[#f3ede3]">
          <div className="absolute inset-0">
            <Image
              src="/images/espalier-hero.jpg"
              alt="Luxury custom home exterior by Resolute Homes"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,19,16,0.76)_0%,rgba(24,19,16,0.48)_38%,rgba(24,19,16,0.12)_68%,rgba(24,19,16,0.08)_100%)]" />
          </div>

          <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-end px-6 py-16 lg:px-10 lg:py-24">
            <div className="max-w-3xl text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[#e7c59a]">Resolute Homes • Huntsville, Alabama</p>
              <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                Custom homes and thoughtful remodels built with conviction.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/86 sm:text-xl">
                We build homes with craftsmanship, clarity, and a high-performance mindset — creating spaces that feel refined, durable, and built to last.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#1f1a17] transition hover:bg-[#f4ece1]"
                >
                  Schedule a Consultation
                </Link>
                <Link
                  href="/custom-homes"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8c6a43]">A better building experience</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#1f1a17] sm:text-5xl">
                Homes shaped by trust, process, and long-term thinking.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-[#5b5148]">
              <p>
                Whether the project is a custom home, a major remodel, or an addition, we believe the experience should feel thoughtful from the start. Good work begins with clear communication, disciplined planning, and a commitment to building the right way.
              </p>
              <p>
                Resolute Homes serves clients who value craftsmanship, honesty, and homes built for comfort, durability, and everyday living.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10 lg:pb-24">
          <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_25px_70px_rgba(54,37,20,0.10)]">
              <div className="relative aspect-[16/10]">
                <Image src="/images/espalier-kitchen.jpg" alt="Custom kitchen by Resolute Homes" fill className="object-cover" />
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_25px_70px_rgba(54,37,20,0.10)]">
              <div className="relative aspect-[4/5]">
                <Image src="/images/espalier-bath.jpg" alt="Luxury bathroom by Resolute Homes" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-black/5 bg-[#f1eadf]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8c6a43]">Services</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#1f1a17] sm:text-5xl">What we build in Huntsville.</h2>
              </div>
              <p className="max-w-2xl text-base leading-7 text-[#5b5148]">
                We focus on work that demands care, clear execution, and a finished result that feels elevated and lasting.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {services.map((service) => (
                <article key={service.title} className="flex h-full flex-col justify-between rounded-[1.75rem] border border-[#e0d1bd] bg-white p-8 shadow-[0_18px_48px_rgba(54,37,20,0.06)]">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8c6a43]">Service</p>
                    <h3 className="mt-5 text-2xl font-semibold text-[#1f1a17]">{service.title}</h3>
                    <p className="mt-4 text-base leading-7 text-[#5b5148]">{service.body}</p>
                  </div>
                  <Link href={service.href} className="mt-8 inline-flex text-sm font-semibold text-[#8c6a43] transition hover:text-[#5f4528]">
                    Learn more →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_25px_70px_rgba(54,37,20,0.10)]">
              <div className="relative aspect-[5/4]">
                <Image src="/images/shady-kitchen.jpg" alt="Kitchen remodel and custom detail by Resolute Homes" fill className="object-cover" />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8c6a43]">High-Performance Building</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-[#1f1a17] sm:text-5xl">
                A home should do more than look good on move-in day.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#5b5148]">
                We believe a home should be comfortable, durable, efficient, and designed to perform well over time. That means thoughtful details, better building practices, and a long-view mindset from the beginning.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Greater comfort in every season",
                  "Improved energy efficiency",
                  "Healthier indoor air",
                  "Durability-focused decisions that last",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-[#e0d1bd] bg-white px-5 py-4 text-sm font-medium text-[#3f352d] shadow-[0_10px_28px_rgba(54,37,20,0.04)]">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-black/5 bg-[#f1eadf]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8c6a43]">Our Process</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[#1f1a17] sm:text-5xl">
              A process built to create confidence from the first conversation to final delivery.
            </h2>

            <div className="mt-12 grid gap-6 lg:grid-cols-4">
              {processSteps.map((item) => (
                <article key={item.step} className="rounded-[1.75rem] border border-[#e0d1bd] bg-white p-7 shadow-[0_18px_48px_rgba(54,37,20,0.05)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8c6a43]">{item.step}</p>
                  <h3 className="mt-5 text-2xl font-semibold text-[#1f1a17]">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-[#5b5148]">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_25px_70px_rgba(54,37,20,0.10)]">
              <div className="relative aspect-[5/4]">
                <Image src="/images/espalier-rear.jpg" alt="Rear exterior custom home by Resolute Homes" fill className="object-cover" />
              </div>
            </div>
            <div className="rounded-[2rem] bg-[#1f1a17] px-8 py-12 text-white shadow-[0_30px_80px_rgba(31,26,23,0.16)] sm:px-12">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#d7b892]">Start the conversation</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                If you are planning a custom home, remodel, or addition in Huntsville, we want to be a part of it.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#ddd2c7]">
                Let’s talk about your project and what a better building experience can look like.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#f3e0c6] px-7 py-3 text-sm font-semibold text-[#1f1a17] transition hover:bg-[#f7e8d3]"
                >
                  Schedule a Consultation
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/6"
                >
                  Learn About Resolute
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
