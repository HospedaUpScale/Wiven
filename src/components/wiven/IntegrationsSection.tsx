import { useMemo } from 'react';
import { motion } from 'framer-motion';
import wivenEagleSilhouette from '@/assets/wiven-logo.svg';
import mailchimpLogo from '@/assets/integrations/mailchimp.svg';
import sellfluxLogo from '@/assets/integrations/sellflux.png';
import voxuyLogo from '@/assets/integrations/voxuy.webp';
import reportanaLogo from '@/assets/integrations/reportana.svg';
import apiLogo from '@/assets/integrations/api.svg';
import webhooksLogo from '@/assets/integrations/webhooks.svg';
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
import notazzLogo from '@/assets/integrations/notazz.png';
import spedyLogo from '@/assets/integrations/spedy.png';
import leadLoversLogo from '@/assets/integrations/leadlovers.png';

type Integration = {
  name: string;
  logo: string;
};

const allIntegrations: Integration[] = [
  { name: 'Mailchimp', logo: mailchimpLogo },
  { name: 'SellFlux', logo: sellfluxLogo },
  { name: 'Voxuy', logo: voxuyLogo },
  { name: 'Reportana', logo: reportanaLogo },
  { name: 'API', logo: apiLogo },
  { name: 'Webhooks', logo: webhooksLogo },
  { name: 'ActiveCampaign', logo: activeCampaignLogo },
  { name: 'Otimizey', logo: otimizeyLogo },
  { name: 'UTMify', logo: utmifyLogo },
  { name: 'Nemu', logo: nemuLogo },
  { name: 'Hotzapp', logo: hotzappLogo },
  { name: 'SMS Funnel', logo: smsFunnelLogo },
  { name: 'Astron Members', logo: astronMembersLogo },
  { name: 'Member Kit', logo: memberKitLogo },
  { name: 'Cademi', logo: cademiLogo },
  { name: 'The Members', logo: theMembersLogo },
  { name: 'Notazz', logo: notazzLogo },
  { name: 'Spedy', logo: spedyLogo },
  { name: 'Lead Lovers', logo: leadLoversLogo },
];

const HUB_SIZE = { w: 1000, h: 600 };
const CENTER = { x: HUB_SIZE.w / 2, y: HUB_SIZE.h / 2 };

const ORBIT_ROTATION = {
  rotate: 360,
};

const ORBIT_TRANSITION = {
  repeat: Infinity,
  duration: 60,
  ease: 'linear' as const,
};

const COUNTER_ROTATION = {
  rotate: -360,
};

const floatingEagles = [
  { className: 'left-[2%] top-[12%] w-20 md:w-28 animate-[float_12s_ease-in-out_infinite]' },
  { className: 'right-[2%] bottom-[10%] w-16 md:w-24 animate-[float_18s_ease-in-out_infinite]' },
];

function computeOrbitalNodes(count: number) {
  return Array.from({ length: count }, (_, index) => {
    const angle = (index / count) * Math.PI * 2 - Math.PI / 2;
    const radius = 195 + (index % 3) * 42 + (index % 2) * 18;
    return {
      x: CENTER.x + Math.cos(angle) * radius,
      y: CENTER.y + Math.sin(angle) * radius,
      floatDuration: 7 + (index % 5) * 1.4,
      floatDelay: (index % 7) * 0.35,
    };
  });
}

export function IntegrationsSection() {
  const nodes = useMemo(() => computeOrbitalNodes(allIntegrations.length), []);

  return (
    <section id="integracoes" aria-label="Integrations" className="relative bg-black py-24 md:py-32 lg:py-36 overflow-hidden">
      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -1000; }
        }
        @keyframes hub-pulse {
          0%, 100% { transform: scale(1); opacity: 0.45; }
          50% { transform: scale(1.12); opacity: 0.75; }
        }
      `}</style>

      {floatingEagles.map((eagle, index) => (
        <img
          key={index}
          src={wivenEagleSilhouette}
          alt=""
          aria-hidden="true"
          className={`absolute pointer-events-none select-none opacity-[0.12] blur-[0.5px] z-0 ${eagle.className}`}
        />
      ))}

      <div className="container mx-auto px-5 sm:px-8 md:px-6 relative z-10">
        <motion.header
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-[#0a4cff] border border-[#0a4cff]/20 bg-[#0a4cff]/10 mb-5">
            Integrações
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 sm:mb-5 text-center max-w-5xl mx-auto leading-tight">
            Conecte a Wiven com{' '}
            <span className="bg-gradient-to-r from-[#0a4cff] to-blue-400 bg-clip-text text-transparent whitespace-nowrap">
              tudo que você já usa
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl mx-auto">
            Integre sua conta Wiven com outras ferramentas e aumente a eficiência do seu negócio.
          </p>
        </motion.header>
      </div>

      <div className="relative w-full max-w-5xl mx-auto h-[520px] sm:h-[600px] mt-12 flex items-center justify-center overflow-visible z-10 px-4">
        {/* Núcleo fixo — não participa da rotação orbital */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
          <div
            className="absolute inset-[-18px] rounded-full bg-blue-500/25 blur-xl"
            style={{ animation: 'hub-pulse 3s ease-in-out infinite' }}
            aria-hidden="true"
          />
          <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full bg-[#030b20] border border-blue-500/50 flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.4)] overflow-visible">
            <motion.img
              src={wivenEagleSilhouette}
              alt="Wiven"
              className="w-14 h-14 md:w-16 md:h-16 object-contain opacity-90"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            />
          </div>
        </div>

        {/* Órbita global: SVG + logos giram em sincronia */}
        <motion.div
          className="absolute inset-0 w-full h-full origin-center"
          animate={ORBIT_ROTATION}
          transition={ORBIT_TRANSITION}
        >
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox={`0 0 ${HUB_SIZE.w} ${HUB_SIZE.h}`}
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
          >
            {nodes.map((node, index) => (
              <line
                key={`line-${allIntegrations[index].name}`}
                x1={CENTER.x}
                y1={CENTER.y}
                x2={node.x}
                y2={node.y}
                stroke="rgba(59,130,246,0.35)"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="6 6"
                style={{
                  animation: `dash 20s linear infinite`,
                  animationDelay: `${index * 0.4}s`,
                }}
              />
            ))}
          </svg>

          {allIntegrations.map((integration, index) => {
            const node = nodes[index];
            const leftPct = (node.x / HUB_SIZE.w) * 100;
            const topPct = (node.y / HUB_SIZE.h) * 100;

            return (
              <div
                key={integration.name}
                className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${leftPct}%`, top: `${topPct}%` }}
              >
                <motion.div
                  className="group relative"
                  animate={COUNTER_ROTATION}
                  transition={ORBIT_TRANSITION}
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: node.floatDuration,
                      delay: node.floatDelay,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-[#030b20]/95 border border-blue-500/30 text-[10px] font-medium text-blue-200 whitespace-nowrap opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none shadow-[0_0_15px_rgba(59,130,246,0.25)] z-30">
                      {integration.name}
                    </div>
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#030b20]/90 backdrop-blur-md border border-zinc-900 flex items-center justify-center group-hover:border-blue-500/60 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 pointer-events-auto">
                      <img
                        src={integration.logo}
                        alt={integration.name}
                        className="w-7 h-7 md:w-8 md:h-8 object-contain"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
