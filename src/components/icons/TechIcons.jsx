// Simplified, hand-rolled tech-stack marks for the Hero's floating skill
// badges — not the official brand SVGs, just small recognizable glyphs
// sized consistently at 16x16.

export function JavaIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M8.5 15.5c-1.2 1 1.8 2 4.7 1.8 4.4-.3 6-2.4 6-2.4s-.7 1.5-4.3 2.2c-3.9.8-8.7-.2-8.7-.2s.6-.6 2.3-1.4Z"
        fill="#f89820"
      />
      <path
        d="M10.6 13.6s-2 .8-.5 1.4c1.8.7 6.9.9 8.9-.3 0 0 .5.5-.5 1-1.9 1-8.1 1.3-9.8.1-1.5-1.1.5-2 1.9-2.2Z"
        fill="#f89820"
      />
      <path
        d="M13.9 9.9c1 1.1-.3 2.1-.3 2.1s2.5-1.3 1.4-2.9c-1.1-1.6-1.9-2.3 2.6-5 0 0-7.1 1.8-3.7 5.8Z"
        fill="#f89820"
      />
      <path
        d="M18.8 19.1s.6.5-.7.9c-2.4.7-9.9.9-12 0-.8-.3.7-.8 1.1-.9.5-.1.8-.1.8-.1-.9-.7-6 1.3-2.6 1.8 9.4 1.5 17.2-.7 15.6-1.7-.3-.2-.6-.3-2.2-.9Z"
        fill="#f89820"
      />
      <path
        d="M12.3 5.6c-1.1.9-1.5 2.4-.3 4 1 1.2 2 1.7 2 1.7s1.6-1 .8-2.4c-.9-1.5-2.5-2.3-2.5-3.3Z"
        fill="none"
      />
    </svg>
  );
}

export function ReactIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="2.3" fill="#61dafb" />
      <g fill="none" stroke="#61dafb" strokeWidth="1.4">
        <ellipse cx="12" cy="12" rx="10" ry="4.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
      </g>
    </svg>
  );
}

export function CSharpIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#68217a" />
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fontFamily="ui-monospace, monospace"
        fontSize="10"
        fontWeight="700"
        fill="#fff"
      >
        C#
      </text>
    </svg>
  );
}

export function TypeScriptIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#3178c6" />
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fontFamily="ui-monospace, monospace"
        fontSize="10"
        fontWeight="700"
        fill="#fff"
      >
        TS
      </text>
    </svg>
  );
}

export function PythonIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 2.2c-4.4 0-4.1 1.9-4.1 1.9v2h4.2v.6H6.1S3.9 6.4 3.9 12s1.9 5.4 1.9 5.4h1.6v-2.6S7.2 12 9.9 12h4.2s2.5 0 2.5-2.4V4.3s.4-2.1-4.6-2.1Zm-2.3 1.3a.8.8 0 1 1 0 1.6.8.8 0 0 1 0-1.6Z"
        fill="#3776ab"
      />
      <path
        d="M12 21.8c4.4 0 4.1-1.9 4.1-1.9v-2h-4.2v-.6h6s2.2.3 2.2-5.3-1.9-5.4-1.9-5.4h-1.6v2.6s.2 2.8-2.5 2.8H10s-2.5 0-2.5 2.4v5.3s-.4 2.1 4.5 2.1Zm2.3-1.3a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6Z"
        fill="#ffd43b"
      />
    </svg>
  );
}

export function KubernetesIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M12 1.5 3 6v12l9 4.5 9-4.5V6Z"
        fill="none"
        stroke="#326ce5"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3.2" fill="#326ce5" />
      <g stroke="#326ce5" strokeWidth="1.2">
        <path d="M12 5.5V9" />
        <path d="M12 15v3.5" />
        <path d="M6.5 8.5 9.6 10.4" />
        <path d="M14.4 13.6 17.5 15.5" />
        <path d="M17.5 8.5 14.4 10.4" />
        <path d="M9.6 13.6 6.5 15.5" />
      </g>
    </svg>
  );
}
