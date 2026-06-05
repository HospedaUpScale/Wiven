import { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Play,
  Star,
  Lock,
  Smartphone,
  Home,
  Mail,
  MessageCircle,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import heroFacebookAds from '@/assets/modules/hero-facebook-ads.jpg';
import kevenPhoto from '@/assets/keven-founder.jpeg';
import modComece from '@/assets/modules/comece.jpg';
import modEstrutura from '@/assets/modules/estrutura.jpg';
import modDomine from '@/assets/modules/domine.jpg';
import modTeste from '@/assets/modules/teste.jpg';
import modAndromeda from '@/assets/modules/andromeda.jpg';
import modMetodologia from '@/assets/modules/metodologia.jpg';
import modEmpilhamento from '@/assets/modules/empilhamento.jpg';
import modOfertas from '@/assets/modules/ofertas.jpg';
import modLowticket from '@/assets/modules/lowticket.jpg';
import modSegredos from '@/assets/modules/segredos.jpg';
import modCriativos from '@/assets/modules/criativos.jpg';
import modDesafio from '@/assets/modules/desafio.jpg';
import modAgencia from '@/assets/modules/agencia.jpg';
import modBloqueios from '@/assets/modules/bloqueios.jpg';
import modEcommerce from '@/assets/modules/ecommerce.jpg';
import modLives from '@/assets/modules/lives.jpg';

const features = [
  {
    icon: Play,
    title: 'Interface Netflix',
    description: 'Design premium que seus alunos já conhecem e amam.',
  },
  {
    icon: Star,
    title: 'Experiência Premium',
    description: 'Progresso, gamificação e certificados integrados.',
  },
  {
    icon: Lock,
    title: 'Conteúdo Protegido',
    description: 'Anti-pirataria e liberação progressiva de módulos.',
  },
  {
    icon: Smartphone,
    title: '100% Responsivo',
    description: 'Perfeito em qualquer dispositivo, sem app necessário.',
  },
];

const moduleCovers = [
  modComece,
  modEstrutura,
  modDomine,
  modTeste,
  modAndromeda,
  modMetodologia,
  modEmpilhamento,
  modOfertas,
  modLowticket,
  modSegredos,
  modCriativos,
  modDesafio,
  modAgencia,
  modBloqueios,
  modEcommerce,
  modLives,
];

export function RetentionSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <section id="retention" aria-label="Retention" className="relative py-20 md:py-28 lg:py-32 overflow-hidden">
      <div
        className="pointer-events-none absolute top-1/2 right-0 w-[500px] h-[500px] opacity-20"
        style={{ background: 'radial-gradient(circle, #0a4cff18 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-5 sm:px-8 md:px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-[#0a4cff] border border-[#0a4cff]/20 bg-[#0a4cff]/10 mb-5">
            Área de membros premium
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-white mb-4 sm:mb-5">
            Experiência que aumenta{' '}
            <span className="bg-gradient-to-r from-[#0a4cff] to-blue-400 bg-clip-text text-transparent">
              retenção e recompra
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Vender uma vez é bom. Construir recorrência é melhor. Uma boa experiência aumenta
            retenção, reduz reembolso e fortalece sua marca.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-8 mt-16 items-center">
          {/* Left — feature list (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(10,76,255,0.15)]"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative overflow-hidden p-[1px] rounded-xl bg-zinc-800/30">
                  <div
                    className="absolute inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_70%,#3b82f6_80%,#60a5fa_100%)] pointer-events-none z-0"
                    aria-hidden="true"
                  />
                  <div className="relative z-10 w-full h-full bg-[#05143a]/95 backdrop-blur-md rounded-[11px] overflow-hidden p-5 flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500 flex items-center justify-center flex-shrink-0 text-blue-400">
                      <feature.icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right — members area mockup (7 cols) */}
          <motion.div
            className="md:col-span-7 relative min-w-0 w-full"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative overflow-hidden p-[1px] rounded-2xl bg-zinc-800/30 shadow-[0_30px_80px_-20px_rgba(10,76,255,0.35)] w-full">
              <div
                className="absolute inset-[-1000%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_70%,#3b82f6_80%,#60a5fa_100%)] pointer-events-none z-0"
                aria-hidden="true"
              />
              <div className="relative z-10 w-full h-full bg-zinc-950 rounded-[15px] overflow-hidden">
                <div className="flex min-h-[300px] sm:min-h-[380px] min-w-0">
                {/* Sidebar */}
                <aside className="hidden sm:flex w-[35%] max-w-[180px] bg-[#09090b] px-2 sm:px-3 py-3 sm:py-4 flex-col gap-3 sm:gap-4 border-r border-zinc-800/60">
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="w-14 h-14 rounded-full border-2 border-[#0a4cff] overflow-hidden">
                      <img src={kevenPhoto} alt="Keven" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-white text-xs font-semibold">Keven</span>
                      <BadgeCheck className="w-3 h-3 text-[#0a4cff] fill-[#0a4cff] text-black" />
                    </div>
                  </div>

                  <div className="px-1">
                    <p className="text-[9px] text-zinc-400 text-center mb-1">Seu progresso</p>
                    <div className="h-1 rounded-full bg-zinc-800 overflow-hidden">
                      <motion.div
                        className="h-full bg-[#0a4cff] rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '32%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>

                  <nav className="flex flex-col gap-1.5 mt-1">
                    <div className="flex items-center gap-2 px-2.5 py-2 rounded-md bg-[#0a4cff] text-white text-[11px] font-semibold">
                      <Home className="w-3.5 h-3.5" /> Início
                    </div>
                    <div className="flex items-center gap-2 px-2.5 py-2 rounded-md bg-zinc-900/50 text-zinc-400 text-[11px]">
                      <Mail className="w-3.5 h-3.5" /> Suporte email
                    </div>
                    <div className="flex items-center gap-2 px-2.5 py-2 rounded-md bg-zinc-900/50 text-zinc-400 text-[11px]">
                      <MessageCircle className="w-3.5 h-3.5" /> Suporte whatsapp
                    </div>
                  </nav>
                </aside>

                {/* Main content */}
                <div className="flex-1 bg-[#09090b] p-2.5 sm:p-3 flex flex-col gap-2.5 sm:gap-3 min-w-0">
                  <motion.div
                    className="relative h-28 sm:h-44 rounded-lg overflow-hidden border border-zinc-800/60 group"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <img
                      src={heroFacebookAds}
                      alt="Aula em destaque — Facebook Ads"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0a4cff]/55 via-[#0a4cff]/15 to-transparent mix-blend-screen" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#000814]/40 via-transparent to-[#000814]/70" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-[#0a4cff]/0 group-hover:ring-[#0a4cff]/40 transition-all duration-500" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                      <div>
                        <p
                          className="text-[9px] uppercase tracking-[0.2em] text-[#5b8dff] font-bold mb-1"
                          style={{ textShadow: '0 2px 12px rgba(10,76,255,0.6), 0 1px 4px rgba(0,0,0,0.8)' }}
                        >
                          Aula em destaque
                        </p>
                        <h4
                          className="text-white text-sm font-bold leading-tight"
                          style={{ textShadow: '0 2px 16px rgba(0,0,0,0.9), 0 1px 4px rgba(10,76,255,0.4)' }}
                        >
                          Facebook Ads — Creative & Structure
                        </h4>
                      </div>
                      <button
                        type="button"
                        aria-label="Reproduzir aula"
                        className="w-9 h-9 rounded-full bg-white/95 flex items-center justify-center shadow-[0_4px_20px_rgba(10,76,255,0.6)] transition-transform hover:scale-110"
                      >
                        <Play className="w-4 h-4 text-black fill-black ml-0.5" />
                      </button>
                    </div>
                  </motion.div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="text-sm font-bold text-white">Seus módulos</h5>
                      <div className="flex gap-1.5">
                        <button
                          type="button"
                          onClick={() => scrollBy(-1)}
                          aria-label="Anterior"
                          className="w-6 h-6 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 hover:border-zinc-500 transition-all"
                        >
                          <ChevronLeft className="w-3 h-3" />
                        </button>
                        <button
                          type="button"
                          onClick={() => scrollBy(1)}
                          aria-label="Próximo"
                          className="w-6 h-6 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-900 hover:border-zinc-500 transition-all"
                        >
                          <ChevronRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <div
                      ref={carouselRef}
                      className="flex gap-2 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-1 [&::-webkit-scrollbar]:hidden"
                      style={{ scrollbarWidth: 'none' }}
                    >
                      {moduleCovers.map((cover, i) => (
                        <motion.div
                          key={i}
                          className="flex-shrink-0 w-[18%] min-w-[80px] aspect-[3/4] rounded-md overflow-hidden relative cursor-pointer border border-zinc-800/60 snap-start group/card"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.5 + i * 0.06 }}
                          whileHover={{ y: -6, scale: 1.06, zIndex: 10 }}
                        >
                          <img
                            src={cover}
                            alt={`Módulo ${i + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 ring-0 group-hover/card:ring-2 group-hover/card:ring-[#0a4cff] rounded-md transition-all" />
                          <div className="absolute inset-0 bg-[#0a4cff]/0 group-hover/card:bg-[#0a4cff]/10 transition-colors" />
                          <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity flex items-center justify-center bg-gradient-to-t from-black/70 to-transparent">
                            <div className="w-8 h-8 rounded-full bg-white/95 flex items-center justify-center shadow-xl">
                              <Play className="w-4 h-4 text-black fill-black ml-0.5" />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#0a4cff]/20 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
