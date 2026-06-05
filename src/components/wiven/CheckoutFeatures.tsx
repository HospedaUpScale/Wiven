import { motion } from 'framer-motion';
import { Layers, ShoppingCart, Target, TrendingUp } from 'lucide-react';
import wivenEagleSilhouette from '@/assets/wiven-logo.svg';

const features = [
  {
    icon: ShoppingCart,
    title: 'Modelos validados',
    description:
      'Templates testados por milhares de operações digitais para sair do improviso desde o primeiro clique.',
  },
  {
    icon: TrendingUp,
    title: 'Recuperação avançada',
    description:
      'Pix expirado, cartão recusado e checkout abandonado deixam de ser perda viram venda recuperada.',
  },
  {
    icon: Target,
    title: 'Tráfego segmentado',
    description:
      'Checkouts otimizados para tráfego frio, morno e quente com elementos específicos para cada momento.',
  },
  {
    icon: Layers,
    title: 'Customização total',
    description:
      'Personalize cores, textos, urgência e prova social para cada oferta em segundos.',
  },
];

const floatingEagles = [
  {
    className: 'left-[4%] top-[42%] w-16 md:w-20 lg:w-24',
    rotate: '-10deg',
    duration: '8s',
    delay: '0s',
  },
  {
    className: 'right-[5%] bottom-[18%] w-14 md:w-20 lg:w-24',
    rotate: '14deg',
    duration: '12s',
    delay: '1.5s',
  },
];

const headerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const cardsStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.25 },
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

export function CheckoutFeatures() {
  return (
    <section id="funcionalidades" aria-label="Checkout Features" className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full z-0" />
      <div className="pointer-events-none absolute top-[58%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-900/15 blur-[130px] rounded-full z-0" />

      {/* Floating eagle silhouettes */}
      <style>{`
        @keyframes checkout-eagle-float {
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
              animation: `checkout-eagle-float ${eagle.duration} ease-in-out ${eagle.delay} infinite`,
            } as React.CSSProperties
          }
        />
      ))}

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="relative max-w-3xl mx-auto text-center mb-14 md:mb-20"
          variants={headerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            variants={fadeUp}
            className="relative inline-block px-4 py-1.5 rounded-full text-sm font-medium text-[#0a4cff] border border-[#0a4cff]/20 bg-[#0a4cff]/10 mb-5"
          >
            Muito além de um checkout
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-white mb-4 sm:mb-5"
          >
            Estrutura completa para{' '}
            <span className="bg-gradient-to-r from-[#0a4cff] to-blue-400 bg-clip-text text-transparent">
              cada clique virar venda
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="relative text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          >
            Não entregamos só uma página de pagamento. Entregamos a estrutura por trás dela checkout,
            recuperação, monetização e otimização contínua.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto"
          variants={cardsStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {features.map((feature) => (
            <motion.article
              key={feature.title}
              variants={fadeUp}
              className="group relative rounded-2xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-600/50 hover:shadow-[0_0_30px_rgba(10,76,255,0.15)]"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0a4cff]/15 border border-[#0a4cff]/25 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-[#0a4cff]/25 group-hover:border-[#0a4cff]/50 group-hover:shadow-[0_0_20px_rgba(10,76,255,0.35)] group-hover:animate-pulse">
                <feature.icon className="w-6 h-6 text-[#0a4cff] stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{feature.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
