import React from "react";

export const Icons = {
  logo: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="40" height="40" rx="8" fill="currentColor" />
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="var(--background)" fontSize="16" fontWeight="700" fontFamily="system-ui">
        MH
      </text>
    </svg>
  ),
  linkedin: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
        fill="currentColor"
      />
      <rect x="2" y="9" width="4" height="12" fill="currentColor" />
      <circle cx="4" cy="4" r="2" fill="currentColor" />
    </svg>
  ),
  dribbble: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path
        d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  github: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  globe: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  email: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  x: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  youtube: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
    </svg>
  ),
  arrowRight: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  ),
  react: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  ),
  nextjs: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg" {...props}>
      <mask id="mask0_408_134" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
      <g mask="url(#mask0_408_134)">
        <circle cx="90" cy="90" r="90" fill="black" />
        <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L134.098 157.047C138.997 154.349 143.511 151.107 147.545 147.411L149.508 157.52Z" fill="white" />
        <path d="M115 54V126H127V54H115Z" fill="url(#paint0_linear_408_134)" />
      </g>
      <defs>
        <linearGradient id="paint0_linear_408_134" x1="109" y1="67" x2="109" y2="125" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),
  typescript: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="128" height="128" fill="#3178c6" />
      <path d="M1.5 63.91v62.59h125V1.32h-125v62.59zm82.72 13.92H98.9v23.45c0 4.38-1.5 8.16-4.5 11.33-3 3.17-7.46 4.75-13.4 4.75-4.88 0-8.91-1.38-12.09-4.14-3.17-2.76-5.07-6.84-5.69-12.23l13.59-1.34c.34 2.8 1.05 4.88 2.1 6.25 1.05 1.36 2.5 2.05 4.35 2.05 2 0 3.48-.68 4.45-2.05.97-1.36 1.45-3.32 1.45-5.88l-.14-22.19zM25.1 77.83h28.14V89.4H42.54v26.15H29.13V89.4H25.1v-11.57z" fill="white" />
    </svg>
  ),
  tailwind: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#38BDF8" />
    </svg>
  ),
  express: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1.38 103.88h13.92V88.83l.14-.14c3.41 5.3 9.49 8.65 16.51 8.65 12.87 0 22.84-9.37 22.84-23.34 0-14.11-9.97-23.49-22.84-23.49-7.02 0-13.1 3.35-16.51 8.65l-.14-.14V52.06H1.38v51.82zm14.88-30.13c0-7.85 5.51-12.87 12.44-12.87 6.94 0 12.44 5.02 12.44 12.87 0 7.85-5.51 12.83-12.44 12.83-6.93 0-12.44-4.98-12.44-12.83zm42.76 27.6h13.92V89.4l.14-.14c2.81 4.93 8.16 8.08 13.92 8.08 1.48 0 2.91-.19 4.31-.57v-13.1a14.77 14.77 0 01-4.78.72c-7.46 0-13.49-5.17-13.49-13.49V52.06H59.02v49.29zm35.8-21.6c0 10.62 7.7 18.32 18.37 18.32 6.51 0 11.58-3.01 14.54-8.08l.14.14v6.84h13.82V52.06h-13.82v6.65l-.14.14c-2.96-4.98-8.03-8.03-14.54-8.03-10.67 0-18.37 7.7-18.37 18.32zm13.93 0c0-6.41 3.59-10.86 9.38-10.86 5.8 0 9.38 4.45 9.38 10.86 0 6.41-3.59 10.9-9.38 10.9-5.79 0-9.38-4.49-9.38-10.9z" fill="currentColor" />
    </svg>
  ),
  postgresql: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm31.1 91.1c-1.1 1.1-2.6 1.1-3.7 0l-12.6-12.6c-4.9 3.2-10.8 5.1-17.1 5.1-16.9 0-30.7-13.8-30.7-30.7s13.8-30.7 30.7-30.7c13.8 0 25.5 9.1 29.5 21.6 1.1 3.4.6 7.1-1.3 10.1-1.9 3-4.9 5.1-8.5 5.8-1.1.2-1.9 1.1-1.9 2.2v14.9c0 1.1-.4 2.2-1.1 2.9l-3.3 3.3c-1.1 1.1-2.9 1.1-4 0l-1.1-1.1c-1.1-1.1-1.1-2.9 0-4l1.1-1.1c1.1-1.1 1.1-2.9 0-4l-1.1-1.1c-1.1-1.1-1.1-2.9 0-4l1.1-1.1c.4-.4.6-1 .6-1.5V56.4c0-1.1-.9-1.9-1.9-1.9H59.4c-1.1 0-1.9.9-1.9 1.9v3.7c0 1.1.9 1.9 1.9 1.9h3.7c1.1 0 1.9.9 1.9 1.9s-.9 1.9-1.9 1.9h-3.7c-3.1 0-5.6-2.5-5.6-5.6V56c0-3.1 2.5-5.6 5.5-5.6h17.9c1.1 0 1.9-.9 1.9-1.9s-.9-1.9-1.9-1.9H59.4c-5.2 0-9.4 4.2-9.4 9.4v31.9c0 1.1.9 1.9 1.9 1.9h31.9c1.1 0 1.9-.9 1.9-1.9s-.9-1.9-1.9-1.9H63.1V67.6c0-1.1.9-1.9 1.9-1.9h14.9c3.1 0 5.6 2.5 5.6 5.6v14.9c0 1.1.9 1.9 1.9 1.9s1.9-.9 1.9-1.9V71.3c0-5.2-4.2-9.4-9.4-9.4H65.1c-1.1 0-1.9.9-1.9 1.9v21.5c0 1.1-.9 1.9-1.9 1.9H33.1c-1.1 0-1.9-.9-1.9-1.9s.9-1.9 1.9-1.9H59.4v-3.7c0-1.1-.9-1.9-1.9-1.9H44.6c-1.1 0-1.9.9-1.9 1.9s.9 1.9 1.9 1.9h11.1v3.7c0 1.1.9 1.9 1.9 1.9h3.7V83.1c0 1.1-.9 1.9-1.9 1.9s-1.9-.9-1.9-1.9v-1.9c0-1.1-.9-1.9-1.9-1.9h-3.7c-1.1 0-1.9.9-1.9 1.9v1.9c0 1.1.9 1.9 1.9 1.9h3.7c1.1 0 1.9.9 1.9 1.9s-.9 1.9-1.9 1.9H44.6c-1.1 0-1.9-.9-1.9-1.9s.9-1.9 1.9-1.9h11.1c1.1 0 1.9-.9 1.9-1.9s-.9-1.9-1.9-1.9H44.6c-3.1 0-5.6 2.5-5.6 5.6v3.7c0 1.1.9 1.9 1.9 1.9h3.7c1.1 0 1.9.9 1.9 1.9s-.9 1.9-1.9 1.9H33.1c-3.1 0-5.6-2.5-5.6-5.6v-3.7c0-3.1 2.5-5.6 5.6-5.6h11.1c1.1 0 1.9-.9 1.9-1.9s-.9-1.9-1.9-1.9H33.1C28 65.8 23.8 70 23.8 75.1v14.9c0 5.2 4.2 9.4 9.4 9.4H65c5.2 0 9.4-4.2 9.4-9.4V75.1c0-1.1-.9-1.9-1.9-1.9s-1.9.9-1.9 1.9v14.9c0 3.1-2.5 5.6-5.6 5.6H33.1c-3.1 0-5.6-2.5-5.6-5.6V75.1c0-3.1 2.5-5.6 5.6-5.6h31.9c3.1 0 5.6 2.5 5.6 5.6v3.7c0 3.1-2.5 5.6-5.6 5.6h-3.7c-3.1 0-5.6-2.5-5.6-5.6V75.1c0-1.1-.9-1.9-1.9-1.9s-1.9.9-1.9 1.9v3.7c0 5.2 4.2 9.4 9.4 9.4h3.7c5.2 0 9.4-4.2 9.4-9.4V75.1c0-5.2-4.2-9.4-9.4-9.4H44.6c-5.2 0-9.4 4.2-9.4 9.4v3.7c0 5.2 4.2 9.4 9.4 9.4h20.4c1.1 0 1.9-.9 1.9-1.9s-.9-1.9-1.9-1.9H44.6c-3.1 0-5.6-2.5-5.6-5.6V75.1c0-3.1 2.5-5.6 5.6-5.6h11.1c3.1 0 5.6 2.5 5.6 5.6v3.7c0 3.1-2.5 5.6-5.6 5.6H46.5c-3.1 0-5.6-2.5-5.6-5.6V75.1c0-1.1-.9-1.9-1.9-1.9s-1.9.9-1.9 1.9v3.7c0 5.2 4.2 9.4 9.4 9.4h3.7c5.2 0 9.4-4.2 9.4-9.4V75.1c0-5.2-4.2-9.4-9.4-9.4H44.6z" fill="#336791" />
    </svg>
  ),
};
