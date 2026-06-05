import { SectionHeader } from './SectionHeader';
import { ArrowDown, TrendingUp, MousePointer2, ShoppingBag, ThumbsUp, ThumbsDown, Flag, Zap, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: TrendingUp,
    title: 'Upsell 1-Click',
    description: 'Ofertas premium aceitas em um clique, sem digitar cartão de novo — conversão máxima.',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    icon: ArrowDown,
    title: 'Downsell',
    description: 'Recupere clientes indecisos com alternativas irresistíveis.',
    color: 'from-teal-500 to-emerald-500',
  },
  {
    icon: Heart,
    title: 'Página de obrigado',
    description: 'Finalize o fluxo com a confirmação da compra e próximos passos claros para o cliente.',
    color: 'from-amber-500 to-orange-500',
  },
];

type Tone = 'primary' | 'success' | 'danger' | 'amber';

const toneStyles: Record<Tone, { card: string; icon: string }> = {
  primary: { card: 'border-primary/40 bg-primary/10', icon: 'bg-primary/20 text-primary' },
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

type Edge = {
  from: NodeData;
  to: NodeData;
  fromAnchor: Anchor;
  toAnchor: Anchor;
  color: 'primary' | 'success' | 'danger';
  label?: { text: string; icon: React.ComponentType<{ className?: string }>; tone: 'success' | 'danger' };
  labelPos?: { x: number; y: number };
};

const edgeColorMap = {
  primary: 'hsl(var(--primary))',
  success: 'rgb(52 211 153)',
  danger: 'rgb(244 63 94)',
};

// ============ DESKTOP layout ============
const dNodes: NodeData[] = [
  { id: 'checkout', icon: Flag, title: 'Checkout', subtitle: 'Oferta • R$ 297', tone: 'primary', x: 3, y: 42 },
  { id: 'upsell1', icon: TrendingUp, title: 'Upsell 1-Click', subtitle: 'Premium • R$ 497', tone: 'success', x: 28, y: 12 },
  { id: 'upsell2', icon: TrendingUp, title: 'Upsell 1-Click', subtitle: 'VIP • R$ 997', tone: 'success', x: 53, y: 12 },
  { id: 'downsell', icon: ShoppingBag, title: 'Downsell', subtitle: 'Alternativa • R$ 97', tone: 'danger', x: 28, y: 72 },
  { id: 'obrigado', icon: Heart, title: 'Obrigado', subtitle: 'Página final', tone: 'amber', x: 78, y: 42 },
];
const D_NODE_W = 21;
const D_NODE_H = 15;
const dEdges: Edge[] = [
  { from: dNodes[0], to: dNodes[1], fromAnchor: 'right', toAnchor: 'left', color: 'primary' },
  { from: dNodes[1], to: dNodes[2], fromAnchor: 'right', toAnchor: 'left', color: 'success', label: { text: 'Aceitou', icon: ThumbsUp, tone: 'success' }, labelPos: { x: 50.5, y: 20 } },
  { from: dNodes[2], to: dNodes[4], fromAnchor: 'right', toAnchor: 'left', color: 'success', label: { text: 'Aceitou', icon: ThumbsUp, tone: 'success' }, labelPos: { x: 73, y: 36 } },
  { from: dNodes[1], to: dNodes[3], fromAnchor: 'bottom', toAnchor: 'top', color: 'danger', label: { text: 'Recusou', icon: ThumbsDown, tone: 'danger' }, labelPos: { x: 38.5, y: 51 } },
  { from: dNodes[3], to: dNodes[4], fromAnchor: 'right', toAnchor: 'left', color: 'success' },
];
const dCursor = { left: ['14%', '38%', '62%', '86%', '62%', '14%'], top: ['50%', '16%', '16%', '50%', '84%', '50%'] };

// ============ MOBILE layout (vertical, branch to the right) ============
const mNodes: NodeData[] = [
  { id: 'checkout', icon: Flag, title: 'Checkout', subtitle: 'Oferta • R$ 297', tone: 'primary', x: 6, y: 4 },
  { id: 'upsell1', icon: TrendingUp, title: 'Upsell 1-Click', subtitle: 'Premium • R$ 497', tone: 'success', x: 6, y: 27 },
  { id: 'downsell', icon: ShoppingBag, title: 'Downsell', subtitle: 'R$ 97', tone: 'danger', x: 54, y: 27 },
  { id: 'upsell2', icon: TrendingUp, title: 'Upsell 1-Click', subtitle: 'VIP • R$ 997', tone: 'success', x: 6, y: 51 },
  { id: 'obrigado', icon: Heart, title: 'Obrigado', subtitle: 'Página final', tone: 'amber', x: 30, y: 76 },
];
const M_NODE_W = 40;
const M_NODE_H = 14;
const mEdges: Edge[] = [
  { from: mNodes[0], to: mNodes[1], fromAnchor: 'bottom', toAnchor: 'top', color: 'primary' },
  { from: mNodes[1], to: mNodes[2], fromAnchor: 'right', toAnchor: 'left', color: 'danger', label: { text: 'Recusou', icon: ThumbsDown, tone: 'danger' }, labelPos: { x: 50, y: 31 } },
  { from: mNodes[1], to: mNodes[3], fromAnchor: 'bottom', toAnchor: 'top', color: 'success', label: { text: 'Aceitou', icon: ThumbsUp, tone: 'success' }, labelPos: { x: 26, y: 48 } },
  { from: mNodes[3], to: mNodes[4], fromAnchor: 'bottom', toAnchor: 'top', color: 'success' },
  { from: mNodes[2], to: mNodes[4], fromAnchor: 'bottom', toAnchor: 'top', color: 'success' },
];
const mCursor = { left: ['26%', '26%', '74%', '50%', '26%'], top: ['11%', '34%', '34%', '83%', '58%'] };

const leftMid = (n: NodeData, w: number, h: number) => ({ x: n.x, y: n.y + h / 2 });
const rightMid = (n: NodeData, w: number, h: number) => ({ x: n.x + w, y: n.y + h / 2 });
const topMid = (n: NodeData, w: number, h: number) => ({ x: n.x + w / 2, y: n.y });
const bottomMid = (n: NodeData, w: number, h: number) => ({ x: n.x + w / 2, y: n.y + h });

const anchorPoint = (n: NodeData, anchor: Anchor, w: number, h: number) => {
  if (anchor === 'left') return leftMid(n, w, h);
  if (anchor === 'right') return rightMid(n, w, h);
  if (anchor === 'top') return topMid(n, w, h);
  return bottomMid(n, w, h);
};

const FunnelNode = ({ n, w, h }: { n: NodeData; w: number; h: number }) => {
  const Icon = n.icon;
  const s = toneStyles[n.tone];
  return (
    <div
      className={`absolute rounded-lg sm:rounded-xl border ${s.card} backdrop-blur-sm p-1.5 sm:p-2 shadow-xl shadow-black/40`}
      style={{ left: `${n.x}%`, top: `${n.y}%`, width: `${w}%`, height: `${h}%` }}
    >
      <div className="flex items-center gap-1 sm:gap-1.5 h-full min-w-0">
        <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0 ${s.icon}`}>
          <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </div>
        <div className="min-w-0">
          <p className="text-[8px] sm:text-[9px] text-muted-foreground truncate leading-tight">{n.subtitle}</p>
          <p className="text-[10px] sm:text-xs font-semibold text-foreground truncate leading-tight">{n.title}</p>
        </div>
      </div>
    </div>
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
  edges: Edge[];
  nodeW: number;
  nodeH: number;
  cursor: { left: string[]; top: string[] };
  heightClass: string;
}) => {
  return (
    <div className="rounded-xl sm:rounded-2xl border border-border/60 bg-card/60 backdrop-blur-md shadow-2xl shadow-primary/10 overflow-hidden">
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 border-b border-border/50 bg-background/40">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
        </div>
        <span className="text-xs text-muted-foreground font-medium hidden sm:block">Funil de vendas</span>
        <span className="inline-flex items-center gap-1.5 text-[9px] sm:text-xs px-2 py-0.5 sm:py-1 rounded-full bg-primary/15 text-primary border border-primary/30">
          <Zap className="w-3 h-3" /> Arraste e solte
        </span>
      </div>

      <div
        className={`relative ${heightClass} bg-background/30 overflow-hidden`}
        style={{
          backgroundImage: 'radial-gradient(hsl(var(--border) / 0.5) 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      >
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            {(['primary', 'success', 'danger'] as const).map((c) => (
              <marker key={c} id={`arrow-${c}-${heightClass}`} viewBox="0 0 10 10" refX="6" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill={edgeColorMap[c]} />
              </marker>
            ))}
          </defs>
          {edges.map((e, i) => {
            const start = anchorPoint(e.from, e.fromAnchor, nodeW, nodeH);
            const end = anchorPoint(e.to, e.toAnchor, nodeW, nodeH);
            const isVertical = e.fromAnchor === 'bottom' || e.fromAnchor === 'top';
            const cx1 = isVertical ? start.x : start.x + (end.x - start.x) * 0.45;
            const cy1 = isVertical ? start.y + (end.y - start.y) * 0.5 : start.y;
            const cx2 = isVertical ? end.x : end.x - (end.x - start.x) * 0.45;
            const cy2 = isVertical ? end.y - (end.y - start.y) * 0.5 : end.y;
            const d = `M ${start.x} ${start.y} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${end.x} ${end.y}`;
            return (
              <path
                key={i}
                d={d}
                stroke={edgeColorMap[e.color]}
                strokeWidth="2.5"
                strokeDasharray="7 6"
                strokeLinecap="round"
                fill="none"
                markerEnd={`url(#arrow-${e.color}-${heightClass})`}
                vectorEffect="non-scaling-stroke"
              />
            );
          })}
        </svg>

        {edges.map((e, i) => {
          const start = anchorPoint(e.from, e.fromAnchor, nodeW, nodeH);
          const end = anchorPoint(e.to, e.toAnchor, nodeW, nodeH);
          const ring = e.color === 'primary'
            ? 'border-primary'
            : e.color === 'success'
            ? 'border-emerald-400'
            : 'border-rose-400';
          return (
            <div key={`ep-${i}`} className="pointer-events-none">
              <div className={`absolute w-3 h-3 rounded-full border-2 ${ring} bg-background -translate-x-1/2 -translate-y-1/2`} style={{ left: `${start.x}%`, top: `${start.y}%` }} />
              <div className={`absolute w-3 h-3 rounded-full border-2 ${ring} bg-background -translate-x-1/2 -translate-y-1/2`} style={{ left: `${end.x}%`, top: `${end.y}%` }} />
            </div>
          );
        })}

        {edges.filter((e) => e.label).map((e, i) => {
          const start = anchorPoint(e.from, e.fromAnchor, nodeW, nodeH);
          const end = anchorPoint(e.to, e.toAnchor, nodeW, nodeH);
          const mx = e.labelPos?.x ?? (start.x + end.x) / 2;
          const my = e.labelPos?.y ?? (start.y + end.y) / 2;
          const Lbl = e.label!.icon;
          const tone = e.label!.tone === 'success'
            ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
            : 'bg-rose-500/20 border-rose-500/40 text-rose-300';
          return (
            <div
              key={i}
              className={`absolute -translate-x-1/2 -translate-y-1/2 px-1.5 sm:px-2 py-0.5 rounded-full border text-[9px] sm:text-[10px] flex items-center gap-1 whitespace-nowrap ${tone}`}
              style={{ left: `${mx}%`, top: `${my}%` }}
            >
              <Lbl className="w-3 h-3" /> {e.label!.text}
            </div>
          );
        })}

        {nodes.map((n) => <FunnelNode key={n.id} n={n} w={nodeW} h={nodeH} />)}

        <motion.div
          className="absolute z-10"
          initial={{ left: cursor.left[0], top: cursor.top[0] }}
          animate={{ left: cursor.left, top: cursor.top }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', type: 'tween' }}
        >
          <MousePointer2 className="w-5 h-5 text-foreground drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]" fill="currentColor" />
        </motion.div>
      </div>
    </div>
  );
};

export const FunnelSection = () => {
  return (
    <section id="funil" className="py-12 sm:py-20 md:py-28 relative bg-secondary/20">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Monetização inteligente"
          title="Funis com upsell e downsell em"
          highlight="arrasta e solta"
          description="Conecte upsells 1-click em sequência, downsells e página de obrigado em um canvas visual. Sem código, sem complicação."
        />

        <div className="grid lg:grid-cols-[minmax(0,1fr)_18rem] xl:grid-cols-[minmax(0,1fr)_22rem] gap-6 lg:gap-8 items-start max-w-7xl mx-auto overflow-hidden">
          <motion.div
            className="min-w-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Mobile builder */}
            <div className="sm:hidden">
              <FunnelBuilder
                nodes={mNodes}
                edges={mEdges}
                nodeW={M_NODE_W}
                nodeH={M_NODE_H}
                cursor={mCursor}
                heightClass="h-[340px]"
              />
            </div>
            {/* Desktop / tablet builder */}
            <div className="hidden sm:block">
              <FunnelBuilder
                nodes={dNodes}
                edges={dEdges}
                nodeW={D_NODE_W}
                nodeH={D_NODE_H}
                cursor={dCursor}
                heightClass="h-[440px]"
              />
            </div>
          </motion.div>

          <div className="space-y-3 sm:space-y-4 min-w-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-5 flex items-start gap-3 sm:gap-4 hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
              >
                <div
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                >
                  <step.icon className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
