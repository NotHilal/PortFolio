// Single source of truth for the "Index / 0N" numbering used in section
// eyebrows — add/reorder a key here and every section stays in sync.
const order = ["about", "experience", "projects", "contact"];

export function sectionIndex(key) {
  return String(order.indexOf(key) + 1).padStart(2, "0");
}
