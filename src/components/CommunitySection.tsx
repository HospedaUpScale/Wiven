import { SectionHeader } from './SectionHeader';
import { MessageSquare, Users, Lightbulb, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export const CommunitySection = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Top Sellers',
      description: 'Conecte-se apenas com quem realmente escala.',
    },
    {
      icon: Lightbulb,
      title: 'Estratégias',
      description: 'Acesso a táticas que funcionam no momento.',
    },
    {
      icon: MessageSquare,
      title: 'Networking',
      description: 'Parcerias e collabs com outros produtores.',
    },
    {
      icon: Lock,
      title: 'Exclusivo',
      description: 'Conteúdo e bastidores que não existem em outro lugar.',
    },
  ];

  return (
    <section id="comunidade" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Networking Elite"
          title="Comunidade Wiven"
          highlight="Top Sellers"
          description="Uma comunidade exclusiva no WhatsApp para quem está comprometido em escalar."
        />

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="glass-card rounded-2xl p-6 flex items-start gap-4 hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 0, y: 40, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"
                  initial={{ scale: 0, rotate: -90 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: "spring" }}
                >
                  <benefit.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Card */}
          <motion.div 
            className="mt-12 glass-card rounded-2xl p-8 border-primary/20 text-center"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div 
              className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center mx-auto mb-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
            >
              <MessageSquare className="w-8 h-8 text-green-500" />
            </motion.div>
            <motion.h3 
              className="text-xl font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              Grupo Exclusivo no WhatsApp
            </motion.h3>
            <motion.p 
              className="text-muted-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              Acesso liberado automaticamente para sellers que atingem determinadas metas.
            </motion.p>
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.9 }}
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-green-500">+500 sellers ativos</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
