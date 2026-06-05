import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import wivenLogo from '@/assets/wiven-icon-app.webp';

export const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-16 sm:pb-24">

      {/* Background Effects */}
      <div className="hero-glow top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" />
      <div className="hero-glow bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2" />
      
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

      <div className="container mx-auto px-5 sm:px-8 md:px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Logo Icon - Floating with neon glow */}
          <div className="w-28 h-28 sm:w-36 sm:h-36 mb-6 sm:mb-8 mx-auto animate-fade-up animate-float drop-shadow-[0_0_40px_hsl(var(--primary)/0.55)]">
            <img src={wivenLogo} alt="Wiven" className="w-full h-full object-contain" />
          </div>




          {/* Headline */}
          <h1 className="text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] tracking-tight mb-4 sm:mb-8 animate-fade-up text-balance max-w-4xl mx-auto" style={{ animationDelay: '0.1s' }}>
            O ecossistema de pagamentos para quem quer <span className="gradient-text whitespace-nowrap">crescer de verdade</span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12 animate-fade-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Voe mais alto. Escale com constância. Um ecossistema completo para operações digitais que querem sair do improviso e construir algo grande de verdade — tecnologia, tráfego, retenção, monetização e crescimento trabalhando juntos.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button
              variant="hero"
              size="xl"
              onClick={() => window.open('https://wa.me/message/4M546VJJZ673G1', '_blank')}
              className="group w-full sm:w-auto text-base sm:text-lg">
              Quero Fazer Parte
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - hidden on very small screens */}
      <div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer opacity-60 hover:opacity-100 transition-opacity z-20 hidden sm:flex"
        onClick={() => {
          const el = document.querySelector('#metodologia');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>);
};
