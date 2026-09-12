"use client";

import { ArrowUpRight } from "lucide-react";
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
          description="Systems, graphics, solvers, campus software, and interview-grade algorithms — each linked live on GitHub."
        />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={Math.min(0.04 * i, 0.28)}>
            <a href={p.href} target="_blank" rel="noreferrer" className="group block h-full">
              <Card className="h-full transition duration-300 group-hover:-translate-y-1 group-hover:border-amber-200/25 group-hover:bg-white/[0.05]">
                <CardHeader>
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="font-mono text-base text-white group-hover:text-amber-50">
                      {p.name}
                    </CardTitle>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-white/30 transition group-hover:text-white/80" />
                  </div>
                  <CardDescription className="leading-relaxed">{p.blurb}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
