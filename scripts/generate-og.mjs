// One-off asset generator for the social-preview image (og:image /
// twitter:image). Re-run with `node scripts/generate-og.mjs` any time the
// name/role/tagline change. Uses system fonts (not the site's Google
// Fonts) since this renders outside the browser.

import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";
import profile from "../src/data/profile.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, "..", "public", "og-image.png");

const WIDTH = 1200;
const HEIGHT = 630;
const PAPER = "#0a0a0a";
const INK = "#f5f4f0";
const ACCENT = "#c9a24b";

const escapeXml = (s) =>
  s.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c]);

// Naive word-wrap for plain SVG <text>/<tspan> — avoids relying on
// <foreignObject>, which isn't reliably supported by librsvg (the
// rasterizer sharp uses under the hood).
function wrapText(str, maxChars) {
  const words = str.split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines;
}

const name = escapeXml(profile.name.toUpperCase());
const role = escapeXml(profile.role.toUpperCase());
const taglineLines = wrapText(profile.tagline, 52).map(escapeXml);

const taglineTspans = taglineLines
  .map(
    (line, i) =>
      `<tspan x="80" dy="${i === 0 ? 0 : "1.5em"}">${line}</tspan>`,
  )
  .join("");

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="${PAPER}"/>

  <line x1="80" y1="${HEIGHT - 80}" x2="${WIDTH - 80}" y2="${HEIGHT - 80}" stroke="${ACCENT}" stroke-opacity="0.35" stroke-width="1.5"/>

  <rect x="80" y="110" width="28" height="1.5" fill="${ACCENT}"/>
  <text x="120" y="118" font-family="Arial, sans-serif" font-size="15" letter-spacing="3" fill="${ACCENT}">${role}</text>

  <text x="78" y="290" font-family="Georgia, 'Times New Roman', serif" font-weight="700" font-size="86" fill="${INK}">${name}</text>

  <text x="80" y="350" font-family="Arial, sans-serif" font-size="24" fill="#aeada9">${taglineTspans}</text>

  <rect x="${WIDTH - 156}" y="${HEIGHT - 156}" width="76" height="76" rx="16" fill="none" stroke="${ACCENT}" stroke-opacity="0.5" stroke-width="1.5"/>
  <text x="${WIDTH - 118}" y="${HEIGHT - 100}" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-weight="700" font-size="40" fill="${ACCENT}">H</text>
</svg>
`;

await sharp(Buffer.from(svg)).png().toFile(outPath);
console.log(`Wrote ${outPath}`);
