import { SectionHeader } from './SectionHeader';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const conditions = [
  { label: 'Recebimento em 30 dias', value: 'Padrão' },
  { label: 'Tarifa por transação aprovada', value: 'R$ 2,49' },
  { label: 'Antecipação 15 dias', value: '+1%' },
  { label: 'Antecipação 2 dias', value: '+3%' },
  { label: 'Pix D0', value: '8,99% + R$ 2,49' },
];

const perks = [
  'Prioridade no suporte',
  'Account manager dedicado',
  'Calls de otimização',
  'Acesso a integrações premium',
];

export const PricingSection = () => {
  return (
    <section id="taxas" className="py-20 md:py-28 relative bg-secondary/20">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Condição Personalizada"
          title="Quer entender qual estrutura"
          highlight="faz sentido para sua operação?"
          description="Cada operação possui necessidades diferentes. Fale com um gerente e receba análise operacional, direcionamento de estrutura, avaliação de escala e condições personalizadas."
        />

        <div className="max-w-5xl mx-auto">
          <motion.div
            className="glass-card rounded-3xl overflow-hidden grid md:grid-cols-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Left: Headline rate */}
            <div className="relative p-8 sm:p-10 md:p-12 bg-gradient-to-br from-primary/15 via-accent/10 to-transparent flex flex-col justify-center">
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.4), transparent 60%)`,
              }} />
              <div className="relative">
                <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
                  Taxa a partir de
                </p>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-6xl sm:text-7xl md:text-8xl font-bold gradient-text leading-none">
                    7,99%
                  </span>
                </div>
                <p className="text-base sm:text-lg text-muted-foreground mb-8">
                  + R$ 2,49 por transação aprovada no cartão de crédito.
                </p>

                <ul className="space-y-3 mb-8">
                  {perks.map((p, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="hero"
                  size="lg"
                  className="group w-full sm:w-auto"
                  onClick={() => window.open('https://wa.me/message/4M546VJJZ673G1', '_blank')}
                >
                  Falar com especialista
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Right: Conditions table */}
            <div className="p-8 sm:p-10 md:p-12">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-6">
                Condições da operação
              </p>

              <ul className="divide-y divide-border/50">
                {conditions.map((c, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center justify-between py-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                  >
                    <span className="text-sm text-muted-foreground">{c.label}</span>
                    <span className="text-sm font-semibold text-foreground">{c.value}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 p-4 rounded-xl border border-primary/20 bg-primary/5">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <span className="text-primary font-semibold">*</span> Taxas personalizadas conforme
                  volume mensal e perfil de operação. Quanto mais você fatura, melhor sua condição.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
