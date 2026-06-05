import { useEffect, useMemo, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { Trophy } from 'lucide-react';
import wivenEagleSilhouette from '@/assets/wiven-logo.svg';
import award10K from '@/assets/awards/10K.png';
import award100K from '@/assets/awards/100K.png';
import award500K from '@/assets/awards/500K.png';
import award1M from '@/assets/awards/1M.png';
import award5M from '@/assets/awards/5M.png';
import award10M from '@/assets/awards/10M.png';
import award25M from '@/assets/awards/25M.png';

type Milestone = {
  key: string;
  tab: string;
  badge: string;
  title: string;
  highlight: string;
  description: string;
  image: string;
  ambientImage?: string;
  ambientGlow?: string;
  heroImage?: string;
};

const HERO_MEDIA_CLASS =
  'absolute inset-0 w-full h-full object-cover opacity-[0.75] contrast-125 saturate-110 z-0 rounded-l-xl transition-all duration-500 pointer-events-none select-none';

const luxuryPhotoClass =
  'absolute inset-0 w-full h-full object-cover opacity-[0.25] grayscale contrast-115 mix-blend-screen pointer-events-none select-none z-0 transition-all duration-700';

const milestones: Milestone[] = [
  {
    key: '10k',
    tab: '10K',
    badge: '10 Mil Faturados',
    title: 'Kit Wiven',
    highlight: 'Todo voo começa com a coragem de sair do chão.',
    description: 'Uma caixa premium com itens oficiais Wiven pra selar sua entrada no jogo sério.',
    image: award10K,
    ambientImage:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    ambientGlow:
      'absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(37,99,235,0.15)_70%,#000_100%)] z-10 pointer-events-none select-none',
  },
  {
    key: '100k',
    tab: '100K',
    badge: '100 Mil Faturados',
    title: 'Placa 100K + Reconhecimento Wiven',
    highlight: 'Altitude não é sorte. É consistência.',
    description: 'Reconhecimento oficial pra quem chegou nos 100K com consistência e um kit premium Wiven.',
    image: award100K,
    ambientImage:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    ambientGlow:
      'absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(29,78,216,0.15)_70%,#000_100%)] z-10 pointer-events-none select-none',
  },
  {
    key: '500k',
    tab: '500K',
    badge: '500 Mil Faturados',
    title: 'Placa de 500K',
    highlight: 'Consistência é o que separa quem tenta de quem chega.',
    description:
      'O reconhecimento físico da sua maturidade digital. Ao atingir meio milhão faturados, sua operação consolida um novo posicionamento de destaque no mercado.',
    image: award500K,
  },
  {
    key: '1m',
    tab: '1M',
    badge: '1 Milhão Faturados',
    title: 'Praia Paradisíaca',
    highlight: 'Você saiu do comum. Agora você vê além.',
    description:
      'Uma viagem exclusiva com acompanhante para um dos destinos tropicais mais cobiçados do mundo, celebrando o seu primeiro milhão.',
    image: award1M,
    heroImage: '/premiacoes/praia-paradisiaca.jpg',
  },
  {
    key: '5m',
    tab: '5M',
    badge: '5 Milhões Faturados',
    title: 'Viagem pro Chile',
    highlight: 'Aqui não se compete. Aqui se domina!',
    description:
      'Explore as vinícolas premium e as paisagens cinematográficas de Santiago e do Atacama em uma experiência sob medida de alta classe.',
    image: award5M,
    heroImage: '/premiacoes/chile.jpg',
  },
  {
    key: '10m',
    tab: '10M',
    badge: '10 Milhões Faturados',
    title: 'Cruzeiro Internacional',
    highlight: 'Autoridade não se diz. Se reconhece.',
    description:
      'Navegue pelos mares mais exclusivos do mundo a bordo de um transatlântico de ultra-luxo, com tudo pago no padrão Wiven.',
    image: award10M,
    heroImage: '/premiacoes/cruzeiro.jpg',
  },
  {
    key: '25m',
    tab: '25M',
    badge: '25 Milhões Faturados',
    title: 'Experiência Suíça',
    highlight: 'Você não construiu faturamento, você construiu uma história!',
    description:
      'O topo absoluto. Uma jornada inesquecível pelos Alpes Suíços, hospedando-se em resorts cinco estrelas e vivenciando o ápice do mercado.',
    image: award25M,
    heroImage: '/premiacoes/suica.jpg',
  },
];

const floatingEagles = [
  { className: 'left-[2%] top-[16%] w-20 md:w-28 animate-[float_12s_ease-in-out_infinite]' },
  { className: 'right-[2%] bottom-[14%] w-16 md:w-24 animate-[float_16s_ease-in-out_infinite]' },
];

function DefaultAmbient() {
  return (
    <div
      className="absolute inset-0 pointer-events-none select-none z-0"
      style={{ background: 'radial-gradient(circle at center, rgba(10,76,255,0.12), transparent 65%)' }}
    />
  );
}

function cardBorderClass(themeKey: string): string {
  switch (themeKey) {
    case '1m':
      return 'border-blue-500/40';
    case '5m':
      return 'border-[#d4a359]/45';
    case '10m':
      return 'border-zinc-300/40';
    case '25m':
      return 'border-cyan-500/35';
    default:
      return 'border-zinc-800/60';
  }
}

function PlaqueLeftMedia({ milestone }: { milestone: Milestone }) {
  if (milestone.heroImage) {
    return (
      <>
        <img
          src={milestone.heroImage}
          alt=""
          aria-hidden="true"
          className={HERO_MEDIA_CLASS}
          loading="lazy"
        />
        <div
          className="absolute inset-0 z-[1] pointer-events-none select-none bg-gradient-to-t from-black/75 via-black/25 to-black/35"
          aria-hidden="true"
        />
      </>
    );
  }

  if (!milestone.ambientImage) {
    return <DefaultAmbient />;
  }

  return (
    <>
      <img
        src={milestone.ambientImage}
        alt=""
        aria-hidden="true"
        className={luxuryPhotoClass}
        loading="lazy"
      />
      {milestone.ambientGlow && (
        <div className={milestone.ambientGlow} aria-hidden="true" />
      )}
    </>
  );
}

function PlaqueTiltCard({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springConfig = { stiffness: 280, damping: 22 };

  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    pointerX.set((e.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div
      ref={ref}
      className="group relative w-full max-w-[18rem] sm:max-w-xs md:max-w-sm"
      style={{ perspective: 1000 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative transition-transform duration-500"
      >
        <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none z-10">
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
        </div>
        <img
          src={src}
          alt={alt}
          className="relative w-48 sm:w-64 md:w-72 max-h-[320px] object-contain drop-shadow-2xl mx-auto"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
}

export function AwardsSection() {
  const [activeKey, setActiveKey] = useState(milestones[0].key);
  const [glowFlash, setGlowFlash] = useState(false);
  const active = milestones.find((m) => m.key === activeKey) ?? milestones[0];

  const activeIndex = useMemo(
    () => milestones.findIndex((m) => m.key === activeKey),
    [activeKey],
  );

  const timelineProgress =
    milestones.length > 1 ? (activeIndex / (milestones.length - 1)) * 100 : 0;

  useEffect(() => {
    setGlowFlash(true);
    const t = window.setTimeout(() => setGlowFlash(false), 700);
    return () => window.clearTimeout(t);
  }, [activeKey]);

  return (
    <section id="premiacoes" aria-label="Awards" className="relative bg-black py-20 md:py-28 lg:py-32 overflow-hidden">
      {floatingEagles.map((eagle, index) => (
        <img
          key={index}
          src={wivenEagleSilhouette}
          alt=""
          aria-hidden="true"
          className={`absolute pointer-events-none select-none opacity-[0.12] blur-[0.5px] z-0 ${eagle.className}`}
        />
      ))}

      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] opacity-20"
        style={{ background: 'radial-gradient(ellipse, #0a4cff20 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-5 sm:px-8 md:px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wide text-[#0a4cff] border border-[#0a4cff]/25 bg-[#0a4cff]/10 mb-5">
            Reconhecimento
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white mb-5">
            Ser Wiven é mais do que vender.{' '}
            <span className="bg-gradient-to-r from-[#0a4cff] to-blue-400 bg-clip-text text-transparent">
              É conquistar.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Cada marco é reconhecido de verdade porque crescimento sério merece celebração séria.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto mb-10 overflow-x-auto pb-2 px-1">
          <div className="absolute h-[2px] bg-zinc-800 top-1/2 left-0 right-0 -translate-y-1/2 z-0 min-w-[600px] sm:min-w-0" />
          <div
            className="absolute h-[2px] bg-blue-500 top-1/2 left-0 -translate-y-1/2 z-[1] transition-all duration-500 shadow-[0_0_12px_rgba(59,130,246,0.5)] min-w-0"
            style={{ width: `${timelineProgress}%` }}
          />
          <div className="relative z-10 flex gap-2 sm:gap-3 min-w-max sm:min-w-0 sm:flex-wrap sm:justify-center">
            {milestones.map((m) => {
              const isActive = m.key === activeKey;
              return (
                <button
                  key={m.key}
                  type="button"
                  onClick={() => setActiveKey(m.key)}
                  className={`relative z-10 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-[-0.01em] border transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? 'bg-[#0a4cff] text-white border-[#0a4cff] shadow-lg shadow-[#0a4cff]/30 scale-105'
                      : 'border-zinc-800/60 bg-zinc-900/80 text-zinc-400 hover:text-white hover:border-zinc-700'
                  }`}
                >
                  {m.tab}
                </button>
              );
            })}
          </div>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.key}
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className={`relative rounded-2xl border bg-zinc-900/20 overflow-hidden grid md:grid-cols-2 transition-colors duration-700 ${cardBorderClass(active.key)}`}
            >
              <motion.div
                className="absolute inset-0 pointer-events-none z-0"
                initial={false}
                animate={{
                  opacity: glowFlash ? 0.55 : 0,
                  scale: glowFlash ? 1.02 : 1,
                }}
                transition={{ duration: 0.35 }}
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(10,76,255,0.35), transparent 70%)',
                }}
              />

              <div className="relative z-10 p-8 sm:p-12 flex items-center justify-center min-h-[280px] md:min-h-[400px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`ambient-${active.key}`}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                  >
                    <PlaqueLeftMedia milestone={active} />
                  </motion.div>
                </AnimatePresence>
                <div className="relative z-10">
                  <PlaqueTiltCard src={active.image} alt={active.title} />
                </div>
              </div>

              <div className="relative z-10 p-6 sm:p-10 md:p-12 flex flex-col justify-center border-t md:border-t-0 md:border-l border-zinc-800/60">
                <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full border border-[#0a4cff]/30 bg-[#0a4cff]/10 mb-4">
                  <Trophy className="w-3.5 h-3.5 text-[#0a4cff]" />
                  <span className="text-xs font-semibold text-[#0a4cff]">{active.badge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-[-0.03em] text-white mb-3">{active.title}</h3>
                <p className="text-lg font-semibold bg-gradient-to-r from-[#0a4cff] to-blue-400 bg-clip-text text-transparent mb-4">
                  {active.highlight}
                </p>
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">{active.description}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          className="mt-12 md:mt-16 max-w-5xl mx-auto rounded-2xl border border-zinc-800/60 bg-zinc-900/30 px-6 py-10 sm:px-10 sm:py-12 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, #0a4cff15, transparent 70%)' }}
          />
          <h3 className="relative text-2xl md:text-3xl font-bold tracking-[-0.03em] text-white mb-4">
            Faça parte da{' '}
            <span className="bg-gradient-to-r from-[#0a4cff] to-blue-400 bg-clip-text text-transparent">
              Elite Wiven
            </span>
          </h3>
          <p className="relative text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Cada premiação vem acompanhada de benefícios exclusivos: taxas especiais, acesso a
            eventos VIP, networking com top sellers e muito mais.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
