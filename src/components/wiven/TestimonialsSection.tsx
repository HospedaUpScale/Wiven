import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

type Testimonial = {
  name: string;
  handle: string;
  revenue: string;
  quote: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Juan Ernandez',
    handle: '@juanernandez',
    revenue: 'R$ 2.4M+',
    quote: 'Migrei três operações pra Wiven. Checkout, funil e suporte no mesmo nível.',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    name: 'Kath Conce',
    handle: '@kathconce',
    revenue: 'R$ 890K+',
    quote: 'Recuperação de carrinho virou a maior alavanca de receita do meu funil.',
    avatar: 'https://i.pravatar.cc/150?img=32',
  },
  {
    name: 'Nicoly Fernandes',
    handle: '@nicolyfernandes',
    revenue: 'R$ 1.8M+',
    quote: 'Upsell de 1 clique aumentou meu ticket em 34% no primeiro mês.',
    avatar: 'https://i.pravatar.cc/150?img=47',
  },
  {
    name: 'Rafael Fernandes',
    handle: '@rafaelfernandes',
    revenue: 'R$ 3.1M+',
    quote: 'Operação grande precisa de estabilidade. A Wiven entrega isso todo dia.',
    avatar: 'https://i.pravatar.cc/150?img=33',
  },
  {
    name: 'Juliana Torres',
    handle: '@julianatorres',
    revenue: 'R$ 650K+',
    quote: 'Suporte via WhatsApp com gente que entende tráfego. Isso não tem preço.',
    avatar: 'https://i.pravatar.cc/150?img=45',
  },
  {
    name: 'Gustavo Castro',
    handle: '@gustavocastro',
    revenue: 'R$ 1.2M+',
    quote: 'Dashboard, afiliados e integrações num ecossistema só. Simplificou tudo.',
    avatar: 'https://i.pravatar.cc/150?img=14',
  },
  {
    name: 'Letícia Falcão',
    handle: '@leticiafalcao',
    revenue: 'R$ 780K+',
    quote: 'Premiações reais, operação real. A Wiven joga o jogo sério com a gente.',
    avatar: 'https://i.pravatar.cc/150?img=49',
  },
  {
    name: 'David Tomaz',
    handle: '@davidtomaz',
    revenue: 'R$ 4.5M+',
    quote: 'Gateway redundante salvou minha operação em Black Friday. Zero downtime.',
    avatar: 'https://i.pravatar.cc/150?img=53',
  },
];

const TestimonialCard = ({ item }: { item: Testimonial }) => (
  <div className="w-[350px] flex-shrink-0 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 p-6">
    <div className="flex items-center gap-4 mb-4">
      <img
        src={item.avatar}
        alt={item.name}
        className="w-12 h-12 rounded-full object-cover border border-zinc-700/60"
        loading="lazy"
      />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-white tracking-[-0.01em] truncate">{item.name}</p>
        <p className="text-xs text-zinc-500 flex items-center gap-1">
          <Instagram className="w-3 h-3" />
          {item.handle}
        </p>
      </div>
      <span className="flex-shrink-0 text-[10px] font-bold px-2.5 py-1 rounded-full bg-gradient-to-r from-[#0a4cff]/20 to-blue-500/20 text-[#0a4cff] border border-[#0a4cff]/30 whitespace-nowrap">
        {item.revenue}
      </span>
    </div>
    <p className="text-sm text-zinc-400 leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
  </div>
);

const MarqueeRow = ({ items, reverse }: { items: Testimonial[]; reverse?: boolean }) => (
  <div className="overflow-hidden">
    <div
      className="flex gap-5 w-max"
      style={{ animation: `${reverse ? 'wiven-testimonial-reverse' : 'wiven-testimonial'} 55s linear infinite` }}
    >
      {[...items, ...items].map((item, idx) => (
        <TestimonialCard key={`${item.handle}-${idx}`} item={item} />
      ))}
    </div>
  </div>
);

export function TestimonialsSection() {
  const row1 = testimonials.slice(0, 4);
  const row2 = testimonials.slice(4);

  return (
    <section id="testimonials" aria-label="Testimonials" className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      <style>{`
        @keyframes wiven-testimonial {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes wiven-testimonial-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>

      <div className="container mx-auto px-4 md:px-6 mb-12 md:mb-16">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wide text-[#0a4cff] border border-[#0a4cff]/25 bg-[#0a4cff]/10 mb-5">
            Prova social
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white">
            A estrutura escolhida por quem joga o jogo sério
          </h2>
        </motion.div>
      </div>

      <div className="relative space-y-5">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-black to-transparent z-10" />
      </div>
    </section>
  );
}
