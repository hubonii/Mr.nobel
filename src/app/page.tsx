'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Flame, 
  MessageSquare, 
  Lightbulb, 
  BookOpen, 
  Award, 
  Compass, 
  Users, 
  TrendingUp, 
  Sparkles,
  Volume2,
  Tv
} from 'lucide-react';
import Mascot from '@/components/cartoon/Mascot';
import { RetroStar, HappyFlower, CartoonLightning, SpeechBubble } from '@/components/cartoon/Doodles';

const TOTAL_SLIDES = 20;

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slidesRef = useRef<(HTMLElement | null)[]>([]);

  // IntersectionObserver to sync scroll snap with activeSlide state
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.5, // Slide is considered active when 50% visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-slide') || '0');
          setActiveSlide(index);
        }
      });
    }, observerOptions);

    slidesRef.current.forEach((slide) => {
      if (slide) observer.observe(slide);
    });

    return () => {
      slidesRef.current.forEach((slide) => {
        if (slide) observer.unobserve(slide);
      });
    };
  }, []);

  // Keyboard navigation snap triggers
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        goToSlide(activeSlide + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        goToSlide(activeSlide - 1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(TOTAL_SLIDES - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSlide]);

  const goToSlide = (index: number) => {
    if (index < 0 || index >= TOTAL_SLIDES) return;
    slidesRef.current[index]?.scrollIntoView({ behavior: 'smooth' });
    setActiveSlide(index);
  };

  // Motion variants for springy cartoon text reveals
  const revealVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 40 },
    visible: (customDelay: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring' as any,
        stiffness: 100,
        damping: 12,
        delay: customDelay,
      }
    })
  };

  return (
    <>
      {/* Progress Bar */}
      <div 
        id="progress-bar" 
        style={{ width: `${((activeSlide + 1) / TOTAL_SLIDES) * 100}%` }}
      />

      {/* Vertical Navigation Dots */}
      <nav id="nav-dots">
        {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
          <button
            key={i}
            className={`dot ${activeSlide === i ? 'active' : ''}`}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            title={`Slide ${i + 1}`}
          />
        ))}
      </nav>

      {/* Slide Counter */}
      <div id="slide-counter">
        <span>{String(activeSlide + 1).padStart(2, '0')}</span> / {TOTAL_SLIDES}
      </div>

      {/* Main Snap Slides Container */}
      <main className="relative z-10 w-full min-h-screen">
        
        {/* ════════════ SLIDE 1 — CINEMATIC COVER ════════════ */}
        <section 
          className="slide" 
          data-slide={0} 
          ref={el => { slidesRef.current[0] = el; }}
        >
          {/* Whimsical Retro Doodles */}
          <RetroStar className="absolute top-[12%] left-[15%] text-[#FFC72C] w-12 h-12" />
          <RetroStar className="absolute bottom-[20%] right-[10%] text-[#FF8DA1] w-10 h-10" />
          <HappyFlower className="absolute bottom-[10%] left-[8%] text-[#38BDF8]" />

          <div className="slide-inner">
            <div className="split" dir="rtl">
              <div className="flex flex-col gap-4 text-right justify-center">
                <motion.div
                  className="label label-orange self-start"
                  custom={0.1}
                  initial="hidden"
                  animate={activeSlide === 0 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  برنامج الهوية وصناعة المحتوى · 2026
                </motion.div>
                <motion.h1 
                  className="hero-text tracking-tight font-black mt-2"
                  custom={0.25}
                  initial="hidden"
                  animate={activeSlide === 0 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  Mr Nobel
                </motion.h1>
                <motion.p 
                  className="hero-text hero-text-dark font-extrabold mt-1"
                  custom={0.4}
                  initial="hidden"
                  animate={activeSlide === 0 ? "visible" : "hidden"}
                  variants={revealVariants}
                  style={{ fontFamily: 'var(--font-cairo)' }}
                >
                  هالي هالو
                </motion.p>
                <motion.div 
                  className="accent-line mt-2"
                  custom={0.5}
                  initial="hidden"
                  animate={activeSlide === 0 ? "visible" : "hidden"}
                  variants={revealVariants}
                />
                <motion.p 
                  className="body-text mt-4"
                  custom={0.6}
                  initial="hidden"
                  animate={activeSlide === 0 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  عرض تقديمي كرتوني تفاعلي ومرح بأسلوب ريترو مبتكر، يُبرز برنامج الهوية وصناعة المحتوى الفريد لصانع المحتوى Mr Nobel.
                </motion.p>
              </div>

              {/* Raw Logo Image with No Background or Frame */}
              <div className="flex items-center justify-center relative">
                <motion.div
                  initial={{ scale: 0.6, rotate: -20, opacity: 0 }}
                  animate={activeSlide === 0 ? { scale: 1, rotate: 0, opacity: 1 } : { scale: 0.6, rotate: -20, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 10, delay: 0.3 }}
                >
                  <img 
                    src="/images/logo.png" 
                    alt="Mr Nobel Logo" 
                    className="w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[440px] md:h-[440px] object-contain rounded-2xl select-none pointer-events-none"
                    style={{
                      filter: 'drop-shadow(0px 8px 24px rgba(0,0,0,0.2))'
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ SLIDE 2 — THE HOOK ════════════ */}
        <section 
          className="slide" 
          data-slide={1} 
          ref={el => { slidesRef.current[1] = el; }}
          style={{ backgroundColor: 'var(--pink)' }}
        >
          <span className="bg-number" style={{ color: 'white', opacity: 0.15 }}>?</span>
          <div className="slide-inner text-center flex flex-col items-center justify-center gap-6">
            <motion.div
              custom={0.1}
              initial="hidden"
              animate={activeSlide === 1 ? "visible" : "hidden"}
              variants={revealVariants}
            >
              <SpeechBubble color="#FFFFFF" arrowPos="bottom">
                🧠 ماذا لو كان للفضول وجهٌ حقيقي؟
              </SpeechBubble>
            </motion.div>

            <motion.h2 
              className="hero-text tracking-tight font-black mt-4"
              custom={0.3}
              initial="hidden"
              animate={activeSlide === 1 ? "visible" : "hidden"}
              variants={revealVariants}
              style={{ color: '#1E1E1E', textShadow: '4px 4px 0px #FFFFFF' }}
            >
              سيكون هذا هو شكله.
            </motion.h2>

            <motion.div 
              className="accent-line"
              custom={0.5}
              initial="hidden"
              animate={activeSlide === 1 ? "visible" : "hidden"}
              variants={revealVariants}
              style={{ backgroundColor: '#FFFFFF' }}
            />
          </div>
        </section>

        {/* ════════════ SLIDE 3 — WHO IS MR NOBEL ════════════ */}
        <section 
          className="slide" 
          data-slide={2} 
          ref={el => { slidesRef.current[2] = el; }}
        >
          <div className="slide-inner" dir="rtl">
            <span className="bg-number">MN</span>
            <div className="split">
              <div className="flex flex-col gap-4 text-right max-w-[700px] justify-center">
                <motion.div 
                  className="label label-pink self-start"
                  custom={0.1}
                  initial="hidden"
                  animate={activeSlide === 2 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  من هو مستر نوبل؟
                </motion.div>
                <motion.h2 
                  className="big-text font-black"
                  custom={0.2}
                  initial="hidden"
                  animate={activeSlide === 2 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  العقل الفضولي الذي لا يمكنك التوقف عن متابعته.
                </motion.h2>
                <motion.p 
                  className="body-text mt-2"
                  custom={0.3}
                  initial="hidden"
                  animate={activeSlide === 2 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  مستر نوبل هو صانع محتوى رقمي فريد، يطوع الفضول اليومي في قالب ترفيهي مبهر ومدروس. من الحقائق التي تخطف الأنفاس إلى لقاءات الشارع التفاعلية العفوية، يجعل التعلم والبحث تجربة مشوقة تشبه مشاهدة مسلسلك المفضل تماماً.
                </motion.p>
                <motion.hr 
                  className="thin-rule w-[300px]" 
                  custom={0.4}
                  initial="hidden"
                  animate={activeSlide === 2 ? "visible" : "hidden"}
                  variants={revealVariants}
                />
                
                {/* Social media links in neo-brutalist buttons */}
                <motion.div 
                  className="flex gap-4 items-center flex-wrap"
                  custom={0.5}
                  initial="hidden"
                  animate={activeSlide === 2 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  <a 
                    href="https://www.youtube.com/@Mr.nobell" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="neo-btn"
                    style={{ backgroundColor: '#FF0000' }}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    <span>يوتيوب</span>
                  </a>
                  <a 
                    href="https://www.instagram.com/mr.nobell/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="neo-btn"
                    style={{ backgroundColor: '#E1306C' }}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                    </svg>
                    <span>انستغرام</span>
                  </a>
                  <a 
                    href="https://www.tiktok.com/@mr.nobell" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="neo-btn"
                    style={{ backgroundColor: '#1E1E1E' }}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M19.3 5.8A4.5 4.5 0 0 1 16.5 2h-3.3v13.5a2.7 2.7 0 1 1-1.9-2.6V9.5a6.1 6.1 0 1 0 5.2 6V9.2a7.7 7.7 0 0 0 4.5 1.4V7.3a4.5 4.5 0 0 1-1.7-1.5z" />
                    </svg>
                    <span>تيك توك</span>
                  </a>
                  <a 
                    href="https://www.facebook.com/Mr.Nobell/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="neo-btn"
                    style={{ backgroundColor: '#1877F2' }}
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3v-2.7c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.3l-.5 3.5h-2.8v8.4A12 12 0 0 0 24 12z" />
                    </svg>
                    <span>فيسبوك</span>
                  </a>
                </motion.div>
              </div>

              {/* Walking TV mascot representer */}
              <div className="flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.7, rotate: 15 }}
                  animate={activeSlide === 2 ? { scale: 1, rotate: 0 } : { scale: 0.7, rotate: 15 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 10 }}
                >
                  <Mascot pose="tv-street" className="w-[200px] h-[200px]" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ SLIDE 4 — THE VISION ════════════ */}
        <section 
          className="slide" 
          data-slide={3} 
          ref={el => { slidesRef.current[3] = el; }}
        >
          <RetroStar className="absolute top-[15%] right-[15%] text-[#FFC72C]" />
          <CartoonLightning className="absolute bottom-[20%] left-[12%]" />
          <div className="slide-inner text-center flex flex-col items-center justify-center gap-2">
            <motion.p 
              className="label"
              custom={0.1}
              initial="hidden"
              animate={activeSlide === 3 ? "visible" : "hidden"}
              variants={revealVariants}
            >
              الرؤية
            </motion.p>
            <motion.div 
              className="accent-line w-[80px] my-6"
              custom={0.2}
              initial="hidden"
              animate={activeSlide === 3 ? "visible" : "hidden"}
              variants={revealVariants}
            />
            <motion.h2 
              className="hero-text hero-text-dark font-black max-w-[850px] leading-tight"
              custom={0.3}
              initial="hidden"
              animate={activeSlide === 3 ? "visible" : "hidden"}
              variants={revealVariants}
              style={{ fontFamily: 'var(--font-cairo)', textShadow: '4px 4px 0px var(--yellow)' }}
            >
              &ldquo;تحويل الفضول اليومي<br />إلى متعة ترفيهية&rdquo;
            </motion.h2>
            <motion.div 
              className="accent-line w-[80px] my-6"
              custom={0.4}
              initial="hidden"
              animate={activeSlide === 3 ? "visible" : "hidden"}
              variants={revealVariants}
            />
            <motion.p 
              className="body-text text-center font-extrabold"
              custom={0.5}
              initial="hidden"
              animate={activeSlide === 3 ? "visible" : "hidden"}
              variants={revealVariants}
            >
              نحن نؤمن بأن أقوى أنواع المحتوى تبدأ دائماً بسؤال بسيط. مستر نوبل يلتقط الأشياء التي تجعل الناس يتساءلون ويبسطها في قوالب ترفيهية تعلق بالأذهان وتلامس العقول — عبر كل منصة وفي كل صيغة يقدمها لجمهوره.
            </motion.p>
          </div>
        </section>

        {/* ════════════ SLIDE 5 — BRAND DNA ════════════ */}
        <section 
          className="slide" 
          data-slide={4} 
          ref={el => { slidesRef.current[4] = el; }}
          style={{ backgroundColor: 'var(--blue)' }}
        >
          <div className="slide-inner" dir="rtl">
            <div className="flex flex-col gap-4 text-right mb-12">
              <motion.p 
                className="label label-orange self-start"
                custom={0.1}
                initial="hidden"
                animate={activeSlide === 4 ? "visible" : "hidden"}
                variants={revealVariants}
              >
                حمض الهوية البصرية (DNA)
              </motion.p>
              <motion.h2 
                className="big-text font-black text-white"
                custom={0.2}
                initial="hidden"
                animate={activeSlide === 4 ? "visible" : "hidden"}
                variants={revealVariants}
                style={{ textShadow: '4px 4px 0px var(--charcoal)' }}
              >
                ما الذي يعرّف مستر نوبل؟
              </motion.h2>
            </div>
            
            <div className="split">
              <motion.div 
                className="neo-card text-right"
                custom={0.3}
                initial="hidden"
                animate={activeSlide === 4 ? "visible" : "hidden"}
                variants={revealVariants}
              >
                <h3 className="font-black text-2xl mb-6 text-[#FF6B00]" style={{ fontFamily: 'var(--font-cairo)' }}>نحن... 🌟</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="pill">🧠 ذكي</span>
                  <span className="pill">😂 فكاهي</span>
                  <span className="pill">🎨 مبتكر</span>
                  <span className="pill">🔍 فضولي</span>
                  <span className="pill">⚡ مفعم بالطاقة</span>
                  <span className="pill">🦄 مختلف</span>
                  <span className="pill">🚀 عصري</span>
                </div>
              </motion.div>

              <motion.div 
                className="neo-card text-right"
                custom={0.4}
                initial="hidden"
                animate={activeSlide === 4 ? "visible" : "hidden"}
                variants={revealVariants}
              >
                <h3 className="font-black text-2xl mb-6 text-gray-400" style={{ fontFamily: 'var(--font-cairo)' }}>لسنا... ❌</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="pill pill-muted">أكاديمي</span>
                  <span className="pill pill-muted">رسمي</span>
                  <span className="pill pill-muted">ممل</span>
                  <span className="pill pill-muted">تقليدي</span>
                  <span className="pill pill-muted">شركات</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════════ SLIDE 6 — THE PERSONA ════════════ */}
        <section 
          className="slide" 
          data-slide={5} 
          ref={el => { slidesRef.current[5] = el; }}
        >
          <RetroStar className="absolute top-[10%] left-[8%] text-[#FF8DA1]" />
          <HappyFlower className="absolute bottom-[8%] right-[10%]" />
          <div className="slide-inner" dir="rtl">
            <span className="bg-number" style={{ left: 'auto', right: '5%' }}>☉</span>
            <div className="split-wide">
              <div className="flex flex-col gap-4 text-right max-w-[800px] justify-center">
                <motion.p 
                  className="label label-green self-start"
                  custom={0.1}
                  initial="hidden"
                  animate={activeSlide === 5 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  الشخصية
                </motion.p>
                <motion.h2 
                  className="big-text font-black leading-tight"
                  custom={0.2}
                  initial="hidden"
                  animate={activeSlide === 5 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  ليس معلماً. ليس رجل أعمال.
                </motion.h2>
                <motion.p 
                  className="mid-text text-[#FF6B00] font-black"
                  custom={0.3}
                  initial="hidden"
                  animate={activeSlide === 5 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  الشخص الأكثر إثارة للاهتمام في الغرفة.
                </motion.p>
                <motion.p 
                  className="body-text mt-4"
                  custom={0.4}
                  initial="hidden"
                  animate={activeSlide === 5 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  مستر نوبل هو الصديق الذي يملك دائماً قصة غريبة، أو معلومة صادمة، أو سؤالاً يمنعك من النوم. لا يلقي محاضرات — بل يجذبك إليه. طاقته مغناطيسية، فكاهته تلقائية، وفضوله معدٍ حقاً. يتحدث بلغة جيله الهجينة: مزيج سلس بين العربية والإنجليزية، الميمز، والصدق المطلق.
                </motion.p>
              </div>

              {/* Whimsical Retro tv mascot again to balanced layout */}
              <div className="flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.7, rotate: -15 }}
                  animate={activeSlide === 5 ? { scale: 1, rotate: 0 } : { scale: 0.7, rotate: -15 }}
                  transition={{ type: 'spring', stiffness: 100, damping: 12 }}
                >
                  <Mascot pose="tv-street" className="w-[180px] h-[180px]" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ SLIDE 7 — CONTENT UNIVERSE ════════════ */}
        <section 
          className="slide" 
          data-slide={6} 
          ref={el => { slidesRef.current[6] = el; }}
          style={{ backgroundColor: 'var(--yellow)' }}
        >
          <div className="slide-inner" dir="rtl">
            <div className="flex flex-col gap-4 text-right mb-6">
              <motion.p 
                className="label label-orange self-start"
                custom={0.1}
                initial="hidden"
                animate={activeSlide === 6 ? "visible" : "hidden"}
                variants={revealVariants}
              >
                عوالم المحتوى
              </motion.p>
              <motion.h2 
                className="big-text font-black"
                custom={0.2}
                initial="hidden"
                animate={activeSlide === 6 ? "visible" : "hidden"}
                variants={revealVariants}
                style={{ textShadow: '4px 4px 0px #FFFFFF' }}
              >
                صانع محتوى واحد. خمسة عوالم.
              </motion.h2>
            </div>

            {/* 5-column grid for desktop, responsive grid for tablets/mobiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4" style={{ direction: 'rtl' }}>
              
              {/* Card 1 */}
              <div className="format-card" style={{ minWidth: 'auto', maxWidth: 'none', padding: '20px 16px' }}>
                <div className="card-icon" style={{ width: '48px', height: '48px', marginBottom: '12px' }}><Award className="w-6 h-6 text-[#FF6B00]" /></div>
                <h4 className="font-black text-lg mb-1" style={{ fontFamily: 'var(--font-cairo)' }}>🏆 المقارنات</h4>
                <p className="text-gray-700 text-xs font-semibold leading-normal">تصنيفات مميزة تثير النقاشات الحادة وتشعل أقسام التعليقات. من أفضل الرياضيين إلى أغرب الاختراعات.</p>
              </div>

              {/* Card 2 */}
              <div className="format-card" style={{ minWidth: 'auto', maxWidth: 'none', padding: '20px 16px' }}>
                <div className="card-icon" style={{ width: '48px', height: '48px', marginBottom: '12px' }}><Sparkles className="w-6 h-6 text-[#00F0FF]" /></div>
                <h4 className="font-black text-lg mb-1" style={{ fontFamily: 'var(--font-cairo)' }}>🧠 حقائق مذهلة</h4>
                <p className="text-gray-700 text-xs font-semibold leading-normal">حقائق تثير الدهشة تُقدم بمرئيات سينمائية وأسلوب مستر نوبل الخاص: &ldquo;لحظة، ماذا؟&rdquo;.</p>
              </div>

              {/* Card 3 */}
              <div className="format-card" style={{ minWidth: 'auto', maxWidth: 'none', padding: '20px 16px' }}>
                <div className="card-icon" style={{ width: '48px', height: '48px', marginBottom: '12px' }}><MessageSquare className="w-6 h-6 text-[#FF0D39]" /></div>
                <h4 className="font-black text-lg mb-1" style={{ fontFamily: 'var(--font-cairo)' }}>🎤 أسئلة الشارع</h4>
                <p className="text-gray-700 text-xs font-semibold leading-normal">ناس حقيقيون، إجابات حقيقية، ترفيه واقعي. محادثات عفوية تكشف كيف يفكر الناس فعلاً.</p>
              </div>

              {/* Card 4 */}
              <div className="format-card" style={{ minWidth: 'auto', maxWidth: 'none', padding: '20px 16px' }}>
                <div className="card-icon" style={{ width: '48px', height: '48px', marginBottom: '12px' }}><Lightbulb className="w-6 h-6 text-[#FFD700]" /></div>
                <h4 className="font-black text-lg mb-1" style={{ fontFamily: 'var(--font-cairo)' }}>💡 نصائح وخدع</h4>
                <p className="text-gray-700 text-xs font-semibold leading-normal">حيل حياتية ذكية وطرق مختصرة تُقدم بطاقة مستر نوبل وصفر ملل. عملية ومفاجئة للجميع.</p>
              </div>

              {/* Card 5 */}
              <div className="format-card" style={{ minWidth: 'auto', maxWidth: 'none', padding: '20px 16px' }}>
                <div className="card-icon" style={{ width: '48px', height: '48px', marginBottom: '12px' }}><BookOpen className="w-6 h-6 text-[#A855F7]" /></div>
                <h4 className="font-black text-lg mb-1" style={{ fontFamily: 'var(--font-cairo)' }}>📖 صناعة القصص</h4>
                <p className="text-gray-700 text-xs font-semibold leading-normal">سرد قصصي مشوق يمزج التاريخ والغموض والدراما الإنسانية في حلقات تجعلك تنسى الشاشة.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ SLIDE 8 — TOP TIERS 🏆 ════════════ */}
        <section 
          className="slide" 
          data-slide={7} 
          ref={el => { slidesRef.current[7] = el; }}
        >
          <div className="slide-inner" dir="rtl">
            <span className="bg-number">01</span>
            <div className="split">
              <div className="flex flex-col gap-4 text-right justify-center">
                <motion.p 
                  className="label label-orange self-start"
                  custom={0.1}
                  initial="hidden"
                  animate={activeSlide === 7 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  تفاصيل الصيغ (Formats)
                </motion.p>
                <motion.h2 
                  className="big-text font-black"
                  custom={0.2}
                  initial="hidden"
                  animate={activeSlide === 7 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  المقارنات والتصنيفات 🏆
                </motion.h2>
                <motion.p 
                  className="mid-text text-[#FF6B00] font-black"
                  custom={0.3}
                  initial="hidden"
                  animate={activeSlide === 7 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  تصنيفات تشعل الحوار والنقاش
                </motion.p>
                <motion.p 
                  className="body-text"
                  custom={0.4}
                  initial="hidden"
                  animate={activeSlide === 7 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  قوائم تصنيف منسقة تغطي كل شيء من أساطير الرياضة وأحدث التقنيات إلى سلاسل الطعام والشخصيات التاريخية. تم تصميم كل تصنيف ليكون مثيراً للجدل بما يكفي لدفع المشاركات والتعليقات مع الحفاظ على الذكاء والترفيه. تخيل طاقة نقاشات المقاهي بإنتاج احترافي متكامل.
                </motion.p>
                <motion.div 
                  className="flex gap-2 flex-wrap mt-4"
                  custom={0.5}
                  initial="hidden"
                  animate={activeSlide === 7 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  <span className="pill">نقاش وتفاعل</span>
                  <span className="pill">مشاركات عالية</span>
                  <span className="pill">استطلاعات الجمهور</span>
                </motion.div>
              </div>

              {/* Raw Logo Image with No Background or Frame */}
              <div className="flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.6, rotate: -20, opacity: 0 }}
                  animate={activeSlide === 7 ? { scale: 1, rotate: 0, opacity: 1 } : { scale: 0.6, rotate: -20, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 10, delay: 0.2 }}
                >
                  <img 
                    src="/images/logo.png" 
                    alt="Mr Nobel Logo" 
                    className="w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] md:w-[320px] md:h-[320px] object-contain rounded-2xl select-none pointer-events-none"
                    style={{
                      filter: 'drop-shadow(0px 8px 24px rgba(0,0,0,0.15))'
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ SLIDE 9 — FACTS 🧠 ════════════ */}
        <section 
          className="slide" 
          data-slide={8} 
          ref={el => { slidesRef.current[8] = el; }}
          style={{ backgroundColor: 'var(--pink)' }}
        >
          <div className="slide-inner" dir="rtl">
            <span className="bg-number" style={{ color: 'white', opacity: 0.15 }}>02</span>
            <div className="split">
              {/* Custom Walk Brain Mascot */}
              <div className="flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.6, rotate: 20 }}
                  animate={activeSlide === 8 ? { scale: 1, rotate: 0 } : { scale: 0.6, rotate: 20 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 10 }}
                >
                  <Mascot pose="brain-facts" className="w-[200px] h-[200px]" />
                </motion.div>
              </div>

              <div className="flex flex-col gap-4 text-right justify-center">
                <motion.p 
                  className="label self-start"
                  custom={0.1}
                  initial="hidden"
                  animate={activeSlide === 8 ? "visible" : "hidden"}
                  variants={revealVariants}
                  style={{ backgroundColor: 'var(--yellow)' }}
                >
                  تفاصيل الصيغ (Formats)
                </motion.p>
                <motion.h2 
                  className="big-text font-black text-white"
                  custom={0.2}
                  initial="hidden"
                  animate={activeSlide === 8 ? "visible" : "hidden"}
                  variants={revealVariants}
                  style={{ textShadow: '4px 4px 0px var(--charcoal)' }}
                >
                  حقائق مذهلة 🧠
                </motion.h2>
                <motion.p 
                  className="mid-text text-[#1E1E1E] font-black"
                  custom={0.3}
                  initial="hidden"
                  animate={activeSlide === 8 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  حقائق تلامس العقل بشكل مختلف
                </motion.p>
                <motion.p 
                  className="body-text"
                  custom={0.4}
                  initial="hidden"
                  animate={activeSlide === 8 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  كل حقيقة يتم اختيارها بعناية لتجعل العقول تنبهر. تُقدم بمشاهد سينمائية، مونتاج سريع ومبهر، وأداء مستر نوبل الخاص — جزء كوميدي وجزء وثائقي، ترفيه خالص. تشمل المواضيع العلوم، التاريخ، علم النفس، الجغرافيا، والسلوك البشري.
                </motion.p>
                <motion.div 
                  className="flex gap-2 flex-wrap mt-4"
                  custom={0.5}
                  initial="hidden"
                  animate={activeSlide === 8 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  <span className="pill">مذهل للعقول</span>
                  <span className="pill">إنتاج سينمائي</span>
                  <span className="pill">إدمان مشاهدة</span>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ SLIDE 10 — STREET Q&A 🎤 ════════════ */}
        <section 
          className="slide" 
          data-slide={9} 
          ref={el => { slidesRef.current[9] = el; }}
        >
          <div className="slide-inner" dir="rtl">
            <span className="bg-number">03</span>
            <div className="split">
              <div className="flex flex-col gap-4 text-right justify-center">
                <motion.p 
                  className="label label-orange self-start"
                  custom={0.1}
                  initial="hidden"
                  animate={activeSlide === 9 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  تفاصيل الصيغ (Formats)
                </motion.p>
                <motion.h2 
                  className="big-text font-black"
                  custom={0.2}
                  initial="hidden"
                  animate={activeSlide === 9 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  أسئلة الشارع 🎤
                </motion.h2>
                <motion.p 
                  className="mid-text text-[#FF0D39] font-black"
                  custom={0.3}
                  initial="hidden"
                  animate={activeSlide === 9 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  ناس حقيقيون. إجابات حقيقية. ترفيه واقعي.
                </motion.p>
                <motion.p 
                  className="body-text"
                  custom={0.4}
                  initial="hidden"
                  animate={activeSlide === 9 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  محادثات غير مكتوبة وغير مفلترة مع المارة في الشارع. يسأل مستر نوبل الأسئلة التي يفكر فيها الجميع بصوت عالٍ — من "من هو أعظم لاعب كرة قدم في التاريخ؟" إلى "ما هو أكبر ندم في حياتك؟". الصدق والعفوية يلتقيان بالانتشار الفيروسي الفوري.
                </motion.p>
              </div>

              {/* TV reporter mascot */}
              <div className="flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.6, rotate: -20 }}
                  animate={activeSlide === 9 ? { scale: 1, rotate: 0 } : { scale: 0.6, rotate: -20 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 10 }}
                >
                  <Mascot pose="tv-street" className="w-[200px] h-[200px]" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ SLIDE 11 — TIPS & TRICKS 💡 ════════════ */}
        <section 
          className="slide" 
          data-slide={10} 
          ref={el => { slidesRef.current[10] = el; }}
          style={{ backgroundColor: 'var(--yellow)' }}
        >
          <div className="slide-inner" dir="rtl">
            <span className="bg-number" style={{ color: 'white', opacity: 0.2 }}>04</span>
            <div className="split">
              {/* Smiling Edison Bulb Mascot */}
              <div className="flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.6, rotate: 20 }}
                  animate={activeSlide === 10 ? { scale: 1, rotate: 0 } : { scale: 0.6, rotate: 20 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 10 }}
                >
                  <Mascot pose="bulb-tips" className="w-[200px] h-[200px]" />
                </motion.div>
              </div>

              <div className="flex flex-col gap-4 text-right justify-center">
                <motion.p 
                  className="label label-pink self-start"
                  custom={0.1}
                  initial="hidden"
                  animate={activeSlide === 10 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  تفاصيل الصيغ (Formats)
                </motion.p>
                <motion.h2 
                  className="big-text font-black text-[#1E1E1E]"
                  custom={0.2}
                  initial="hidden"
                  animate={activeSlide === 10 ? "visible" : "hidden"}
                  variants={revealVariants}
                  style={{ textShadow: '4px 4px 0px #FFFFFF' }}
                >
                  نصائح وخدع 💡
                </motion.h2>
                <motion.p 
                  className="mid-text text-[#FF6B00] font-black"
                  custom={0.3}
                  initial="hidden"
                  animate={activeSlide === 10 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  خدع ذكية، صفر ملل
                </motion.p>
                <motion.p 
                  className="body-text"
                  custom={0.4}
                  initial="hidden"
                  animate={activeSlide === 10 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  خدع حياتية، اختصارات إنتاجية، وحيل ذكية تُقدم بطاقة مستر نوبل المميزة. كل نصيحة هي نصيحة مجربة، بصرية، وقابلة للتطبيق فوراً. بدون حشو أو إطالة — محتوى مفيد حقاً يجعل المشاهد يشعر بأنه أكثر ذكاءً وقدرة.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ SLIDE 12 — STORYTELLING 📖 ════════════ */}
        <section 
          className="slide" 
          data-slide={11} 
          ref={el => { slidesRef.current[11] = el; }}
        >
          <div className="slide-inner" dir="rtl">
            <span className="bg-number">05</span>
            <div className="split">
              <div className="flex flex-col gap-4 text-right justify-center">
                <motion.p 
                  className="label label-green self-start"
                  custom={0.1}
                  initial="hidden"
                  animate={activeSlide === 11 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  تفاصيل الصيغ (Formats)
                </motion.p>
                <motion.h2 
                  className="big-text font-black"
                  custom={0.2}
                  initial="hidden"
                  animate={activeSlide === 11 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  صناعة القصص 📖
                </motion.h2>
                <motion.p 
                  className="mid-text text-[#FF0D39] font-black"
                  custom={0.3}
                  initial="hidden"
                  animate={activeSlide === 11 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  كل قصة تستحق جلسة حول النار
                </motion.p>
                <motion.p 
                  className="body-text"
                  custom={0.4}
                  initial="hidden"
                  animate={activeSlide === 11 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  سرد قصصي طويل يمزج التاريخ والغموض والدراما الإنسانية في تجارب مشاهدة غامرة. مستر نوبل لا يروي القصص فقط — بل يبني عوالم كاملة. وتيرة مشوقة، مرئيات غنية، وصوت دافئ وعميق يجعلك تنسى أنك تنظر إلى شاشة هاتف.
                </motion.p>
              </div>

              {/* Happy Dancing Fire Mascot */}
              <div className="flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.6, rotate: -15 }}
                  animate={activeSlide === 11 ? { scale: 1, rotate: 0 } : { scale: 0.6, rotate: -15 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 10 }}
                >
                  <Mascot pose="campfire-story" className="w-[200px] h-[200px]" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ SLIDE 13 — HALI HALLO هالي هالو ════════════ */}
        <section 
          className="slide" 
          data-slide={12} 
          ref={el => { slidesRef.current[12] = el; }}
          style={{ backgroundColor: 'var(--orange)' }}
        >
          <RetroStar className="absolute top-[12%] right-[15%] text-white" />
          <HappyFlower className="absolute bottom-[10%] left-[8%]" />
          <div className="slide-inner text-center flex flex-col items-center justify-center gap-6">
            <motion.p 
              className="label"
              custom={0.1}
              initial="hidden"
              animate={activeSlide === 12 ? "visible" : "hidden"}
              variants={revealVariants}
              style={{ backgroundColor: 'var(--yellow)', color: 'var(--charcoal)' }}
            >
              الكلمة الافتتاحية
            </motion.p>
            
            {/* Bounce character animation */}
            {/* Bounce word animation */}
            <div className="flex justify-center gap-8 my-6 select-none" dir="rtl">
              {['هالي', 'هالو!'].map((word, index) => (
                <motion.span
                  key={index}
                  className="font-black text-4xl sm:text-6xl md:text-9xl"
                  initial={{ y: 50, scale: 0.5, opacity: 0 }}
                  animate={activeSlide === 12 ? { y: 0, scale: 1, opacity: 1 } : { y: 50, scale: 0.5, opacity: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 140,
                    damping: 8,
                    delay: 0.2 + index * 0.15
                  }}
                  style={{
                    color: '#ffffff',
                    fontFamily: 'var(--font-cairo)',
                    textShadow: '6px 6px 0px var(--charcoal)',
                    WebkitTextStroke: '3px var(--charcoal)'
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </div>

            <motion.h3 
              className="hero-text tracking-tight font-black"
              custom={0.4}
              initial="hidden"
              animate={activeSlide === 12 ? "visible" : "hidden"}
              variants={revealVariants}
              style={{ color: 'var(--yellow)', textShadow: '4px 4px 0px var(--charcoal)', WebkitTextStroke: '2px var(--charcoal)' }}
            >
              HALI HALLO
            </motion.h3>

            <motion.div
              className="accent-line"
              custom={0.5}
              initial="hidden"
              animate={activeSlide === 12 ? "visible" : "hidden"}
              variants={revealVariants}
              style={{ backgroundColor: '#ffffff' }}
            />

            <motion.p 
              className="body-text text-white font-extrabold"
              custom={0.6}
              initial="hidden"
              animate={activeSlide === 12 ? "visible" : "hidden"}
              variants={revealVariants}
            >
              أكثر من مجرد تحية — إنها شارة البدء وصوت الفضول نفسه. عندما تسمع "هالي هالو"، تعلم فوراً أن هناك قصة مثيرة أو حقيقة مدهشة على وشك البدء. تفتتح كل فيديو، وتحدد نبرة المحتوى الفريدة، وأصبحت هوية صوتية مسجلة باسم مستر نوبل يرددها المتابعون وتعرفها العلامات التجارية تلقائياً.
            </motion.p>
          </div>
        </section>

        {/* ════════════ SLIDE 14 — VISUAL IDENTITY ════════════ */}
        <section 
          className="slide" 
          data-slide={13} 
          ref={el => { slidesRef.current[13] = el; }}
        >
          <div className="slide-inner" dir="rtl">
            <span className="bg-number">ID</span>
            <div className="split-wide">
              <div className="flex flex-col gap-6 text-right justify-center">
                <motion.p 
                  className="label label-pink self-start"
                  custom={0.1}
                  initial="hidden"
                  animate={activeSlide === 13 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  الهوية البصرية
                </motion.p>
                <motion.h2 
                  className="big-text font-black"
                  custom={0.25}
                  initial="hidden"
                  animate={activeSlide === 13 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  العين ترى كل شيء
                </motion.h2>
                <motion.p 
                  className="body-text"
                  custom={0.35}
                  initial="hidden"
                  animate={activeSlide === 13 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  شعار مستر نوبل هو عين مصممة بطابع فني ديناميكي — وهي رمز للفضول اللامتناهي، قوة الملاحظة، والاكتشاف. تمنحها المنحنيات الجريئة طاقة متفجرة مستوحاة من أسلوب الأنمي الياباني. صاعقة البرق الفيروزية (Cyan) تعبر عن الحماس اللامحدود والمعرفة المتوهجة، بينما يمنحها الهلال البرتقالي الدفء والعمق. ولربط الهوية بوطنها الفعلي، قمنا بإدخال لون "أحمر الاستوديو" النابض بالحياة (Studio Red) المستوحى من الأريكة الحمراء والسكيت بورد لخلق تباين بصري مميز وقوي.
                </motion.p>

                <motion.div 
                  className="accent-line"
                  custom={0.4}
                  initial="hidden"
                  animate={activeSlide === 13 ? "visible" : "hidden"}
                  variants={revealVariants}
                />
                
                {/* Custom Brand Colors Swatches */}
                <motion.div 
                  className="flex flex-col gap-2"
                  custom={0.5}
                  initial="hidden"
                  animate={activeSlide === 13 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  <p className="text-gray-500 text-sm font-black mb-2" style={{ fontFamily: 'var(--font-cairo)' }}>ألوان العلامة التجارية</p>
                  <div className="swatch-row" style={{ flexDirection: 'row-reverse', justifyContent: 'flex-end' }}>
                    <div className="swatch-box"><div className="swatch" style={{ background: '#0D0D0D' }} /><p className="swatch-label">#0D0D0D</p></div>
                    <div className="swatch-box"><div className="swatch" style={{ background: '#FFFFFF' }} /><p className="swatch-label">#FFFFFF</p></div>
                    <div className="swatch-box"><div className="swatch" style={{ background: '#FF6B00' }} /><p className="swatch-label">#FF6B00</p></div>
                    <div className="swatch-box"><div className="swatch" style={{ background: '#FF0D39' }} /><p className="swatch-label" style={{ color: 'var(--red)' }}>#FF0D39</p></div>
                    <div className="swatch-box"><div className="swatch" style={{ background: '#00F0FF' }} /><p className="swatch-label">#00F0FF</p></div>
                    <div className="swatch-box"><div className="swatch" style={{ background: '#1A1A1A' }} /><p className="swatch-label">#1A1A1A</p></div>
                  </div>
                </motion.div>
              </div>

              {/* Brand Logo2 with Premium Cartoon Frame */}
              <div className="flex items-center justify-center relative">
                <motion.div
                  initial={{ scale: 0.7, rotate: 15 }}
                  animate={activeSlide === 13 ? { scale: 1.1, rotate: 0 } : { scale: 0.7, rotate: 15 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 10 }}
                >
                  <div className="relative flex items-center justify-center">
                    {/* Backing Solid Shadow */}
                    <div 
                      className="absolute rounded-2xl w-[170px] h-[170px] sm:w-[220px] sm:h-[220px] bg-[#1E1E1E]"
                      style={{ transform: 'translate(8px, 8px)' }}
                    />
                    {/* Main Frame */}
                    <div 
                      className="relative rounded-2xl w-[170px] h-[170px] sm:w-[220px] sm:h-[220px] bg-white flex items-center justify-center overflow-hidden"
                      style={{ border: '5px solid #1E1E1E' }}
                    >
                      <img 
                        src="/images/logo2.jpeg" 
                        alt="Mr Nobel Brand Logo" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ SLIDE 15 — THE STUDIO ════════════ */}
        <section 
          className="slide" 
          data-slide={14} 
          ref={el => { slidesRef.current[14] = el; }}
        >
          <div className="slide-inner" dir="rtl">
            <span className="bg-number">ROOM</span>
            <div className="grid grid-cols-1 lg:grid-cols-[1.65fr_1fr] gap-8 items-center">
              {/* Right Side: Studio Image and Labels */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center w-full">
                  <motion.p 
                    className="label label-orange"
                    custom={0.1}
                    initial="hidden"
                    animate={activeSlide === 14 ? "visible" : "hidden"}
                    variants={revealVariants}
                  >
                    الاستوديو الفعلي
                  </motion.p>
                  <span className="text-gray-400 font-black text-xs hidden md:inline">★ تفاعل مع الملاحظات العائمة ★</span>
                </div>
                
                {/* Neo-brutalist cartoonish frame wrapping real studio picture */}
                <div className="studio-frame relative" style={{ height: '52vh' }}>
                  <div className="w-full h-full absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/studio.PNG')" }} />
                  
                  {/* Interactive Annotations */}
                  <div className="absolute inset-0 z-20 pointer-events-auto">
                    <span className="studio-label" style={{ top: '15%', right: '10%' }}>🎯 بورد التحقيقات</span>
                    <span className="studio-label" style={{ top: '20%', left: '10%' }}>🏈 تيشيرت توم برادي</span>
                    <span className="studio-label" style={{ bottom: '18%', left: '42%' }}>🛋️ الأريكة الحمراء</span>
                    <span className="studio-label" style={{ top: '40%', left: '40%' }}>🛹 سكيت بورد ويلسون</span>
                    <span className="studio-label" style={{ bottom: '22%', right: '8%' }}>📢 لوحة «أعلن هنا»</span>
                    <span className="studio-label" style={{ top: '55%', left: '8%' }}>🎯 لوحة السهام</span>
                  </div>
                  
                  {/* Dark overlay just enough for annotations pop */}
                  <div className="absolute inset-0 bg-black/15 z-10 pointer-events-none" />
                </div>
              </div>

              {/* Left Side: Description */}
              <div className="flex flex-col justify-center">
                <motion.div 
                  className="neo-card text-right"
                  custom={0.3}
                  initial="hidden"
                  animate={activeSlide === 14 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  <h3 className="font-black text-2xl mb-4 text-[#FF6B00]" style={{ fontFamily: 'var(--font-cairo)' }}>حيث يعيش الفضول 🛋️</h3>
                  <p className="body-text text-sm font-semibold max-w-none leading-relaxed">
                    أكثر من مجرد موقع تصوير — إنه بطل حقيقي وشخصية قائمة بذاتها في كل حلقة. كل غرض هنا يروي حكاية خاصة: بورد التحريات المعقدة المربوطة بالخيوط الحمراء، التيشيرتات الكلاسيكية، والأريكة المخملية الحمراء التي شهدت مئات الحلقات المشوقة. الاستوديو هو بصمة بصرية تجعل المشاهد يتعرف على محتوى مستر نوبل في أول ثانية.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ SLIDE 16 — BRAND VOICE ════════════ */}
        <section 
          className="slide" 
          data-slide={15} 
          ref={el => { slidesRef.current[15] = el; }}
        >
          <div className="slide-inner" dir="rtl">
            <div className="split split-wide gap-8">
              {/* Right column: Description */}
              <div className="flex flex-col gap-4 text-right justify-center">
                <motion.p 
                  className="label label-pink self-start"
                  custom={0.1}
                  initial="hidden"
                  animate={activeSlide === 15 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  نبرة الصوت
                </motion.p>
                <motion.h2 
                  className="big-text font-black"
                  custom={0.2}
                  initial="hidden"
                  animate={activeSlide === 15 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  أول خطوة لجذب الانتباه 📣
                </motion.h2>
                <motion.p 
                  className="body-text opacity-90 text-sm leading-relaxed"
                  custom={0.3}
                  initial="hidden"
                  animate={activeSlide === 15 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  عفوية، ذكية، وفضولية للغاية. التنقل السلس والواقعي بين العربية والإنجليزية يماثل طبيعة جيلنا الرقمي. كل جملة أو وصف هي خطاف بصري (Hook) صُمم بعناية لإيقاف التمرير وإطلاق نقاش متفاعل في التعليقات.
                </motion.p>
              </div>

              {/* Left column: 2x2 grid of cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ direction: 'rtl' }}>
                <motion.div 
                  className="neo-card text-right flex flex-col justify-between"
                  custom={0.4}
                  initial="hidden"
                  animate={activeSlide === 15 ? "visible" : "hidden"}
                  variants={revealVariants}
                  style={{ padding: '20px' }}
                >
                  <div className="font-black text-sm mb-2 text-[#FF6B00]" style={{ fontFamily: 'var(--font-cairo)' }}>فيسبوك 📘</div>
                  <p className="text-xs font-bold text-gray-700 leading-normal" style={{ fontFamily: 'var(--font-almarai)' }}>
                    لما تكتشف إن الاستوديو بتاعك فيه أسرار أكتر من مثلث برمودا 🤫 البورد دي وراها حكايات كتير! #مستر_نوبل
                  </p>
                </motion.div>

                <motion.div 
                  className="neo-card text-right flex flex-col justify-between"
                  custom={0.5}
                  initial="hidden"
                  animate={activeSlide === 15 ? "visible" : "hidden"}
                  variants={revealVariants}
                  style={{ padding: '20px' }}
                >
                  <div className="font-black text-sm mb-2 text-[#E1306C]" style={{ fontFamily: 'var(--font-cairo)' }}>يوتيوب شورتس ▶️</div>
                  <p className="text-xs font-bold text-gray-700 leading-normal" style={{ fontFamily: 'var(--font-almarai)' }}>
                    أغرب 5 اختراعات تم اكتشافها بالصدفة البحتة... 🤯 الاختراع رقم 3 هيصدمك بجد! #مستر_نوبل
                  </p>
                </motion.div>

                <motion.div 
                  className="neo-card text-right flex flex-col justify-between"
                  custom={0.6}
                  initial="hidden"
                  animate={activeSlide === 15 ? "visible" : "hidden"}
                  variants={revealVariants}
                  style={{ padding: '20px' }}
                >
                  <div className="font-black text-sm mb-2 text-[#38BDF8]" style={{ fontFamily: 'var(--font-cairo)' }}>إنستغرام ريلز 📸</div>
                  <p className="text-xs font-bold text-gray-700 leading-normal" style={{ fontFamily: 'var(--font-almarai)' }}>
                    سألت 50 شخص في الشارع: مين أعظم لاعب في التاريخ؟ ⚽ الإجابات صدمتني بجد! شوفوا الفيديو كامل 👇
                  </p>
                </motion.div>

                <motion.div 
                  className="neo-card text-right flex flex-col justify-between"
                  custom={0.7}
                  initial="hidden"
                  animate={activeSlide === 15 ? "visible" : "hidden"}
                  variants={revealVariants}
                  style={{ padding: '20px' }}
                >
                  <div className="font-black text-sm mb-2 text-[#1E1E1E]" style={{ fontFamily: 'var(--font-cairo)' }}>تيك توك 🎵</div>
                  <p className="text-xs font-bold text-gray-700 leading-normal" style={{ fontFamily: 'var(--font-almarai)' }}>
                    لما تكتشف إن عقلك بيستهلك طاقة أكتر من أي عضو تاني في جسمك! 🧠⚡ هالي هالو! #مستر_نوبل
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ SLIDE 17 — CONTENT STRATEGY ════════════ */}
        <section 
          className="slide" 
          data-slide={16} 
          ref={el => { slidesRef.current[16] = el; }}
          style={{ backgroundColor: 'var(--blue)' }}
        >
          <div className="slide-inner" dir="rtl">
            <div className="split split-wide gap-8">
              {/* Right column: Description */}
              <div className="flex flex-col gap-4 text-right justify-center">
                <motion.p 
                  className="label label-orange self-start"
                  custom={0.1}
                  initial="hidden"
                  animate={activeSlide === 16 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  استراتيجية النشر
                </motion.p>
                <motion.h2 
                  className="big-text font-black text-white"
                  custom={0.2}
                  initial="hidden"
                  animate={activeSlide === 16 ? "visible" : "hidden"}
                  variants={revealVariants}
                  style={{ textShadow: '4px 4px 0px var(--charcoal)' }}
                >
                  دليل التشغيل والانتشار 🚀
                </motion.h2>
                <p className="body-text text-white/90 text-sm font-semibold leading-relaxed mt-2">
                  كل خطوة في صناعة المحتوى لدينا هي عملية هندسية مدروسة وموجهة بالأرقام والنتائج لضمان أقصى انتشار وتفاعل ممكنين.
                </p>
              </div>

              {/* Left column: 2x2 grid of cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ direction: 'rtl' }}>
                <motion.div 
                  className="neo-card text-right"
                  custom={0.3}
                  initial="hidden"
                  animate={activeSlide === 16 ? "visible" : "hidden"}
                  variants={revealVariants}
                  style={{ padding: '20px' }}
                >
                  <h4 className="font-black text-lg mb-1 text-[#FF6B00]" style={{ fontFamily: 'var(--font-cairo)' }}>01. علم الصور المصغرة</h4>
                  <p className="text-gray-700 text-xs font-semibold leading-normal">كل صورة مصغرة تُصنع لتكون مصيدة للنظر: تعبيرات وجه قوية، فجوات فضول غامضة، وألوان متناغمة عالية التباين لضمان أعلى نسب نقر.</p>
                </motion.div>

                <motion.div 
                  className="neo-card text-right"
                  custom={0.4}
                  initial="hidden"
                  animate={activeSlide === 16 ? "visible" : "hidden"}
                  variants={revealVariants}
                  style={{ padding: '20px' }}
                >
                  <h4 className="font-black text-lg mb-1 text-[#FF6B00]" style={{ fontFamily: 'var(--font-cairo)' }}>02. ملائمة المنصات</h4>
                  <p className="text-gray-700 text-xs font-semibold leading-normal">نعيد هندسة المحتوى بالكامل لكل منصة بدلاً من مجرد تغيير حجمه: فيديوهات طولية للتيك توك، سينمائية لليوتيوب، وبصرية للفيسبوك.</p>
                </motion.div>

                <motion.div 
                  className="neo-card text-right"
                  custom={0.5}
                  initial="hidden"
                  animate={activeSlide === 16 ? "visible" : "hidden"}
                  variants={revealVariants}
                  style={{ padding: '20px' }}
                >
                  <h4 className="font-black text-lg mb-1 text-[#FF6B00]" style={{ fontFamily: 'var(--font-cairo)' }}>03. جدول نشر صارم</h4>
                  <p className="text-gray-700 text-xs font-semibold leading-normal">نسق نشر ثابت ومدروس: فيديوهان يوتيوب أساسيان، 5 مقاطع قصيرة أسبوعياً، ستوريز يومية متفاعلة، ومواكبة ذكية للترندات الكبرى.</p>
                </motion.div>

                <motion.div 
                  className="neo-card text-right"
                  custom={0.6}
                  initial="hidden"
                  animate={activeSlide === 16 ? "visible" : "hidden"}
                  variants={revealVariants}
                  style={{ padding: '20px' }}
                >
                  <h4 className="font-black text-lg mb-1 text-[#FF6B00]" style={{ fontFamily: 'var(--font-cairo)' }}>04. اتساق وتطابق الهوية</h4>
                  <p className="text-gray-700 text-xs font-semibold leading-normal">كل قطعة محتوى تتبع بدقة متناهية النظام البصري لمستر نوبل: العلامة المائية للعين، التباين اللوني، وبالطبع المقدمة الأيقونية "هالي هالو".</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ SLIDE 18 — TARGET AUDIENCE ════════════ */}
        <section 
          className="slide" 
          data-slide={17} 
          ref={el => { slidesRef.current[17] = el; }}
        >
          <div className="slide-inner" dir="rtl">
            <span className="bg-number">USER</span>
            <div className="split split-wide gap-8">
              {/* Right column: Header and Psychographics */}
              <div className="flex flex-col gap-4 text-right justify-center">
                <motion.p 
                  className="label label-orange self-start"
                  custom={0.1}
                  initial="hidden"
                  animate={activeSlide === 17 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  الجمهور المستهدف
                </motion.p>
                <motion.h2 
                  className="big-text font-black"
                  custom={0.25}
                  initial="hidden"
                  animate={activeSlide === 17 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  من يتابع مستر نوبل؟ 👥
                </motion.h2>
                
                <motion.div 
                  className="neo-card mt-2 text-right"
                  custom={0.5}
                  initial="hidden"
                  animate={activeSlide === 17 ? "visible" : "hidden"}
                  variants={revealVariants}
                  style={{ padding: '20px' }}
                >
                  <h3 className="font-black text-lg mb-2 text-[#00F0FF]" style={{ fontFamily: 'var(--font-cairo)' }}>السمات السلوكية للجمهور</h3>
                  <p className="text-gray-700 text-xs font-semibold leading-relaxed">
                    محبون للفضول والمعرفة، متفاعلون مع ثقافة الميمز والإنترنت، ويقدرون الواقعية والصدق التام. لا يتابعون قنوات جامدة، بل يلتفون حول صناع المحتوى الحقيقيين. يشاركون المحتوى الذي يجعلهم يبدون أذكياء أو يشعل نقاشاً مثيراً. يستهلكون المحتوى عبر أكثر من 3 منصات يومياً ولديهم نفور تام من الأسلوب التعليمي التقليدي.
                  </p>
                </motion.div>
              </div>

              {/* Left column: Grid of demographic counters & platforms */}
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div 
                    className="neo-card text-center"
                    custom={0.3}
                    initial="hidden"
                    animate={activeSlide === 17 ? "visible" : "hidden"}
                    variants={revealVariants}
                    style={{ padding: '16px 8px' }}
                  >
                    <div className="text-2xl font-black text-[#FF6B00]" style={{ fontFamily: 'var(--font-cairo)' }}>١٦–٣٥</div>
                    <div className="text-[10px] font-black text-gray-500 mt-1" style={{ fontFamily: 'var(--font-cairo)' }}>الفئة العمرية</div>
                  </motion.div>

                  <motion.div 
                    className="neo-card text-center"
                    custom={0.35}
                    initial="hidden"
                    animate={activeSlide === 17 ? "visible" : "hidden"}
                    variants={revealVariants}
                    style={{ padding: '16px 8px' }}
                  >
                    <div className="text-lg font-black text-[#38BDF8]" style={{ fontFamily: 'var(--font-cairo)' }}>عربي/إنجليزي</div>
                    <div className="text-[10px] font-black text-gray-500 mt-1" style={{ fontFamily: 'var(--font-cairo)' }}>ثنائي اللغة</div>
                  </motion.div>

                  <motion.div 
                    className="neo-card text-center"
                    custom={0.4}
                    initial="hidden"
                    animate={activeSlide === 17 ? "visible" : "hidden"}
                    variants={revealVariants}
                    style={{ padding: '16px 8px' }}
                  >
                    <div className="text-2xl font-black text-[#FF0D39]" style={{ fontFamily: 'var(--font-cairo)' }}>٢٤/٧</div>
                    <div className="text-[10px] font-black text-gray-500 mt-1" style={{ fontFamily: 'var(--font-cairo)' }}>أبناء العصر الرقمي</div>
                  </motion.div>

                  <motion.div 
                    className="neo-card text-center"
                    custom={0.45}
                    initial="hidden"
                    animate={activeSlide === 17 ? "visible" : "hidden"}
                    variants={revealVariants}
                    style={{ padding: '16px 8px' }}
                  >
                    <div className="text-2xl font-black text-[#FFC72C]">🌍</div>
                    <div className="text-[10px] font-black text-gray-500 mt-1" style={{ fontFamily: 'var(--font-cairo)' }}>الخليج والشرق الأوسط</div>
                  </motion.div>
                </div>

                <motion.div 
                  className="neo-card text-right"
                  custom={0.55}
                  initial="hidden"
                  animate={activeSlide === 17 ? "visible" : "hidden"}
                  variants={revealVariants}
                  style={{ padding: '20px' }}
                >
                  <h3 className="font-black text-sm mb-3 text-[#FF6B00]" style={{ fontFamily: 'var(--font-cairo)' }}>المنصات الرئيسية للنشر</h3>
                  <div className="flex flex-wrap gap-2 justify-end" style={{ flexDirection: 'row-reverse' }}>
                    <span className="pill" style={{ padding: '6px 14px', fontSize: '11px', margin: '2px' }}>▶️ يوتيوب</span>
                    <span className="pill" style={{ padding: '6px 14px', fontSize: '11px', margin: '2px' }}>🎵 تيك توك</span>
                    <span className="pill" style={{ padding: '6px 14px', fontSize: '11px', margin: '2px' }}>📸 إنستغرام</span>
                    <span className="pill" style={{ padding: '6px 14px', fontSize: '11px', margin: '2px' }}>📘 فيسبوك</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ SLIDE 19 — GROWTH & FUTURE ════════════ */}
        <section 
          className="slide" 
          data-slide={18} 
          ref={el => { slidesRef.current[18] = el; }}
          style={{ backgroundColor: 'var(--green)' }}
        >
          <div className="slide-inner" dir="rtl">
            <span className="bg-number" style={{ color: 'white', opacity: 0.1 }}>GOAL</span>
            <div className="split split-wide gap-8">
              {/* Right column: Description */}
              <div className="flex flex-col gap-4 text-right justify-center">
                <motion.p 
                  className="label label-pink self-start"
                  custom={0.1}
                  initial="hidden"
                  animate={activeSlide === 18 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  النمو وآفاق المستقبل
                </motion.p>
                <motion.h2 
                  className="big-text font-black text-white"
                  custom={0.2}
                  initial="hidden"
                  animate={activeSlide === 18 ? "visible" : "hidden"}
                  variants={revealVariants}
                  style={{ textShadow: '4px 4px 0px var(--charcoal)' }}
                >
                  من صانع محتوى إلى علامة تجارية ثقافية 🚀
                </motion.h2>
                <motion.p 
                  className="body-text text-white opacity-90 text-sm leading-relaxed"
                  custom={0.25}
                  initial="hidden"
                  animate={activeSlide === 18 ? "visible" : "hidden"}
                  variants={revealVariants}
                >
                  مستر نوبل لا يجمع المتابعين فحسب — بل يؤسس لنظام بيئي رقمي وثقافي عابر للمنصات. تمتد خارطة طريقنا للمستقبل لما هو أبعد من مقاطع الفيديو، لتصنع مجتمعات متكاملة، توسعات جغرافية مبتكرة، وشراكات تجارية راقية ومؤثرة.
                </motion.p>
              </div>

              {/* Left column: 2x2 grid of cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ direction: 'rtl' }}>
                <motion.div 
                  className="neo-card text-right"
                  custom={0.3}
                  initial="hidden"
                  animate={activeSlide === 18 ? "visible" : "hidden"}
                  variants={revealVariants}
                  style={{ padding: '20px' }}
                >
                  <h4 className="font-black text-lg mb-1 text-[#FF6B00]" style={{ fontFamily: 'var(--font-cairo)' }}>🎬 التوسع الأفقي</h4>
                  <p className="text-gray-700 text-xs font-semibold leading-normal">تطوير أفلام وثائقية قصيرة، إطلاق بودكاست حواري يبحث في ما وراء الحقائق، وصناعة مقاطع تعاونية مع أكبر صناع المحتوى بالوطن العربي.</p>
                </motion.div>

                <motion.div 
                  className="neo-card text-right"
                  custom={0.4}
                  initial="hidden"
                  animate={activeSlide === 18 ? "visible" : "hidden"}
                  variants={revealVariants}
                  style={{ padding: '20px' }}
                >
                  <h4 className="font-black text-lg mb-1 text-[#FF6B00]" style={{ fontFamily: 'var(--font-cairo)' }}>👥 المجتمع والمنصات</h4>
                  <p className="text-gray-700 text-xs font-semibold leading-normal">تأسيس مجتمعات حصرية فائقة النشاط (قنوات Discord وWhatsApp) وإطلاق ميزات انتساب متكاملة لتقدير المعجبين الخارقين.</p>
                </motion.div>

                <motion.div 
                  className="neo-card text-right"
                  custom={0.5}
                  initial="hidden"
                  animate={activeSlide === 18 ? "visible" : "hidden"}
                  variants={revealVariants}
                  style={{ padding: '20px' }}
                >
                  <h4 className="font-black text-lg mb-1 text-[#FF6B00]" style={{ fontFamily: 'var(--font-cairo)' }}>🤝 الشراكات الفاخرة</h4>
                  <p className="text-gray-700 text-xs font-semibold leading-normal">عقد شراكات ذكية وغير مصطنعة مع علامات تجارية كبرى ومحلية تشارك مستر نوبل قيمه الجمالية البصرية وطاقته العالية المبنية على الفضول.</p>
                </motion.div>

                <motion.div 
                  className="neo-card text-right"
                  custom={0.6}
                  initial="hidden"
                  animate={activeSlide === 18 ? "visible" : "hidden"}
                  variants={revealVariants}
                  style={{ padding: '20px' }}
                >
                  <h4 className="font-black text-lg mb-1 text-[#FF6B00]" style={{ fontFamily: 'var(--font-cairo)' }}>🌍 التوسع الجغرافي</h4>
                  <p className="text-gray-700 text-xs font-semibold leading-normal">تصميم محتوى وحملات موجهة للمملكة العربية السعودية، الإمارات، مصر، ومنطقة الخليج العربي لتقديم نفس جودة الفضول بنكهات محلية.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════ SLIDE 20 — CLOSING ════════════ */}
        <section 
          className="slide" 
          data-slide={19} 
          ref={el => { slidesRef.current[19] = el; }}
        >
          <RetroStar className="absolute top-[12%] right-[18%] text-[#FFC72C]" />
          <HappyFlower className="absolute bottom-[12%] left-[10%]" />
          <div className="slide-inner text-center flex flex-col items-center justify-center gap-6">
            <motion.div 
              initial={{ scale: 0.6, rotate: -20, opacity: 0 }}
              animate={activeSlide === 19 ? { scale: 1, rotate: 0, opacity: 1 } : { scale: 0.6, rotate: -20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 10 }}
            >
              <img 
                src="/images/logo.png" 
                alt="Mr Nobel Logo" 
                className="w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] md:w-[440px] md:h-[440px] object-contain rounded-2xl select-none pointer-events-none"
                style={{
                  filter: 'drop-shadow(0px 8px 24px rgba(0,0,0,0.2))'
                }}
              />
            </motion.div>
            
            <motion.p 
              className="hero-text hero-text-dark font-black mt-2"
              custom={0.25}
              initial="hidden"
              animate={activeSlide === 19 ? "visible" : "hidden"}
              variants={revealVariants}
              style={{ textShadow: '4px 4px 0px var(--yellow)' }}
            >
              هالي هالو
            </motion.p>
            <motion.div 
              className="accent-line"
              custom={0.35}
              initial="hidden"
              animate={activeSlide === 19 ? "visible" : "hidden"}
              variants={revealVariants}
            />
            <motion.h2 
              className="big-text font-black my-4"
              custom={0.45}
              initial="hidden"
              animate={activeSlide === 19 ? "visible" : "hidden"}
              variants={revealVariants}
            >
              دعونا نبني شيئاً أسطورياً.
            </motion.h2>
            <motion.hr 
              className="thin-rule w-[120px] my-2" 
              custom={0.55}
              initial="hidden"
              animate={activeSlide === 19 ? "visible" : "hidden"}
              variants={revealVariants}
            />

            {/* Platform handles click */}
            <motion.div 
              className="flex gap-4 justify-center items-center mt-2 flex-wrap"
              custom={0.65}
              initial="hidden"
              animate={activeSlide === 19 ? "visible" : "hidden"}
              variants={revealVariants}
            >
              <a 
                href="https://www.youtube.com/@Mr.nobell" 
                target="_blank" 
                rel="noopener noreferrer"
                className="neo-btn"
                style={{ backgroundColor: '#FF0000' }}
              >
                <span>يوتيوب</span>
              </a>
              <a 
                href="https://www.instagram.com/mr.nobell/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="neo-btn"
                style={{ backgroundColor: '#E1306C' }}
              >
                <span>انستغرام</span>
              </a>
              <a 
                href="https://www.tiktok.com/@mr.nobell" 
                target="_blank" 
                rel="noopener noreferrer"
                className="neo-btn"
                style={{ backgroundColor: '#1E1E1E' }}
              >
                <span>تيك توك</span>
              </a>
              <a 
                href="https://www.facebook.com/Mr.Nobell/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="neo-btn"
                style={{ backgroundColor: '#1877F2' }}
              >
                <span>فيسبوك</span>
              </a>
            </motion.div>

            <motion.p 
              className="text-gray-400 text-sm mt-2 font-black"
              custom={0.75}
              initial="hidden"
              animate={activeSlide === 19 ? "visible" : "hidden"}
              variants={revealVariants}
            >
              @mr.nobell · في كل مكان
            </motion.p>
            <motion.p 
              className="text-gray-400 text-xs font-black uppercase tracking-wider mt-4 hover:text-orange-500 transition-colors cursor-pointer"
              custom={0.85}
              initial="hidden"
              animate={activeSlide === 19 ? "visible" : "hidden"}
              variants={revealVariants}
              style={{ fontFamily: 'var(--font-cairo)' }}
            >
              للشراكات والاستفسارات التجارية
            </motion.p>
          </div>
        </section>

      </main>
    </>
  );
}
