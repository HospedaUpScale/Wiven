import { SectionHeader } from './SectionHeader';
import { Rocket, Phone, Calendar, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export const MethodologySection = () => {
  const steps = [
    {
      icon: Phone,
      number: '01',
      title: 'Onboarding personalizado',
      description: 'Entendemos seu produto, estrutura e momento para configurar a operação do seu jeito.',
    },
    {
      icon: Calendar,
      number: '02',
      title: 'Análise operacional',
      description: 'Pré-configuração e análise individual da operação — porque cada player tem necessidade diferente.',
    },
    {
      icon: TrendingUp,
      number: '03',
      title: 'Acompanhamento estratégico',
      description: 'Faturou acima de R$10 mil/mês? Você fala direto com um gerente de contas via WhatsApp.',
    },
  ];

  return (
    <section id="metodologia" className="py-12 sm:py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Estrutura para crescer"
          title="Estrutura para operações em"
          highlight="crescimento"
          description="Da fase de crescimento até operações já escaladas — entendemos que o problema não é o produto, é a falta de estrutura, recuperação, retenção e organização operacional."
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* Number Badge */}
                <motion.div 
                  className="absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.2, type: "spring" }}
                >
                  <span className="text-sm font-bold text-white">{step.number}</span>
                </motion.div>

                <div className="pt-4">
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.3 }}
                  >
                    <step.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Result */}
          <motion.div 
            className="mt-12 glass-card rounded-2xl p-8 border-primary/20 text-center"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div 
              className="flex items-center justify-center gap-4 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Rocket className="w-8 h-8 text-primary" />
              <span className="text-2xl md:text-3xl font-bold">Crescimento com previsibilidade</span>
            </motion.div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Funis mais eficientes, monetização inteligente, recuperação de vendas e estrutura escalável.
              Tudo construído para sua operação crescer com consistência.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
