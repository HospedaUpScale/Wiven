import { SectionHeader } from './SectionHeader';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import kevenPhoto from '@/assets/keven-founder.jpeg';

export const FounderSection = () => {
  return (
    <section id="idealizador" className="py-12 sm:py-20 md:py-28 relative bg-secondary/20">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Por trás da Wiven"
          title="Conheça o"
          highlight="idealizador"
          description="A Wiven nasceu da experiência prática de quem vive o mercado digital todos os dias."
        />

        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-10 items-center">
          <motion.div
            className="relative mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden glass-card border-primary/20">
              <img
                src={kevenPhoto}
                alt="Keven — Idealizador da Wiven"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-2xl md:text-3xl font-bold">Kevones</h3>
              <span className="text-sm text-muted-foreground">— Idealizador da Wiven</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Especialista em tráfego pago e operações digitais, conhecido por construir
              estratégias focadas em escala, monetização e crescimento previsível.
              Acompanhou de perto os maiores gargalos enfrentados por produtores e players:
              checkout limitando operações, suportes demorados, baixa retenção, funis mal
              estruturados e plataformas que não acompanham o crescimento do usuário.
            </p>
            <div className="glass-card rounded-2xl p-6 border-primary/20 relative">
              <Quote className="w-8 h-8 text-primary/60 absolute -top-3 -left-3" />
              <p className="text-base md:text-lg italic leading-relaxed">
                "Escala não depende apenas de um checkout. Depende da estrutura por trás dele."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
