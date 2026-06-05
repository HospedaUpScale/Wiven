import { Bot, MousePointerClick, Megaphone, MonitorPlay, FileText, MoreHorizontal, Code2, Webhook } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import sellfluxLogo from '@/assets/integrations/sellflux.png';
import mailchimpLogo from '@/assets/integrations/mailchimp.svg';
import reportanaLogo from '@/assets/integrations/reportana.svg';
import voxuyLogo from '@/assets/integrations/voxuy.webp';
import otimizeyLogo from '@/assets/integrations/otimizey.jpg';
import utmifyLogo from '@/assets/integrations/utmify.jpg';
import nemuLogo from '@/assets/integrations/nemu.avif';
import hotzappLogo from '@/assets/integrations/hotzapp.png';
import activeCampaignLogo from '@/assets/integrations/activecampaign.png';
import smsFunnelLogo from '@/assets/integrations/smsfunnel.webp';
import astronMembersLogo from '@/assets/integrations/astron-members.jpg';
import memberKitLogo from '@/assets/integrations/memberkit.svg';
import cademiLogo from '@/assets/integrations/cademi.png';
import theMembersLogo from '@/assets/integrations/the-members.jpg';
import leadLoversLogo from '@/assets/integrations/leadlovers.png';
import notazzLogo from '@/assets/integrations/notazz.png';
import spedyLogo from '@/assets/integrations/spedy.png';

type Integration = {
  name: string;
  description: string;
  logo?: string;
  icon?: React.ComponentType<{ className?: string }>;
  soon?: boolean;
};

type Category = {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  items: Integration[];
};

const categories: Category[] = [
  {
    id: 'automacao',
    label: 'Automação',
    icon: Bot,
    items: [
      { name: 'API', description: 'Faça integrações diretamente com a nossa API', icon: Code2 },
      { name: 'SellFlux', description: 'Automatize o seu marketing digital', logo: sellfluxLogo },
      { name: 'Webhooks', description: 'Integre com sistemas externos através de webhooks', icon: Webhook },
      { name: 'Mailchimp', description: 'Crie automações de e-mail marketing', logo: mailchimpLogo },
      { name: 'Reportana', description: 'Automatize o seu marketing digital', logo: reportanaLogo },
      { name: 'Voxuy', description: 'Crie fluxos de mensagens para o WhatsApp', logo: voxuyLogo },
    ],
  },
  {
    id: 'traqueamento',
    label: 'Traqueamento',
    icon: MousePointerClick,
    items: [
      { name: 'Otimizey', description: 'Vendas rastreadas com precisão, centralize sua operação e veja seus lucros aumentarem', logo: otimizeyLogo },
      { name: 'UTMify', description: 'Faça o rastreamento de campanhas de marketing', logo: utmifyLogo },
      { name: 'Nemu', description: 'Faça o rastreamento de campanhas de marketing', logo: nemuLogo },
    ],
  },
  {
    id: 'marketing',
    label: 'Marketing',
    icon: Megaphone,
    items: [
      { name: 'Hotzapp', description: 'Recupere vendas com notificações de carrinho abandonado', logo: hotzappLogo },
      { name: 'ActiveCampaign', description: 'Automatize o seu marketing digital', logo: activeCampaignLogo },
      { name: 'SMS Funnel', description: 'Crie fluxos de mensagens SMS', logo: smsFunnelLogo },
    ],
  },
  {
    id: 'membros',
    label: 'Área de Membros',
    icon: MonitorPlay,
    items: [
      { name: 'Astron Members', description: 'Crie áreas de membros de forma simples', logo: astronMembersLogo },
      { name: 'Member Kit', description: 'Crie áreas de membros de forma simples', logo: memberKitLogo },
      { name: 'Cademi', description: 'Crie cursos online de forma simples', logo: cademiLogo },
      { name: 'The Members', description: 'Crie áreas de membros de forma simples', logo: theMembersLogo },
    ],
  },
  {
    id: 'fiscais',
    label: 'Notas fiscais',
    icon: FileText,
    items: [
      { name: 'Notazz', description: 'Emita notas fiscais de forma simples e rápida', logo: notazzLogo },
      { name: 'Spedy', description: 'Emita notas fiscais de forma simples e rápida', logo: spedyLogo },
    ],
  },
  {
    id: 'outros',
    label: 'Outros',
    icon: MoreHorizontal,
    items: [
      { name: 'Lead Lovers', description: 'Automatize o seu marketing digital', logo: leadLoversLogo },
    ],
  },
];

const allItems: Integration[] = categories.flatMap((c) => c.items);

// Split into 3 rows for a dense marquee
const rows: Integration[][] = [[], [], []];
allItems.forEach((it, i) => rows[i % 3].push(it));

const IntegrationChip = ({ item }: { item: Integration }) => {
  const Icon = item.icon;
  return (
    <div className="flex items-center gap-2.5 sm:gap-3 px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-primary/20 bg-secondary/40 hover:border-primary/50 hover:bg-secondary/60 transition-colors min-w-[180px] sm:min-w-[220px]">
      <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center bg-background/70 border border-border/50 overflow-hidden">
        {item.logo ? (
          <img src={item.logo} alt={`Logo ${item.name}`} className="max-w-[80%] max-h-[80%] object-contain" loading="lazy" />
        ) : Icon ? (
          <Icon className="w-5 h-5 text-primary" />
        ) : null}
      </div>
      <div className="min-w-0">
        <p className="font-semibold text-foreground text-xs sm:text-sm leading-tight whitespace-nowrap">{item.name}</p>
        <p className="text-[10px] sm:text-[11px] text-muted-foreground leading-snug whitespace-nowrap">{item.description.length > 32 ? item.description.slice(0, 32) + '…' : item.description}</p>
      </div>
    </div>

  );
};

const MarqueeRow = ({ items, reverse, duration }: { items: Integration[]; reverse?: boolean; duration: number }) => (
  <div className="group relative overflow-hidden">
    <div
      className="flex gap-3 w-max"
      style={{
        animation: `${reverse ? 'marquee-reverse' : 'marquee'} ${duration}s linear infinite`,
      }}
    >
      {[...items, ...items, ...items].map((it, idx) => (
        <IntegrationChip key={`${it.name}-${idx}`} item={it} />
      ))}
    </div>
  </div>
);

export const IntegrationsSection = () => {
  return (
    <section id="integracoes" className="relative py-14 sm:py-20 md:py-28 overflow-hidden">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
        @keyframes marquee-reverse {
          from { transform: translateX(-33.333%); }
          to { transform: translateX(0); }
        }
      `}</style>
      <div className="hero-glow top-1/3 left-1/2 -translate-x-1/2 opacity-50" />

      <div className="container mx-auto px-5 sm:px-8 md:px-4 relative z-10">
        <SectionHeader
          badge="Integrações"
          title="Conecte a Wiven com"
          highlight="tudo que você já usa"
          description="Integre sua conta Wiven com outras ferramentas e aumente a eficiência do seu negócio."
        />

        {/* Category labels */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-secondary/40 border border-border/40 text-muted-foreground"
              >
                <Icon className="w-3.5 h-3.5 text-primary" />
                {cat.label}
              </div>
            );
          })}
        </div>

        {/* Auto-scrolling marquees */}
        <div className="relative space-y-3 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <MarqueeRow items={rows[0]} duration={40} />
          <MarqueeRow items={rows[1]} duration={50} reverse />
          <MarqueeRow items={rows[2]} duration={45} />
        </div>
      </div>
    </section>
  );
};
