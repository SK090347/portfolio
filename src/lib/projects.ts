export type Project = {
  name: string;
  blurb: string;
  href: string;
  tags: string[];
  language?: string;
};

export const projects: Project[] = [
  {
    name: "raft-lab",
    blurb: "Raft consensus — election, log replication, majority commit. Interactive TypeScript simulation.",
    href: "https://github.com/SK090347/raft-lab",
    tags: ["TypeScript", "Distributed Systems", "Raft"],
    language: "TypeScript",
  },
  {
    name: "lumen-kv",
    blurb: "LSM key-value store — memtable → SST, read-amp tradeoffs, typed systems core.",
    href: "https://github.com/SK090347/lumen-kv",
    tags: ["TypeScript", "Database", "LSM"],
    language: "TypeScript",
  },
  {
    name: "photon",
    blurb: "Monte Carlo path tracer — L_o = L_e + ∫ f_r L_i cosθ dω on canvas.",
    href: "https://github.com/SK090347/photon",
    tags: ["TypeScript", "Graphics", "Path Tracing"],
    language: "TypeScript",
  },
  {
    name: "satforge",
    blurb: "CDCL SAT solver — unit propagation, 1-UIP learning, conflict-driven search.",
    href: "https://github.com/SK090347/satforge",
    tags: ["C++", "SAT", "Algorithms"],
    language: "C++",
  },
  {
    name: "nbody-orbit",
    blurb: "N-body gravity — F = G m_i m_j r̂ / r² with velocity-Verlet integrators.",
    href: "https://github.com/SK090347/nbody-orbit",
    tags: ["C++", "Physics", "Simulation"],
    language: "C++",
  },
  {
    name: "alignx",
    blurb: "Smith–Waterman local alignment — H_ij = max(0, diag+s, gap) in C++/Java/Python.",
    href: "https://github.com/SK090347/alignx",
    tags: ["C++", "Bioinformatics", "DP"],
    language: "C++",
  },
  {
    name: "wavefield",
    blurb: "2D wave FDTD — ∂²u/∂t² = c² ∇²u with CFL ≤ 1/√2 stability.",
    href: "https://github.com/SK090347/wavefield",
    tags: ["Python", "FDTD", "Physics"],
    language: "Python",
  },
  {
    name: "CampusOS-Adamas",
    blurb: "Campus digital OS for Adamas — SEARCH → UNDERSTAND → NAVIGATE → ACT. Next.js · Prisma · OSM.",
    href: "https://github.com/SK090347/CampusOS-Adamas",
    tags: ["Next.js", "Prisma", "Maps"],
    language: "TypeScript",
  },
  {
    name: "horizon-drift",
    blurb: "Endless open-world 3D driving sandbox in the browser — Three.js + Rapier + Vite.",
    href: "https://github.com/SK090347/horizon-drift",
    tags: ["Three.js", "WebGL", "Game"],
    language: "TypeScript",
  },
  {
    name: "leetcode",
    blurb: "Production-quality Hard LeetCode in TypeScript — patterns, complexity, Vitest, CI.",
    href: "https://github.com/SK090347/leetcode",
    tags: ["TypeScript", "Algorithms", "Interview"],
    language: "TypeScript",
  },
  {
    name: "ts-algorithms",
    blurb: "Classic DS&A library — binary search, Dijkstra, Union-Find, LRU, Trie + Vitest.",
    href: "https://github.com/SK090347/ts-algorithms",
    tags: ["TypeScript", "Library", "DSA"],
    language: "TypeScript",
  },
  {
    name: "devtools-kit",
    blurb: "Focused TypeScript CLI (dtk) — json-pretty, uuid, sha256, serve-headers mock.",
    href: "https://github.com/SK090347/devtools-kit",
    tags: ["TypeScript", "CLI", "DX"],
    language: "TypeScript",
  },
  {
    name: "system-design-notes",
    blurb: "System design notebook — URL shortener, rate limiter, news feed, campus knowledge layer.",
    href: "https://github.com/SK090347/system-design-notes",
    tags: ["Architecture", "Markdown", "Notes"],
  },
];
