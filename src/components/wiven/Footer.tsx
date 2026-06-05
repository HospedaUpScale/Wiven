import { WivenLogo } from './WivenLogo';

const linkGroups = [
  {
    title: 'Plataforma',
    links: [
      { label: 'Checkout', href: '#funcionalidades' },
      { label: 'Funis', href: '#funnel' },
      { label: 'Integrações', href: '#integracoes' },
      { label: 'Afiliados', href: '#affiliates' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Premiações', href: '#premiacoes' },
      { label: 'Suporte', href: '#support' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contato', href: 'mailto:contato@wiven.com.br' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Termos de Uso', href: '/termos-de-uso' },
      { label: 'Política de Privacidade', href: '/politica-de-privacidade' },
    ],
  },
];

export function Footer() {
  return (
    <footer id="footer" aria-label="Footer" className="relative border-t border-zinc-800/60 py-14 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          <div className="sm:col-span-2 lg:col-span-2">
            <WivenLogo className="h-9 w-auto mb-5 opacity-90" />
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
              Plataforma de pagamentos e estrutura digital para infoprodutores que jogam o jogo
              sério.
            </p>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-500 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-zinc-800/60 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
            <p>© 2026 Wiven. Todos os direitos reservados.</p>
            <p className="text-center md:text-right">
              <strong className="text-zinc-500">WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA</strong>
              {' · '}
              CNPJ 66.032.062/0001 93
            </p>
          </div>
          <p className="text-[11px] text-zinc-600 text-center md:text-left mt-3 leading-relaxed">
            R 5, 691, Quadra C4 Lote 16E, Set Oeste, Goiânia, GO, CEP 74.115.060 · contato@wiven.com.br
          </p>
        </div>
      </div>
    </footer>
  );
}
