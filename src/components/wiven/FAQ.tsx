import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Qual é o prazo de recebimento?',
    answer:
      'O prazo de recebimento via Pix é instantâneo. Para outras formas de pagamento, o prazo varia de acordo com a modalidade escolhida, podendo ser de até 30 dias para cartão de crédito parcelado.',
  },
  {
    question: 'Vocês disponibilizam área de membros? Como funciona?',
    answer:
      'Sim! Nossa área de membros tem estilo Netflix, com interface intuitiva e responsiva. Você pode organizar seus cursos em módulos, aulas e materiais complementares. Seus alunos terão acesso a uma experiência premium de aprendizado.',
  },
  {
    question: 'Vocês têm sistema de coprodução?',
    answer:
      'Sim, oferecemos um sistema completo de coprodução onde você pode dividir os ganhos automaticamente com seus parceiros. Basta configurar as porcentagens e o sistema faz todo o resto.',
  },
  {
    question: 'Tem upsell de 1 clique?',
    answer:
      'Sim! Nosso sistema de upsell permite que seus clientes comprem ofertas adicionais com apenas 1 clique, sem precisar inserir os dados do cartão novamente. Isso aumenta significativamente suas conversões.',
  },
  {
    question: 'É possível vender produtos por recorrência (assinatura)?',
    answer:
      'Sim, você pode criar produtos com cobrança recurrentes mensal, trimestral, semestral ou anual. O sistema gerencia automaticamente as cobranças e renovações.',
  },
  {
    question: 'Posso usar para vender serviços digitais? (ex: Mentoria)',
    answer:
      'Absolutamente! A Wiven é perfeita para vender mentorias, consultorias, coaching e qualquer tipo de serviço digital. Você pode criar produtos com entrega personalizada.',
  },
  {
    question: 'Aceita produtos físicos também?',
    answer:
      'Sim, você pode vender produtos físicos através da nossa plataforma. Oferecemos integração com sistemas de logística e gestão de envios.',
  },
  {
    question: 'Tem sistema de afiliados?',
    answer:
      'Sim! Nosso marketplace de afiliados permite que você recrute parceiros para promover seus produtos. O sistema rastreia todas as vendas e paga as comissões automaticamente.',
  },
  {
    question: 'Preciso de ajuda, como proceder?',
    answer:
      'Nossa equipe de suporte está disponível 24 horas por dia, 7 dias por semana. Você pode entrar em contato via chat, email ou WhatsApp. Respondemos em poucos minutos!',
  },
];

export function FAQ() {
  return (
    <section id="faq" aria-label="FAQ" className="relative py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-5 sm:px-8 md:px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wide text-[#0a4cff] border border-[#0a4cff]/25 bg-[#0a4cff]/10 mb-5">
            Dúvidas frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white mb-5">
            Perguntas{' '}
            <span className="bg-gradient-to-r from-[#0a4cff] to-blue-400 bg-clip-text text-transparent">
              frequentes
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            Respostas diretas sobre taxas, migração e usabilidade do checkout.
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-zinc-800/60 rounded-xl px-5 sm:px-6 bg-zinc-900/20 data-[state=open]:bg-zinc-900/40 transition-colors duration-300"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base font-medium tracking-[-0.01em] text-white hover:no-underline hover:text-zinc-200 py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm md:text-base text-zinc-400 leading-relaxed pb-6 pt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
