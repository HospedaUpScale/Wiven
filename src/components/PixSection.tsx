import { SectionHeader } from './SectionHeader';
import { Zap, Clock, RefreshCw, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export const PixSection = () => {
  const features = [
    {
      icon: Zap,
      title: 'Instantâneo',
      description: 'Receba suas vendas em segundos, não em dias.',
    },
    {
      icon: Clock,
      title: '24/7',
      description: 'Disponível a qualquer hora, todos os dias.',
    },
    {
      icon: RefreshCw,
      title: 'Reinvista Rápido',
      description: 'Liquidez imediata para escalar seu tráfego.',
    },
    {
      icon: Shield,
      title: '100% Seguro',
      description: 'Criptografia de ponta a ponta em todas as transações.',
    },
  ];

  return (
    <section id="pix" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border-primary/20 relative overflow-hidden"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Background Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <motion.div 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <Zap className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Pix Instantâneo</span>
                  </motion.div>
                  
                  <motion.h2 
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    Saque <span className="gradient-text">Instantâneo</span> via Pix
                  </motion.h2>
                  
                  <motion.p 
                    className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    Não espere dias pelo seu dinheiro. Com a Wiven, suas vendas caem na conta em segundos.
                    Liquidez para reinvestir em tráfego e escalar mais rápido.
                  </motion.p>

                  <div className="grid grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3 p-3 rounded-xl bg-background/50"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                      >
                        <motion.div 
                          className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.6 + index * 0.1, type: "spring" }}
                        >
                          <feature.icon className="w-4 h-4 text-primary" />
                        </motion.div>
                        <div>
                          <h4 className="font-semibold text-sm">{feature.title}</h4>
                          <p className="text-xs text-muted-foreground">{feature.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <motion.div 
                  className="flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
                >
                  <div className="relative">
                    <motion.div 
                      className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", type: "tween" }}
                    >
                        <div className="w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center">
                          <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
                            <Zap className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-white" />
                        </div>
                      </div>
                    </motion.div>
                    {/* Floating Elements */}
                    <motion.div 
                      className="absolute -top-2 -right-2 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30"
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear", type: "tween" }}
                    >
                      <span className="text-xs font-bold text-green-500">⚡ Instantâneo</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
