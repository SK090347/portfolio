"use client";

import { Cpu, GraduationCap, Orbit, Terminal } from "lucide-react";
import { Reveal, SectionHeading, SectionShell } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { site } from "@/lib/site";

const pillars = [
  {
    icon: GraduationCap,
    title: "CSE · AI & ML",
    body: `First-year at ${site.university}, focused on algorithms, systems, and intelligent computation.`,
  },
  {
    icon: Orbit,
    title: "Graphics & physics",
    body: "Path tracing, N-body orbits, wave fields, and WebGL that earns its drama.",
  },
  {
    icon: Terminal,
    title: "Systems builder",
    body: "Raft, LSM stores, SAT solvers, campus OS — software that owns its invariants.",
  },
  {
    icon: Cpu,
    title: "Ship & polish",
    body: "Typed TypeScript, tests, CI, and portfolios that recruiters remember.",
  },
];

export function About() {
  return (
    <SectionShell id="about">
      <Reveal>
        <SectionHeading
          eyebrow="About"
          title="Engineer · builder · student of gravity & code"
          description={`${site.name} builds systems where math, graphics, and product instincts meet — from consensus protocols to browser-native 3D.`}
        />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={0.06 * i}>
            <Card className="h-full transition hover:border-white/20 hover:bg-white/[0.045]">
              <CardContent className="flex gap-4 p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <p.icon className="h-5 w-5 text-amber-100/80" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{p.body}</p>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
