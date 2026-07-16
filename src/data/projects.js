// Add your own projects here, grouped into "website" or "app" — the
// Projects section splits them into two galleries automatically.
//
// image: drop a screenshot in src/assets/projects/ and import it here.
// Leave it null and the tile falls back to a plain title card — still
// works, just less visual.
//
// TODO: fill in `year`, `liveUrl`, and `githubUrl` for each project below
// once you have the real links.

const projects = [
  {
    title: "AsiaPierce",
    type: "website",
    category: "Freelance — E-commerce & Booking",
    year: null,
    tags: ["React", "Vite", "Supabase", "Stripe", "Tailwind CSS"],
    description:
      "Full e-commerce and booking platform built for a professional piercing studio. Customers browse jewelry, pay via Stripe, book appointments with real-time slot availability, and browse a gallery of the artist's work — with wishlist sharing, recently viewed items, discount codes, and multilingual support. The admin panel manages appointments, blocked hours, gallery uploads, inventory, tickets, and orders, with real-time stock updates via Supabase and full mobile optimization.",
    image: null,
    liveUrl: null,
    githubUrl: null,
  },
  {
    title: "HairGo",
    type: "website",
    category: "Freelance — Salon Management Platform",
    year: null,
    tags: ["React", "Vite", "Supabase", "Stripe", "Tailwind CSS"],
    description:
      "Complete salon management platform built for a hair studio. Clients browse stylists, book appointments, shop products, and chat directly with the salon team, with Stripe payments and role-based authentication (client, manager, admin). The back-office covers scheduling, timesheets, pay runs, sales tracking, coupons, product and order management, stylist profiles, gallery, blocked dates, logs, and live messaging — a fully operational business tool built from scratch.",
    image: null,
    liveUrl: null,
    githubUrl: null,
  },
  {
    title: "OA Events",
    type: "website",
    category: "Freelance — Events & Rental",
    year: null,
    tags: ["Next.js", "Supabase", "Bootstrap"],
    description:
      "Website built for a furniture rental and events company, with a product catalog and reservation system, a photo gallery, and a contact page. The admin panel manages reservations, gallery content, and authentication. Built with Next.js for server-side rendering and Supabase as the backend, with a clean marble-themed design.",
    image: null,
    liveUrl: null,
    githubUrl: null,
  },
  {
    title: "PokeLegends",
    type: "app",
    category: "Personal Project — RPG Game",
    year: null,
    tags: ["Java", "JavaFX", "OOP", "Game Dev"],
    description:
      "A full RPG built from scratch in Java, inspired by Pokémon and League of Legends: a tile-based open world with multiple maps and warp points, a turn-based battle system, champion classes with stats/moves/passives/status effects, an item and inventory system with a shop, party management, NPC interactions, chests, collision detection, sound, and save/load. The engine and UI were built manually with Java Swing and custom rendering — no game framework — pushing deep into factories, builders, and data loaders.",
    image: null,
    liveUrl: null,
    githubUrl: null,
  },
  {
    title: "Java Store Manager",
    type: "app",
    category: "Personal / Academic — Desktop App",
    year: null,
    tags: ["Java", "JavaFX", "MySQL", "Maven"],
    description:
      "A desktop store management application built with JavaFX and connected to a MySQL database. Users register and log in, then browse and manage products across three categories — clothes, shoes, and accessories — with product images, discount logic, and a shopping interface. Built to practice full-stack desktop development with Java, MVC architecture, and relational database integration.",
    image: null,
    liveUrl: null,
    githubUrl: null,
  },
  {
    title: "Buddhabrot Image Generator",
    type: "app",
    category: "Academic — Scientific Computing",
    year: null,
    tags: ["C#", "Multithreading", "Complex Numbers", "Fractal Mathematics"],
    description:
      "A scientific computing project that generates Buddhabrot fractal images — a variation of the Mandelbrot set — using custom implementations of complex number arithmetic, pixel mapping, and color gradient rendering. Multithreaded processing with a dedicated threading class significantly reduces render time, combining mathematics, image processing, and parallel computing.",
    image: null,
    liveUrl: null,
    githubUrl: null,
  },
];

export default projects;
