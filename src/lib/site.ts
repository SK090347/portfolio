export const site = {
  name: "Sumit Kumar Ta",
  title: "Sumit Kumar Ta — Portfolio",
  description:
    "3D interactive portfolio — WebGL black-hole hero · Adamas CSE AI/ML · Sumit Kumar Ta",
  tagline: "Building systems that bend light & logic",
  role: "First-year B.Tech CSE (AI & ML) · Adamas University, Kolkata · engineer · builder",
  university: "Adamas University",
  program: "B.Tech CSE (AI & ML)",
  location: "Kolkata, India",
  email: "tasumitkumar36@gmail.com",
  github: "https://github.com/SK090347",
  githubUser: "SK090347",
  linkedin: "https://www.linkedin.com/in/sumit-kumar-ta-998b25309",
  /** Set to show Instagram in Contact; leave empty to hide. */
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/glitch_realm_007/",
  hub: "https://sk090347.github.io/",
  url: "https://sk090347.github.io/portfolio",
} as const;

export type SiteConfig = typeof site;
