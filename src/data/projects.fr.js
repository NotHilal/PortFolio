// French overrides for src/data/projects.js — same order, same length.
// title, tags, image, liveUrl, and githubUrl stay in the English file
// and are reused as-is.

const projectsFr = [
  {
    category: "Freelance, E-commerce & Réservation",
    description:
      "Plateforme complète d'e-commerce et de réservation pour un studio de piercing professionnel : paiement Stripe, créneaux de rendez-vous en temps réel, listes de souhaits et support multilingue côté client, avec un back-office complet pour la gestion des stocks, des commandes et de la galerie en temps réel.",
  },
  {
    category: "Freelance, Plateforme de gestion de salon",
    description:
      "Plateforme complète de gestion de salon : les clients réservent des coiffeurs, achètent des produits et contactent le salon directement, avec paiements Stripe et authentification par rôles. Le back-office pilote toute l'activité : planning, feuilles de temps, paie, ventes et messagerie en direct, développé de A à Z comme un outil pleinement opérationnel.",
  },
  {
    category: "Freelance, Événementiel & Location",
    description:
      "Site web pour une entreprise de location de mobilier et d'événementiel : catalogue de produits, système de réservation et galerie photo sur un design épuré à thème marbre, avec un panneau d'administration pour les réservations et la galerie. Développé avec Next.js et Supabase.",
  },
  {
    category: "Projet personnel, Jeu RPG",
    description:
      "Un RPG complet développé de A à Z en Java, inspiré de Pokémon et League of Legends : un monde ouvert en tuiles avec plusieurs cartes et points de téléportation, un système de combat au tour par tour, des classes de champions avec stats/sorts/passifs/effets de statut, un système d'objets et d'inventaire avec boutique, gestion d'équipe, interactions avec les PNJ, coffres, détection de collisions, son, et sauvegarde/chargement. Le moteur et l'interface ont été construits à la main avec Java Swing et un rendu personnalisé (sans framework de jeu), avec un usage poussé des factories, builders et data loaders.",
  },
  {
    category: "Projet personnel, Jeu Android",
    description:
      "Un jeu de puzzle Android natif développé en Kotlin : les joueurs résolvent des labyrinthes changeants contre un chrono qui se réduit, avec une logique de niveaux et un rendu construits de A à Z.",
  },
  {
    category: "Personnel / Académique, Application Desktop",
    description:
      "Une application desktop de gestion de magasin développée avec JavaFX et connectée à une base de données MySQL. Les utilisateurs s'inscrivent et se connectent, puis parcourent et gèrent des produits répartis en trois catégories (vêtements, chaussures et accessoires) avec images produit, logique de réduction et interface d'achat. Développée pour pratiquer le développement desktop full-stack en Java, l'architecture MVC et l'intégration de bases de données relationnelles.",
  },
  {
    category: "Académique, Calcul scientifique",
    description:
      "Un projet de calcul scientifique qui génère des images fractales Buddhabrot (une variante de l'ensemble de Mandelbrot) à l'aide d'implémentations personnalisées d'arithmétique des nombres complexes, de mapping de pixels et de rendu de dégradés de couleurs. Un traitement multithread avec une classe de threading dédiée réduit considérablement le temps de rendu, combinant mathématiques, traitement d'image et calcul parallèle.",
  },
];

export default projectsFr;
