import { useRef, useEffect, useState, createContext, useContext } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence, useInView } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import {
  LayoutDashboard,
  Package,
  Store,
  Wallet,
  Banknote,
  Headphones,
  Users2,
  Settings,
  UserCircle2,
  Search,
  Filter,
  User,
  ExternalLink,
  Barcode,
  CreditCard,
} from 'lucide-react';
import wivenLogo from '@/assets/wiven-logo-full.svg';
import wivenPlaque from '@/assets/wiven-plaque.webp';
import award10K from '@/assets/awards/10K.webp';
import award100K from '@/assets/awards/100K.webp';
import award500K from '@/assets/awards/500K.webp';
import award1M from '@/assets/awards/1M.webp';
import award5M from '@/assets/awards/5M.webp';
import award10M from '@/assets/awards/10M.webp';
import award25M from '@/assets/awards/25M.webp';

// ─────────────────────────────────────────────────────────
// Evolution: revenue grows through milestones 10K → 100K → 500K → 1M.
// The "Próxima premiação" plaque and progress bar follow this state.
// ─────────────────────────────────────────────────────────
type Stage = { from: number; to: number; plaque: string; label: string };
const STAGES: Stage[] = [
  { from: 0,       to: 10_000,    plaque: award10K,  label: '10 Mil' },
  { from: 10_000,  to: 100_000,   plaque: award100K, label: '100 Mil' },
  { from: 100_000, to: 500_000,   plaque: award500K, label: '500 Mil' },
  { from: 500_000, to: 1_000_000, plaque: award1M,   label: '1 Milhão' },
];

type EvolutionState = {
  revenue: number;
  stageIndex: number;
  stage: Stage;
  popAmount: number | null;
};
const EvolutionContext = createContext<EvolutionState | null>(null);
const useEvolution = () => {
  const ctx = useContext(EvolutionContext);
  if (!ctx) throw new Error('useEvolution must be used within EvolutionProvider');
  return ctx;
};

const EvolutionProvider = ({ children, active }: { children: React.ReactNode; active: boolean }) => {
  const [revenue, setRevenue] = useState(0);
  const [stageIndex, setStageIndex] = useState(0);
  const [popAmount, setPopAmount] = useState<number | null>(null);
  const stageIdxRef = useRef(0);

  // Smooth count-up across stages. Each stage takes ~5.5s to fill.
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    let last = performance.now();
    const STAGE_DURATION = 16000;

    const tick = (t: number) => {
      const dt = t - last;
      last = t;
      const stage = STAGES[stageIdxRef.current];
      const span = stage.to - stage.from;
      const perMs = span / STAGE_DURATION;
      const inc = perMs * dt;

      setRevenue((prev) => {
        const next = prev + inc;
        if (next >= stage.to) {
          const nextIdx = (stageIdxRef.current + 1) % STAGES.length;
          stageIdxRef.current = nextIdx;
          setStageIndex(nextIdx);
          return STAGES[nextIdx].from;
        }
        return next;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active]);

  // Discrete "+R$" pop based on revenue jumps
  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => {
      const stage = STAGES[stageIdxRef.current];
      const amt = +((stage.to - stage.from) * 0.012 + Math.random() * 30).toFixed(2);
      setPopAmount(amt);
    }, 1400);
    return () => clearInterval(id);
  }, [active]);

  return (
    <EvolutionContext.Provider
      value={{ revenue, stageIndex, stage: STAGES[stageIndex], popAmount }}
    >
      {children}
    </EvolutionContext.Provider>
  );
};
import kevenPhoto from '@/assets/keven-founder.jpeg';
import wivenIconBlue from '@/assets/wiven-icon-blue.webp';

const PixIcon = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M12 2 L22 12 L12 22 L2 12 Z M12 5.5 L5.5 12 L12 18.5 L18.5 12 Z" />
  </svg>
);

// Revenue ticker — consumes shared evolution state
const RevenueTicker = () => {
  const { revenue, popAmount } = useEvolution();
  const reais = Math.floor(revenue).toLocaleString('pt-BR');
  const cents = revenue.toFixed(2).split('.')[1];

  return (
    <div className="relative">
      <motion.p
        key={Math.floor(revenue / 500)}
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="text-[26px] sm:text-[30px] font-bold text-[#0a1a2e] leading-none tabular-nums"
      >
        R${reais},<span className="text-[#0a4cff]/70">{cents}</span>
      </motion.p>

      <AnimatePresence>
        {popAmount !== null && (
          <motion.span
            key={popAmount + '-' + Math.floor(revenue)}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: -18 }}
            exit={{ opacity: 0, y: -32 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute -top-2 right-0 text-[11px] font-bold text-[#0a4cff] pointer-events-none"
          >
            +R${popAmount.toFixed(2).replace('.', ',')}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

// "Próxima premiação" card — plaque + progress synced to evolution
const NextAwardCard = () => {
  const { revenue, stage, stageIndex } = useEvolution();
  const span = stage.to - stage.from;
  const progressed = Math.max(0, Math.min(span, revenue - stage.from));
  const pct = (progressed / span) * 100;
  const fmt = (n: number) =>
    'R$ ' + Math.floor(n).toLocaleString('pt-BR');

  return (
    <div className="relative rounded-xl bg-white/[0.03] border border-white/10 p-4 overflow-hidden min-h-[190px] flex flex-col">
      <div className="flex items-start gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-white">Sua próxima premiação</p>
          <p className="text-[11px] text-white/45">Você tá quase lá</p>
        </div>

        {/* Plaque — large, well framed, no background frame */}
        <div className="relative w-[110px] sm:w-[124px] h-[124px] sm:h-[138px] shrink-0 -mt-1 -mr-1">
          <AnimatePresence mode="wait">
            <motion.img
              key={stageIndex}
              src={stage.plaque}
              alt={`Placa ${stage.label}`}
              initial={{ opacity: 0, scale: 0.75, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 w-full h-full object-contain drop-shadow-[0_12px_28px_hsl(220_100%_45%/0.7)]"
            />
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-auto pt-3">
        <div className="flex items-end justify-between gap-2 mb-1.5">
          <span className="text-[11px] text-white/85 font-medium tabular-nums">
            {fmt(progressed + stage.from)}
          </span>
          <span className="text-[11px] text-white/55 tabular-nums">{fmt(stage.to)}</span>
        </div>
        <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#0a4cff] to-[#5b8dff] rounded-full"
            animate={{ width: `${pct}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
      </div>
    </div>
  );
};

// Big "Vendas" total in chart card — also synced
const VendasTotal = () => {
  const { revenue } = useEvolution();
  return (
    <p className="text-base sm:text-lg font-bold text-white tabular-nums">
      R$ {Math.floor(revenue).toLocaleString('pt-BR')},
      <span className="text-white/70">{revenue.toFixed(2).split('.')[1]}</span>
    </p>
  );
};

// Saldo disponível p/ saque — fração do faturamento
const SaldoDisponivel = () => {
  const { revenue } = useEvolution();
  const saldo = revenue * 0.32;
  const reais = Math.floor(saldo).toLocaleString('pt-BR');
  const cents = saldo.toFixed(2).split('.')[1];
  return (
    <p className="text-[26px] sm:text-[30px] font-bold text-white mt-0.5 mb-auto leading-none tabular-nums">
      R${reais},<span className="text-white/70">{cents}</span>
    </p>
  );
};

type ChartPoint = { x: number; y: number; date: string; value: string };
const CHART_DATA: ChartPoint[] = [
  { x: 0, y: 140, date: 'Seg, 11', value: 'R$ 8.420' },
  { x: 67, y: 135, date: 'Ter, 12', value: 'R$ 9.180' },
  { x: 133, y: 148, date: 'Qua, 13', value: 'R$ 7.640' },
  { x: 200, y: 118, date: 'Qui, 14', value: 'R$ 14.230' },
  { x: 267, y: 50, date: 'Sex, 15', value: 'R$ 28.940' },
  { x: 333, y: 55, date: 'Sáb, 16', value: 'R$ 26.110' },
  { x: 400, y: 100, date: 'Dom, 17', value: 'R$ 22.750' },
];
const CHART_PATH =
  'M0,140 C22,138 45,132 67,135 C90,138 110,148 133,148 C155,148 180,130 200,118 C222,105 245,75 267,50 C290,32 310,40 333,55 C355,68 378,90 400,100';
const CHART_AREA = `${CHART_PATH} L400,180 L0,180 Z`;

const ChartArea = () => {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <div className="relative">
      <div className="relative h-48">
        <svg className="w-full h-full" viewBox="0 0 400 180" preserveAspectRatio="none">
          {[30, 70, 110, 150].map((y) => (
            <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="white" strokeOpacity="0.08" strokeDasharray="3 5" />
          ))}
          <defs>
            <linearGradient id="areaGrad2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0a4cff" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#0a4cff" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d={CHART_AREA}
            fill="url(#areaGrad2)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6 }}
          />
          <motion.path
            d={CHART_PATH}
            fill="none"
            stroke="white"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
          <motion.path
            d={CHART_PATH}
            fill="none"
            stroke="#5b8dff"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="60 340"
            animate={{ strokeDashoffset: [400, -60] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'linear', delay: 2 }}
            style={{ filter: 'drop-shadow(0 0 6px #0a4cff)' }}
          />
          <motion.circle
            cx={267}
            cy={50}
            r="4"
            fill="#5b8dff"
            animate={{ scale: [1, 2.2, 1], opacity: [0.9, 0, 0.9] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
            style={{ transformOrigin: '267px 50px' }}
          />
        </svg>

        {/* HTML overlay: dots + hover tooltip */}
        <div className="absolute inset-0 pointer-events-none">
          {CHART_DATA.map((p, i) => (
            <div
              key={i}
              className="absolute pointer-events-auto"
              style={{ left: `${(p.x / 400) * 100}%`, top: `${(p.y / 180) * 100}%`, transform: 'translate(-50%, -50%)' }}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
            >
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.4 + i * 0.22, ease: 'backOut' }}
                className={`w-2.5 h-2.5 rounded-full bg-white border-2 transition-all ${
                  hover === i ? 'border-[#5b8dff] scale-150 shadow-[0_0_12px_rgba(91,141,255,0.9)]' : 'border-[#0a4cff]/40'
                }`}
              />
              {/* Invisible hit area */}
              <div className="absolute -inset-3" />
              {hover === i && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 -translate-x-1/2 -top-2 -translate-y-full whitespace-nowrap rounded-lg bg-[#0a1633] border border-[#0a4cff]/50 px-2.5 py-1.5 shadow-[0_8px_24px_rgba(10,76,255,0.4)] z-10"
                >
                  <p className="text-[9px] uppercase tracking-wider text-white/55 leading-none mb-0.5">{p.date}</p>
                  <p className="text-[11px] font-bold text-white leading-none">{p.value}</p>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-2 h-2 rotate-45 bg-[#0a1633] border-r border-b border-[#0a4cff]/50 -mt-1" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Period labels */}
      <div className="flex justify-between mt-2 px-0.5">
        {CHART_DATA.map((p, i) => (
          <span key={i} className="text-[9px] text-white/45 font-medium">
            {p.date.split(',')[0]}
          </span>
        ))}
      </div>
    </div>
  );
};

export const DashboardSection = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapperRef, { margin: '-120px', once: false });
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rxSpring = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 18 });
  const rySpring = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 18 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapperRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section id="dashboard" className="py-12 sm:py-20 md:py-28 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] rounded-full bg-[#0a4cff]/10 blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <SectionHeader
          badge="Dados em Tempo Real"
          title="Dashboard"
          highlight="Inteligente"
          description="Todas as métricas que importam em um único lugar. Tome decisões baseadas em dados."
        />

        <EvolutionProvider active={inView}>
        <div
          ref={wrapperRef}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          className="max-w-5xl mx-auto mt-8"
          style={{ perspective: 1600 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 12 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ rotateX: rxSpring, rotateY: rySpring, transformStyle: 'preserve-3d' }}
            className="relative"
          >
            {/* Electric blue outer frame */}
            <div className="rounded-[28px] p-[3px] bg-gradient-to-br from-[#0a4cff] via-[#0a4cff]/60 to-[#0a4cff]/30 shadow-[0_40px_120px_-20px_hsl(220_100%_50%/0.5)]">
              <div className="rounded-[25px] bg-[#000814] overflow-hidden">
                <div className="grid grid-cols-12">

                {/* ─────────── Sidebar ─────────── */}
                <aside className="hidden md:flex col-span-3 lg:col-span-2 flex-col p-4 lg:p-5 border-r border-white/[0.06]">
                  <img src={wivenLogo} alt="Wiven" className="h-5 lg:h-6 w-auto mb-6 brightness-0 invert" />

                  <div className="relative mb-5">
                    <Search className="w-3 h-3 absolute left-2.5 top-1/2 -translate-y-1/2 text-white/40" />
                    <input
                      readOnly
                      placeholder="Pesquisar"
                      className="w-full bg-white/[0.04] border border-white/10 rounded-md pl-7 pr-2 py-1.5 text-[10px] text-white/60 placeholder:text-white/40 outline-none"
                    />
                  </div>

                  <p className="text-[9px] uppercase tracking-wider text-white/40 mb-1.5 px-1">General</p>
                  <nav className="space-y-0.5 mb-5">
                    {[
                      { icon: LayoutDashboard, label: 'Dashboard', active: true },
                      { icon: Package, label: 'Produtos' },
                      { icon: Store, label: 'Vitrine' },
                      { icon: Wallet, label: 'Financeiro' },
                      { icon: Banknote, label: 'Saques' },
                    ].map(({ icon: Icon, label, active }) => (
                      <button
                        key={label}
                        className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-[11px] transition-colors ${
                          active
                            ? 'bg-white/[0.06] border border-white/10 text-white'
                            : 'text-white/55 hover:text-white hover:bg-white/[0.03] border border-transparent'
                        }`}
                      >
                        <Icon className="w-3 h-3" strokeWidth={1.75} />
                        {label}
                      </button>
                    ))}
                  </nav>

                  <p className="text-[9px] uppercase tracking-wider text-white/40 mb-1.5 px-1">Account</p>
                  <nav className="space-y-0.5">
                    {[
                      { icon: Headphones, label: 'Suporte' },
                      { icon: Users2, label: 'Afiliados' },
                      { icon: Settings, label: 'Configurações' },
                      { icon: UserCircle2, label: 'Minha conta' },
                    ].map(({ icon: Icon, label }) => (
                      <button
                        key={label}
                        className="w-full flex items-center gap-2 px-2 py-1.5 rounded-md text-[11px] text-white/55 hover:text-white hover:bg-white/[0.03] transition-colors"
                      >
                        <Icon className="w-3 h-3" strokeWidth={1.75} />
                        {label}
                      </button>
                    ))}
                  </nav>
                </aside>

                {/* ─────────── Main ─────────── */}
                <div className="col-span-12 md:col-span-9 lg:col-span-10 p-4 sm:p-5 lg:p-6 space-y-4">
                  {/* Top bar */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-2.5">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-white leading-tight">Visão geral</h3>
                        <p className="text-[11px] text-white/45">Com a Wiven você voa Alto!</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-right hidden sm:block">
                        <p className="text-xs font-semibold text-white leading-tight">Kevones</p>
                        <p className="text-[10px] text-white/45">Sua conta</p>
                      </div>
                      <div className="w-9 h-9 rounded-full border border-white/15 overflow-hidden">
                        <img src={kevenPhoto} alt="Kevones" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>

                  {/* Geral + filter */}
                  <div className="flex items-center gap-3 pt-1">
                    <h4 className="text-lg sm:text-xl font-bold text-white">Geral</h4>
                    <button className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] text-white/70">
                      <Filter className="w-3 h-3 text-[#0a4cff]" />
                      Última semana
                    </button>
                  </div>

                  {/* ──── Top stat row ──── */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {/* Vendas hoje — light */}
                    <div className="relative rounded-xl bg-gradient-to-br from-white via-[#eaf2ff] to-[#cfe0ff] p-4 overflow-hidden min-h-[170px]">
                      <p className="text-sm font-bold text-[#0a1a2e]">Vendas hoje</p>
                      <p className="text-[10px] text-[#0a1a2e]/55 mb-8">Parabéns, você lucrou muito hoje!</p>
                      <RevenueTicker />
                      <p className="text-[11px] mt-2">
                        <motion.span
                          animate={{ opacity: [1, 0.6, 1] }}
                          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                          className="text-[#0a4cff] font-bold"
                        >
                          +5.29%
                        </motion.span>{' '}
                        <span className="text-[#0a1a2e]/55">Que ontem</span>
                      </p>
                      {/* decorative waves bottom-right */}
                      <svg className="absolute -bottom-1 -right-1 w-40 h-24 opacity-90" viewBox="0 0 200 100" fill="none">
                        <path d="M0,70 Q40,40 80,55 T160,45 T240,55 L240,100 L0,100 Z" fill="#0a4cff" fillOpacity="0.08" />
                        <path d="M0,82 Q50,55 100,68 T200,60 L200,100 L0,100 Z" fill="#0a4cff" fillOpacity="0.12" />
                      </svg>
                    </div>

                    {/* Próxima premiação — synced to evolution */}
                    <NextAwardCard />

                    {/* Carteira */}
                    <div className="rounded-xl bg-white/[0.03] border border-white/10 p-4 min-h-[170px] flex flex-col">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[11px] text-white/60">Sua carteira:</p>
                        <button className="text-[10px] text-white/45 hover:text-white">Ver mais</button>
                      </div>
                      <p className="text-[11px] text-white/45">Saldo disponível:</p>
                      <SaldoDisponivel />
                      <button className="w-full mt-3 py-2.5 rounded-lg bg-[#0a4cff] hover:bg-[#0840d6] text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-[0_6px_20px_hsl(220_100%_40%/0.5)]">
                        <ExternalLink className="w-3.5 h-3.5" /> Solicitar Saque
                      </button>
                    </div>
                  </div>

                  {/* ──── Chart + side stack ──── */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                    {/* Chart */}
                    <div className="lg:col-span-2 rounded-xl bg-white/[0.03] border border-white/10 p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="text-sm font-bold text-white">Vendas</p>
                          <p className="text-[11px] text-white/45">Última semana</p>
                        </div>
                        <div className="text-right">
                          <VendasTotal />
                          <p className="text-[11px] text-white/45">+105 vendas</p>
                        </div>
                      </div>

                      <ChartArea />

                    </div>

                    {/* Side stack */}
                    <div className="space-y-3">
                      {/* Métodos de Pagamento */}
                      <div className="rounded-xl bg-white/[0.03] border border-white/10 p-4">
                        <div className="flex items-center justify-between mb-3">
                          <p className="text-sm font-bold text-white">Métodos de Pagamento</p>
                          <button className="text-[10px] text-white/45 hover:text-white">Ver todos</button>
                        </div>
                        {[
                          { Icon: PixIcon, label: 'Pix', sub: '90% - 38/44', pct: 90, tint: 'bg-[#0a4cff]/15 text-[#5b8dff]' },
                          { Icon: Barcode, label: 'Boleto', sub: '80% - 32/44', pct: 80, tint: 'bg-white/10 text-white' },
                          { Icon: CreditCard, label: 'Cartão', sub: '98% - 82/84', pct: 98, tint: 'bg-[#0a4cff]/15 text-[#5b8dff]' },
                        ].map(({ Icon, label, sub, pct, tint }) => (
                          <div key={label} className="flex items-center gap-2.5 py-1.5">
                            <div className={`w-8 h-8 rounded-md flex items-center justify-center ${tint}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-[12px] font-semibold text-white leading-tight">{label}</p>
                              <p className="text-[9px] text-white/45">{sub}</p>
                            </div>
                            <span className="text-[11px] font-semibold text-white">{pct}%</span>
                          </div>
                        ))}
                      </div>

                      {/* Vendas por Produto */}
                      <div className="rounded-xl bg-white/[0.03] border border-white/10 p-4">
                        <p className="text-sm font-bold text-white">Vendas por Produto</p>
                        <p className="text-[11px] text-white/45 mb-3">Lista do que você vendeu</p>
                        {[
                          { name: 'Seleta Comunidade', qty: '124 Vendas' },
                          { name: 'Mordomizze', qty: '50 Vendas' },
                        ].map((p) => (
                          <div
                            key={p.name}
                            className="flex items-center justify-between px-3 py-2 rounded-md bg-white/[0.03] border border-white/5 mb-1.5 last:mb-0"
                          >
                            <span className="text-[11px] text-white">{p.name}</span>
                            <span className="text-[11px] text-white/55">{p.qty}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </motion.div>
        </div>
        </EvolutionProvider>
      </div>
    </section>
  );
};
