import { SectionHeader } from './SectionHeader';
import { motion } from 'framer-motion';
import { Globe, Languages } from 'lucide-react';

const features = [
  {
    icon: Languages,
    title: 'Checkout com idioma automático',
    description: 'A página de pagamento se adapta ao idioma do comprador para maximizar conversão.',
  },
  {
    icon: Globe,
    title: 'Aceitamos mais de 46 países',
    description: 'Estrutura global pronta para vender em qualquer lugar e receber como quiser.',
  },
];

export const GlobalSalesSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="hero-glow top-0 left-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          badge="Operação Global"
          title="Vendas"
          highlight="sem fronteiras"
          description="Estrutura global para vender em qualquer lugar e receber como quiser."
        />

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                className="glass-card rounded-2xl p-6 sm:p-8 text-center hover:border-primary/40 transition-colors"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
