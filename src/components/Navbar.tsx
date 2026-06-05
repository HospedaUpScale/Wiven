import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, User } from 'lucide-react';
import wivenLogo from '@/assets/wiven-logo-full.svg';

const navItems = [
  { label: 'Quem somos', href: '#idealizador' },
  { label: 'Benefícios', href: '#checkouts' },
  { label: 'Premiações', href: '#premiacoes' },
  { label: 'Integrações', href: '#integracoes' },
  { label: 'Comunidade', href: '#comunidade' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const overflowValue = isMobileMenuOpen ? 'hidden' : '';

    document.body.style.overflow = overflowValue;
    document.documentElement.style.overflow = overflowValue;

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);

    if (!element) {
      setIsMobileMenuOpen(false);
      return;
    }

    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });
      return;
    }

    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? 'bg-background/95 backdrop-blur-lg border-b border-border/50' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src={wivenLogo} alt="Wiven" className="h-6 sm:h-7 lg:h-8 w-auto" />
            </div>

            {/* Desktop Navigation - Centered pill */}
            <div className="hidden xl:flex items-center">
              <div className="flex items-center gap-1 px-2 py-1.5 rounded-full border border-border/50 bg-secondary/30 backdrop-blur-sm">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-full hover:bg-secondary/50"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="gradient"
                size="sm"
                onClick={() => window.open('https://wa.me/message/4M546VJJZ673G1', '_blank')}
              >
                Criar Conta
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 rounded-full"
                onClick={() => window.open('https://wa.me/message/4M546VJJZ673G1', '_blank')}
              >
                <User className="w-4 h-4" />
                Login
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="xl:hidden relative z-[60] p-2 text-foreground active:scale-95 transition-transform"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <>
          <button
            type="button"
            className="xl:hidden fixed inset-0 z-40 bg-background/95"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Fechar menu"
          />

          <div
            id="mobile-navigation"
            className="xl:hidden fixed inset-x-0 top-14 sm:top-16 lg:top-20 bottom-0 z-[45] overflow-y-auto overscroll-contain border-t border-border/50 bg-background/95 backdrop-blur-lg"
            style={{ WebkitOverflowScrolling: 'touch' }}
          >
            <div className="py-6 px-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="block px-4 py-4 text-lg text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors duration-200 rounded-xl active:bg-secondary/70"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="p-6 pb-8 flex flex-col gap-3 border-t border-border/50 bg-background/95">
              <Button
                variant="gradient"
                className="w-full h-12 text-base"
                onClick={() => window.open('https://wa.me/message/4M546VJJZ673G1', '_blank')}
              >
                Criar Conta
              </Button>
              <Button
                variant="outline"
                className="w-full h-12 text-base gap-2"
                onClick={() => window.open('https://wa.me/message/4M546VJJZ673G1', '_blank')}
              >
                <User className="w-4 h-4" />
                Login
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
};
