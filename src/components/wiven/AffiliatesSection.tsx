import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BarChart3, Link2, TrendingUp, Users, Wallet } from 'lucide-react';
import wivenEagleSilhouette from '@/assets/wiven-logo.svg';

const features = [
  {
    icon: Users,
    title: 'Gestão Simplificada',
    description: 'Gerencie todos os seus afiliados em um único painel intuitivo e organizado.',
  },
  {
    icon: Link2,
    title: 'Links Rastreados',
    description: 'Cada afiliado com seu link único. Rastreamento preciso de cada venda.',
  },
  {
    icon: Wallet,
    title: 'Comissões Automáticas',
    description: 'Configure uma vez e deixe o sistema calcular e pagar automaticamente.',
  },
  {
    icon: BarChart3,
    title: 'Relatórios Detalhados',
    description: 'Veja performance individual e identifique seus melhores parceiros.',
  },
];

const CHART_XS = [0, 40, 80, 120, 160, 200, 240, 280, 320];
const CHART_BASE_Y = [85, 72, 58, 48, 38, 28, 22, 14, 8];

const INITIAL_AFFILIATES = [
  { name: 'Ana R.', sales: 92, initials: 'AR', ceiling: 98 },
  { name: 'Carlos M.', sales: 78, initials: 'CM', ceiling: 88 },
  { name: 'Julia S.', sales: 65, initials: 'JS', ceiling: 75 },
];

const TOAST_MESSAGES = ['+ R$ 150,00 Comissão Liberada', '+ R$ 320,00 Nova Venda'];

const floatingEagles = [
  {
    className: 'left-[2%] top-[12%] w-20 md:w-28 animate-[float_10s_ease-in-out_infinite]',
  },
  {
    className: 'right-[2%] bottom-[10%] w-16 md:w-24 animate-[float_14s_ease-in-out_infinite]',
  },
];

const featureStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const featureReveal = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

function buildChartPaths(ys: number[]) {
  const segments = ys.map((y, i) => `${i === 0 ? 'M' : 'L'}${CHART_XS[i]},${y}`).join(' ');
  return {
    line: segments,
    fill: `${segments} L320,100 L0,100 Z`,
  };
}

function nudgeChartPoints(current: number[]) {
  return current.map((y, i) => {
    const weight = i / (current.length - 1);
    const amplitude = 2 + weight * 5;
    const delta = (Math.random() - 0.48) * amplitude * 2;
    return Math.min(92, Math.max(6, y + delta));
  });
}

type AffiliateRow = (typeof INITIAL_AFFILIATES)[number];
type LiveToast = { id: number; text: string };

function AffiliateRevenueChart({ chartYs }: { chartYs: number[] }) {
  const uid = useId().replace(/:/g, '');
  const strokeId = `affiliateChartStroke-${uid}`;
  const fillId = `affiliateChartFill-${uid}`;
  const { line, fill } = buildChartPaths(chartYs);

  return (
    <div className="rounded-xl border border-zinc-800/60 bg-black/30 p-4">
      <div className="flex items-center justify-between mb-3">
        <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Faturamento de afiliados</p>
        <span className="flex items-center gap-1 text-xs text-emerald-400 font-medium">
          <TrendingUp className="w-3.5 h-3.5" />
          +24,8%
        </span>
      </div>
      <svg viewBox="0 0 320 100" className="w-full h-[100px]" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <linearGradient id={strokeId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1d4ed8" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
          <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(59,130,246,0.35)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0)" />
          </linearGradient>
        </defs>
        <motion.path
          fill={`url(#${fillId})`}
          animate={{ d: fill }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
        <motion.path
          fill="none"
          stroke={`url(#${strokeId})`}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ d: line }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
}

function AffiliateDashboardPanel() {
  const [chartYs, setChartYs] = useState(CHART_BASE_Y);
  const [affiliates, setAffiliates] = useState<AffiliateRow[]>(INITIAL_AFFILIATES);
  const [toasts, setToasts] = useState<LiveToast[]>([]);
  const toastIndexRef = useRef(0);

  const bumpAffiliateStats = useCallback(() => {
    setAffiliates((prev) =>
      prev.map((affiliate) => {
        const direction = Math.random() > 0.35 ? 1 : -1;
        const delta = direction * (1 + Math.floor(Math.random() * 3));
        const floor = Math.max(55, affiliate.sales - 8);
        const next = Math.min(affiliate.ceiling, Math.max(floor, affiliate.sales + delta));
        return { ...affiliate, sales: Math.round(next) };
      }),
    );
  }, []);

  const pushToast = useCallback(() => {
    const text = TOAST_MESSAGES[toastIndexRef.current % TOAST_MESSAGES.length];
    toastIndexRef.current += 1;
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, text }]);
    bumpAffiliateStats();
    window.setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2200);
  }, [bumpAffiliateStats]);

  useEffect(() => {
    const chartTimer = window.setInterval(() => {
      setChartYs((prev) => nudgeChartPoints(prev));
    }, 3000);
    return () => window.clearInterval(chartTimer);
  }, []);

  useEffect(() => {
    const firstToast = window.setTimeout(pushToast, 800);
    const toastTimer = window.setInterval(pushToast, 4000);
    return () => {
      window.clearTimeout(firstToast);
      window.clearInterval(toastTimer);
    };
  }, [pushToast]);

  return (
    <div className="col-span-1 lg:col-span-7 relative overflow-hidden p-[1px] rounded-2xl bg-zinc-800/40 h-full">
      <div
        className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_70%,#3b82f6_85%,#60a5fa_100%)] pointer-events-none z-0"
        aria-hidden="true"
      />
      <div className="relative z-10 w-full h-full min-h-[450px] bg-[#020719]/95 rounded-[15px] p-8 flex flex-col justify-between">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-zinc-500 mb-1">Painel Wiven</p>
            <h3 className="text-lg font-semibold text-white">Afiliados em tempo real</h3>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Online
          </span>
        </div>

        <div className="relative flex-1 flex flex-col gap-6 min-h-0">
          <AffiliateRevenueChart chartYs={chartYs} />

          <div className="rounded-xl border border-zinc-800/60 bg-black/30 p-4">
            <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-4">Melhores Afiliados</p>
            <ul className="space-y-3">
              {affiliates.map((affiliate) => (
                <li key={affiliate.name} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-[10px] font-bold text-blue-400 shrink-0">
                    {affiliate.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium text-white truncate">{affiliate.name}</span>
                      <motion.span
                        key={affiliate.sales}
                        className="text-xs text-blue-400 font-mono tabular-nums"
                        initial={{ opacity: 0.6, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.35 }}
                      >
                        {affiliate.sales}%
                      </motion.span>
                    </div>
                    <div className="h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-700 ease-out"
                        style={{ width: `${affiliate.sales}%` }}
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="absolute bottom-2 right-0 left-0 sm:left-auto sm:w-auto flex flex-col items-end gap-2 pointer-events-none z-20 px-1">
            <AnimatePresence mode="popLayout">
              {toasts.map((toast, index) => (
                <motion.div
                  key={toast.id}
                  layout
                  className="px-3 py-2 rounded-lg bg-[#0a4cff]/15 border border-[#0a4cff]/40 text-[11px] font-medium text-blue-300 shadow-[0_0_20px_rgba(10,76,255,0.25)] backdrop-blur-sm whitespace-nowrap"
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  style={{ marginBottom: index * 2 }}
                >
                  {toast.text}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AffiliatesSection() {
  return (
    <section id="affiliates" aria-label="Affiliates" className="relative bg-black py-24 md:py-32 lg:py-36 overflow-hidden">
      {floatingEagles.map((eagle, index) => (
        <img
          key={index}
          src={wivenEagleSilhouette}
          alt=""
          aria-hidden="true"
          className={`absolute pointer-events-none select-none opacity-[0.12] blur-[0.5px] z-0 ${eagle.className}`}
        />
      ))}

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.header
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wide text-[#0a4cff] border border-[#0a4cff]/25 bg-[#0a4cff]/10 mb-5">
            Sistema de afiliados
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white mb-5">
            Transforme outros players em canais de aquisição
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl mx-auto">
            Comissionamento automático, rastreamento inteligente e gestão simplificada para ampliar
            alcance, vendas e crescimento da sua operação.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto mt-16 relative z-10">
          <motion.div
            className="col-span-1 lg:col-span-5 flex flex-col gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={featureStagger}
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div key={feature.title} variants={featureReveal}>
                  <div className="relative overflow-hidden p-[1px] rounded-xl bg-zinc-800/30 group transition-all duration-300 hover:shadow-[0_0_25px_rgba(10,76,255,0.12)]">
                    <div
                      className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_70%,#3b82f6_85%,#60a5fa_100%)] pointer-events-none z-0"
                      aria-hidden="true"
                    />
                    <div className="relative z-10 w-full h-full bg-[#030b20]/95 backdrop-blur-xl rounded-[11px] p-6 flex gap-4">
                      <div className="bg-blue-600/20 text-blue-400 border border-blue-500/30 w-11 h-11 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-blue-600/30 transition-colors duration-300">
                        <Icon className="w-5 h-5 stroke-[1.5]" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                        <p className="text-sm text-zinc-400 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="col-span-1 lg:col-span-7"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <AffiliateDashboardPanel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
