import { SectionHeader } from './SectionHeader';
import { MessageCircle, Clock, User, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

export const SupportSection = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'WhatsApp direto',
      description: 'Sem ticket automático, sem fila. Cada operação possui acompanhamento individual via WhatsApp.',
    },
    {
      icon: User,
      title: 'Pessoas, não robôs',
      description: 'Sem respostas genéricas, sem enrolação. Você fala com gente que entende a sua operação.',
    },
    {
      icon: Headphones,
      title: 'Especialistas em operação',
      description: 'Time que entende tráfego pago, funis, monetização, recuperação, retenção e escala.',
    },
    {
      icon: Clock,
      title: 'Cada minuto importa',
      description: 'Quando sua operação trava, cada minuto custa dinheiro. Estamos prontos para destravar.',
    },
  ];

  return (
    <section id="suporte" className="py-12 sm:py-20 md:py-28 relative bg-secondary/20">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Atendimento humano de verdade"
          title="Suporte que entende"
          highlight="sua operação"
          description="Aqui você não fica preso em ticket automático. Fala com pessoas que entendem tráfego, funis, monetização, recuperação, retenção e escala de operações digitais."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass-card rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4"
                initial={{ scale: 0, rotate: -90 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2, type: "spring" }}
              >
                <feature.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
