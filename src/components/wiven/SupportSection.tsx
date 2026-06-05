import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Clock, Headphones, MessageCircle, User } from 'lucide-react';
import wivenEagleSilhouette from '@/assets/wiven-logo.svg';

const checklistItems = [
  {
    icon: MessageCircle,
    title: 'WhatsApp direto',
    description:
      'Sem ticket automático, sem fila. Cada operação possui acompanhamento individual via WhatsApp.',
  },
  {
    icon: User,
    title: 'Pessoas, não robôs',
    description:
      'Sem respostas genéricas, sem enrolação. Você fala com gente que entende a sua operação.',
  },
  {
    icon: Headphones,
    title: 'Especialistas em operação',
    description:
      'Time que entende tráfego pago, funis, monetização, recuperação, retenção e escala.',
  },
  {
    icon: Clock,
    title: 'Cada minuto importa',
    description:
      'Quando sua operação trava, cada minuto custa dinheiro. Estamos prontos para destravar.',
  },
];

type ChatMessage = {
  id: string;
  role: 'player' | 'support';
  initials: string;
  label: string;
  text: string;
};

const chatMessages: ChatMessage[] = [
  {
    id: 'm1',
    role: 'player',
    initials: 'PL',
    label: 'Player',
    text: 'Fala time! Meu checkout caiu por erro de gateway na outra plataforma, preciso migrar a operação pra Wiven agora.',
  },
  {
    id: 'm2',
    role: 'support',
    initials: 'WV',
    label: 'Suporte Wiven',
    text: 'Aopa, vamos subir isso agora mesmo! Manda o link do seu produto atual.',
  },
  {
    id: 'm3',
    role: 'player',
    initials: 'PL',
    label: 'Player',
    text: 'Enviei aqui. Preciso de ajuda também na integração do webhook de contingência.',
  },
  {
    id: 'm4',
    role: 'support',
    initials: 'WV',
    label: 'Suporte Wiven',
    text: 'Análise concluída aqui. Webhook ajustado e operando com 100% de sucesso. Pode rodar o tráfego!',
  },
];

const MESSAGE_INTERVAL_MS = 3500;
const PAUSE_BEFORE_RESET_MS = 3200;

const floatingEagles = [
  { className: 'left-[2%] top-[18%] w-20 md:w-28 animate-[float_10s_ease-in-out_infinite]' },
  { className: 'right-[2%] bottom-[14%] w-16 md:w-24 animate-[float_14s_ease-in-out_infinite]' },
];

function ChatBubble({ msg }: { msg: ChatMessage }) {
  const isPlayer = msg.role === 'player';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`flex gap-3 w-full ${isPlayer ? 'justify-start' : 'justify-end'}`}
    >
      {isPlayer && (
        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-[10px] font-bold text-zinc-400">
          {msg.initials}
        </div>
      )}
      <div
        className={
          isPlayer
            ? 'bg-zinc-900/80 border border-zinc-800 text-zinc-300 rounded-2xl rounded-tl-none p-4 max-w-[80%] text-sm leading-relaxed'
            : 'bg-blue-600/10 border border-blue-500/30 text-blue-100 rounded-2xl rounded-tr-none p-4 max-w-[80%] text-sm leading-relaxed shadow-[0_0_20px_rgba(59,130,246,0.05)]'
        }
      >
        <p className="text-[10px] font-semibold uppercase tracking-wide mb-1.5 opacity-70">{msg.label}</p>
        <p>{msg.text}</p>
      </div>
      {!isPlayer && (
        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-[10px] font-bold text-blue-300 shadow-[0_0_12px_rgba(59,130,246,0.35)]">
          {msg.initials}
        </div>
      )}
    </motion.div>
  );
}

function SupportChatPanel() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [cycleKey, setCycleKey] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timeouts: number[] = [];
    let cancelled = false;

    const runCycle = () => {
      if (cancelled) return;
      timeouts.forEach((t) => window.clearTimeout(t));
      timeouts.length = 0;

      setVisibleCount(0);
      setCycleKey((k) => k + 1);

      chatMessages.forEach((_, index) => {
        timeouts.push(
          window.setTimeout(() => {
            if (!cancelled) setVisibleCount(index + 1);
          }, (index + 1) * MESSAGE_INTERVAL_MS),
        );
      });

      timeouts.push(
        window.setTimeout(() => {
          if (!cancelled) runCycle();
        }, chatMessages.length * MESSAGE_INTERVAL_MS + PAUSE_BEFORE_RESET_MS),
      );
    };

    runCycle();

    return () => {
      cancelled = true;
      timeouts.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [visibleCount, cycleKey]);

  return (
    <div className="relative overflow-hidden p-[1px] rounded-2xl bg-zinc-800/40 shadow-[0_0_50px_rgba(10,76,255,0.05)] h-full">
      <div
        className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_70%,#3b82f6_85%,#60a5fa_100%)] pointer-events-none z-0"
        aria-hidden="true"
      />
      <div className="relative z-10 w-full h-full min-h-[480px] bg-[#020719]/95 rounded-[15px] flex flex-col overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-zinc-800/60 shrink-0">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-300">
              SLA de Resposta Humana
            </span>
            <div className="flex items-center gap-2 text-xs text-zinc-400 font-medium">
              <span className="w-2 h-2 rounded-full animate-pulse bg-emerald-500 shadow-[0_0_10px_#10b981]" />
              Central ativa · especialistas online
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-medium shrink-0">
            <span className="text-emerald-400">●</span> Médias de 4min
          </span>
        </div>

        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto overflow-x-hidden px-5 py-5 space-y-4 scroll-smooth min-h-[340px] max-h-[400px]"
        >
          <AnimatePresence mode="popLayout">
            {chatMessages.slice(0, visibleCount).map((msg) => (
              <ChatBubble key={`${cycleKey}-${msg.id}`} msg={msg} />
            ))}
          </AnimatePresence>

          {visibleCount === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center h-full min-h-[200px]"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/60 border border-zinc-800/80">
                <span className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </span>
                <span className="text-xs text-zinc-500">Conectando com especialista...</span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export function SupportSection() {
  return (
    <section id="support" aria-label="Support" className="relative bg-black py-24 md:py-32 lg:py-36 overflow-hidden">
      {floatingEagles.map((eagle, index) => (
        <img
          key={index}
          src={wivenEagleSilhouette}
          alt=""
          aria-hidden="true"
          className={`absolute pointer-events-none select-none opacity-[0.12] blur-[0.5px] z-0 ${eagle.className}`}
        />
      ))}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto mt-16 relative z-10 px-4 md:px-6">
        <motion.div
          className="lg:col-span-5 flex flex-col"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block w-fit px-4 py-1.5 rounded-full text-sm font-medium text-[#0a4cff] border border-[#0a4cff]/20 bg-[#0a4cff]/10 mb-5">
            Atendimento humano de verdade
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-white mb-5 leading-tight">
            Suporte que entende sua operação
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed mb-8">
            Aqui você não fica preso em ticket automático. Fala com pessoas que entendem tráfego,
            funis, monetização, recuperação, retenção e escala de operações digitais.
          </p>

          <ul className="space-y-3">
            {checklistItems.map((item, index) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative overflow-hidden p-[1px] rounded-xl bg-zinc-900/60 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(10,76,255,0.1)] group">
                  <div className="bg-[#030b20]/40 backdrop-blur-md rounded-[11px] p-5 border border-zinc-800/40 group-hover:border-blue-500/30 transition-colors duration-300 flex items-start gap-4">
                    <div className="flex-shrink-0 bg-blue-600/10 border border-blue-500/20 text-blue-400 p-2 rounded-lg group-hover:bg-blue-600/20 group-hover:text-blue-300 transition-all duration-300">
                      <Check className="w-4 h-4 stroke-[2.5]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-white font-medium text-sm mb-1">{item.title}</p>
                      <p className="text-zinc-500 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <SupportChatPanel />
        </motion.div>
      </div>
    </section>
  );
}
