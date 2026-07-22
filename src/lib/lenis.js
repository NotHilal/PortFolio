// Shared handle to the single Lenis instance created by SmoothScroll —
// lets modals/lightboxes pause inertial scroll while they're open, since
// Lenis drives the page scroll itself and ignores CSS overflow:hidden.
let instance = null;

export function setLenis(lenis) {
  instance = lenis;
}

export function getLenis() {
  return instance;
}
