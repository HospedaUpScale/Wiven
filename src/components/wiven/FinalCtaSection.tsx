import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const SIGNUP_URL = 'https://app.wiven.com.br/cadastro';

export function FinalCtaSection() {
  return (
    <section
      id="final-cta"
      aria-label="Final CTA"
      className="relative overflow-hidden w-full py-24 md:py-32 lg:py-40 bg-black"
    >
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] opacity-30 z-0"
        style={{ background: 'radial-gradient(ellipse, #0a4cff22 0%, transparent 70%)' }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto px-4 md:px-6">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[-0.04em] text-white mb-6 leading-[1.08]"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Pronto para estruturar sua{' '}
          <span className="bg-gradient-to-r from-[#0a4cff] via-blue-400 to-[#0a4cff] bg-clip-text text-transparent">
            operação digital?
          </span>
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg text-zinc-400 mb-10 max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Checkout, funis, recuperação, afiliados e suporte humano tudo num ecossistema feito para quem leva o jogo a sério.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-10 py-4 sm:px-12 sm:py-5 rounded-full text-base sm:text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 transition-all duration-300 group"
          >
            Criar minha conta agora
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
