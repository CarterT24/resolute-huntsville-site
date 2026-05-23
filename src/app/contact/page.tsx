"use client";

import { PageHero, SiteShell } from "@/components/site-shell";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", projectType: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-2xl border border-[#e6dac9] bg-white px-4 py-3 text-sm text-[#1f1a17] placeholder:text-[#b0a090] focus:outline-none focus:ring-2 focus:ring-[#8c6a43]/30 focus:border-[#8c6a43] transition";

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
            <p className="mt-3 text-base leading-7 text-[#5b5148]">
              Fill out the form and we will be in touch within one business day.
            </p>
            {status === "success" ? (
              <div className="mt-8 rounded-2xl bg-[#f0f7f2] border border-[#b8ddc4] p-6 text-center">
                <p className="text-lg font-semibold text-[#2d6a4f]">Message received.</p>
                <p className="mt-2 text-sm text-[#4a8c6a]">We will be in touch within one business day. Talk soon.</p>
              </div>
            ) : (
              <div className="mt-8 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.2em] text-[#8c6a43]">Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" className={inputClass} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.2em] text-[#8c6a43]">Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.2em] text-[#8c6a43]">Phone</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="(256) 000-0000" className={inputClass} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.2em] text-[#8c6a43]">Project Type</label>
                    <select name="projectType" value={form.projectType} onChange={handleChange} className={inputClass}>
                      <option value="">Select one...</option>
                      <option value="Custom Home">Custom Home</option>
                      <option value="Remodel">Remodel</option>
                      <option value="Addition">Addition</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.2em] text-[#8c6a43]">Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell us about your project, timeline, and what matters most to you..." className={inputClass + " resize-none"} />
                </div>
                {status === "error" && (
                  <p className="text-sm text-red-600">Something went wrong. Please try again or email us directly.</p>
                )}
                <button
                  onClick={handleSubmit}
                  disabled={status === "loading" || !form.name || !form.email || !form.message}
                  className="w-full rounded-full bg-[#1f1a17] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#342c27] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </div>
            )}
          </section>
          <div className="flex flex-col gap-6">
            <section className="rounded-[1.75rem] border border-[#d9c7af] bg-[#1f1a17] p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d7b892]">Service area</p>
              <h2 className="mt-5 text-2xl font-semibold">Huntsville and surrounding areas</h2>
              <p className="mt-4 text-base leading-7 text-[#ddd2c7]">
                We are building a Huntsville presence centered on custom homes, remodels, additions, and high-performance thinking.
              </p>
            </section>
            <section className="rounded-[1.75rem] border border-[#e6dac9] bg-[#fcfaf6] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8c6a43]">Direct contact</p>
              <div className="mt-5 space-y-3">
                <div className="rounded-2xl border border-[#eadfce] bg-white px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8c6a43]">Email</p>
                  <p className="mt-1.5 text-sm text-[#1f1a17] font-medium">resolutehomeshsv@gmail.com</p>
                </div>
                <div className="rounded-2xl border border-[#eadfce] bg-white px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8c6a43]">Phone</p>
                  <p className="mt-1.5 text-sm text-[#1f1a17] font-medium">(256) 384-5652</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
