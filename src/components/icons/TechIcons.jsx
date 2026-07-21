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

export function KotlinIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="kotlinGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#e44857" />
          <stop offset="0.5" stopColor="#c711e1" />
          <stop offset="1" stopColor="#7f52ff" />
        </linearGradient>
      </defs>
      <path d="M2.5 2.5h19L12 12l9.5 9.5h-19V2.5Z" fill="url(#kotlinGrad)" />
    </svg>
  );
}

export function DockerIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <g fill="#2496ed">
        <rect x="2.6" y="10.2" width="3.1" height="3.1" />
        <rect x="6.2" y="10.2" width="3.1" height="3.1" />
        <rect x="9.8" y="10.2" width="3.1" height="3.1" />
        <rect x="6.2" y="6.6" width="3.1" height="3.1" />
        <rect x="9.8" y="6.6" width="3.1" height="3.1" />
        <rect x="9.8" y="3" width="3.1" height="3.1" />
        <path d="M1.8 13.6s1.4 1.2 3.8 1.2h9.6c2.9 0 5.4-1.6 6.4-4.2 0 0-1.7-1-3.5-.2-.3-1-1.3-1.7-1.3-1.7s-1 1.2-.4 2.4c-.4.2-1 .4-1.9.4H4c-1 0-1.7.4-2.2 2.1Z" />
      </g>
    </svg>
  );
}

export function GitIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <g stroke="#f05033" strokeWidth="1.6" fill="none" strokeLinecap="round">
        <line x1="4.5" y1="19.5" x2="19.5" y2="4.5" />
      </g>
      <circle cx="5" cy="19" r="2.1" fill="#f05033" />
      <circle cx="19" cy="5" r="2.1" fill="#f05033" />
      <rect
        x="9.9"
        y="9.9"
        width="4.2"
        height="4.2"
        rx="0.8"
        transform="rotate(45 12 12)"
        fill="#f05033"
      />
    </svg>
  );
}

export function JavaScriptIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#f7df1e" />
      <text
        x="12"
        y="16.5"
        textAnchor="middle"
        fontFamily="ui-monospace, monospace"
        fontSize="9.5"
        fontWeight="700"
        fill="#1a1a1a"
      >
        JS
      </text>
    </svg>
  );
}

export function HTMLIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M3 2h18l-1.6 18.2L12 22 4.6 20.2Z" fill="#e44d26" />
      <path d="M12 2v18.4l5.6-1.5L18.9 4H12Z" fill="#f16529" />
    </svg>
  );
}

export function CSSIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M3 2h18l-1.6 18.2L12 22 4.6 20.2Z" fill="#264de4" />
      <path d="M12 2v18.4l5.6-1.5L18.9 4H12Z" fill="#2965f1" />
    </svg>
  );
}

export function BashIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="4" fill="#1a1a1a" stroke="#4eaa25" strokeWidth="1" />
      <text
        x="6.5"
        y="15.5"
        fontFamily="ui-monospace, monospace"
        fontSize="9"
        fontWeight="700"
        fill="#4eaa25"
      >
        &gt;_
      </text>
    </svg>
  );
}

export function CICDIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="cicdGrad" x1="2" y1="12" x2="22" y2="12" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#22c55e" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
      <path
        d="M7 8a4 4 0 1 0 0 8c2.2 0 3.5-1.7 5-4s2.8-4 5-4a4 4 0 1 1 0 8c-2.2 0-3.5-1.7-5-4s-2.8-4-5-4Z"
        fill="none"
        stroke="url(#cicdGrad)"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MySQLIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <ellipse cx="12" cy="6" rx="8" ry="3" fill="#00758f" />
      <path d="M4 6v10c0 1.7 3.6 3 8 3s8-1.3 8-3V6" fill="none" stroke="#00758f" strokeWidth="1.6" />
      <path d="M4 11c0 1.7 3.6 3 8 3s8-1.3 8-3" fill="none" stroke="#00758f" strokeWidth="1.3" opacity="0.6" />
      <circle cx="18.3" cy="5.2" r="1.6" fill="#f29111" />
    </svg>
  );
}

export function CassandraIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="7" fill="none" stroke="#1287b1" strokeWidth="1.3" strokeDasharray="2 3" />
      <circle cx="12" cy="5" r="1.7" fill="#1287b1" />
      <circle cx="18.1" cy="8.5" r="1.7" fill="#1287b1" />
      <circle cx="18.1" cy="15.5" r="1.7" fill="#1287b1" />
      <circle cx="12" cy="19" r="1.7" fill="#1287b1" />
      <circle cx="5.9" cy="15.5" r="1.7" fill="#1287b1" />
      <circle cx="5.9" cy="8.5" r="1.7" fill="#1287b1" />
    </svg>
  );
}

export function SupabaseIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="supabaseGrad" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3ecf8e" />
          <stop offset="1" stopColor="#249361" />
        </linearGradient>
      </defs>
      <path d="M13.5 2 4 14.5h7L10.2 22 20 9.5h-7.3Z" fill="url(#supabaseGrad)" />
    </svg>
  );
}
