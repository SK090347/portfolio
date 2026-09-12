import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {year} {site.name}. Dual-licensed MIT + Apache-2.0.
        </p>
        <p className="font-mono text-xs text-white/30">
          WebGL Schwarzschild hero · Next.js · shadcn/ui
        </p>
      </div>
    </footer>
  );
}
