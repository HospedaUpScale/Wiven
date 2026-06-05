import { motion } from 'framer-motion';
import { Calendar, Phone, Rocket, TrendingUp } from 'lucide-react';
import wivenEagleSilhouette from '@/assets/wiven-logo.svg';

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Onboarding personalizado',
    description:
      'Entendemos seu produto, estrutura e momento para configurar a operação do seu jeito.',
  },
  {
    number: '02',
    icon: Calendar,
    title: 'Análise operacional',
    description:
      'Pré-configuração e análise individual da operação porque cada player tem necessidade diferente.',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Acompanhamento estratégico',
    description:
      'Faturou acima de R$10 mil/mês? Você fala direto com um gerente de contas via WhatsApp.',
  },
];

const floatingEagles = [
  {
    className: 'left-[2%] top-[10%] w-20 md:w-28 lg:w-32 animate-[float_12s_ease-in-out_infinite]',
  },
  {
    className: 'right-[2%] bottom-[8%] w-16 md:w-24 lg:w-28 animate-[float_16s_ease-in-out_infinite]',
  },
];

const cardStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.08 },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function GrowthStructure() {
  return (
    <section
      id="growth-structure"
      aria-label="Growth Structure"
      className="relative bg-black py-24 md:py-32 lg:py-36 overflow-hidden"
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

      <div className="container mx-auto px-5 sm:px-8 md:px-6 relative z-10">
        <motion.header
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-[#0a4cff] border border-[#0a4cff]/20 bg-[#0a4cff]/10 mb-5">
            Estrutura para crescer
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-[-0.03em] text-white mb-5 sm:mb-6 leading-[1.1]">
            Estrutura para operações em{' '}
            <span className="bg-gradient-to-r from-[#0a4cff] to-blue-400 bg-clip-text text-transparent">
              crescimento
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Da fase de crescimento até operações já escaladas entendemos que o problema não é o
            produto, é a falta de estrutura, recuperação, retenção e organização operacional.
          </p>
        </motion.header>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={cardStagger}
        >
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.number} variants={cardReveal} className="h-full">
                <div className="relative overflow-hidden p-[1px] rounded-2xl bg-zinc-800/40 group hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_30px_rgba(10,76,255,0.15)] h-full">
                  <div
                    className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_70%,#3b82f6_85%,#60a5fa_100%)] pointer-events-none z-0"
                    aria-hidden="true"
                  />
                  <div className="relative z-10 w-full h-full bg-[#030b20]/95 backdrop-blur-xl rounded-[15px] p-7 flex flex-col min-h-[280px]">
                    <div className="flex justify-between items-start mb-6">
                      <div className="bg-blue-600/10 border border-blue-500/30 text-blue-400 p-3 rounded-xl group-hover:bg-blue-600/20 group-hover:text-blue-300 transition-colors duration-300">
                        <Icon className="w-6 h-6 stroke-[1.5]" />
                      </div>
                      <span className="font-mono text-xs font-bold tracking-wider text-blue-400 bg-blue-950/50 border border-blue-500/30 px-3 py-1 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-white font-semibold text-xl mb-3">{step.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="max-w-7xl mx-auto mt-12 relative overflow-hidden p-[1px] rounded-2xl bg-zinc-800/30"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="absolute inset-[-1000%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_70%,#3b82f6_85%,#60a5fa_100%)] pointer-events-none z-0"
            aria-hidden="true"
          />
          <div className="relative z-10 w-full h-full bg-gradient-to-r from-[#030b20]/95 to-[#051642]/90 backdrop-blur-xl rounded-[15px] flex flex-col items-center justify-center text-center gap-4 p-8">
            <h3 className="text-xl md:text-2xl font-bold flex items-center justify-center gap-3 text-white">
              <Rocket className="w-7 h-7 md:w-8 md:h-8 text-[#0a4cff] -rotate-12 stroke-[1.5] flex-shrink-0" />
              Crescimento com previsibilidade
            </h3>
            <p className="text-zinc-400 text-base max-w-3xl leading-relaxed mx-auto">
              Funis mais eficientes, monetização inteligente, recuperação de vendas e estrutura escalável.
              Tudo construído para sua operação crescer com consistência.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
