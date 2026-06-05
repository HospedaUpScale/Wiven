import { motion } from 'framer-motion';
import { ArrowRight, Quote, Rocket } from 'lucide-react';
import kevenPhoto from '@/assets/keven-founder.jpeg';

const WHATSAPP_URL = 'https://wa.me/message/4M546VJJZ673G1';

export function FounderSection() {
  return (
    <section id="idealizador" aria-label="Idealizador" className="relative py-20 md:py-28 lg:py-32">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] opacity-20"
        style={{ background: 'radial-gradient(ellipse, #0a4cff15 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium text-[#0a4cff] border border-[#0a4cff]/20 bg-[#0a4cff]/10 mb-5">
            Por trás da Wiven
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-white mb-4 sm:mb-5">
            Conheça o{' '}
            <span className="bg-gradient-to-r from-[#0a4cff] to-blue-400 bg-clip-text text-transparent">
              idealizador
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            A Wiven nasceu da experiência prática de quem vive o mercado digital todos os dias.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-10 items-center mb-16 md:mb-20">
          <motion.div
            className="relative mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden border border-zinc-800/60 bg-zinc-900/20">
              <img
                src={kevenPhoto}
                alt="Kevones, idealizador da Wiven"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a4cff]/20 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#0a4cff]/20 rounded-full blur-3xl pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white">Kevones</h3>
              <span className="text-sm text-zinc-500">Idealizador da Wiven</span>
            </div>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Especialista em tráfego pago e operações digitais, conhecido por construir estratégias
              focadas em escala, monetização e crescimento previsível. Acompanhou de perto os maiores
              gargalos enfrentados por produtores e players: checkout limitando operações, suportes
              demorados, baixa retenção, funis mal estruturados e plataformas que não acompanham o
              crescimento do usuário.
            </p>
            <div className="rounded-2xl p-6 border border-zinc-800/60 bg-zinc-900/20 relative">
              <Quote className="w-8 h-8 text-[#0a4cff]/60 absolute -top-3 -left-3" />
              <p className="text-base md:text-lg italic leading-relaxed text-zinc-300">
                &ldquo;Escala não depende apenas de um checkout. Depende da estrutura por trás dele.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0a4cff]/10 rounded-full blur-[120px] pointer-events-none -z-10" />

          <div className="w-14 h-14 bg-[#0a4cff] rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(10,76,255,0.4)]">
            <Rocket className="w-7 h-7 text-white -rotate-12 stroke-[1.5]" />
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-4xl mx-auto mb-6 text-center text-balance">
            Escale com uma <span className="text-[#0a4cff]">estrutura feita</span>
            <br className="hidden md:block" />
            {' '}para sua operação
          </h3>

          <p className="max-w-2xl mx-auto text-zinc-400 text-center text-sm md:text-base leading-relaxed mb-8">
            Cada operação possui volume, estrutura e necessidades diferentes. Por isso a Wiven
            trabalha com análise individual e taxas personalizadas para cada player. Fale agora com um
            gerente de contas e descubra como estruturar sua operação com mais escala, retenção e
            previsibilidade.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl text-base font-semibold text-white bg-[#0a4cff] hover:bg-blue-600 shadow-[0_0_20px_rgba(10,76,255,0.35)] transition-all duration-300 group"
          >
            Falar com um gerente
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
            {['Sem compromisso', 'Resposta em 24h', 'Consultoria gratuita'].map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-sm text-zinc-500">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0a4cff]" />
                {badge}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
