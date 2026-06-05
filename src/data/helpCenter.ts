export type HelpSection = {
  heading?: string;
  paragraphs: string[];
  callout?: string;
};

export type HelpArticle = {
  id: string;
  slug: string;
  categoria: string;
  categoriaLabel: string;
  titulo: string;
  sections: HelpSection[];
};

export const helpCategories: Record<string, string> = {
  financeiro: 'Financeiro',
  produtos: 'Produtos e vendas',
  integracoes: 'Integrações',
  conta: 'Conta e suporte',
};

export const helpArticles: HelpArticle[] = [
  {
    id: 'prazo-recebimento',
    slug: 'prazo-recebimento',
    categoria: 'financeiro',
    categoriaLabel: helpCategories.financeiro,
    titulo: 'Qual é o prazo de recebimento?',
    sections: [
      {
        paragraphs: [
          'Na Wiven, o prazo de liberação depende da forma de pagamento escolhida pelo seu cliente. Entender esses prazos ajuda você a planejar o fluxo de caixa da operação com previsibilidade.',
        ],
        callout:
          'Prazo médio: Pix é creditado de forma instantânea. Cartão à vista segue o calendário da adquirente. Parcelamentos podem levar até 30 dias por parcela, conforme a modalidade.',
      },
      {
        heading: 'Recebimento via Pix',
        paragraphs: [
          'Pagamentos via Pix são processados em tempo real. Assim que a transação é confirmada, o valor entra no seu fluxo de recebíveis na plataforma, permitindo maior liquidez para reinvestir na operação.',
        ],
      },
      {
        heading: 'Cartão de crédito e outras modalidades',
        paragraphs: [
          'Para cartão de crédito e demais meios, o prazo varia conforme a bandeira, o número de parcelas e as regras da rede de pagamento. Em operações parceladas, cada parcela pode ser liberada em ciclos distintos, chegando a até 30 dias em alguns cenários.',
        ],
      },
    ],
  },
  {
    id: 'area-de-membros',
    slug: 'area-de-membros',
    categoria: 'produtos',
    categoriaLabel: helpCategories.produtos,
    titulo: 'Vocês disponibilizam área de membros? Como funciona?',
    sections: [
      {
        paragraphs: [
          'Sim. A Wiven oferece área de membros com experiência premium, inspirada em plataformas de streaming, para elevar a percepção de valor do seu infoproduto.',
        ],
      },
      {
        heading: 'Organização do conteúdo',
        paragraphs: [
          'Você estrutura cursos em módulos, aulas e materiais complementares com interface intuitiva e responsiva. Seus alunos acessam tudo em um ambiente coeso, sem fricção entre compra e consumo.',
        ],
      },
      {
        heading: 'Experiência do aluno',
        paragraphs: [
          'O layout prioriza clareza, navegação fluida e identidade visual alinhada ao seu produto, reforçando a sensação de ecossistema profissional desde o primeiro login.',
        ],
      },
    ],
  },
  {
    id: 'coproducao',
    slug: 'coproducao',
    categoria: 'produtos',
    categoriaLabel: helpCategories.produtos,
    titulo: 'Vocês têm sistema de coprodução?',
    sections: [
      {
        paragraphs: [
          'Sim. O sistema de coprodução da Wiven automatiza a divisão de receitas entre parceiros, eliminando planilhas manuais e reduzindo erros operacionais.',
        ],
      },
      {
        heading: 'Como configurar',
        paragraphs: [
          'Basta definir as porcentagens de cada coprodutor no painel. A plataforma calcula e distribui os valores automaticamente a cada venda aprovada, com rastreabilidade completa.',
        ],
      },
    ],
  },
  {
    id: 'upsell-um-clique',
    slug: 'upsell-um-clique',
    categoria: 'produtos',
    categoriaLabel: helpCategories.produtos,
    titulo: 'Tem upsell de 1 clique?',
    sections: [
      {
        paragraphs: [
          'Sim. O upsell de um clique permite oferecer produtos complementares logo após a compra principal, sem exigir que o cliente digite os dados do cartão novamente.',
        ],
        callout:
          'Essa mecânica reduz abandono no funil e costuma elevar o ticket médio de forma consistente quando a oferta complementar está bem alinhada à promessa principal.',
      },
      {
        heading: 'Impacto na conversão',
        paragraphs: [
          'Ao remover etapas desnecessárias, você maximiza a chance de aceite da oferta adicional no momento de maior intenção de compra.',
        ],
      },
    ],
  },
  {
    id: 'recorrencia-assinatura',
    slug: 'recorrencia-assinatura',
    categoria: 'produtos',
    categoriaLabel: helpCategories.produtos,
    titulo: 'É possível vender produtos por recorrência (assinatura)?',
    sections: [
      {
        paragraphs: [
          'Sim. Você pode configurar cobranças recorrentes mensais, trimestrais, semestrais ou anuais diretamente na plataforma.',
        ],
      },
      {
        heading: 'Gestão automática',
        paragraphs: [
          'O sistema administra renovações, tentativas de cobrança e status de assinatura, mantendo sua operação previsível e com menos intervenção manual.',
        ],
      },
    ],
  },
  {
    id: 'servicos-digitais',
    slug: 'servicos-digitais',
    categoria: 'produtos',
    categoriaLabel: helpCategories.produtos,
    titulo: 'Posso usar para vender serviços digitais? (ex: Mentoria)',
    sections: [
      {
        paragraphs: [
          'Absolutamente. A Wiven é ideal para mentorias, consultorias, coaching e qualquer serviço digital com entrega personalizada.',
        ],
      },
      {
        heading: 'Configuração flexível',
        paragraphs: [
          'Você cria produtos com regras de acesso, entregáveis e comunicação pós-venda adaptadas ao formato do seu serviço, sem depender de ferramentas paralelas.',
        ],
      },
    ],
  },
  {
    id: 'produtos-fisicos',
    slug: 'produtos-fisicos',
    categoria: 'produtos',
    categoriaLabel: helpCategories.produtos,
    titulo: 'Aceita produtos físicos também?',
    sections: [
      {
        paragraphs: [
          'Sim. É possível vender produtos físicos pela Wiven, com suporte a fluxos que envolvem logística e gestão de envios.',
        ],
      },
      {
        heading: 'Integrações de logística',
        paragraphs: [
          'A plataforma se conecta a sistemas de fulfillment e rastreamento para que sua operação física converse com o financeiro em um único painel.',
        ],
      },
    ],
  },
  {
    id: 'sistema-afiliados',
    slug: 'sistema-afiliados',
    categoria: 'integracoes',
    categoriaLabel: helpCategories.integracoes,
    titulo: 'Tem sistema de afiliados?',
    sections: [
      {
        paragraphs: [
          'Sim. O marketplace de afiliados da Wiven permite recrutar parceiros, rastrear vendas e pagar comissões de forma automatizada.',
        ],
      },
      {
        heading: 'Rastreamento e comissões',
        paragraphs: [
          'Cada afiliado recebe links únicos. O sistema identifica a origem da venda, calcula a comissão configurada e mantém histórico para auditoria e otimização de campanhas.',
        ],
      },
    ],
  },
  {
    id: 'preciso-de-ajuda',
    slug: 'preciso-de-ajuda',
    categoria: 'conta',
    categoriaLabel: helpCategories.conta,
    titulo: 'Preciso de ajuda, como proceder?',
    sections: [
      {
        paragraphs: [
          'Nossa equipe de suporte está disponível 24 horas por dia, 7 dias por semana para acompanhar sua operação.',
        ],
        callout:
          'Canais oficiais: chat na plataforma, e-mail e WhatsApp. O tempo médio de primeira resposta é de poucos minutos em horário comercial estendido.',
      },
      {
        heading: 'Antes de abrir um chamado',
        paragraphs: [
          'Tenha em mãos o ID da transação ou o e-mail da conta vinculada. Isso acelera a análise e reduz idas e vindas no atendimento.',
        ],
      },
    ],
  },
];

export function getArticle(categoria: string, slug: string): HelpArticle | undefined {
  return helpArticles.find((a) => a.categoria === categoria && a.slug === slug);
}

export function getArticlesByCategory(categoria: string): HelpArticle[] {
  return helpArticles.filter((a) => a.categoria === categoria);
}

export function getCategoryLabel(categoria: string): string {
  return helpCategories[categoria] ?? categoria;
}

export const defaultHelpRoute = {
  categoria: helpArticles[0].categoria,
  slug: helpArticles[0].slug,
};

export const helpCategoryOrder = ['financeiro', 'produtos', 'integracoes', 'conta'] as const;

export function getArticlesGroupedByCategory() {
  return helpCategoryOrder.map((categoria) => ({
    categoria,
    label: getCategoryLabel(categoria),
    articles: getArticlesByCategory(categoria),
  }));
}

export function getDefaultArticle(): HelpArticle {
  return (
    getArticle(defaultHelpRoute.categoria, defaultHelpRoute.slug) ?? helpArticles[0]
  );
}
