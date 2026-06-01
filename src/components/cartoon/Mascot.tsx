'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Types of mascots corresponding to formats
export type MascotPose = 'logo-badge' | 'brain-facts' | 'tv-street' | 'bulb-tips' | 'campfire-story';

interface MascotProps {
  pose: MascotPose;
  className?: string;
  style?: React.CSSProperties;
}

export default function Mascot({ pose, className = '', style = {} }: MascotProps) {
  // Animation settings for rubber-hose bounce
  const bounceTransition = {
    y: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: 'reverse' as const,
      ease: 'easeOut' as any,
    },
    rotate: {
      duration: 1.2,
      repeat: Infinity,
      repeatType: 'reverse' as const,
      ease: 'easeInOut' as any,
    }
  };

  switch (pose) {
    // ════════════ 1. LOGO BADGE (Cartoon Network styled logo wrapper) ════════════
    case 'logo-badge':
      return (
        <div 
          className={`relative flex items-center justify-center ${className}`} 
          style={style}
        >
          {/* Backing Solid Shadow */}
          <div 
            className="absolute rounded-full w-[170px] h-[170px] bg-[#1E1E1E]"
            style={{ transform: 'translate(10px, 10px)' }}
          />
          {/* Main Round Badge */}
          <div 
            className="relative rounded-full w-[170px] h-[170px] bg-[#FFC72C] flex items-center justify-center overflow-hidden"
            style={{ border: '5px solid #1E1E1E' }}
          >
            {/* Inner Spiral Pattern */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.45)_10%,transparent_11%)] bg-[length:14px_14px]" />
            
            {/* The Generated Premium Cartoon Network Logo Image (Transparent Background) */}
            <img 
              src="/images/logo-cartoon.png" 
              alt="Mr Nobel Logo" 
              className="relative w-[130px] h-[130px] rounded-full object-cover scale-[1.08]"
              style={{ 
                filter: 'drop-shadow(3px 3px 0px rgba(30,30,30,0.85))',
              }}
            />
          </div>
          
          {/* Floating Stars around it */}
          <motion.div 
            className="absolute -top-4 -right-4 text-[#FF6B00]"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path stroke="#1E1E1E" strokeWidth="2" d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" />
            </svg>
          </motion.div>

          <motion.div 
            className="absolute -bottom-4 -left-4 text-[#38BDF8]"
            animate={{ scale: [1.2, 1, 1.2], rotate: [15, 0, 15] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path stroke="#1E1E1E" strokeWidth="2" d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" />
            </svg>
          </motion.div>
        </div>
      );

    // ════════════ 2. THE HAPPY BRAIN MASCOT (Facts) ════════════
    case 'brain-facts':
      return (
        <motion.div 
          className={`relative ${className}`}
          style={style}
          animate={{ y: [-6, 6], rotate: [-2, 2] }}
          transition={bounceTransition}
        >
          <svg viewBox="0 0 160 160" width="160" height="160">
            {/* Rubber hose legs */}
            <g stroke="#1E1E1E" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round">
              {/* Left leg */}
              <path d="M65 110 Q55 125 60 135" />
              {/* Right leg */}
              <path d="M95 110 Q105 125 100 135" />
              {/* Left shoe (yellow boot) */}
              <path d="M48 135 C48 130, 62 130, 62 138 Z" fill="#FFC72C" stroke="#1E1E1E" strokeWidth="4" />
              {/* Right shoe (yellow boot) */}
              <path d="M98 135 C98 130, 112 130, 112 138 Z" fill="#FFC72C" stroke="#1E1E1E" strokeWidth="4" />
            </g>

            {/* Brain body */}
            <g stroke="#1E1E1E" strokeWidth="5" fill="#FF8DA1">
              {/* Left hemisphere lobes */}
              <circle cx="50" cy="70" r="22" />
              <circle cx="60" cy="50" r="20" />
              <circle cx="80" cy="45" r="18" fill="#FF8DA1" />
              {/* Right hemisphere lobes */}
              <circle cx="110" cy="70" r="22" />
              <circle cx="100" cy="50" r="20" />
              {/* Fill background connection */}
              <rect x="50" y="50" width="60" height="45" stroke="none" />
              <circle cx="80" cy="85" r="22" />
            </g>

            {/* Smart Glasses */}
            <g stroke="#1E1E1E" strokeWidth="4" fill="#38BDF8">
              {/* Left lens */}
              <circle cx="62" cy="68" r="14" />
              {/* Right lens */}
              <circle cx="98" cy="68" r="14" />
              {/* Bridge */}
              <path d="M76 68 L84 68" fill="none" strokeWidth="4" />
              {/* Temple pieces */}
              <path d="M48 68 Q40 65 38 72" fill="none" />
              <path d="M112 68 Q120 65 122 72" fill="none" />
            </g>

            {/* Smiley face (below glasses) */}
            <g stroke="#1E1E1E" strokeWidth="3" fill="none" strokeLinecap="round">
              <path d="M72 88 Q80 96 88 88" />
              {/* Cheeks */}
              <path d="M64 88 C64 86, 68 86, 68 88" stroke="#FF6B00" strokeWidth="2" />
              <path d="M92 88 C92 86, 96 86, 96 88" stroke="#FF6B00" strokeWidth="2" />
            </g>

            {/* Magnifying Glass (held by rubber hose arm) */}
            <g stroke="#1E1E1E" strokeWidth="4" fill="none" strokeLinecap="round">
              {/* Left Arm holding magnifier */}
              <path d="M42 85 Q22 90 28 105" />
              {/* Right Arm waving */}
              <path d="M118 85 Q135 75 142 88" />
              
              {/* Magnifier handle */}
              <path d="M28 105 L20 120" strokeWidth="6" />
              {/* Magnifier rim */}
              <circle cx="34" cy="98" r="10" fill="#FDFBF7" strokeWidth="4" />
            </g>
          </svg>
        </motion.div>
      );

    // ════════════ 3. RETRO TV INTERVIEWER MASCOT (Street Q&A) ════════════
    case 'tv-street':
      return (
        <motion.div 
          className={`relative ${className}`}
          style={style}
          animate={{ y: [6, -6], rotate: [2, -2] }}
          transition={bounceTransition}
        >
          <svg viewBox="0 0 160 160" width="160" height="160">
            {/* Antennas */}
            <path d="M65 40 L50 20" stroke="#1E1E1E" strokeWidth="5" strokeLinecap="round" />
            <path d="M95 40 L110 20" stroke="#1E1E1E" strokeWidth="5" strokeLinecap="round" />
            <circle cx="50" cy="20" r="5" fill="#FF6B00" stroke="#1E1E1E" strokeWidth="2" />
            <circle cx="110" cy="20" r="5" fill="#38BDF8" stroke="#1E1E1E" strokeWidth="2" />

            {/* Rubber hose legs */}
            <g stroke="#1E1E1E" strokeWidth="5" fill="none" strokeLinecap="round">
              <path d="M60 110 L60 135" />
              <path d="M100 110 L100 135" />
              {/* Boots (Red) */}
              <path d="M48 135 C48 128, 65 128, 65 140 Z" fill="#FF0D39" stroke="#1E1E1E" strokeWidth="4" />
              <path d="M88 135 C88 128, 105 128, 105 140 Z" fill="#FF0D39" stroke="#1E1E1E" strokeWidth="4" />
            </g>

            {/* TV Main Cabinet Box */}
            <rect 
              x="35" 
              y="40" 
              width="90" 
              height="70" 
              rx="14" 
              fill="#FFC72C" 
              stroke="#1E1E1E" 
              strokeWidth="5" 
            />

            {/* TV Screen */}
            <rect 
              x="45" 
              y="48" 
              width="56" 
              height="52" 
              rx="8" 
              fill="#FDFBF7" 
              stroke="#1E1E1E" 
              strokeWidth="4" 
            />

            {/* TV Dials */}
            <circle cx="112" cy="55" r="4" fill="#1E1E1E" />
            <circle cx="112" cy="70" r="4" fill="#1E1E1E" />
            <line x1="108" y1="85" x2="116" y2="85" stroke="#1E1E1E" strokeWidth="3" />

            {/* Happy Screen Face */}
            <g stroke="#1E1E1E" strokeWidth="3" fill="none" strokeLinecap="round">
              {/* Happy Wink Eyes */}
              <path d="M52 68 Q58 64 60 70" strokeWidth="4" />
              <path d="M76 68 Q82 64 84 70" strokeWidth="4" />
              {/* Smile */}
              <path d="M58 84 Q68 92 78 84" />
            </g>

            {/* Waving Hands and Microphone */}
            <g stroke="#1E1E1E" strokeWidth="5" fill="none" strokeLinecap="round">
              {/* Left hand waving */}
              <path d="M35 75 Q15 65 20 50" />
              {/* Right hand holding microphone */}
              <path d="M125 75 Q145 80 135 100" />
              {/* Mic handle */}
              <path d="M135 100 L142 118" stroke="#1E1E1E" strokeWidth="6" />
              {/* Mic foam mesh (Red) */}
              <circle cx="132" cy="98" r="8" fill="#FF0D39" stroke="#1E1E1E" strokeWidth="3" />
            </g>
          </svg>
        </motion.div>
      );

    // ════════════ 4. THE HAPPY EDISON LIGHTBULB (Tips & Tricks) ════════════
    case 'bulb-tips':
      return (
        <motion.div 
          className={`relative ${className}`}
          style={style}
          animate={{ y: [-5, 5], rotate: [1, -1] }}
          transition={bounceTransition}
        >
          <svg viewBox="0 0 160 160" width="160" height="160">
            {/* Glow rays background */}
            <g stroke="#FFC72C" strokeWidth="4" strokeLinecap="round" opacity="0.6">
              <line x1="80" y1="12" x2="80" y2="28" />
              <line x1="30" y1="35" x2="44" y2="45" />
              <line x1="130" y1="35" x2="116" y2="45" />
              <line x1="15" y1="75" x2="30" y2="75" />
              <line x1="145" y1="75" x2="130" y2="75" />
            </g>

            {/* Rubber hose legs */}
            <g stroke="#1E1E1E" strokeWidth="5" fill="none" strokeLinecap="round">
              <path d="M70 120 Q60 135 65 142" />
              <path d="M90 120 Q100 135 95 142" />
              {/* Shoes (Cyan) */}
              <path d="M52 142 C52 136, 68 136, 68 145 Z" fill="#38BDF8" stroke="#1E1E1E" strokeWidth="4" />
              <path d="M88 142 C88 136, 104 136, 104 145 Z" fill="#38BDF8" stroke="#1E1E1E" strokeWidth="4" />
            </g>

            {/* Metal Thread Base */}
            <rect x="62" y="102" width="36" height="18" rx="4" fill="#9CA3AF" stroke="#1E1E1E" strokeWidth="4" />
            <line x1="62" y1="108" x2="98" y2="108" stroke="#1E1E1E" strokeWidth="4" />
            <line x1="62" y1="114" x2="98" y2="114" stroke="#1E1E1E" strokeWidth="4" />

            {/* Bulb Glass Body */}
            <path 
              d="M80 32 
                 C52 32, 44 65, 48 85 
                 C50 95, 62 102, 62 102
                 L98 102
                 C98 102, 110 95, 112 85
                 C116 65, 108 32, 80 32 Z" 
              fill="#FFC72C" 
              stroke="#1E1E1E" 
              strokeWidth="5" 
            />

            {/* Inside filament (smiley shape!) */}
            <path d="M68 62 Q80 50 92 62" fill="none" stroke="#FF6B00" strokeWidth="4" strokeLinecap="round" />
            <line x1="68" y1="62" x2="68" y2="82" stroke="#1E1E1E" strokeWidth="3" />
            <line x1="92" y1="62" x2="92" y2="82" stroke="#1E1E1E" strokeWidth="3" />

            {/* Cute Face */}
            <g stroke="#1E1E1E" strokeWidth="3" fill="none" strokeLinecap="round">
              <circle cx="68" cy="74" r="3.5" fill="#1E1E1E" />
              <circle cx="92" cy="74" r="3.5" fill="#1E1E1E" />
              <path d="M74 84 Q80 89 86 84" strokeWidth="3" />
            </g>

            {/* Happy Waving Arms */}
            <g stroke="#1E1E1E" strokeWidth="5" fill="none" strokeLinecap="round">
              {/* Left hand in air */}
              <path d="M46 75 Q28 65 30 48" />
              {/* Right hand pointing to head */}
              <path d="M114 75 Q132 65 130 48" />
            </g>
          </svg>
        </motion.div>
      );

    // ════════════ 5. HAPPY DANCING FLAME MASCOT (Storytelling) ════════════
    case 'campfire-story':
      return (
        <motion.div 
          className={`relative ${className}`}
          style={style}
          animate={{ y: [4, -4], scaleY: [0.95, 1.05] }}
          transition={{
            y: bounceTransition.y,
            scaleY: {
              duration: 0.3,
              repeat: Infinity,
              repeatType: 'reverse' as const,
              ease: 'easeInOut'
            }
          }}
        >
          <svg viewBox="0 0 160 160" width="160" height="160">
            {/* Logs */}
            <g stroke="#1E1E1E" strokeWidth="5" strokeLinecap="round">
              <line x1="45" y1="130" x2="115" y2="115" stroke="#78350F" />
              <line x1="115" y1="130" x2="45" y2="115" stroke="#78350F" />
            </g>

            {/* Outer Flame (Orange) */}
            <path 
              d="M80 20 
                 Q95 45 110 65 
                 Q125 90 115 110 
                 Q80 125 45 110 
                 Q35 90 50 65 
                 Q65 45 80 20 Z" 
              fill="#FF6B00" 
              stroke="#1E1E1E" 
              strokeWidth="5" 
              strokeLinejoin="round"
            />

            {/* Inner Flame (Yellow) */}
            <path 
              d="M80 45 
                 Q90 62 100 78 
                 Q110 95 100 108 
                 Q80 118 60 108 
                 Q50 95 60 78 
                 Q70 62 80 45 Z" 
              fill="#FFC72C" 
              stroke="#1E1E1E" 
              strokeWidth="4" 
              strokeLinejoin="round"
            />

            {/* Core Fire Face */}
            <g stroke="#1E1E1E" strokeWidth="3" fill="none" strokeLinecap="round">
              {/* Happy closed eyes ^ ^ */}
              <path d="M68 80 L74 74 L80 80" strokeWidth="4" />
              <path d="M88 80 L94 74 L100 80" strokeWidth="4" />
              {/* Singing open mouth */}
              <circle cx="84" cy="94" r="6" fill="#1E1E1E" />
            </g>

            {/* Little floating sparks (Red/Yellow circles) */}
            <circle cx="50" cy="35" r="4" fill="#FF0D39" stroke="#1E1E1E" strokeWidth="1.5" />
            <circle cx="115" cy="40" r="5" fill="#FFC72C" stroke="#1E1E1E" strokeWidth="1.5" />
            <circle cx="85" cy="10" r="3" fill="#FF6B00" stroke="#1E1E1E" strokeWidth="1.5" />

            {/* Dancing arms */}
            <g stroke="#1E1E1E" strokeWidth="5" fill="none" strokeLinecap="round">
              <path d="M48 90 Q30 92 35 78" />
              <path d="M120 90 Q138 92 133 78" />
            </g>
          </svg>
        </motion.div>
      );
  }
}
