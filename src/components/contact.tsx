"use client";

import type { ComponentType } from "react";
import { Mail, ExternalLink } from "lucide-react";
import { Reveal, SectionHeading, SectionShell } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { GitHubIcon, InstagramIcon, LinkedInIcon } from "@/components/social-icons";
import { site } from "@/lib/site";

type Conn = {
  label: string;
  href: string;
  detail: string;
  icon: ComponentType<{ className?: string }>;
};

export function Contact() {
  const connections: Conn[] = [
    {
      label: "GitHub",
      href: site.github,
      detail: `@${site.githubUser}`,
      icon: GitHubIcon,
    },
    {
      label: "LinkedIn",
      href: site.linkedin,
      detail: "Sumit Kumar Ta",
      icon: LinkedInIcon,
    },
    {
      label: "Email",
      href: `mailto:${site.email}`,
      detail: site.email,
      icon: Mail,
    },
  ];

  if (site.instagram) {
    connections.push({
      label: "Instagram",
      href: site.instagram,
      detail: "@glitch_realm_007",
      icon: InstagramIcon,
    });
  }

  connections.push({
    label: "Portfolio hub",
    href: site.hub,
    detail: "sk090347.github.io",
    icon: ExternalLink,
  });

  return (
    <SectionShell id="contact">
      <Reveal>
        <SectionHeading
          eyebrow="Contact & Connections"
          title="Let’s build something dense"
          description="Open to collaborations, research-curious chats, and roles where systems craft meets visual gravity."
        />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {connections.map((c, i) => (
          <Reveal key={c.label} delay={0.05 * i}>
            <a
              href={c.href}
              target={c.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="group block h-full"
            >
              <Card className="h-full transition group-hover:border-white/25 group-hover:bg-white/[0.05]">
                <CardContent className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent">
                    <c.icon className="h-5 w-5 text-white/85" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{c.label}</p>
                    <p className="mt-1 text-sm text-white/50">{c.detail}</p>
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
