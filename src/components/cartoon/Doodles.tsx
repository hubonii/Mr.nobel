'use client';

import React from 'react';

// 🌟 Retro Sparkle Star Doodle
export function RetroStar({ className = '', style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg 
      className={`animate-pulse duration-1000 ${className}`} 
      style={style} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      width="48" 
      height="48"
    >
      <path 
        stroke="#1E1E1E" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" 
      />
    </svg>
  );
}

// ✿ Happy Flower Doodle
export function HappyFlower({ className = '', style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg 
      className={`animate-bounce duration-3000 ${className}`} 
      style={style} 
      viewBox="0 0 100 100" 
      width="80" 
      height="80"
    >
      {/* Flower Petals */}
      <g stroke="#1E1E1E" strokeWidth="4" fill="#FF8DA1">
        <circle cx="50" cy="20" r="18" />
        <circle cx="80" cy="50" r="18" />
        <circle cx="50" cy="80" r="18" />
        <circle cx="20" cy="50" r="18" />
        <circle cx="28" cy="28" r="18" fill="#38BDF8" />
        <circle cx="72" cy="28" r="18" fill="#38BDF8" />
        <circle cx="72" cy="72" r="18" fill="#FFC72C" />
        <circle cx="28" cy="72" r="18" fill="#FFC72C" />
      </g>
      {/* Center Core */}
      <circle cx="50" cy="50" r="22" fill="#FDFBF7" stroke="#1E1E1E" strokeWidth="4" />
      {/* Smiley Face */}
      <g stroke="#1E1E1E" strokeWidth="3" fill="none" strokeLinecap="round">
        {/* Eyes */}
        <circle cx="43" cy="45" r="3" fill="#1E1E1E" />
        <circle cx="57" cy="45" r="3" fill="#1E1E1E" />
        {/* Smile */}
        <path d="M42 55 Q50 62 58 55" />
      </g>
    </svg>
  );
}

// 💬 Neo-Brutalist Speech Bubble Component
export function SpeechBubble({ 
  children, 
  arrowPos = 'right', 
  color = '#FFC72C',
  className = '' 
}: { 
  children: React.ReactNode; 
  arrowPos?: 'left' | 'right' | 'bottom'; 
  color?: string;
  className?: string;
}) {
  return (
    <div className={`relative inline-block ${className}`}>
      <div 
        className="px-6 py-4 rounded-2xl text-right font-bold text-lg"
        style={{
          backgroundColor: color,
          border: '4px solid #1E1E1E',
          boxShadow: '6px 6px 0px #1E1E1E',
          color: '#1E1E1E'
        }}
      >
        {children}
      </div>
      {/* Bubble Arrow */}
      {arrowPos === 'right' && (
        <div 
          className="absolute w-6 h-6 rotate-45"
          style={{
            backgroundColor: color,
            borderRight: '4px solid #1E1E1E',
            borderBottom: '4px solid #1E1E1E',
            top: '50%',
            right: '-12px',
            transform: 'translateY(-50%) rotate(-45deg)',
            zIndex: 0
          }}
        />
      )}
      {arrowPos === 'left' && (
        <div 
          className="absolute w-6 h-6 rotate-45"
          style={{
            backgroundColor: color,
            borderLeft: '4px solid #1E1E1E',
            borderTop: '4px solid #1E1E1E',
            top: '50%',
            left: '-12px',
            transform: 'translateY(-50%) rotate(-45deg)',
            zIndex: 0
          }}
        />
      )}
      {arrowPos === 'bottom' && (
        <div 
          className="absolute w-6 h-6 rotate-45"
          style={{
            backgroundColor: color,
            borderRight: '4px solid #1E1E1E',
            borderBottom: '4px solid #1E1E1E',
            bottom: '-12px',
            right: '25%',
            transform: 'rotate(45deg)',
            zIndex: 0
          }}
        />
      )}
    </div>
  );
}

// ☇ Retro Lightning Accent Doodle
export function CartoonLightning({ className = '', style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg 
      className={`animate-bounce duration-2000 ${className}`} 
      style={style} 
      viewBox="0 0 24 24" 
      fill="#FFC72C" 
      stroke="#1E1E1E" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      width="40" 
      height="40"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

// 🍌 Happy Nano Banana Doodle
export function NanoBanana({ className = '', style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg 
      className={`animate-bounce ${className}`} 
      style={{ animationDuration: '3.5s', ...style }} 
      viewBox="0 0 120 120" 
      width="100" 
      height="100"
    >
      <g stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {/* Rubber hose legs */}
        <path d="M50 85 Q40 100 45 106" />
        <path d="M70 85 Q80 100 75 106" />
        {/* Cute small shoes (Orange) */}
        <path d="M38 106 C38 102, 50 102, 50 108 Z" fill="#FF6B00" stroke="#1E1E1E" strokeWidth="3" />
        <path d="M70 106 C70 102, 82 102, 82 108 Z" fill="#FF6B00" stroke="#1E1E1E" strokeWidth="3" />

        {/* Rubber hose arms */}
        {/* Left arm waving */}
        <path d="M32 58 Q15 48 20 36" />
        {/* Right arm on hip */}
        <path d="M88 58 Q100 66 94 76" />

        {/* Banana Body */}
        {/* Main curved yellow shape */}
        <path 
          d="M30 40 
             C35 25, 45 20, 50 15 
             C52 13, 56 13, 58 17 
             C56 25, 48 35, 44 48
             C38 65, 48 80, 72 82
             C82 83, 88 80, 94 72
             C90 85, 78 92, 60 90
             C40 88, 28 72, 30 40 Z" 
          fill="#FFC72C" 
          stroke="#1E1E1E" 
          strokeWidth="4.5" 
        />
        
        {/* Top Stem (Brown) */}
        <path d="M50 15 C52 13, 56 13, 58 17 L56 12 C54 10, 50 11, 48 13 Z" fill="#78350F" stroke="#1E1E1E" strokeWidth="3" />

        {/* Bottom Tip (Brown) */}
        <circle cx="94" cy="72" r="3.5" fill="#78350F" stroke="none" />

        {/* Cute Face */}
        {/* Eyes (Happy closed eyes) */}
        <path d="M38 48 Q42 44 46 48" strokeWidth="3" />
        <path d="M54 50 Q58 46 62 50" strokeWidth="3" />
        {/* Blush Cheeks (Pink) */}
        <circle cx="34" cy="54" r="3" fill="#FF8DA1" stroke="none" />
        <circle cx="66" cy="56" r="3" fill="#FF8DA1" stroke="none" />
        {/* Open happy mouth */}
        <path d="M44 56 Q48 64 52 56" fill="#FF0D39" stroke="#1E1E1E" strokeWidth="2.5" />
      </g>
    </svg>
  );
}
