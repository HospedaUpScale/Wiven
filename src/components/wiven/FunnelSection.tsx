import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowDownCircle,
  Flag,
  Heart,
  MousePointer2,
  ShoppingBag,
  ThumbsDown,
  ThumbsUp,
  TrendingUp,
  Zap,
} from 'lucide-react';
import wivenEagleSilhouette from '@/assets/wiven-logo.svg';

const steps = [
  {
    icon: TrendingUp,
    title: 'Upsell de 1 clique',
    description:
      'Oferte um segundo produto logo após a aprovação do pagamento, sem que o cliente precise digitar o cartão novamente.',
  },
  {
    icon: ArrowDownCircle,
    title: 'Downsell inteligente',
    description:
      'Recusou o upsell? Apresente uma oferta mais acessível ou uma condição especial para garantir a segunda venda.',
  },
  {
    icon: Heart,
    title: 'Página de obrigado customizada',
    description:
      'Deixe o improviso de lado. Entregue os dados de acesso, onboarding ou instruções de forma limpa e profissional.',
  },
];

const cardContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const floatingEagles = [
  {
    className: 'left-[3%] top-[52%] w-16 md:w-20 lg:w-24',
    rotate: '-8deg',
    duration: '9s',
    delay: '0s',
  },
  {
    className: 'right-[4%] bottom-[16%] w-14 md:w-20 lg:w-24',
    rotate: '12deg',
    duration: '13s',
    delay: '1.8s',
  },
];

type Tone = 'primary' | 'success' | 'danger' | 'amber';

const toneStyles: Record<Tone, { card: string; icon: string }> = {
  primary: { card: 'border-[#0a4cff]/40 bg-[#0a4cff]/10', icon: 'bg-[#0a4cff]/20 text-[#0a4cff]' },
  success: { card: 'border-emerald-500/40 bg-emerald-500/10', icon: 'bg-emerald-500/20 text-emerald-400' },
  danger: { card: 'border-rose-500/40 bg-rose-500/10', icon: 'bg-rose-500/20 text-rose-400' },
  amber: { card: 'border-amber-500/40 bg-amber-500/10', icon: 'bg-amber-500/20 text-amber-400' },
};

type NodeData = {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  tone: Tone;
  x: number;
  y: number;
};

type Anchor = 'left' | 'right' | 'top' | 'bottom';

type EdgeDef = {
  fromId: string;
  toId: string;
  fromAnchor: Anchor;
  toAnchor: Anchor;
  color: 'primary' | 'success' | 'danger';
  label?: { text: string; icon: React.ComponentType<{ className?: string }>; tone: 'success' | 'danger' };
};

type DragOffset = { x: number; y: number };

const edgeColorMap = {
  primary: '#0a4cff',
  success: 'rgb(52 211 153)',
  danger: 'rgb(244 63 94)',
};

const dNodes: NodeData[] = [
  { id: 'checkout', icon: Flag, title: 'Checkout', subtitle: 'Oferta • R$ 297', tone: 'primary', x: 3, y: 42 },
  { id: 'upsell1', icon: TrendingUp, title: 'Upsell de 1 clique', subtitle: 'Premium • R$ 497', tone: 'success', x: 28, y: 12 },
  { id: 'upsell2', icon: TrendingUp, title: 'Upsell de 1 clique', subtitle: 'VIP • R$ 397', tone: 'success', x: 53, y: 12 },
  { id: 'downsell', icon: ShoppingBag, title: 'Downsell', subtitle: 'Alternativa • R$ 97', tone: 'danger', x: 28, y: 72 },
  { id: 'obrigado', icon: Heart, title: 'Obrigado', subtitle: 'Página final', tone: 'amber', x: 78, y: 42 },
];
const D_NODE_W = 21;
const D_NODE_H = 15;
const dEdgeDefs: EdgeDef[] = [
  { fromId: 'checkout', toId: 'upsell1', fromAnchor: 'right', toAnchor: 'left', color: 'primary' },
  { fromId: 'upsell1', toId: 'upsell2', fromAnchor: 'right', toAnchor: 'left', color: 'success' },
  { fromId: 'upsell2', toId: 'obrigado', fromAnchor: 'right', toAnchor: 'left', color: 'success', label: { text: 'Aceitou', icon: ThumbsUp, tone: 'success' } },
  { fromId: 'upsell1', toId: 'downsell', fromAnchor: 'bottom', toAnchor: 'top', color: 'danger', label: { text: 'Recusou', icon: ThumbsDown, tone: 'danger' } },
  { fromId: 'downsell', toId: 'obrigado', fromAnchor: 'right', toAnchor: 'left', color: 'success' },
];
const dCursor = { left: ['14%', '38%', '62%', '86%', '62%', '14%'], top: ['50%', '16%', '16%', '50%', '84%', '50%'] };

const mNodes: NodeData[] = [
  { id: 'checkout', icon: Flag, title: 'Checkout', subtitle: 'Oferta • R$ 297', tone: 'primary', x: 6, y: 4 },
  { id: 'upsell1', icon: TrendingUp, title: 'Upsell de 1 clique', subtitle: 'Premium • R$ 497', tone: 'success', x: 6, y: 27 },
  { id: 'downsell', icon: ShoppingBag, title: 'Downsell', subtitle: 'R$ 97', tone: 'danger', x: 54, y: 27 },
  { id: 'upsell2', icon: TrendingUp, title: 'Upsell de 1 clique', subtitle: 'VIP • R$ 397', tone: 'success', x: 6, y: 51 },
  { id: 'obrigado', icon: Heart, title: 'Obrigado', subtitle: 'Página final', tone: 'amber', x: 30, y: 76 },
];
const M_NODE_W = 40;
const M_NODE_H = 14;
const mEdgeDefs: EdgeDef[] = [
  { fromId: 'checkout', toId: 'upsell1', fromAnchor: 'bottom', toAnchor: 'top', color: 'primary' },
  { fromId: 'upsell1', toId: 'downsell', fromAnchor: 'right', toAnchor: 'left', color: 'danger', label: { text: 'Recusou', icon: ThumbsDown, tone: 'danger' } },
  { fromId: 'upsell1', toId: 'upsell2', fromAnchor: 'bottom', toAnchor: 'top', color: 'success', label: { text: 'Aceitou', icon: ThumbsUp, tone: 'success' } },
  { fromId: 'upsell2', toId: 'obrigado', fromAnchor: 'bottom', toAnchor: 'top', color: 'success' },
  { fromId: 'downsell', toId: 'obrigado', fromAnchor: 'bottom', toAnchor: 'top', color: 'success' },
];
const mCursor = { left: ['26%', '26%', '74%', '50%', '26%'], top: ['11%', '34%', '34%', '83%', '58%'] };

const createInitialOffsets = (nodes: NodeData[]) =>
  Object.fromEntries(nodes.map((n) => [n.id, { x: 0, y: 0 }])) as Record<string, DragOffset>;

const getAnchorPoint = (
  node: NodeData,
  offset: DragOffset,
  anchor: Anchor,
  nodeW: number,
  nodeH: number,
  containerW: number,
  containerH: number,
) => {
  const ox = containerW ? (offset.x / containerW) * 100 : 0;
  const oy = containerH ? (offset.y / containerH) * 100 : 0;
  const nx = node.x + ox;
  const ny = node.y + oy;

  if (anchor === 'left') return { x: nx, y: ny + nodeH / 2 };
  if (anchor === 'right') return { x: nx + nodeW, y: ny + nodeH / 2 };
  if (anchor === 'top') return { x: nx + nodeW / 2, y: ny };
  return { x: nx + nodeW / 2, y: ny + nodeH };
};

const buildBezierPath = (
  start: { x: number; y: number },
  end: { x: number; y: number },
  fromAnchor: Anchor,
) => {
  const isVertical = fromAnchor === 'bottom' || fromAnchor === 'top';
  const cx1 = isVertical ? start.x : start.x + (end.x - start.x) * 0.45;
  const cy1 = isVertical ? start.y + (end.y - start.y) * 0.5 : start.y;
  const cx2 = isVertical ? end.x : end.x - (end.x - start.x) * 0.45;
  const cy2 = isVertical ? end.y - (end.y - start.y) * 0.5 : end.y;
  return `M ${start.x} ${start.y} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${end.x} ${end.y}`;
};

const DraggableFunnelNode = ({
  n,
  w,
  h,
  containerRef,
  offset,
  onOffsetChange,
}: {
  n: NodeData;
  w: number;
  h: number;
  containerRef: React.RefObject<HTMLDivElement>;
  offset: DragOffset;
  onOffsetChange: (id: string, next: DragOffset) => void;
}) => {
  const Icon = n.icon;
  const s = toneStyles[n.tone];

  return (
    <motion.div
      drag
      dragConstraints={containerRef}
      dragElastic={0.1}
      dragMomentum={false}
      style={{
        left: `${n.x}%`,
        top: `${n.y}%`,
        width: `${w}%`,
        height: `${h}%`,
        x: offset.x,
        y: offset.y,
      }}
      onDrag={(_, info) => onOffsetChange(n.id, { x: info.offset.x, y: info.offset.y })}
      className={`absolute z-20 cursor-grab touch-none active:cursor-grabbing rounded-lg sm:rounded-xl border ${s.card} backdrop-blur-sm p-1.5 sm:p-2 shadow-xl shadow-black/40`}
    >
      <div className="flex items-center gap-1 sm:gap-1.5 h-full min-w-0 pointer-events-none select-none">
        <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0 ${s.icon}`}>
          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </div>
        <div className="min-w-0">
          <p className="text-[8px] sm:text-[9px] text-zinc-500 truncate leading-tight">{n.subtitle}</p>
          <p className="text-[10px] sm:text-xs font-semibold text-white truncate leading-tight">{n.title}</p>
        </div>
      </div>
    </motion.div>
  );
};

const FunnelBuilder = ({
  nodes,
  edges,
  nodeW,
  nodeH,
  cursor,
  heightClass,
}: {
  nodes: NodeData[];
  edges: EdgeDef[];
  nodeW: number;
  nodeH: number;
  cursor: { left: string[]; top: string[] };
  heightClass: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offsets, setOffsets] = useState<Record<string, DragOffset>>(() => createInitialOffsets(nodes));
  const [containerSize, setContainerSize] = useState({ w: 1, h: 1 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateSize = () => {
      setContainerSize({ w: el.clientWidth || 1, h: el.clientHeight || 1 });
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

  const handleOffsetChange = (id: string, next: DragOffset) => {
    setOffsets((prev) => ({ ...prev, [id]: next }));
  };

  const resolveEdge = (edge: EdgeDef) => {
    const from = nodeMap[edge.fromId];
    const to = nodeMap[edge.toId];
    if (!from || !to) return null;

    const fromOffset = offsets[from.id] ?? { x: 0, y: 0 };
    const toOffset = offsets[to.id] ?? { x: 0, y: 0 };
    const start = getAnchorPoint(from, fromOffset, edge.fromAnchor, nodeW, nodeH, containerSize.w, containerSize.h);
    const end = getAnchorPoint(to, toOffset, edge.toAnchor, nodeW, nodeH, containerSize.w, containerSize.h);

    return { start, end, edge };
  };

  return (
    <div className="rounded-xl sm:rounded-2xl border border-zinc-800/60 bg-zinc-900/30 backdrop-blur-md shadow-2xl shadow-[#0a4cff]/10 overflow-hidden">
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 border-b border-zinc-800/60 bg-black/40">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
        </div>
        <span className="text-xs text-zinc-500 font-medium hidden sm:block">Funil de vendas</span>
        <span className="inline-flex items-center gap-1.5 text-[9px] sm:text-xs px-2 py-0.5 sm:py-1 rounded-full bg-[#0a4cff]/15 text-[#0a4cff] border border-[#0a4cff]/30">
          <Zap className="w-3 h-3" /> Arraste e solte
        </span>
      </div>

      <div
        ref={containerRef}
        className={`relative ${heightClass} bg-[#09090b]/80 overflow-hidden`}
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      >
        <svg className="absolute inset-0 pointer-events-none w-full h-full z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            {(['primary', 'success', 'danger'] as const).map((c) => (
              <marker
                key={c}
                id={`arrow-${c}-${heightClass}`}
                viewBox="0 0 10 10"
                refX="6"
                refY="5"
                markerWidth="5"
                markerHeight="5"
                orient="auto-start-reverse"
              >
                <path d="M0,0 L10,5 L0,10 z" fill={edgeColorMap[c]} />
              </marker>
            ))}
          </defs>
          {edges.map((edge, i) => {
            const resolved = resolveEdge(edge);
            if (!resolved) return null;
            const { start, end } = resolved;
            const d = buildBezierPath(start, end, edge.fromAnchor);
            return (
              <path
                key={i}
                d={d}
                stroke={edgeColorMap[edge.color]}
                strokeWidth="2.5"
                strokeDasharray="7 6"
                strokeLinecap="round"
                fill="none"
                markerEnd={`url(#arrow-${edge.color}-${heightClass})`}
                vectorEffect="non-scaling-stroke"
              />
            );
          })}
        </svg>

        {edges.map((edge, i) => {
          const resolved = resolveEdge(edge);
          if (!resolved) return null;
          const { start, end } = resolved;
          const ring =
            edge.color === 'primary' ? 'border-[#0a4cff]' : edge.color === 'success' ? 'border-emerald-400' : 'border-rose-400';
          return (
            <div key={`ep-${i}`} className="pointer-events-none">
              <div
                className={`absolute w-3 h-3 rounded-full border-2 ${ring} bg-black -translate-x-1/2 -translate-y-1/2`}
                style={{ left: `${start.x}%`, top: `${start.y}%` }}
              />
              <div
                className={`absolute w-3 h-3 rounded-full border-2 ${ring} bg-black -translate-x-1/2 -translate-y-1/2`}
                style={{ left: `${end.x}%`, top: `${end.y}%` }}
              />
            </div>
          );
        })}

        {edges
          .filter((e) => e.label)
          .map((edge, i) => {
            const resolved = resolveEdge(edge);
            if (!resolved || !edge.label) return null;
            const { start, end } = resolved;
            const mx = (start.x + end.x) / 2;
            const my = (start.y + end.y) / 2;
            const Lbl = edge.label.icon;
            const tone =
              edge.label.tone === 'success'
                ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                : 'bg-rose-500/20 border-rose-500/40 text-rose-300';
            return (
              <div
                key={`lbl-${i}`}
                className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 px-1.5 sm:px-2 py-0.5 rounded-full border text-[9px] sm:text-[10px] flex items-center gap-1 whitespace-nowrap pointer-events-none ${tone}`}
                style={{ left: `${mx}%`, top: `${my}%` }}
              >
                <Lbl className="w-3 h-3" /> {edge.label.text}
              </div>
            );
          })}

        {nodes.map((n) => (
          <DraggableFunnelNode
            key={n.id}
            n={n}
            w={nodeW}
            h={nodeH}
            containerRef={containerRef}
            offset={offsets[n.id] ?? { x: 0, y: 0 }}
            onOffsetChange={handleOffsetChange}
          />
        ))}

        <motion.div
          className="absolute z-30 pointer-events-none"
          initial={{ left: cursor.left[0], top: cursor.top[0] }}
          animate={{ left: cursor.left, top: cursor.top }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', type: 'tween' }}
        >
          <MousePointer2 className="w-5 h-5 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]" fill="currentColor" />
        </motion.div>
      </div>
    </div>
  );
};

export function FunnelSection() {
  return (
    <section id="funnel" aria-label="Funnel" className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] opacity-20"
        style={{ background: 'radial-gradient(ellipse, #0a4cff18 0%, transparent 70%)' }}
      />

      <style>{`
        @keyframes funnel-eagle-float {
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
          className={`absolute select-none pointer-events-none opacity-[0.12] md:opacity-[0.15] blur-[0.5px] z-0 ${eagle.className}`}
          style={
            {
              '--eagle-rotate': eagle.rotate,
              animation: `funnel-eagle-float ${eagle.duration} ease-in-out ${eagle.delay} infinite`,
            } as React.CSSProperties
          }
        />
      ))}

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-14 md:mb-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-[#0a4cff] border border-[#0a4cff]/20 bg-[#0a4cff]/10 mb-5">
            Monetização inteligente
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-white mb-4 sm:mb-5">
            Funis com upsell e downsell em{' '}
            <span className="bg-gradient-to-r from-[#0a4cff] to-blue-400 bg-clip-text text-transparent">
              arrasta e solta
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Conecte upsells 1-click em sequência, downsells e página de obrigado em um canvas visual.
            Sem código, sem complicação.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start max-w-7xl mx-auto overflow-hidden">
          <motion.div
            className="lg:col-span-7 min-w-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="sm:hidden">
              <FunnelBuilder
                nodes={mNodes}
                edges={mEdgeDefs}
                nodeW={M_NODE_W}
                nodeH={M_NODE_H}
                cursor={mCursor}
                heightClass="h-[340px]"
              />
            </div>
            <div className="hidden sm:block">
              <FunnelBuilder
                nodes={dNodes}
                edges={dEdgeDefs}
                nodeW={D_NODE_W}
                nodeH={D_NODE_H}
                cursor={dCursor}
                heightClass="h-[440px]"
              />
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 space-y-3 sm:space-y-4 min-w-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardContainerVariants}
          >
            {steps.map((step) => (
              <motion.div
                key={step.title}
                variants={cardItemVariants}
                className="group rounded-xl border border-blue-500/20 bg-blue-600/10 backdrop-blur-md p-4 sm:p-5 flex items-start gap-3 sm:gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-[0_0_25px_rgba(10,76,255,0.12)]"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-blue-600/30 group-hover:border-blue-500/50 group-hover:text-blue-300 group-hover:shadow-[0_0_15px_rgba(10,76,255,0.2)]">
                  <step.icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-white font-semibold mb-2">{step.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
