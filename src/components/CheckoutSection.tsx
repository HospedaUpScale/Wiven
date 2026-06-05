import { SectionHeader } from './SectionHeader';
import { FeatureCard } from './FeatureCard';
import { ShoppingCart, TrendingUp, Target, Layers } from 'lucide-react';

export const CheckoutSection = () => {
  const features = [
    {
      icon: ShoppingCart,
      title: 'Modelos validados',
      description: 'Templates testados por milhares de operações digitais para sair do improviso desde o primeiro clique.',
    },
    {
      icon: TrendingUp,
      title: 'Recuperação avançada',
      description: 'Pix expirado, cartão recusado e checkout abandonado deixam de ser perda — viram venda recuperada.',
    },
    {
      icon: Target,
      title: 'Tráfego segmentado',
      description: 'Checkouts otimizados para tráfego frio, morno e quente com elementos específicos para cada momento.',
    },
    {
      icon: Layers,
      title: 'Customização total',
      description: 'Personalize cores, textos, urgência e prova social para cada oferta em segundos.',
    },
  ];

  return (
    <section id="checkouts" className="py-12 sm:py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Muito além de um checkout"
          title="Estrutura completa para"
          highlight="cada clique virar venda"
          description="Não entregamos só uma página de pagamento. Entregamos a estrutura por trás dela — checkout, recuperação, monetização e otimização contínua."
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
