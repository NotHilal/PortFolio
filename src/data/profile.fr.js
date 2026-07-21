// French overrides for src/data/profile.js — only translatable fields
// plus resumeUrl (points at the French CV instead of the English one).
// name, location, email, and socials stay in the English file and are
// reused as-is (see src/i18n/useLocalizedData.js).

const profileFr = {
  role: "Ingénieur logiciel, Cloud & Cybersécurité",
  resumeUrl: "/cv-Hilal-fr.pdf",
  tagline:
    "Je conçois des logiciels fiables et sécurisés, développés en fonction des besoins et attentes de chaque client.",
  taglineLead: "Je conçois des logiciels fiables et sécurisés.",
  taglineDetail: "Développés en fonction des besoins et attentes de chaque client.",
  about:
    "Salut, je suis Hilal, ingénieur diplômé de l'ESILV, spécialisé en développement logiciel, cloud computing et cybersécurité.",
  aboutParagraphs: [
    "Je développe des applications et des sites internet. J'ai livré des plateformes web complètes pour des particuliers, fait de la R&D chez Dassault Systèmes sur l'autoscaling Kubernetes et les bases de données distribuées, et modernisé des systèmes legacy chez Captag, avec du support technique en direct lors d'événements comme le défilé Homme de Louis Vuitton 2025.",
    "Je suis le plus à l'aise avec Java, C#, Python, React, TypeScript, et des outils cloud-native comme Kubernetes, Docker et Prometheus, en travaillant sur toute la stack, de l'infrastructure à l'UI.",
    "En dehors du code, je gère une équipe esport semi-professionnelle, trois équipes compétitives par an, ce qui m'a appris autant sur le leadership et la communication que n'importe quel poste d'ingénieur.",
  ],
};

export default profileFr;
