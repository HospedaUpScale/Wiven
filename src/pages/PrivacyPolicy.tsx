import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
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

        <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
          Política de Privacidade
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">1. INTRODUÇÃO</h2>
            <p>
              Esta Política de Privacidade ("Política") é aplicável a todos os serviços oferecidos pela WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA, doravante denominada WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA.
            </p>
            <p>
              Com o propósito de resguardar a sua privacidade e garantir a liberdade e o exercício dos direitos do titular de dados, a WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA apresenta esta Política de Privacidade. Este documento tem como finalidade fornecer informações claras e objetivas sobre a coleta, tratamento e armazenamento de dados pessoais necessários para a prestação de seus serviços.
            </p>
            <p>
              O titular dos dados pessoais declara estar ciente desta Política e fornece seu consentimento explícito para o Tratamento de suas Informações Pessoais pela WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA. Se não concordar com o Tratamento de suas Informações Pessoais, conforme estabelecido nesta Política, deverá abster-se de utilizar os serviços da WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA.
            </p>
            <p>
              Caso o usuário seja uma Pessoa Jurídica, algumas condições estabelecidas nesta Política podem não ser aplicáveis, de acordo com a Lei 13.709/2018.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">2. CONCEITO</h2>
            <p>
              Sem prejuízo de outras definições constantes nesta Política, as palavras e expressões abaixo indicadas, sempre que utilizadas com a primeira letra em maiúscula, terão as seguintes definições:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>LGPD:</strong> Lei Geral de Proteção de Dados, a legislação brasileira nº 13.709/2018, que regula o tratamento, proteção e privacidade de Dados Pessoais.</li>
              <li><strong>Titular de dados pessoais:</strong> toda pessoa natural a quem se referem os dados que são objeto de tratamento.</li>
              <li><strong>Dados Pessoais:</strong> informações pessoais que podem ser associadas a uma pessoa física identificada ou identificável.</li>
              <li><strong>ANPD:</strong> Autoridade Nacional de Proteção de Dados, órgão da administração pública federal responsável por zelar, implementar e fiscalizar o cumprimento da LGPD.</li>
              <li><strong>Tratamento:</strong> toda operação realizada com dados pessoais, como coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação.</li>
              <li><strong>Encarregado de dados:</strong> pessoa indicada pelo controlador e operador para atuar como canal de comunicação entre o controlador, os Titulares dos dados e a ANPD.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">3. DADOS PESSOAIS TRATADOS PELA WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA E SUAS FINALIDADES</h2>
            <p>
              A WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA atribui grande importância à sua confiança e compromete-se a tratar os dados pessoais coletados com total observância aos preceitos legais, à boa-fé e aos princípios rigorosos da finalidade, adequação, necessidade, livre acesso, qualidade dos dados, transparência, segurança, prevenção, não discriminação, responsabilização e prestação de contas.
            </p>
            <p>A coleta de Dados Pessoais pode ocorrer por meio dos seguintes métodos:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Dados de credenciamento ao sistema:</strong> nome completo, firma ou denominação social, número de CPF/MF, número de telefone, endereço de residência ou sede, filiação, endereço de email.</li>
              <li><strong>Execução do serviço:</strong> identificação da conta bancária de titularidade do usuário, incluindo nome e número da instituição bancária, número da agência e número da conta.</li>
              <li><strong>Recrutamento e seleção:</strong> nome, foto, email, dados para contato e informações relacionadas à carreira.</li>
              <li><strong>Atendimento de suporte:</strong> nome, email, CPF e outras informações relacionadas à demanda.</li>
              <li><strong>Marketing digital:</strong> nome, email e telefone.</li>
              <li><strong>Registro de acesso:</strong> data e hora de uso da Plataforma, endereço IP e cookies de acesso.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">4. COMPARTILHAMENTO DE DADOS PESSOAIS</h2>
            <p>Os dados pessoais do titular podem ser compartilhados com as seguintes finalidades:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Parceiros e fornecedores:</strong> para assegurar a prestação dos serviços contratados.</li>
              <li><strong>Autoridades competentes:</strong> quando requisitados para investigar condutas ilícitas.</li>
              <li><strong>Proteção dos interesses da WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA:</strong> em casos de conflitos, incluindo ações judiciais.</li>
              <li><strong>Operações societárias:</strong> em situações como fusões, cisões, aquisições ou incorporações.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">5. ARMAZENAMENTO E EXCLUSÃO DE DADOS</h2>
            <p>
              A WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA poderá armazenar os dados pessoais quando houver legítimo interesse e para cumprir exigências legais. Os dados relacionados ao cadastro serão mantidos enquanto o usuário mantiver um cadastro ativo. Contudo, esses dados também poderão ser retidos após o USUÁRIO deixar de usar os serviços pelos seguintes motivos:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Manutenção de registros das operações realizadas no Sistema Financeiro Nacional.</li>
              <li>Cumprimento de obrigações legais e regulatórias.</li>
              <li>Produção de provas.</li>
              <li>Atendimento aos prazos determinados por lei, podendo ser armazenados por até 10 anos após o encerramento da prestação de serviços.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">6. DIREITOS DO TITULAR DE DADOS</h2>
            <p>A LGPD estabelece, no seu Artigo 18, um conjunto de direitos a serem exercidos pelo titular dos dados:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirmação da existência de tratamento de dados pessoais.</li>
              <li>Acesso aos dados pessoais.</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários.</li>
              <li>Eliminação dos dados pessoais tratados com o consentimento.</li>
              <li>Conhecimento das entidades com as quais compartilhamos seus dados.</li>
              <li>Revogação do consentimento.</li>
              <li>Solicitação de revisão de decisões automatizadas.</li>
              <li>Portabilidade a outros prestadores de serviços.</li>
              <li>Direito de petição perante a ANPD.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">7. MEDIDAS DE SEGURANÇA</h2>
            <p>
              As Informações Pessoais coletadas pela WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA são armazenadas em servidores seguros, com a utilização de mecanismos criptográficos e a implementação de medidas de segurança constantemente atualizadas.
            </p>
            <p>
              A WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA emprega padrões de segurança avançados, que incluem firewalls, antivírus e outros softwares destinados a proteger contra invasões e prevenir o vazamento de informações pessoais.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">8. ALTERAÇÕES DA POLÍTICA</h2>
            <p>
              A WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA reserva o direito de realizar correções, modificações ou adições a esta Política de Privacidade a qualquer momento. A versão mais recente da Política será sempre disponibilizada em nosso website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">9. CONTATO</h2>
            <p>
              Para esclarecimento de dúvidas relacionadas a esta Política de Privacidade ou para realizar solicitações referentes aos direitos dos USUÁRIOS, favor entrar em contato com a WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 text-center text-xs text-muted-foreground">
          <p><strong>WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA</strong> • CNPJ: 66.032.062/0001 93</p>
          <p className="mt-2">R 5, 691, Quadra C4 Lote 16E, Set Oeste, Goiânia, GO, CEP 74.115.060 • <a href="mailto:contato@wiven.com.br" className="hover:text-foreground transition-colors">contato@wiven.com.br</a></p>
        </div>
      </div>
    </div>
  );
}
