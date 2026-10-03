import { cn } from "@/lib/utils"

interface BenderProps {
  pose?: "idle" | "wave"
  className?: string
  title?: string
}

const OUTLINE = "#4b5666"

/**
 * Original Bender-inspired robot drawn in SVG (not official Futurama art).
 * Animated with the .bender-* classes in globals.css.
 */
export function Bender({ pose = "idle", className, title = "A Bender-style robot" }: BenderProps) {
  const waving = pose === "wave"
  const armPath = waving ? "M160 140 C186 130 198 108 196 82" : "M160 140 C184 150 190 178 184 204"
  const hand = waving ? { cx: 196, cy: 76, r: 10 } : { cx: 184, cy: 208, r: 9 }

  return (
    <svg viewBox="0 0 240 320" role="img" aria-label={title} className={cn("h-auto w-full", className)}>
      <defs>
        <linearGradient id="bender-metal" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#8d9bab" />
          <stop offset="0.35" stopColor="#e4e9ef" />
          <stop offset="0.7" stopColor="#b3bfcc" />
          <stop offset="1" stopColor="#7c8a9b" />
        </linearGradient>
        <linearGradient id="bender-metal-dark" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#6f7d8e" />
          <stop offset="0.4" stopColor="#c3ccd6" />
          <stop offset="1" stopColor="#68768a" />
        </linearGradient>
      </defs>

      <ellipse cx="120" cy="304" rx="58" ry="7" fill="#000" opacity="0.18" />

      <g className="bender-body">
        {/* legs */}
        <rect x="94" y="228" width="20" height="58" rx="6" fill="url(#bender-metal-dark)" stroke={OUTLINE} strokeWidth="2.5" />
        <rect x="126" y="228" width="20" height="58" rx="6" fill="url(#bender-metal-dark)" stroke={OUTLINE} strokeWidth="2.5" />
        <ellipse cx="102" cy="290" rx="19" ry="9" fill="url(#bender-metal)" stroke={OUTLINE} strokeWidth="2.5" />
        <ellipse cx="138" cy="290" rx="19" ry="9" fill="url(#bender-metal)" stroke={OUTLINE} strokeWidth="2.5" />

        {/* left arm */}
        <path d="M80 140 C56 150 50 178 56 204" fill="none" stroke={OUTLINE} strokeWidth="13" strokeLinecap="round" />
        <path d="M80 140 C56 150 50 178 56 204" fill="none" stroke="url(#bender-metal)" strokeWidth="8" strokeLinecap="round" />
        <circle cx="56" cy="208" r="9" fill="url(#bender-metal)" stroke={OUTLINE} strokeWidth="2.5" />

        {/* right arm (waves in the "wave" pose) */}
        <g className={waving ? "bender-arm-wave" : undefined}>
          <path d={armPath} fill="none" stroke={OUTLINE} strokeWidth="13" strokeLinecap="round" />
          <path d={armPath} fill="none" stroke="url(#bender-metal)" strokeWidth="8" strokeLinecap="round" />
          <circle {...hand} fill="url(#bender-metal)" stroke={OUTLINE} strokeWidth="2.5" />
        </g>

        {/* torso */}
        <rect x="78" y="118" width="84" height="116" rx="16" fill="url(#bender-metal)" stroke={OUTLINE} strokeWidth="3" />
        <rect x="98" y="150" width="44" height="54" rx="7" fill="#aab6c4" stroke={OUTLINE} strokeWidth="2.5" />
        <circle cx="132" cy="178" r="3.5" fill={OUTLINE} />
        <rect x="78" y="212" width="84" height="8" fill={OUTLINE} opacity="0.35" />

        {/* neck */}
        <rect x="104" y="108" width="32" height="14" fill="#7c8a9b" stroke={OUTLINE} strokeWidth="2.5" />

        {/* antenna */}
        <g className="bender-antenna">
          <line x1="120" y1="40" x2="120" y2="14" stroke={OUTLINE} strokeWidth="4" strokeLinecap="round" />
          <circle cx="120" cy="10" r="7" fill="#ff7a29" stroke={OUTLINE} strokeWidth="2.5" />
        </g>

        {/* head */}
        <path
          d="M68 104 V62 a52 24 0 0 1 104 0 V104 a52 14 0 0 1 -104 0 Z"
          fill="url(#bender-metal)"
          stroke={OUTLINE}
          strokeWidth="3"
        />
        <ellipse cx="120" cy="62" rx="52" ry="8" fill="#fff" opacity="0.25" />

        {/* visor + eyes */}
        <rect x="76" y="64" width="88" height="30" rx="15" fill="#1c2430" stroke={OUTLINE} strokeWidth="2.5" />
        <g className="bender-eyes">
          <circle cx="102" cy="79" r="11" fill="#fff" />
          <circle cx="138" cy="79" r="11" fill="#fff" />
          <g className="bender-pupils">
            <circle cx="102" cy="79" r="4.5" fill="#111" />
            <circle cx="138" cy="79" r="4.5" fill="#111" />
          </g>
        </g>

        {/* mouth grille */}
        <rect x="92" y="98" width="56" height="14" rx="3" fill="#1c2430" stroke={OUTLINE} strokeWidth="2" />
        {[100, 108, 116, 124, 132, 140].map((x) => (
          <line key={x} x1={x} y1="98" x2={x} y2="112" stroke="#c9d2dc" strokeWidth="2" />
        ))}

        {/* cigar + smoke */}
        {!waving && (
          <g>
            <rect x="138" y="100" width="34" height="7" rx="3" transform="rotate(-18 138 103)" fill="#8a5a2b" stroke={OUTLINE} strokeWidth="1.5" />
            <circle cx="170" cy="94" r="4" fill="#ff5a1f" />
            <circle className="bender-smoke" cx="172" cy="88" r="5" fill="#c3ccd6" />
            <circle className="bender-smoke bender-smoke-2" cx="172" cy="88" r="5" fill="#c3ccd6" />
            <circle className="bender-smoke bender-smoke-3" cx="172" cy="88" r="5" fill="#c3ccd6" />
          </g>
        )}
      </g>
    </svg>
  )
}
