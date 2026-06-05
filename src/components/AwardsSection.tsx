import { useEffect, useRef, useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy } from 'lucide-react';

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
};

const milestones: Milestone[] = [
  {
    key: '10k',
    tab: 'Premiação 10k',
    badge: '10 Mil Faturados',
    title: 'Kit Wiven',
    highlight: 'O primeiro marco.',
    description:
      'Uma caixa premium com itens oficiais Wiven pra selar sua entrada no jogo sério.',
    image: award10K,
  },
  {
    key: '100k',
    tab: 'Premiação 100k',
    badge: '100 Mil Faturados',
    title: 'Placa 100K + Reconhecimento Wiven',
    highlight: 'Reconhecimento oficial.',
    description:
      'Reconhecimento oficial pra quem chegou nos 100K com consistência e um kit premium Wiven pra selar o marco.',
    image: award100K,
  },
  {
    key: '500k',
    tab: 'Premiação 500k',
    badge: '500 Mil Faturados',
    title: '500K + Convidado no Podcast Wiven',
    highlight: 'Voz no ecossistema.',
    description:
      'Sua história ganha palco. Conte sua trajetória no Podcast Wiven e receba o kit oficial do marco.',
    image: award500K,
  },
  {
    key: '1m',
    tab: 'Premiação 1M',
    badge: '1 Milhão Faturados',
    title: 'Viagem Paris',
    highlight: 'Onde o padrão é natural.',
    description:
      'Um símbolo de maturidade: performance com elegância e operação no controle.',
    image: award1M,
  },
  {
    key: '5m',
    tab: 'Premiação 5M',
    badge: '5 Milhões Faturados',
    title: 'Viagem Dubai',
    highlight: 'A capital da ambição.',
    description:
      'Quando o jogo muda de nível, a recompensa acompanha. Um marco pra quem virou operação.',
    image: award5M,
  },
  {
    key: '10m',
    tab: 'Premiação 10M',
    badge: '10 Milhões Faturados',
    title: 'Alpes Suíços',
    highlight: 'Onde as lendas se encontram.',
    description:
      'Um troféu de elite pra quem construiu legado no mercado e virou referência.',
    image: award10M,
  },
  {
    key: '25m',
    tab: 'Premiação 25M',
    badge: '25 Milhões Faturados',
    title: 'Resort Top Tier',
    highlight: 'O destino do topo.',
    description:
      'Uma experiência rara pra quem alcançou o que poucos chegam: dominar o mercado com padrão.',
    image: award25M,
  },
];

export const AwardsSection = () => {
  const [activeKey, setActiveKey] = useState(milestones[0].key);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const active = milestones.find((m) => m.key === activeKey) ?? milestones[0];

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setActiveKey((current) => {
        const idx = milestones.findIndex((m) => m.key === current);
        return milestones[(idx + 1) % milestones.length].key;
      });
    }, 4000);
    return () => clearInterval(id);
  }, [isPaused]);

  return (
    <section
      id="premiacoes"
      ref={sectionRef}
      className="py-12 sm:py-20 md:py-28 relative bg-secondary/20"
    >
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Reconhecimento"
          title="Ser Wiven é mais do que vender."
          highlight="É conquistar."
          description="Cada marco é reconhecido de verdade — porque crescimento sério merece celebração séria."
        />

        {/* Tabs */}
        <div className="max-w-5xl mx-auto mb-10 overflow-x-auto">
          <div className="flex gap-2 sm:gap-3 min-w-max sm:min-w-0 sm:flex-wrap sm:justify-center px-1">
            {milestones.map((m) => {
              const isActive = m.key === activeKey;
              return (
                <button
                  key={m.key}
                  onClick={() => setActiveKey(m.key)}
                  className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium border transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground border-transparent shadow-lg shadow-primary/30'
                      : 'border-border/60 bg-secondary/40 text-muted-foreground hover:text-foreground hover:border-primary/40'
                  }`}
                >
                  {m.tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Milestone Card */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.key}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card rounded-3xl overflow-hidden grid md:grid-cols-2 gap-0"
            >
              {/* Image */}
              <div className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-transparent p-8 sm:p-12 flex items-center justify-center min-h-[300px] md:min-h-[420px]">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `radial-gradient(circle at center, hsl(var(--primary) / 0.4), transparent 60%)`,
                }} />
                <motion.img
                  key={active.image}
                  src={active.image}
                  alt={active.title}
                  className="relative w-56 sm:w-72 md:w-80 max-h-[360px] object-contain drop-shadow-2xl"
                  initial={{ scale: 0.85, rotate: -4 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, type: 'spring' }}
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-10 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-4">
                  <Trophy className="w-3.5 h-3.5 text-primary" />
                  <span className="text-xs font-semibold text-primary">{active.badge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
                  {active.title}
                </h3>
                <p className="text-lg sm:text-xl gradient-text font-semibold mb-4">
                  {active.highlight}
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {active.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Elite Banner */}
        <motion.div
          className="mt-12 relative overflow-hidden rounded-2xl max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />
          <div className="relative z-10 p-6 sm:p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Faça parte da <span className="gradient-text">Elite Wiven</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada premiação vem acompanhada de benefícios exclusivos: taxas especiais,
              acesso a eventos VIP, networking com top sellers e muito mais.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
