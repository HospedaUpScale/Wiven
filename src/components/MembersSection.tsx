import { useRef } from 'react';
import { SectionHeader } from './SectionHeader';
import { Play, Star, Lock, Smartphone, Home, Mail, MessageCircle, BadgeCheck, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { motion } from 'framer-motion';
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

export const MembersSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: 1 | -1) => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  };

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

  return (
    <section id="membros" className="py-12 sm:py-20 md:py-28 relative bg-secondary/20">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Área de membros premium"
          title="Experiência que aumenta"
          highlight="retenção e recompra"
          description="Vender uma vez é bom. Construir recorrência é melhor. Uma boa experiência aumenta retenção, reduz reembolso e fortalece sua marca."
        />

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-center min-w-0">
          {/* Features List */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="glass-card rounded-xl p-4 sm:p-5 flex items-start gap-3 sm:gap-4 hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 1, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                <motion.div 
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0"
                  initial={{ scale: 1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2, type: "spring" }}
                >
                  <feature.icon className="w-5 h-5 text-primary" />
                </motion.div>
                <div>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Members area mockup — Wiven Club style */}
          <motion.div
            className="relative mt-2 lg:mt-0 min-w-0 w-full"
            initial={{ opacity: 1, x: 0, scale: 1 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-black shadow-[0_30px_80px_-20px_hsl(220_100%_40%/0.35)] w-full">
              <div className="flex min-h-[300px] sm:min-h-[380px] min-w-0">

                {/* Sidebar — hidden on smallest screens to give carousel breathing room */}
                <aside className="hidden sm:flex w-[35%] max-w-[180px] bg-black px-2 sm:px-3 py-3 sm:py-4 flex-col gap-3 sm:gap-4 border-r border-white/5">

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
                    <p className="text-[9px] text-white/60 text-center mb-1">Seu progresso</p>
                    <div className="h-1 rounded-full bg-white/10 overflow-hidden">
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
                    <div className="flex items-center gap-2 px-2.5 py-2 rounded-md bg-white/[0.04] text-white/75 text-[11px]">
                      <Mail className="w-3.5 h-3.5" /> Suporte email
                    </div>
                    <div className="flex items-center gap-2 px-2.5 py-2 rounded-md bg-white/[0.04] text-white/75 text-[11px]">
                      <MessageCircle className="w-3.5 h-3.5" /> Suporte whatsapp
                    </div>
                  </nav>
                </aside>

                {/* Main */}
                <div className="flex-1 bg-black p-2.5 sm:p-3 flex flex-col gap-2.5 sm:gap-3 min-w-0">
                  {/* Featured hero */}
                  <motion.div
                    className="relative h-28 sm:h-44 rounded-lg overflow-hidden border border-white/5 group"
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
                    {/* Premium gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0a4cff]/55 via-[#0a4cff]/15 to-transparent mix-blend-screen" />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#000814]/40 via-transparent to-[#000814]/70" />
                    {/* Subtle glow ring on hover */}
                    <div className="absolute inset-0 ring-1 ring-inset ring-[#0a4cff]/0 group-hover:ring-[#0a4cff]/40 transition-all duration-500" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.2em] text-[#5b8dff] font-bold mb-1" style={{ textShadow: '0 2px 12px rgba(10,76,255,0.6), 0 1px 4px rgba(0,0,0,0.8)' }}>Aula em destaque</p>
                        <h4 className="text-white text-sm font-bold leading-tight" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.9), 0 1px 4px rgba(10,76,255,0.4)' }}>Facebook Ads — Creative & Structure</h4>
                      </div>
                      <button className="w-9 h-9 rounded-full bg-white/95 flex items-center justify-center shadow-[0_4px_20px_rgba(10,76,255,0.6)] transition-transform hover:scale-110">
                        <Play className="w-4 h-4 text-black fill-black ml-0.5" />
                      </button>
                    </div>
                  </motion.div>

                  {/* Seus módulos */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="text-sm font-bold text-white">Seus módulos</h5>
                      <div className="flex gap-1.5">
                        <button
                          onClick={() => scrollBy(-1)}
                          aria-label="Anterior"
                          className="w-6 h-6 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/40 transition-all"
                        >
                          <ChevronLeft className="w-3 h-3" />
                        </button>
                        <button
                          onClick={() => scrollBy(1)}
                          aria-label="Próximo"
                          className="w-6 h-6 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/40 transition-all"
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
                      {[
                        modComece, modEstrutura, modDomine, modTeste, modAndromeda,
                        modMetodologia, modEmpilhamento, modOfertas, modLowticket,
                        modSegredos, modCriativos, modDesafio, modAgencia,
                        modBloqueios, modEcommerce, modLives,
                      ].map((cover, i) => (
                        <motion.div
                          key={i}
                          className="flex-shrink-0 w-[18%] min-w-[80px] aspect-[3/4] rounded-md overflow-hidden relative cursor-pointer border border-white/5 snap-start group/card"
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

            {/* Decorative glows */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
