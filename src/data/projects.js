// Add your own projects here, grouped into "website" or "app" — the
// Projects section splits them into two galleries automatically.
//
// image: drop a screenshot in src/assets/projects/ and import it here.
// Leave it null and the tile falls back to a plain title card — still
// works, just less visual. The images below are placeholder mockups —
// swap them for real screenshots once you have them.
//
// TODO: fill in `year`, `liveUrl`, and `githubUrl` for each project below
// once you have the real links.

import asiapierceImg from "../assets/projects/asiapierce.svg";
import hairgoImg from "../assets/projects/hairgo.svg";
import oaEventsImg from "../assets/projects/oa-events.svg";
import pokelegendsImg from "../assets/projects/pokelegends.svg";
import javaStoreManagerImg from "../assets/projects/java-store-manager.svg";
import buddhabrotImg from "../assets/projects/buddhabrot.svg";

const projects = [
  {
    title: "AsiaPierce",
    type: "website",
    category: "Freelance, E-commerce & Booking",
    year: null,
    tags: ["React", "Vite", "Supabase", "Stripe", "Tailwind CSS"],
    description:
      "Full e-commerce and booking platform for a professional piercing studio: Stripe checkout, real-time appointment slots, wishlists, and multilingual support on the client side, backed by a full admin back-office for inventory, orders, and gallery content in real time.",
    image: asiapierceImg,
    liveUrl: null,
    githubUrl: null,
  },
  {
    title: "HairGo",
    type: "website",
    category: "Freelance, Salon Management Platform",
    year: null,
    tags: ["React", "Vite", "Supabase", "Stripe", "Tailwind CSS"],
    description:
      "Complete salon management platform: clients book stylists, shop products, and message the salon directly with Stripe payments and role-based auth. The back-office runs the whole business: scheduling, timesheets, payroll, sales, and live messaging, built from scratch as a fully operational tool.",
    image: hairgoImg,
    liveUrl: null,
    githubUrl: null,
  },
  {
    title: "OA Events",
    type: "website",
    category: "Freelance, Events & Rental",
    year: null,
    tags: ["Next.js", "Supabase", "Bootstrap"],
    description:
      "Website for a furniture rental and events company: product catalog, reservation system, and photo gallery on a clean marble-themed design, with an admin panel for reservations and gallery content. Built with Next.js and Supabase.",
    image: oaEventsImg,
    liveUrl: null,
    githubUrl: null,
  },
  {
    title: "PokeLegends",
    type: "app",
    category: "Personal Project, RPG Game",
    year: null,
    tags: ["Java", "JavaFX", "OOP", "Game Dev"],
    description:
      "A full RPG built from scratch in Java, inspired by Pokémon and League of Legends: a tile-based open world with multiple maps and warp points, a turn-based battle system, champion classes with stats/moves/passives/status effects, an item and inventory system with a shop, party management, NPC interactions, chests, collision detection, sound, and save/load. The engine and UI were built manually with Java Swing and custom rendering (no game framework), pushing deep into factories, builders, and data loaders.",
    image: pokelegendsImg,
    liveUrl: null,
    githubUrl: "https://github.com/NotHilal/MyPokeLegends",
  },
  {
    title: "ChronoMaze",
    type: "app",
    category: "Personal Project, Android Game",
    year: null,
    tags: ["Kotlin", "Android Studio"],
    description:
      "A native Android puzzle game built in Kotlin: players solve shifting maze layouts against a shrinking clock, with level logic and rendering built from scratch.",
    image: null,
    liveUrl: null,
    githubUrl: "https://github.com/NotHilal/ChronoMazeAndroid",
  },
  {
    title: "Java Store Manager",
    type: "app",
    category: "Personal / Academic, Desktop App",
    year: null,
    tags: ["Java", "JavaFX", "MySQL", "Maven"],
    description:
      "A desktop store management application built with JavaFX and connected to a MySQL database. Users register and log in, then browse and manage products across three categories (clothes, shoes, and accessories) with product images, discount logic, and a shopping interface. Built to practice full-stack desktop development with Java, MVC architecture, and relational database integration.",
    image: javaStoreManagerImg,
    liveUrl: null,
    githubUrl: null,
  },
  {
    title: "Buddhabrot Image Generator",
    type: "app",
    category: "Academic, Scientific Computing",
    year: null,
    tags: ["C#", "Multithreading", "Complex Numbers", "Fractal Mathematics"],
    description:
      "A scientific computing project that generates Buddhabrot fractal images (a variation of the Mandelbrot set) using custom implementations of complex number arithmetic, pixel mapping, and color gradient rendering. Multithreaded processing with a dedicated threading class significantly reduces render time, combining mathematics, image processing, and parallel computing.",
    image: buddhabrotImg,
    liveUrl: null,
    githubUrl: null,
  },
];

export default projects;
