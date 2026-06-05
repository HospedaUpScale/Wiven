import { useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import { WivenLogo } from '@/components/wiven/WivenLogo';
import type { HelpArticle } from '@/data/helpCenter';
import {
  getArticle,
  getArticlesGroupedByCategory,
  getDefaultArticle,
  helpArticles,
} from '@/data/helpCenter';

function ArticleContent({ article }: { article: HelpArticle }) {
  return (
    <>
      <p className="text-sm text-zinc-500 mb-4">
        Artigos sobre:{' '}
        <span className="text-blue-500 font-medium">{article.categoriaLabel}</span>
      </p>

      <h1 className="text-3xl sm:text-4xl md:text-[2.5rem] font-bold tracking-tight text-white leading-tight">
        {article.titulo}
      </h1>

      <hr className="border-zinc-800 my-6" />

      <div className="space-y-8">
        {article.sections.map((section, index) => (
          <div key={index}>
            {section.heading && (
              <h2 className="border-l-2 border-blue-600 pl-4 text-xl font-semibold text-white my-4">
                {section.heading}
              </h2>
            )}
            {section.callout && (
              <div className="bg-zinc-950 border-l-2 border-blue-500 p-4 rounded-r-lg my-6 text-zinc-300 text-sm leading-relaxed">
                {section.callout}
              </div>
            )}
            <div className="text-zinc-300 leading-relaxed space-y-4">
              {section.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default function HelpCenterPage() {
  const { categoria, slug } = useParams<{ categoria?: string; slug?: string }>();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const activeArticle = useMemo(() => {
    if (categoria && slug) {
      return getArticle(categoria, slug) ?? getDefaultArticle();
    }
    return getDefaultArticle();
  }, [categoria, slug]);

  const grouped = getArticlesGroupedByCategory();

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return helpArticles.filter(
      (a) =>
        a.titulo.toLowerCase().includes(q) ||
        a.sections.some(
          (s) =>
            s.heading?.toLowerCase().includes(q) ||
            s.paragraphs.some((p) => p.toLowerCase().includes(q)),
        ),
    );
  }, [query]);

  const selectArticle = (item: HelpArticle) => {
    navigate(`/ajuda/${item.categoria}/${item.slug}`);
  };

  const isActive = (item: HelpArticle) =>
    item.categoria === activeArticle.categoria && item.slug === activeArticle.slug;

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-blue-600/30">
      <header className="border-b border-zinc-800/80 bg-black/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-4">
          <Link to="/" className="flex-shrink-0" aria-label="Wiven — início">
            <WivenLogo className="h-7 w-auto" />
          </Link>
          <Link
            to="/"
            className="text-sm font-medium text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-600 px-4 py-2 rounded-lg transition-colors"
          >
            Ir para o site
          </Link>
        </div>

        <div className="max-w-3xl mx-auto px-6 pb-8">
          <div className="relative bg-zinc-900/50 border border-zinc-800 rounded-2xl focus-within:border-blue-600 transition-colors flex items-center gap-3 px-5 py-4">
            <Search className="w-5 h-5 text-zinc-500 flex-shrink-0" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar em nossa Central de Ajuda"
              className="w-full bg-transparent text-white placeholder:text-zinc-500 text-base outline-none"
              aria-label="Buscar em nossa Central de Ajuda"
            />
          </div>
          {query.trim() && searchResults.length > 0 && (
            <ul className="mt-2 rounded-xl border border-zinc-800 bg-zinc-950/95 overflow-hidden shadow-xl">
              {searchResults.slice(0, 8).map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => {
                      selectArticle(item);
                      setQuery('');
                    }}
                    className="w-full text-left block px-4 py-3 text-sm text-zinc-300 hover:bg-zinc-900 hover:text-white transition-colors"
                  >
                    <span className="text-zinc-500 text-xs block mb-0.5">{item.categoriaLabel}</span>
                    {item.titulo}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 max-w-7xl mx-auto min-h-[calc(100vh-200px)] gap-8 px-6 pt-8 pb-20">
        <aside className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-zinc-800/80 pb-8 lg:pb-0 lg:pr-4">
          <h1 className="text-lg font-semibold text-white mb-6 tracking-tight">Central de Ajuda</h1>
          <nav className="space-y-8" aria-label="Perguntas frequentes">
            {grouped.map((group) => (
              <div key={group.categoria}>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3 px-2">
                  {group.label}
                </h2>
                <ul className="flex flex-col gap-0.5">
                  {group.articles.map((item) => (
                    <li key={item.id}>
                      <button
                        type="button"
                        onClick={() => selectArticle(item)}
                        className={`w-full text-left text-sm py-2.5 pr-3 rounded-r-lg transition-colors ${
                          isActive(item)
                            ? 'border-l-2 border-blue-600 bg-zinc-900/50 text-white pl-3'
                            : 'text-zinc-400 hover:text-white pl-2'
                        }`}
                      >
                        {item.titulo}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        <article className="lg:col-span-8 min-w-0 pt-0 lg:pt-0">
          <ArticleContent article={activeArticle} />
        </article>
      </div>
    </div>
  );
}
