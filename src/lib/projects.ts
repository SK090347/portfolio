export type Project = {
  name: string;
  blurb: string;
  href: string;
  live?: string;
  tags: string[];
  language?: string;
};

export const projects: Project[] = [
  {
    name: "stackvm",
    blurb: "Tiny bytecode stack VM — call frames, .svm assembler, CLI.",
    href: "https://github.com/SK090347/stackvm",
    live: "https://sk090347.github.io/stackvm/",
    live: "https://sk090347.github.io/stackvm/",
    tags: ["TypeScript", "VM", "Bytecode"],
    language: "TypeScript",
  },
  {
    name: "gradtape",
    blurb: "Reverse-mode autodiff tape + tiny MLP. Finite-diff checked grads.",
    href: "https://github.com/SK090347/gradtape",
    live: "https://sk090347.github.io/gradtape/",
    live: "https://sk090347.github.io/gradtape/",
    tags: ["TypeScript", "Autodiff", "ML"],
    language: "TypeScript",
  },
  {
    name: "leafstore",
    blurb: "On-disk B+ tree KV — fixed pages, insert/get/range, single-file persistence.",
    href: "https://github.com/SK090347/leafstore",
    tags: ["TypeScript", "Storage", "B+ tree"],
    language: "TypeScript",
  },
  {
    name: "raft-lab",
    blurb: "Raft you can crash and partition — election, replication, majority commit in TypeScript.",
    href: "https://github.com/SK090347/raft-lab",
    live: "https://sk090347.github.io/raft-lab/",
    live: "https://sk090347.github.io/raft-lab/",
    tags: ["TypeScript", "Distributed Systems", "Raft"],
    language: "TypeScript",
  },
  {
    name: "lumen-kv",
    blurb: "LSM key-value store from scratch — memtable, WAL, SSTs, compaction, Bloom filters.",
    href: "https://github.com/SK090347/lumen-kv",
    tags: ["TypeScript", "Database", "LSM"],
    language: "TypeScript",
  },
  {
    name: "photon",
    blurb: "Progressive Monte Carlo path tracer on canvas — Cornell box, BVH, cosine sampling.",
    href: "https://github.com/SK090347/photon",
    live: "https://sk090347.github.io/photon/",
    live: "https://sk090347.github.io/photon/",
    tags: ["TypeScript", "Graphics", "Path Tracing"],
    language: "TypeScript",
  },
  {
    name: "satforge",
    blurb: "CDCL SAT solver — watched literals, 1-UIP learning, VSIDS-ish branching.",
    href: "https://github.com/SK090347/satforge",
    live: "https://sk090347.github.io/satforge/",
    live: "https://sk090347.github.io/satforge/",
    tags: ["C++", "SAT", "Algorithms"],
    language: "C++",
  },
  {
    name: "nbody-orbit",
    blurb: "N-body gravity with velocity-Verlet and energy-drift checks.",
    href: "https://github.com/SK090347/nbody-orbit",
    live: "https://sk090347.github.io/nbody-orbit/",
    live: "https://sk090347.github.io/nbody-orbit/",
    tags: ["C++", "Physics", "Simulation"],
    language: "C++",
  },
  {
    name: "alignx",
    blurb: "Smith–Waterman local alignment — C++ and Java kept in sync by pytest.",
    href: "https://github.com/SK090347/alignx",
    tags: ["C++", "Bioinformatics", "DP"],
    language: "C++",
  },
  {
    name: "wavefield",
    blurb: "2D FDTD wave simulator — shared stencil in Python, C++, and a canvas UI.",
    href: "https://github.com/SK090347/wavefield",
    live: "https://sk090347.github.io/wavefield/",
    live: "https://sk090347.github.io/wavefield/",
    tags: ["Python", "FDTD", "Physics"],
    language: "Python",
  },
  {
    name: "CampusOS-Adamas",
    blurb: "Campus app for Adamas — search, maps, and a small knowledge layer.",
    href: "https://github.com/SK090347/CampusOS-Adamas",
    live: "https://sk090347.github.io/CampusOS-Adamas/",
    live: "https://sk090347.github.io/CampusOS-Adamas/",
    tags: ["Next.js", "Prisma", "Maps"],
    language: "TypeScript",
  },
  {
    name: "horizon-drift",
    blurb: "Endless open-world driving in the browser — Three.js + Rapier.",
    href: "https://github.com/SK090347/horizon-drift",
    live: "https://sk090347.github.io/horizon-drift/",
    live: "https://sk090347.github.io/horizon-drift/",
    tags: ["Three.js", "WebGL", "Game"],
    language: "TypeScript",
  },
  {
    name: "ts-algorithms",
    blurb: "Small DS&A library — binary search, Dijkstra, Union-Find, LRU, Trie.",
    href: "https://github.com/SK090347/ts-algorithms",
    tags: ["TypeScript", "Library", "DSA"],
    language: "TypeScript",
  },
  {
    name: "devtools-kit",
    blurb: "Tiny CLI (dtk) — json-pretty, uuid, sha256, mock headers.",
    href: "https://github.com/SK090347/devtools-kit",
    tags: ["TypeScript", "CLI", "DX"],
    language: "TypeScript",
  },
];
