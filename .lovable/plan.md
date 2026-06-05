

## Plano de Rebranding: Sellecty → Wiven

### Resumo
Substituir todas as referências a "Sellecty" por "Wiven" em todo o projeto, incluindo textos, metadados, assets e documentos legais. Manter o estilo visual escuro com azul.

### Pré-requisito
- Logo da Wiven (o usuário vai enviar)

### Arquivos a modificar

**1. Assets de logo**
- Copiar a logo enviada para `src/assets/wiven-logo.png` e `src/assets/wiven-logo-full.png`
- Atualizar imports em `HeroSection.tsx` e `Footer.tsx`

**2. index.html — Meta tags e SEO**
- Title, og:title, twitter:title: "Sellecty" → "Wiven"
- og:description, meta description: "Sellecty" → "Wiven"
- Favicon (se nova logo fornecida)
- Canonical URL (manter ou atualizar conforme domínio)

**3. Componentes com texto visível (6 arquivos)**
- `HeroSection.tsx` — Badge "Plataforma #1 para Infoprodutores", alt text da logo
- `Footer.tsx` — Logo, copyright "© 2026 Sellecty", razão social "SELLECTY LTDA" → atualizar para nova razão social ou manter genérico
- `FAQSection.tsx` — Referências a "Sellecty" nas perguntas/respostas
- `CTASection.tsx` — Textos que mencionem a marca
- `CheckoutSection.tsx` — Se houver menção
- `Navbar.tsx` — Verificar se há referência textual

**4. Páginas legais (2 arquivos)**
- `TermsOfUse.tsx` — ~200+ ocorrências de "SELLECTY LTDA" e "Sellecty"
- `PrivacyPolicy.tsx` — Múltiplas ocorrências

**5. Dados da empresa no Footer**
- CNPJ e endereço: perguntar se mudam ou mantêm

### Seção técnica
- Busca e substituição global: `Sellecty` → `Wiven`, `SELLECTY` → `WIVEN`, `sellecty` → `wiven`
- Renomear arquivos de assets de `sellecty-*` para `wiven-*`
- Atualizar todos os imports correspondentes
- Total: ~13 arquivos, ~300 ocorrências

### Pergunta pendente
- O CNPJ e endereço no footer mudam também?
- A razão social muda (ex: "WIVEN LTDA")?

