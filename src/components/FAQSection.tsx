import { motion } from 'framer-motion';
import { SectionHeader } from './SectionHeader';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "Qual é o prazo de recebimento?",
    answer: "O prazo de recebimento via Pix é instantâneo. Para outras formas de pagamento, o prazo varia de acordo com a modalidade escolhida, podendo ser de até 30 dias para cartão de crédito parcelado."
  },
  {
    question: "Vocês disponibilizam área de membros? Como funciona?",
    answer: "Sim! Nossa área de membros tem estilo Netflix, com interface intuitiva e responsiva. Você pode organizar seus cursos em módulos, aulas e materiais complementares. Seus alunos terão acesso a uma experiência premium de aprendizado."
  },
  {
    question: "Vocês têm sistema de coprodução?",
    answer: "Sim, oferecemos um sistema completo de coprodução onde você pode dividir os ganhos automaticamente com seus parceiros. Basta configurar as porcentagens e o sistema faz todo o resto."
  },
  {
    question: "Tem upsell de 1 clique?",
    answer: "Sim! Nosso sistema de upsell permite que seus clientes comprem ofertas adicionais com apenas 1 clique, sem precisar inserir os dados do cartão novamente. Isso aumenta significativamente suas conversões."
  },
  {
    question: "É possível vender produtos por recorrência (assinatura)?",
    answer: "Sim, você pode criar produtos com cobrança recorrente mensal, trimestral, semestral ou anual. O sistema gerencia automaticamente as cobranças e renovações."
  },
  {
    question: "Posso usar para vender serviços digitais? (ex: Mentoria)",
    answer: "Absolutamente! A Wiven é perfeita para vender mentorias, consultorias, coaching e qualquer tipo de serviço digital. Você pode criar produtos com entrega personalizada."
  },
  {
    question: "Aceita produtos físicos também?",
    answer: "Sim, você pode vender produtos físicos através da nossa plataforma. Oferecemos integração com sistemas de logística e gestão de envios."
  },
  {
    question: "Tem sistema de afiliados?",
    answer: "Sim! Nosso marketplace de afiliados permite que você recrute parceiros para promover seus produtos. O sistema rastreia todas as vendas e paga as comissões automaticamente."
  },
  {
    question: "Preciso de ajuda, como proceder?",
    answer: "Nossa equipe de suporte está disponível 24 horas por dia, 7 dias por semana. Você pode entrar em contato via chat, email ou WhatsApp. Respondemos em poucos minutos!"
  }
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-12 sm:py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <SectionHeader
          badge="Dúvidas Frequentes"
          title="Perguntas Frequentes"
          description="Tire suas dúvidas sobre a plataforma"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="border border-border/50 rounded-xl px-4 sm:px-6 bg-secondary/30 backdrop-blur-sm data-[state=open]:bg-secondary/50 transition-colors"
                >
                  <AccordionTrigger className="text-left text-sm sm:text-base md:text-lg font-medium hover:no-underline py-4 sm:py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
