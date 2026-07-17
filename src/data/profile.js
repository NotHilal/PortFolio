// Edit this file with your own info — it feeds the Hero, About, and
// Contact sections plus the social links in the Navbar/Footer.

const profile = {
  name: "Hilal El Ayoubi",
  role: "Software Engineer, Cloud & Cybersecurity",
  // Full sentence used for the meta description / OG image. The Hero
  // splits it into a bold lead and a lighter supporting clause below —
  // taglineLead + taglineDetail should read as the same sentence as
  // tagline if you edit them.
  tagline:
    "I build cloud-native software end to end, from distributed systems to full-stack platforms shipped for real clients.",
  taglineLead: "I build cloud-native software end to end.",
  taglineDetail:
    "From distributed systems to full-stack platforms shipped for real clients.",
  about:
    "Hey, I'm Hilal, a software engineer graduated from ESILV, specialized in cloud computing, cybersecurity, and software development.",
  aboutParagraphs: [
    "I build things end to end. I've shipped full web platforms for real clients, worked in R&D at Dassault Systèmes on Kubernetes autoscaling and distributed databases, and built a full RPG game from scratch in Java just for fun.",
    "I'm most comfortable with Java, C#, Python, React, TypeScript, and cloud-native tools like Kubernetes and Prometheus. I like working across the full stack and going deep on problems that actually matter.",
    "Outside of code, I manage a semi-professional esports team, which taught me more about leadership and communication than most things have.",
  ],
  location: "Paris, France",
  email: "hilal.elayoubi@gmail.com",
  resumeUrl: "/resume.pdf",
  socials: {
    // TODO: add your real GitHub/LinkedIn URLs
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    twitter: "",
  },
  skills: [
    "Java",
    "C#",
    "Python",
    "React",
    "TypeScript",
    "Kubernetes",
    "Prometheus",
    "Cloud Computing",
    "Cybersecurity",
  ],
};

export default profile;
