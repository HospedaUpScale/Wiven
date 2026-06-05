import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import wivenEagleSilhouette from '@/assets/wiven-logo.svg';
import { Navbar } from './Navbar';

const floatingEagles = [
  {
    className: 'left-[8%] top-[38%] w-16 md:w-20',
    rotate: '12deg',
    duration: '7s',
    delay: '0s',
  },
  {
    className: 'right-[10%] top-[32%] w-20 md:w-24',
    rotate: '-12deg',
    duration: '10s',
    delay: '1.2s',
  },
  {
    className: 'left-[18%] bottom-[22%] w-14 md:w-16',
    rotate: '-6deg',
    duration: '8s',
    delay: '0.6s',
  },
  {
    className: 'right-[16%] bottom-[18%] w-16 md:w-[4.5rem]',
    rotate: '8deg',
    duration: '11s',
    delay: '2s',
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <>
      <Navbar />
      <section
        id="inicio"
        aria-label="Hero"
        className="relative bg-black w-full min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-32 pb-24 md:pb-36 antialiased"
      >
        <div className="absolute inset-0 pointer-events-none z-10 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_40%,#000_50%,transparent_100%)]" />

        {/* Ambient lighting — deep royal, center-focused noir */}
        <div className="pointer-events-none absolute inset-0 z-0 [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_72%)]">
          <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-[#051c5e]/30 rounded-full blur-[150px]" />
          <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] bg-blue-950/40 rounded-full blur-[150px]" />
        </div>
        <div className="pointer-events-none absolute inset-0 z-[12] bg-[radial-gradient(ellipse_at_center,transparent_35%,black_100%)]" />

        {/* Floating eagle silhouettes — transparent vector only */}
        <div className="absolute inset-0 z-[15] pointer-events-none">
        <style>{`
          @keyframes hero-eagle-float {
            0%, 100% { transform: translateY(0) rotate(var(--eagle-rotate, 0deg)); }
            50% { transform: translateY(-10px) rotate(var(--eagle-rotate, 0deg)); }
          }
        `}</style>
        {floatingEagles.map((eagle, index) => (
          <img
            key={index}
            src={wivenEagleSilhouette}
            alt=""
            aria-hidden="true"
            className={`absolute opacity-[0.12] md:opacity-[0.15] select-none pointer-events-none ${eagle.className}`}
            style={
              {
                '--eagle-rotate': eagle.rotate,
                animation: `hero-eagle-float ${eagle.duration} ease-in-out ${eagle.delay} infinite`,
              } as React.CSSProperties
            }
          />
        ))}
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Eagle logo — vector silhouette with contour glow only */}
            <motion.div variants={fadeUp} className="relative mb-1 sm:mb-2 mx-auto w-fit">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 mx-auto bg-transparent">
                <img
                  src={wivenEagleSilhouette}
                  alt="Wiven"
                  className="relative w-full h-full object-contain animate-float filter drop-shadow-[0_0_25px_rgba(10,76,255,0.45)] drop-shadow-[0_0_50px_rgba(10,76,255,0.2)] mix-blend-screen"
                />
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] tracking-tight mb-4 sm:mb-8 text-balance max-w-4xl mx-auto"
            >
              <span className="hero-headline-tech text-white">
                O ecossistema de pagamentos para quem quer{' '}
              </span>
              <span className="gradient-text">crescer de verdade</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-sm sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed bg-gradient-to-b from-zinc-300 to-zinc-500 bg-clip-text text-transparent"
            >
              Voe mais alto. Escale com constância. Um ecossistema completo para operações digitais que
              querem sair do improviso e construir algo grande de verdade, com tecnologia, tráfego,
              retenção, monetização e crescimento trabalhando juntos.
            </motion.p>

            <motion.div variants={fadeUp}>
              <button
                type="button"
                onClick={() => window.open('https://wa.me/message/4M546VJJZ673G1', '_blank')}
                className="group relative inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-10 sm:px-12 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-semibold text-white bg-[#0a4cff] border border-white/10 shadow-[0_0_24px_rgba(10,76,255,0.4),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(10,76,255,0.55),inset_0_1px_0_rgba(255,255,255,0.2)] hover:bg-[#0b55ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a4cff]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <span
                  className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-60 pointer-events-none"
                  aria-hidden="true"
                />
                <span className="relative">Quero Fazer Parte</span>
                <ArrowRight className="relative w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none z-10" />

        <div
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-60 hover:opacity-100 transition-opacity z-20 hidden sm:flex"
          onClick={() => {
            const el = document.querySelector('#dashboard');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              document.querySelector('#dashboard')?.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Rolar para o dashboard"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center p-2">
            <div className="w-1.5 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
          </div>
        </div>
      </section>
    </>
  );
}
