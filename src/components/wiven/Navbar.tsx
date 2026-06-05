import { User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { WivenLogo } from './WivenLogo';

const navItems = [
  { label: 'Início', hash: 'inicio' },
  { label: 'Funcionalidades', hash: 'funcionalidades' },
  { label: 'Integrações', hash: 'integracoes' },
  { label: 'Premiações', hash: 'premiacoes' },
] as const;

const SIGNUP_URL = 'https://app.wiven.com.br/auth/register';
const LOGIN_URL = 'https://app.wiven.com.br/auth/login';

const navLinkClass =
  'text-zinc-400 hover:text-white text-sm font-medium transition-opacity duration-200';

function scrollToSection(hash: string) {
  const element = document.getElementById(hash);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function HomeNavLink({ label, hash }: { label: string; hash: string }) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <Link
      to={{ pathname: '/', hash }}
      onClick={(e) => {
        if (isHome) {
          e.preventDefault();
          scrollToSection(hash);
        }
      }}
      className={navLinkClass}
    >
      {label}
    </Link>
  );
}

export function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-zinc-900/40 h-20 flex items-center">
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between w-full relative">
        <Link
          to={{ pathname: '/', hash: 'inicio' }}
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              scrollToSection('inicio');
            }
          }}
          className="flex-shrink-0"
          aria-label="Wiven — início"
        >
          <WivenLogo className="h-7 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-6 bg-zinc-900/30 border border-zinc-800/40 px-6 py-2 rounded-full backdrop-blur-sm absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <HomeNavLink key={item.hash} label={item.label} hash={item.hash} />
          ))}
          <Link to="/ajuda" className={navLinkClass}>
            Ajuda
          </Link>
        </nav>

        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0a4cff] hover:bg-blue-600 text-white font-medium text-sm px-5 py-2 rounded-xl transition-all shadow-[0_0_15px_rgba(10,76,255,0.3)]"
          >
            Criar Conta
          </a>
          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-800 bg-transparent hover:bg-zinc-900/50 text-white text-sm font-medium px-4 py-2 rounded-xl flex items-center gap-2 transition-all"
          >
            <User className="w-4 h-4" />
            Login
          </a>
        </div>
      </div>
    </header>
  );
}
