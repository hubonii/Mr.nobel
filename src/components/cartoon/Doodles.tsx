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
