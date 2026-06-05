import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Check,
  Clock,
  Filter,
  GitMerge,
  Loader2,
  Package,
  PlayCircle,
  Settings,
  ShoppingCart,
  Tag,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import wivenEagleSilhouette from '@/assets/wiven-logo.svg';

type MigrationItem = {
  icon: LucideIcon;
  label: string;
};

const migrationItems: MigrationItem[] = [
  { icon: Package, label: 'Produtos' },
  { icon: ShoppingCart, label: 'Checkout' },
  { icon: Filter, label: 'Funis' },
  { icon: PlayCircle, label: 'Área de membros' },
  { icon: Tag, label: 'Ofertas' },
  { icon: GitMerge, label: 'Automações' },
  { icon: Settings, label: 'Estrutura operacional' },
];

const CYCLE_DURATION_MS = 12000;
const ITEM_COUNT = migrationItems.length;

const floatingEagles = [
  { className: 'left-[2%] top-[14%] w-20 md:w-28 animate-[float_12s_ease-in-out_infinite]' },
  { className: 'right-[2%] bottom-[12%] w-16 md:w-24 animate-[float_16s_ease-in-out_infinite]' },
];

function getItemStatus(
  index: number,
  progress: number,
): 'pending' | 'active' | 'complete' {
  const step = 100 / ITEM_COUNT;
  const start = index * step;
  const end = (index + 1) * step;

  if (progress >= end - 0.5) return 'complete';
  if (progress >= start) return 'active';
  return 'pending';
}

function MigrationCheckRow({
  item,
  status,
}: {
  item: MigrationItem;
  status: 'pending' | 'active' | 'complete';
}) {
  const Icon = item.icon;
  const isComplete = status === 'complete';
  const isActive = status === 'active';

  return (
    <div
      className={`flex items-center gap-4 rounded-xl border px-4 py-3 transition-all duration-500 ${
        isComplete
          ? 'border-[#0a4cff]/30 bg-[#0a4cff]/5'
          : isActive
            ? 'border-blue-500/40 bg-blue-500/5 shadow-[0_0_20px_rgba(10,76,255,0.12)]'
            : 'border-zinc-800/50 bg-zinc-950/40'
      }`}
    >
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-all duration-500 ${
          isComplete
            ? 'border-[#0a4cff]/40 bg-[#0a4cff]/15'
            : isActive
              ? 'border-blue-400/50 bg-blue-500/15'
              : 'border-zinc-800 bg-zinc-900/80'
        }`}
      >
        <Icon
          className={`h-5 w-5 stroke-[1.5] transition-colors duration-500 ${
            isComplete || isActive ? 'text-[#3b82f6]' : 'text-zinc-600'
          }`}
        />
      </div>

      <div className="min-w-0 flex-1">
        <AnimatePresence mode="wait">
          <motion.p
            key={isComplete ? 'done' : 'label'}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35 }}
            className={`text-sm font-medium tracking-[-0.01em] transition-colors duration-500 ${
              isComplete ? 'text-white' : isActive ? 'text-blue-200' : 'text-zinc-500'
            }`}
          >
            {isComplete ? `${item.label} transferido para a Wiven` : item.label}
          </motion.p>
        </AnimatePresence>
        {isActive && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-0.5 text-xs text-blue-400/80"
          >
            Sincronizando módulo…
          </motion.p>
        )}
      </div>

      <div className="flex h-6 w-6 shrink-0 items-center justify-center">
        {isComplete && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0a4cff] shadow-[0_0_12px_rgba(10,76,255,0.6)]"
          >
            <Check className="h-3.5 w-3.5 text-white stroke-[2.5]" />
          </motion.div>
        )}
        {isActive && !isComplete && (
          <Loader2 className="h-5 w-5 animate-spin text-blue-400" />
        )}
      </div>
    </div>
  );
}

export function MigrationSection() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = (now - start) % CYCLE_DURATION_MS;
      setProgress((elapsed / CYCLE_DURATION_MS) * 100);
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const displayPercent = Math.min(100, Math.round(progress));
  const completedModules = migrationItems.filter(
    (_, i) => getItemStatus(i, progress) === 'complete',
  ).length;

  return (
    <section
      id="migracao"
      aria-label="Migração assistida"
      className="relative overflow-hidden bg-black py-20 md:py-28 lg:py-32"
    >
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
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] opacity-15 z-0"
        style={{ background: 'radial-gradient(ellipse, #0a4cff18 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center max-w-4xl mx-auto z-10 relative"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-[#0a4cff] border border-[#0a4cff]/20 bg-[#0a4cff]/10">
            Migração assistida
          </span>
          <h2 className="text-white text-3xl md:text-5xl font-bold tracking-tight mt-4 text-center whitespace-nowrap">
            Migrar para a Wiven é{' '}
            <span className="bg-gradient-to-r from-[#0a4cff] to-blue-400 bg-clip-text text-transparent">
              simples
            </span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base mt-4 max-w-2xl leading-relaxed">
            A maioria dos players acha que trocar de plataforma é complicado. Na prática, nossa equipe
            faz praticamente tudo para você — de forma rápida e organizada.
          </p>
        </motion.div>

        <motion.div
          className="w-full max-w-3xl mx-auto mt-12 relative z-10"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative overflow-hidden p-[1px] rounded-2xl bg-zinc-800/40 shadow-[0_0_60px_rgba(10,76,255,0.08)]">
            <div className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_70%,#3b82f6_85%,#60a5fa_100%)] pointer-events-none z-0" />
            <div className="relative z-10 rounded-[15px] bg-[#030b20]/60 backdrop-blur-md border border-zinc-900/80 p-6 min-h-[450px] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                      Infraestrutura Wiven
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-600">v2.4 · importação ativa</span>
                </div>
                <p className="text-sm font-medium text-zinc-300 mb-5 text-left">
                  Painel de migração da operação
                </p>

                <div className="mb-6">
                  <div className="flex items-end justify-between mb-2">
                    <span className="text-xs text-zinc-500">Progresso global</span>
                    <motion.span
                      key={displayPercent}
                      className="text-2xl font-bold tabular-nums bg-gradient-to-r from-[#0a4cff] to-blue-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(59,130,246,0.5)]"
                    >
                      {displayPercent}%
                    </motion.span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-zinc-900 overflow-hidden border border-zinc-800/80">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-[#0a4cff] via-blue-400 to-cyan-400 shadow-[0_0_16px_rgba(59,130,246,0.6)]"
                      style={{ width: `${progress}%` }}
                      transition={{ type: 'tween', ease: 'linear', duration: 0.05 }}
                    />
                  </div>
                </div>

                <div className="space-y-2.5">
                  {migrationItems.map((item, index) => (
                    <MigrationCheckRow
                      key={item.label}
                      item={item}
                      status={getItemStatus(index, progress)}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-zinc-500">
                <span>
                  {completedModules} de {ITEM_COUNT} módulos sincronizados
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={progress < 99 ? 'sync' : 'done'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="font-mono text-blue-400/90 sm:text-right"
                  >
                    {progress < 99 ? 'Importando dados do cliente…' : 'Migração concluída · reiniciando'}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-full max-w-3xl mx-auto mt-6 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative overflow-hidden p-[1px] rounded-2xl bg-zinc-900/50">
            <div className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_70%,#3b82f6_85%,#60a5fa_100%)] pointer-events-none z-0" />
            <div className="relative z-10 rounded-[15px] bg-[#030b20]/95 backdrop-blur-xl px-6 py-5 text-center">
              <h3 className="text-lg md:text-xl font-bold flex items-center justify-center gap-2 text-white mb-2">
                <Clock className="w-6 h-6 text-[#0a4cff] stroke-[1.5] flex-shrink-0" />
                Pronto em menos de 24 horas
              </h3>
              <p className="text-zinc-400 text-sm font-light leading-relaxed max-w-xl mx-auto">
                Sem dor de cabeça. Sem travar sua operação. Sem perder vendas no processo.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
