import { SectionHeader } from './SectionHeader';
import { motion } from 'framer-motion';
import { Package, ShoppingCart, Filter, PlayCircle, Tag, Workflow, Settings, Clock } from 'lucide-react';

const items = [
  { icon: Package, label: 'Produtos' },
  { icon: ShoppingCart, label: 'Checkout' },
  { icon: Filter, label: 'Funis' },
  { icon: PlayCircle, label: 'Área de membros' },
  { icon: Tag, label: 'Ofertas' },
  { icon: Workflow, label: 'Automações' },
  { icon: Settings, label: 'Estrutura operacional' },
];

export const MigrationSection = () => {
  return (
    <section id="migracao" className="py-12 sm:py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Migração assistida"
          title="Migrar para a Wiven é"
          highlight="simples"
          description="A maioria dos players acha que trocar de plataforma é complicado. Na prática, nossa equipe faz praticamente tudo para você — de forma rápida e organizada."
        />

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4 mb-10">
            {items.map((item, i) => (
              <motion.div
                key={i}
                className="glass-card rounded-xl p-4 flex flex-col items-center text-center gap-2 hover:border-primary/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="glass-card rounded-2xl p-8 border-primary/20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Clock className="w-7 h-7 text-primary" />
              <span className="text-2xl md:text-3xl font-bold">Pronto em menos de 24 horas</span>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Sem dor de cabeça. Sem travar sua operação. Sem perder vendas no processo.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
