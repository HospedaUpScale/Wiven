import { SectionHeader } from './SectionHeader';
import { FeatureCard } from './FeatureCard';
import { Users, Link, Wallet, BarChart3 } from 'lucide-react';

export const AffiliatesSection = () => {
  const features = [
    {
      icon: Users,
      title: 'Gestão Simplificada',
      description: 'Gerencie todos os seus afiliados em um único painel intuitivo e organizado.',
    },
    {
      icon: Link,
      title: 'Links Rastreados',
      description: 'Cada afiliado com seu link único. Rastreamento preciso de cada venda.',
    },
    {
      icon: Wallet,
      title: 'Comissões Automáticas',
      description: 'Configure uma vez e deixe o sistema calcular e pagar automaticamente.',
    },
    {
      icon: BarChart3,
      title: 'Relatórios Detalhados',
      description: 'Veja performance individual e identifique seus melhores parceiros.',
    },
  ];

  return (
    <section id="afiliados" className="py-12 sm:py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Sistema de afiliados integrado"
          title="Transforme outros players em"
          highlight="canais de aquisição"
          description="Comissionamento automático, rastreamento inteligente e gestão simplificada para aumentar alcance, vendas e crescimento da sua operação."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
