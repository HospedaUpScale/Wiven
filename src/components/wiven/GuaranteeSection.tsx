import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export function GuaranteeSection() {
  return (
    <section id="guarantee" aria-label="Guarantee" className="relative py-20 md:py-28 lg:py-32">
      <div
        className="pointer-events-none absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] opacity-25"
        style={{ background: 'radial-gradient(circle, #0a4cff18 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-5xl mx-auto">
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-full opacity-60"
                style={{ background: 'radial-gradient(circle, #0a4cff35 0%, transparent 70%)' }}
              />
              <div className="absolute inset-4 rounded-full border border-[#0a4cff]/30 bg-zinc-900/40 backdrop-blur-sm" />
              <Shield className="absolute w-32 h-32 sm:w-36 sm:h-36 text-[#0a4cff]/20 stroke-[0.75]" />
              <span className="relative text-[7rem] sm:text-[8rem] font-bold tracking-[-0.05em] text-white leading-none select-none">
                7
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wide text-[#0a4cff] border border-[#0a4cff]/25 bg-[#0a4cff]/10 mb-5">
              Risco zero
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-[-0.03em] text-white mb-6 leading-[1.1]">
              Pode testar: risco zero por 7 dias.
            </h2>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
              Use a Wiven sem medo. Se você não gostar da plataforma por qualquer motivo dentro dos
              próximos 7 dias, nós devolvemos todo o seu dinheiro. Simples assim, sem letras miúdas.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
