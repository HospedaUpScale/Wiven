import { Button } from '@/components/ui/button';
import { ArrowRight, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export const CTASection = () => {
  return (
    <section id="cta" className="py-12 sm:py-20 md:py-28 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <motion.div 
            className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-8 shadow-lg shadow-primary/30"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <Rocket className="w-10 h-10 text-white" />
          </motion.div>

          {/* Headline */}
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Escale com uma <span className="gradient-text">estrutura feita</span> para sua operação
          </motion.h2>

          {/* Subheadline */}
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Cada operação possui volume, estrutura e necessidades diferentes. Por isso a Wiven
            trabalha com análise individual e taxas personalizadas para cada player. Fale agora
            com um gerente de contas e descubra como estruturar sua operação com mais escala,
            retenção e previsibilidade.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button 
              variant="hero" 
              size="xl" 
              className="group w-full sm:w-auto"
              onClick={() => window.open('https://wa.me/message/4M546VJJZ673G1', '_blank')}
            >
              Falar com um gerente
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {[
              'Sem compromisso',
              'Resposta em 24h',
              'Consultoria gratuita',
            ].map((badge, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-2 text-sm text-muted-foreground"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                {badge}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
