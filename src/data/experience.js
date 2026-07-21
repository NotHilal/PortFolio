// Chronological-ish list of roles/education for the Experience section.
// TODO: fill in `period` (e.g. "2022 — 2025") for each entry, and adjust
// `role` titles if these aren't your exact ones.
//
// logo: a small badge shown next to each row.

import esilvLogo from "../assets/experience/esilv.png";
import dassaultLogo from "../assets/experience/dassault.png";
import freelanceLogo from "../assets/experience/freelance.png";
import captagLogo from "../assets/experience/captag.png";
import esportsLogo from "../assets/experience/esports.png";

const experience = [
  {
    period: "2020 – 2026",
    org: "ESILV",
    role: "Software Engineering, Cloud & Cybersecurity",
    description:
      "Graduated with jury commendation as a software engineer specialized in software development, cloud computing, and cybersecurity, including a semester abroad in Dublin.",
    logo: esilvLogo,
  },
  {
    period: "Feb – Jul 2026",
    org: "Dassault Systèmes",
    role: "R&D Engineer",
    description:
      "Six-month R&D mission working on Kubernetes autoscaling and distributed databases, plus a metrics-monitoring frontend.",
    logo: dassaultLogo,
  },
  {
    period: "May – Aug 2025",
    org: "Captag",
    role: "C# & Java Mobile Developer",
    description:
      "Migrated legacy systems to .NET 8.0, integrated AI image-generation into a photobooth product, and ran live technical support at events including the 2025 Orange Leaders Meeting and Louis Vuitton's 2025 Men's Fashion Show.",
    logo: captagLogo,
  },
  {
    period: null,
    org: "Freelance",
    role: "Full-Stack Developer",
    description:
      "Shipped full web platforms for individuals and small businesses.",
    logo: freelanceLogo,
  },
  {
    period: "2021 – 2025",
    org: "Semi-professional esports team",
    role: "Team Manager",
    description:
      "Managed three competitive squads a year, leadership and communication experience that carried straight into how I work with clients and teams.",
    logo: esportsLogo,
  },
];

export default experience;
