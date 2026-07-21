// Merges the French overrides onto the canonical (English) data files.
// The .fr files only carry translatable fields — non-text fields like
// logos, images, links, and tags come from the English source either way.
import { useLanguage } from "./LanguageContext";
import profile from "../data/profile";
import profileFr from "../data/profile.fr";
import experience from "../data/experience";
import experienceFr from "../data/experience.fr";
import projects from "../data/projects";
import projectsFr from "../data/projects.fr";

export function useProfile() {
  const { lang } = useLanguage();
  return lang === "fr" ? { ...profile, ...profileFr } : profile;
}

export function useExperience() {
  const { lang } = useLanguage();
  if (lang !== "fr") return experience;
  return experience.map((item, i) => ({ ...item, ...experienceFr[i] }));
}

export function useProjects() {
  const { lang } = useLanguage();
  if (lang !== "fr") return projects;
  return projects.map((item, i) => ({ ...item, ...projectsFr[i] }));
}
