"use client";

import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Reveal, SectionHeading, SectionShell } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/projects";

export function Projects() {
  return (
    <SectionShell id="projects" className="bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
      <Reveal>
        <SectionHeading
          eyebrow="Projects / Repositories"
          title="Notable public work"
          description="Shipped apps first — lucid-calc, inkpad, daypulse — then systems, graphics, solvers, and algorithms. Source on GitHub; Live Demo on every card that has Pages."
        />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={Math.min(0.04 * i, 0.28)}>
            <Card className="group flex h-full flex-col transition duration-300 hover:-translate-y-1 hover:border-amber-200/25 hover:bg-white/[0.05]">
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="font-mono text-base text-white group-hover:text-amber-50">
                    {p.name}
                  </CardTitle>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-white/30 transition group-hover:text-white/80" />
                </div>
                <CardDescription className="leading-relaxed">{p.blurb}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto flex flex-col gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {p.live ? (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md bg-amber-200/15 px-2.5 py-1 text-xs font-medium text-amber-100 ring-1 ring-amber-200/25 transition hover:bg-amber-200/25"
                    >
                      <ExternalLink className="h-3 w-3" />
                      Live Demo
                    </a>
                  ) : null}
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-white/70 ring-1 ring-white/10 transition hover:bg-white/10 hover:text-white"
                  >
                    GitHub
                  </a>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
