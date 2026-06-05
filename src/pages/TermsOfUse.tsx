import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12 max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao início
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
          Termos de Uso e Políticas
        </h1>
        <p className="text-muted-foreground mb-8">
          Clique em cada seção para expandir e visualizar o conteúdo completo.
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          
          {/* TERMOS DE USO */}
          <AccordionItem value="termos" className="border border-border/50 rounded-xl px-6 bg-card/30">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
              📄 Termos de Uso
            </AccordionTrigger>
            <AccordionContent className="prose prose-invert max-w-none text-muted-foreground pb-6">
              <p className="mb-4">
                Através deste documento, a pessoa física ou jurídica qualificada no Cadastro (denominada "PARCEIRO"), juntamente com os respetivos sócios ou procuradores também qualificados no Cadastro, que assumem a qualidade de devedores solidários do PARCEIRO (doravante referidos como "Devedores Solidários"), e a WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA, celebram este acordo com os Termos e Condições de Uso ("Contrato").
              </p>
              <p className="mb-4">
                Ao aceitar este termo, o PARCEIRO concorda com os termos e condições deste Contrato. Todas as condições estabelecidas neste Contrato serão consideradas válidas após a ocorrência da primeira Transação.
              </p>
              <p className="mb-4">
                A WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA reserva-se no direito de modificar as condições deste Contrato a qualquer momento, mediante aviso prévio e sem incorrer em ônus ou penalidades.
              </p>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">1. Objeto</h4>
              <p className="mb-4">O objeto deste Contrato é o credenciamento do PARCEIRO ao Sistema WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA de Pagamentos, para:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Cadastro e credenciamento do PARCEIRO ao Sistema WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA, habilitando-o a aceitar pagamentos por Cartão;</li>
                <li>Habilitação do PARCEIRO para o recebimento de pagamento por boleto bancário, pagamentos instantâneos pelo PIX ou outras modalidades;</li>
                <li>Antecipação dos pagamentos das Transações com Cartão.</li>
              </ul>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">2. Credenciamento</h4>
              <p className="mb-4">O credenciamento ao Sistema WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA será realizado pela adesão do PARCEIRO a este Contrato, que se efetivará pelo aceite expressamente manifestado pelo PARCEIRO.</p>
              <p className="mb-4">O PARCEIRO, ao preencher o Cadastro e informar todos os dados exigidos, se responsabilizará civil e criminalmente pela veracidade das informações declaradas.</p>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">3. Transações</h4>
              <p className="mb-4">O PARCEIRO deverá realizar as Transações seguindo os procedimentos estabelecidos pela WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA. A WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA não se responsabiliza por eventuais prejuízos decorrentes de Transações não autorizadas ou fraudulentas.</p>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">4. Pagamento das Transações</h4>
              <p className="mb-4">O pagamento das Transações será realizado pela WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA ao PARCEIRO, mediante crédito na conta bancária indicada no Cadastro. A WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA poderá reter valores a título de Reserva para garantir o cumprimento das obrigações do PARCEIRO.</p>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">5. Chargeback</h4>
              <p className="mb-4">O PARCEIRO será responsável pelo valor integral do Chargeback, incluindo eventuais custos e despesas decorrentes. A WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA poderá debitar o valor do Chargeback diretamente da Agenda Financeira do PARCEIRO.</p>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">6. Obrigações do Parceiro</h4>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Cumprir as leis, regulamentos e normas aplicáveis às suas atividades;</li>
                <li>Manter seus dados cadastrais atualizados;</li>
                <li>Não praticar atos que possam prejudicar a imagem da WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA;</li>
                <li>Garantir a segurança das informações dos Portadores;</li>
                <li>Atender prontamente às solicitações da WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA.</li>
              </ul>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">7. Rescisão</h4>
              <p className="mb-4">Este Contrato poderá ser rescindido por qualquer das partes, mediante comunicação prévia de 30 dias. A WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA poderá rescindir imediatamente o Contrato em caso de descumprimento pelo PARCEIRO de qualquer de suas obrigações.</p>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">8. Disposições Gerais</h4>
              <p className="mb-4">As partes elegem o foro da Comarca de Goiânia, Estado de Goiás, para dirimir quaisquer controvérsias decorrentes deste Contrato.</p>
            </AccordionContent>
          </AccordionItem>

          {/* CÓDIGO DE ÉTICA E CONDUTA */}
          <AccordionItem value="etica" className="border border-border/50 rounded-xl px-6 bg-card/30">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
              ⚖️ Código de Ética e Conduta
            </AccordionTrigger>
            <AccordionContent className="prose prose-invert max-w-none text-muted-foreground pb-6">
              <p className="mb-4">
                Este Código de Ética e Conduta estabelece os princípios e normas que devem orientar as ações e decisões dos colaboradores e parceiros da WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA. A WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA compromete-se a manter altos padrões de integridade, ética e conduta profissional em todas as suas atividades.
              </p>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">Princípios Gerais</h4>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Integridade:</strong> Agir com honestidade e transparência em todas as atividades e relações comerciais.</li>
                <li><strong>Respeito:</strong> Tratar todos os colaboradores, clientes e parceiros com dignidade e respeito.</li>
                <li><strong>Compromisso com a Qualidade:</strong> Buscar a excelência em todos os serviços prestados.</li>
                <li><strong>Conformidade Legal:</strong> Cumprir rigorosamente todas as leis, regulamentos e normas aplicáveis.</li>
              </ul>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">Conduta no Ambiente de Trabalho</h4>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Assédio e Discriminação:</strong> A WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA não tolera qualquer forma de assédio ou discriminação.</li>
                <li><strong>Confidencialidade:</strong> Manter a confidencialidade das informações sensíveis da WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA e dos clientes.</li>
                <li><strong>Conflitos de Interesse:</strong> Evitar situações onde interesses pessoais possam conflitar com os interesses da WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA.</li>
              </ul>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">Conduta com Clientes e Parceiros</h4>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Transparência:</strong> Fornecer informações claras e precisas sobre os serviços oferecidos.</li>
                <li><strong>Compromisso com a Segurança:</strong> Garantir a segurança das transações e dados dos clientes.</li>
                <li><strong>Ética nas Relações Comerciais:</strong> Manter uma postura ética em todas as interações com clientes e parceiros.</li>
              </ul>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">Uso de Recursos</h4>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Uso Adequado:</strong> Utilizar os recursos da WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA de forma responsável e para fins profissionais.</li>
                <li><strong>Proteção dos Ativos:</strong> Proteger os ativos físicos e intelectuais da WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA contra uso indevido ou roubo.</li>
              </ul>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">Implementação e Cumprimento</h4>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Treinamento:</strong> A WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA oferecerá treinamento regular aos colaboradores sobre este Código.</li>
                <li><strong>Monitoramento:</strong> A conformidade com este código será monitorada regularmente.</li>
                <li><strong>Denúncias:</strong> A WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA estabelecerá canais para que os colaboradores possam reportar violações deste código de forma confidencial.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* POLÍTICA ANTIFRAUDE */}
          <AccordionItem value="antifraude" className="border border-border/50 rounded-xl px-6 bg-card/30">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
              🛡️ Política Antifraude
            </AccordionTrigger>
            <AccordionContent className="prose prose-invert max-w-none text-muted-foreground pb-6">
              <h4 className="text-lg font-semibold text-foreground mt-2 mb-3">1. Introdução e Conceitos</h4>
              <p className="mb-4">
                O presente trata dos procedimentos desenvolvidos pela WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA visando identificar e acompanhar atividades atípicas e suspeitas dos clientes em operações realizadas, sendo essencial para proteger a WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA contra ações fraudulentas, nos termos da legislação aplicável.
              </p>
              <p className="mb-4">
                <strong>Atividades suspeitas:</strong> operações que se desviam do perfil de transações do cliente indicado no Manual de "Conheça Seu Cliente" e no perfil histórico de transações.
              </p>
              <p className="mb-4">
                <strong>Atividades atípicas:</strong> aquelas que fogem da normalidade, seja pelo volume operado em um curto período, seja pela peculiaridade da operação.
              </p>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">2. Abrangência</h4>
              <p className="mb-4">
                Estão sujeitos a essa política os membros da Alta Administração, todos os colaboradores, bem como seus parceiros e prestadores de serviços da WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA.
              </p>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">3. Comunicação e Treinamento</h4>
              <p className="mb-4">
                A WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA divulgará esse conteúdo aos demais públicos relevantes de relacionamento, as diretrizes sobre prevenção e combate às fraudes. Todos os funcionários devem ser treinados regularmente sobre a política antifraude.
              </p>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">4. Monitoramento</h4>
              <p className="mb-4">Através da área responsável é realizado monitoramento e seleção de transações que permitam analisar padrões estranhos e detectar possíveis fraudes. Parâmetros utilizados:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Monitoramento de atualização da conta: detecção de alterações cadastrais, mudanças de senha, telefone, endereço, nome de usuário;</li>
                <li>Análise de Comportamento: analisa o valor das transações, seu volume, a natureza, a habitualidade;</li>
                <li>Capacidade financeira: certifica se as transações realizadas apresentam compatibilidade com a capacidade financeira do cliente;</li>
                <li>Local utilizado para transação;</li>
                <li>Verificação de operações com pessoas expostas politicamente.</li>
              </ul>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">5. Procedimento</h4>
              <p className="mb-4">
                As transações selecionadas e que não possam ser elucidadas prontamente, deverão ser submetidas ao colaborador responsável pelo relacionamento com o Cliente para ciência, análise, validação e apresentação dos esclarecimentos.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* POLÍTICA DE COOKIES */}
          <AccordionItem value="cookies" className="border border-border/50 rounded-xl px-6 bg-card/30">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
              🍪 Política de Cookies
            </AccordionTrigger>
            <AccordionContent className="prose prose-invert max-w-none text-muted-foreground pb-6">
              <p className="mb-4">
                Bem-vindo à Política de Cookies da WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA. Este documento explica como utilizamos cookies e tecnologias similares para coletar e armazenar informações que podem incluir dados pessoais dos usuários ao utilizarem nosso site ou serviços.
              </p>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">O Que São Cookies?</h4>
              <p className="mb-4">
                Cookies são pequenos arquivos de texto que são armazenados no seu dispositivo (computador, tablet ou smartphone) quando você visita um site. Eles contêm informações sobre a sua navegação e são utilizados para garantir o funcionamento adequado do site, facilitar o acesso e navegação e personalizar o conteúdo.
              </p>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">Tipos de Cookies</h4>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Cookies Essenciais:</strong> São estritamente necessários para o funcionamento do site. Permitem que você navegue e use nossos serviços e funcionalidades.</li>
                <li><strong>Cookies de Desempenho e Análise:</strong> Coletam informações sobre como os visitantes usam o site, quais páginas são visitadas com mais frequência.</li>
                <li><strong>Cookies de Funcionalidade:</strong> Permitem que o site lembre escolhas que você faz (como seu nome de usuário, idioma ou região).</li>
                <li><strong>Cookies de Publicidade e Marketing:</strong> São usados para oferecer anúncios mais relevantes para você e seus interesses.</li>
              </ul>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">Como Usamos os Cookies</h4>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Gerenciamento de Sessão:</strong> Os cookies são fundamentais para gerenciar sessões de usuário e oferecer serviços personalizados.</li>
                <li><strong>Análises Estatísticas:</strong> Utilizamos cookies para coletar dados que nos permitem entender como os serviços são usados.</li>
                <li><strong>Publicidade:</strong> Os cookies facilitam a oferta de conteúdo publicitário personalizado.</li>
              </ul>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">Seu Controle Sobre Cookies</h4>
              <p className="mb-4">
                Você tem a opção de aceitar ou recusar cookies. A maioria dos navegadores web aceita cookies automaticamente, mas geralmente você pode modificar a configuração do seu navegador para recusar cookies se preferir.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* PLD/CFT */}
          <AccordionItem value="pld" className="border border-border/50 rounded-xl px-6 bg-card/30">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
              🔒 Prevenção à Lavagem de Dinheiro (PLD/CFT)
            </AccordionTrigger>
            <AccordionContent className="prose prose-invert max-w-none text-muted-foreground pb-6">
              <h4 className="text-lg font-semibold text-foreground mt-2 mb-3">1. Apresentação</h4>
              <p className="mb-4">
                A WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA apresenta seus principais Normativos de Compliance e Política de Prevenção e Combate à Lavagem de Dinheiro e ao Financiamento ao Terrorismo. A WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA reconhece ser uma empresa com compromisso ético e consciente da sua responsabilidade socioambiental e do dever de integridade no exercício de suas atividades.
              </p>
              <p className="mb-4">
                Sendo assim, repudia toda e qualquer forma de corrupção e suborno, discriminação, falsificação ideológica e documental, apropriação indébita ou usurpação, trabalho infantil, forçado, escravo ou análogo a escravo.
              </p>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">2. Objetivo</h4>
              <p className="mb-4">
                A presente Política visa estabelecer princípios, diretrizes e procedimentos, nos termos da legislação em vigor, que devem ser observados por todos os membros, colaboradores, parceiros, terceiros e prestadores de serviços relevantes da WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA, a fim de prevenir que seus sistemas e sua estrutura operacional sejam utilizados para práticas de lavagem de dinheiro e de financiamento do terrorismo.
              </p>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">3. Normas de Referência</h4>
              <p className="mb-4">A WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA busca respeitar toda legislação relacionada ao assunto, em especial:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Lei nº 9.613, de 3 de março de 1998, que dispõe sobre os crimes de "lavagem" ou ocultação de bens, direitos e valores;</li>
                <li>Lei nº 12.846, de 1º de agosto de 2013, que dispõe sobre a responsabilização administrativa e civil de pessoas jurídicas;</li>
                <li>BACEN Circular nº 3.978 de 23/01/2020, que dispõe sobre a política, os procedimentos e os controles internos;</li>
                <li>BACEN Carta Circular nº 4.001 de 29/01/2020, que divulga relação de operações e situações que podem configurar indícios;</li>
                <li>Resolução CVM nº 50, de 31/08/2021, que dispõe sobre a prevenção à lavagem de dinheiro no mercado de valores mobiliários.</li>
              </ul>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">4. Auditoria Interna</h4>
              <p className="mb-4">
                A avaliação da auditoria interna é atividade essencial na avaliação das exigências e recomendações referentes às práticas de PLD/FT. Sua atuação identificará os itens em desconformidade, bem como as oportunidades de melhorias.
              </p>
              <p className="mb-4">A avaliação deve abordar, no mínimo:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Cultura organizacional e capacitação voltada a PLD/CFT;</li>
                <li>Existência de Políticas e Procedimentos formais atualizados e aprovados;</li>
                <li>Procedimentos de Monitoramento e comunicação ao COAF;</li>
                <li>Políticas e ações internas sobre Treinamento PLD/CFT;</li>
                <li>Procedimentos de Conhecimento sobre cliente, funcionário, parceiro;</li>
                <li>Realização de testes anuais de aderência cadastral.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* SEGURANÇA CIBERNÉTICA */}
          <AccordionItem value="seguranca" className="border border-border/50 rounded-xl px-6 bg-card/30">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
              🔐 Política de Segurança Cibernética
            </AccordionTrigger>
            <AccordionContent className="prose prose-invert max-w-none text-muted-foreground pb-6">
              <h4 className="text-lg font-semibold text-foreground mt-2 mb-3">1. Apresentação</h4>
              <p className="mb-4">
                A WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA encontra-se em conformidade com a LGPD de forma facilitada e adequada dos tratamentos de dados e processos de negócios, conforme se observa pela nossa Política de Privacidade e Proteção de Dados Pessoais.
              </p>
              <p className="mb-4">
                A Política de Segurança Cibernética e da Informação é o documento que estabelece conceitos, diretrizes e responsabilidades sobre os principais aspectos relacionados à segurança cibernética e segurança da informação, visando preservar a confidencialidade, integridade, disponibilidade e conformidade de todas as informações sob gestão da WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA.
              </p>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">2. Abrangência</h4>
              <p className="mb-4">
                A Política de Segurança Cibernética e da Informação tem abrangência corporativa da WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA, ou seja, afeta todas as suas áreas de negócio, escritórios e demais operações no que se refere a ocorrência de incidentes de segurança da informação.
              </p>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">3. Conceitos e Definições</h4>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Recursos:</strong> Qualquer ativo, tangível ou intangível, pertencentes, a serviço ou sob responsabilidade da WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA, que possua valor.</li>
                <li><strong>Ameaça:</strong> Qualquer causa potencial de um incidente indesejado que possa resultar em impacto nos objetivos do negócio.</li>
                <li><strong>Controle:</strong> Qualquer recurso ou medida que assegure formas de tratamento de riscos.</li>
                <li><strong>Informação:</strong> Qualquer conjunto organizado de dados que possua algum propósito e valor para o sistema da WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA.</li>
              </ul>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">4. Segurança da Informação</h4>
              <p className="mb-4">É a proteção das informações, sendo caracterizada pela preservação de:</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Confidencialidade:</strong> garantia de que a informação somente será acessada por pessoas efetivamente autorizadas;</li>
                <li><strong>Integridade:</strong> garantia de que o conteúdo da mensagem não será alterado ou violado indevidamente;</li>
                <li><strong>Disponibilidade:</strong> garantia de que a informação estará disponível quando necessária;</li>
                <li><strong>Conformidade:</strong> garantia de que os processos estão em conformidade com as leis e regulamentos.</li>
              </ul>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">5. Princípios de Acesso</h4>
              <p className="mb-4">
                <strong>Least Privilege:</strong> Deve ser concedido apenas o nível mínimo de acesso necessário.
              </p>
              <p className="mb-4">
                <strong>Need to Know:</strong> O acesso deve ser concedido somente a quem realmente tenha a necessidade de acesso.
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* MANUAL KYC */}
          <AccordionItem value="kyc" className="border border-border/50 rounded-xl px-6 bg-card/30">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
              👤 Manual KYC (Know Your Customer)
            </AccordionTrigger>
            <AccordionContent className="prose prose-invert max-w-none text-muted-foreground pb-6">
              <h4 className="text-lg font-semibold text-foreground mt-2 mb-3">1. Apresentação</h4>
              <p className="mb-4">
                Respeitando a legislação vigente e as normas regulatórias, a WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA busca estabelecer um conjunto de regras e procedimentos internos com o objetivo de conhecer seus clientes, visando identificar o perfil de risco, capacidade financeira, natureza dos seus negócios, bem como compreender a motivação para contratação dos serviços ofertados.
              </p>
              <p className="mb-4">
                A WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA não mantém vínculo com terceiros que apresentem indício de relacionamento com quaisquer atividades de natureza criminosa ou aqueles que tenham negócios cuja natureza não permita a verificação mínima da legitimidade das atividades ou da procedência dos recursos movimentados.
              </p>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">2. Procedimentos de Cadastro</h4>
              <p className="mb-4">
                A WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA adota procedimentos que permitem a obtenção, a verificação e a validação da autenticidade de informações de identificação e qualificação do cliente, compatíveis com o perfil de risco e com a natureza da relação de negócio.
              </p>
              <p className="mb-4">Além do processo inicial de cadastro, realizamos monitoramento contínuo a cada 3 meses para reavaliar cada cliente.</p>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">Identificação de Pessoa Física</h4>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Nome completo</li>
                <li>Nacionalidade</li>
                <li>Local e data de nascimento</li>
                <li>Documento de identificação</li>
                <li>Número de CPF</li>
                <li>Endereços</li>
                <li>Endereço eletrônico</li>
                <li>Número de telefone</li>
                <li>Valores de renda e patrimônio</li>
              </ul>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">Identificação de Pessoa Jurídica</h4>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>CNPJ</li>
                <li>Firma ou denominação social</li>
                <li>Atividade principal</li>
                <li>Forma e data de constituição</li>
                <li>Atos constitutivos</li>
                <li>Endereços</li>
                <li>Número de telefone</li>
                <li>Faturamento médio mensal</li>
              </ul>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">Validações Realizadas</h4>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Validação de CPF na Receita Federal</li>
                <li>Validação de CNPJ na Receita Federal</li>
                <li>Verificação de situação cadastral</li>
                <li>Análise de risco e capacidade financeira</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* MANUAL KYS E KYP */}
          <AccordionItem value="kys-kyp" className="border border-border/50 rounded-xl px-6 bg-card/30">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
              🏪 Manual KYS e KYP (Know Your Seller / Product)
            </AccordionTrigger>
            <AccordionContent className="prose prose-invert max-w-none text-muted-foreground pb-6">
              <h4 className="text-lg font-semibold text-foreground mt-2 mb-3">Manual KYS (Know Your Seller)</h4>
              <p className="mb-4">
                <strong>Objetivo:</strong> Este manual define os procedimentos para identificar e verificar a autenticidade dos vendedores em nossa plataforma, assegurando transações seguras e prevenindo atividades fraudulentas.
              </p>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">Procedimentos KYS</h4>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Cadastro de Vendedores:</strong> Os vendedores devem fornecer informações completas, incluindo nome da empresa, CNPJ/CPF, endereço e dados de contato.</li>
                <li><strong>Documentação Requerida:</strong> É necessário enviar documentos que comprovem a existência legal e a boa reputação da empresa, como contrato social e certidões negativas de débitos.</li>
                <li><strong>Verificação de Autenticidade:</strong> Utilizamos verificações automatizadas e análises manuais para validar as informações submetidas.</li>
                <li><strong>Monitoramento Contínuo:</strong> Os vendedores serão monitorados regularmente para garantir a continuidade da conformidade com nossos padrões.</li>
              </ul>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">Manual KYP (Know Your Product)</h4>
              <p className="mb-4">
                <strong>Objetivo:</strong> Descrever os procedimentos para a análise e aceitação de produtos oferecidos por nossos vendedores, garantindo que sejam legais e atendam aos padrões de qualidade exigidos.
              </p>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">Procedimentos KYP</h4>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Descrição Detalhada dos Produtos:</strong> Os vendedores devem fornecer informações completas sobre os produtos, incluindo composição, origem e certificações.</li>
                <li><strong>Avaliação de Conformidade:</strong> Os produtos serão submetidos a verificações para assegurar que cumprem com a legislação vigente e padrões de segurança.</li>
                <li><strong>Feedback dos Consumidores:</strong> Monitoramos as avaliações dos consumidores para identificar produtos com problemas recorrentes.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* GERENCIAMENTO DE RISCOS */}
          <AccordionItem value="riscos" className="border border-border/50 rounded-xl px-6 bg-card/30">
            <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
              ⚠️ Gerenciamento de Riscos Operacionais e Liquidez
            </AccordionTrigger>
            <AccordionContent className="prose prose-invert max-w-none text-muted-foreground pb-6">
              <p className="mb-4">
                Este Manual de Gerenciamento de Riscos Operacionais e Liquidez estabelece os princípios e normas que devem orientar as ações e decisões dos colaboradores e parceiros da WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA. A WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA compromete-se a manter altos padrões no gerenciamento dos riscos operacionais e liquidez com foco em mitigação de riscos em todas as suas atividades.
              </p>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">Introdução</h4>
              <p className="mb-4">
                Este documento estabelece as diretrizes e procedimentos para o gerenciamento de riscos operacionais e de liquidez na WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA, garantindo a continuidade e a segurança das operações.
              </p>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">Identificação de Riscos</h4>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Riscos Operacionais:</strong> Identificação de falhas em processos internos, sistemas, pessoas e eventos externos que podem impactar as operações.</li>
                <li><strong>Riscos de Liquidez:</strong> Identificação de situações onde a WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA possa enfrentar dificuldades para cumprir suas obrigações financeiras devido à falta de recursos líquidos.</li>
              </ul>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">Avaliação e Mensuração</h4>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Avaliação de Impacto:</strong> Análise do impacto potencial de cada risco identificado nas operações e finanças da WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA.</li>
                <li><strong>Probabilidade de Ocorrência:</strong> Estimativa da probabilidade de ocorrência de cada risco.</li>
              </ul>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">Mitigação de Riscos</h4>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Políticas e Procedimentos:</strong> Desenvolvimento de políticas e procedimentos para mitigar riscos operacionais e de liquidez.</li>
                <li><strong>Controles Internos:</strong> Implementação de controles internos para prevenir e detectar falhas e irregularidades.</li>
                <li><strong>Plano de Contingência:</strong> Elaboração de planos de contingência para responder a eventos adversos e garantir a continuidade das operações.</li>
              </ul>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">Monitoramento e Relatório</h4>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Monitoramento Contínuo:</strong> Monitoramento contínuo dos riscos e da eficácia das medidas de mitigação.</li>
                <li><strong>Relatórios Periódicos:</strong> Elaboração de relatórios periódicos sobre a gestão de riscos para a alta administração.</li>
              </ul>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">Gerenciamento de Liquidez</h4>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Gestão de Caixa:</strong> Manutenção de níveis adequados de caixa e equivalentes para garantir a liquidez necessária.</li>
                <li><strong>Linhas de Crédito:</strong> Estabelecimento de linhas de crédito com instituições financeiras para emergências de liquidez.</li>
                <li><strong>Monitoramento de Fluxo de Caixa:</strong> Monitoramento rigoroso do fluxo de caixa para antecipar e responder a necessidades de liquidez.</li>
              </ul>

              <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">Treinamento e Conscientização</h4>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Treinamento Regular:</strong> Oferecer treinamento regular aos colaboradores sobre gerenciamento de riscos operacionais e de liquidez.</li>
                <li><strong>Conscientização:</strong> Promover a conscientização sobre a importância da gestão de riscos em todas as áreas da WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

        </Accordion>

        <div className="mt-12 pt-8 border-t border-border/30 text-center text-xs text-muted-foreground">
          <p><strong>WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA</strong> • CNPJ: 66.032.062/0001 93</p>
          <p className="mt-2">R 5, 691, Quadra C4 Lote 16E, Set Oeste, Goiânia, GO, CEP 74.115.060 • <a href="mailto:contato@wiven.com.br" className="hover:text-foreground transition-colors">contato@wiven.com.br</a></p>
        </div>
      </div>
    </div>
  );
}
