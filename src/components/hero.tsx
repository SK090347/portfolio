"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { BlackHoleHeroSection } from "@/components/ui/blackhole-hero-section";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

function useNarrow(query = "(max-width: 767px)") {
  const [narrow, setNarrow] = useState(false);
  useEffect(() => {
    const m = window.matchMedia(query);
    const sync = () => setNarrow(m.matches);
    sync();
    m.addEventListener("change", sync);
    return () => m.removeEventListener("change", sync);
  }, [query]);
  return narrow;
}

export function Hero() {
  const narrow = useNarrow();
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative min-h-[92svh] w-full md:min-h-[720px]">
      <BlackHoleHeroSection
        focus={narrow ? [0.5, 0.76] : [0.72, 0.46]}
        scrim={narrow ? "top" : "left"}
        scrimStrength={0.9}
        distance={24}
        elevation={narrow ? -7 : -5.5}
        fov={narrow ? 58 : 42}
        glow={narrow ? 0.85 : 1}
        steps={narrow ? 200 : 300}
        resolution={narrow ? 0.6 : 0.7}
        starBrightness={0.35}
      >
        <div className="flex h-full min-h-[92svh] items-start px-6 pt-20 sm:px-10 md:min-h-[720px] md:items-center md:pt-0 lg:px-20">
          <motion.div
            className="max-w-[36rem]"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/55">
              <Sparkles className="h-3 w-3 text-amber-200/80" />
              {site.program} · {site.university}
            </p>

            <h1 className="text-[2.6rem] font-light leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl lg:text-[4.35rem]">
              {site.name}
            </h1>
            <p className="mt-3 text-xl font-light tracking-tight text-white/80 sm:text-2xl lg:text-[1.75rem]">
              {site.tagline}
            </p>

            <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-white/55 md:mt-7">
              {site.role}. Systems, graphics, and algorithms — built to feel
              inevitable.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 md:mt-10">
              <Button asChild>
                <a href="#projects">
                  View Projects
                  <ArrowDownRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="#contact">Contact</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </BlackHoleHeroSection>
    </section>
  );
}
