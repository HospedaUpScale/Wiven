import { SectionHeader } from './SectionHeader';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

type Member = {
  name: string;
  role: string;
  img: string;
};

// Avatares placeholder — substituir por fotos reais dos infoprodutores
const members: Member[] = [
  { name: 'Juan Ernandez',     role: 'Info e Mentor',         img: 'https://i.pravatar.cc/600?img=12' },
  { name: 'Kath Conce',        role: 'Infoprodutora',         img: 'https://i.pravatar.cc/600?img=32' },
  { name: 'Nicoly Fernandes',  role: 'Mentora e Palestrante', img: 'https://i.pravatar.cc/600?img=47' },
  { name: 'Jordana Castro',    role: 'Info e Mentora',        img: 'https://i.pravatar.cc/600?img=23' },
  { name: 'Rafael Fernandes',  role: 'Info e Mentor',         img: 'https://i.pravatar.cc/600?img=33' },
  { name: 'Juliana Torres',    role: 'Info e Mentora',        img: 'https://i.pravatar.cc/600?img=45' },
  { name: 'Gustavo Castro',    role: 'Infoprodutor',          img: 'https://i.pravatar.cc/600?img=14' },
  { name: 'Letícia Falcão',    role: 'Info e Mentora',        img: 'https://i.pravatar.cc/600?img=49' },
  { name: 'David Tomaz',       role: 'Info e Mentor',         img: 'https://i.pravatar.cc/600?img=53' },
  { name: 'Sarah Ferreira',    role: 'Info e Mentora',        img: 'https://i.pravatar.cc/600?img=44' },
  { name: 'Ana Luiza',         role: 'Infoprodutora',         img: 'https://i.pravatar.cc/600?img=25' },
  { name: 'Pedro Collares',    role: 'Infoprodutor',          img: 'https://i.pravatar.cc/600?img=68' },
];

const Card = ({ m }: { m: Member }) => (
  <div className="relative shrink-0 w-[180px] sm:w-[220px] md:w-[240px] aspect-[3/4] rounded-2xl overflow-hidden border border-border/50 group">
    <img
      src={m.img}
      alt={m.name}
      loading="lazy"
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-4">
      <p className="text-sm sm:text-base font-bold leading-tight">{m.name}</p>
      <p className="text-xs text-muted-foreground">{m.role}</p>
    </div>
  </div>
);

const Row = ({ items, reverse = false }: { items: Member[]; reverse?: boolean }) => (
  <div className="relative overflow-hidden">
    <div
      className="flex gap-4 md:gap-6 w-max"
      style={{
        animation: `${reverse ? 'wallScrollReverse' : 'wallScroll'} 60s linear infinite`,
      }}
    >
      {[...items, ...items].map((m, i) => (
        <Card key={`${m.name}-${i}`} m={m} />
      ))}
    </div>
  </div>
);

export const WallOfFameSection = () => {
  const row1 = members.slice(0, 6);
  const row2 = members.slice(6, 12);

  return (
    <section className="py-12 sm:py-20 md:py-28 relative overflow-hidden">
      <style>{`
        @keyframes wallScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes wallScrollReverse {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>

      <div className="container mx-auto px-4 mb-10">
        <SectionHeader
          badge="Quem opera com a gente"
          title="Eles confiaram."
          highlight="Agora estão na Wiven."
          description="Infoprodutores que escolheram padrão premium pra cobrar, receber e escalar. Entre pro ecossistema Wiven e opere com a mesma estrutura de quem já fatura alto."
        />
      </div>

      <div className="space-y-4 md:space-y-6 mb-12">
        <Row items={row1} />
        <Row items={row2} reverse />
      </div>

      <div className="container mx-auto px-4 text-center">
        <Button
          variant="hero"
          size="lg"
          className="group"
          onClick={() => window.open('https://wa.me/message/4M546VJJZ673G1', '_blank')}
        >
          Quero Fazer Parte
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* Side fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent" />
    </section>
  );
};
