import wivenLogoFull from '@/assets/wiven-logo-full.svg';

export const Footer = () => {
  return (
    <footer className="py-10 sm:py-16 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            {/* Logo */}
            <div>
              <img alt="Wiven" className="h-10 w-auto" src={wivenLogoFull} />
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <a href="/termos-de-uso" className="hover:text-foreground transition-colors">
                Termos de Uso
              </a>
              <a href="/politica-de-privacidade" className="hover:text-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Contato
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-muted-foreground">© 2026 Wiven. Todos os direitos reservados.</p>
          </div>

          {/* Company Info */}
          <div className="border-t border-border/30 pt-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xs text-muted-foreground text-center">
              <p><strong>WIVEN PAGAMENTOS, TECNOLOGIA E SERVICOS LTDA</strong> • CNPJ: 66.032.062/0001-93</p>
              <span className="hidden md:inline">|</span>
              <p>R 5, 691, Quadra C-4 Lote 16E - Set Oeste, Goiânia - GO, CEP 74.115-060</p>
              <span className="hidden md:inline">|</span>
              <p>suportewiven@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>);

};
