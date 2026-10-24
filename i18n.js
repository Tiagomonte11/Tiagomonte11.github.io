/*
  English / Portuguese switch for callmemonte.com.

  The pages are written in English. This file swaps each piece of text for its
  Portuguese version (European Portuguese) and back, and adds the EN | PT switch to the menu.
  "Call me Monte" and place names are never translated.

  To change a translation: find the English text on the left and edit the Portuguese on the right.
  The English must match the page exactly (spacing at the start and end doesn't matter).
*/
(() => {
  const PT = {
    // menu and shared
    'About': 'Sobre',
    'Music': 'Música',
    'Business': 'Negócios',
    "Let's connect": 'Vamos conectar',
    'Home': 'Início',
    'Back to top': 'Voltar ao topo',
    'About Tiago Monte': 'Sobre Tiago Monte',
    'Tiago Monte DJing': 'Tiago Monte a atuar como DJ',
    'Tiago Monte — Call me Monte': 'Tiago Monte — Call me Monte',

    // page titles and descriptions (what Google shows in results)
    'Tiago Monte — Entrepreneur, DJ & Producer | Call me Monte': 'Tiago Monte — Empreendedor, DJ & Produtor | Call me Monte',
    'Tiago Monte (Monte) is an entrepreneur, organic house DJ and producer based in Luanda, Angola, with business experience across Portugal, Mozambique and the USA.':
      'Tiago Monte (Monte) é empreendedor, DJ e produtor de house orgânico baseado em Luanda, Angola, com experiência em negócios em Portugal, Moçambique e nos EUA.',
    'Tiago Monte DJ — Organic & Underground House, Luanda | Monte': 'Tiago Monte DJ — House Orgânico & Underground, Luanda | Monte',
    'Monte (Tiago Monte) is a DJ and producer of organic, underground and afrotech house from Luanda, Angola. Sets at Sunset Sino, Sunset DST, Festival Utopia, Magusto and Abrir Abril.':
      'Monte (Tiago Monte) é DJ e produtor de house orgânico, underground e afrotech em Luanda, Angola. Sets no Sunset Sino, Sunset DST, Festival Utopia, Magusto e Abrir Abril.',
    'Tiago Monte — Business: Sales, HR & Ventures | Call me Monte': 'Tiago Monte — Negócios: Vendas, RH & Empreendimentos | Call me Monte',
    "Tiago Monte's road in business: Head of HR at DST Angola in Luanda, Head of Sales at Assim Store in Braga, co-founder of Casa Sauna LLC in Delaware, BBA from EU Business School.":
      'O percurso de Tiago Monte nos negócios: Diretor de RH na DST Angola, em Luanda, Diretor Comercial na Assim Store, em Braga, cofundador da Casa Sauna LLC, no Delaware, e BBA pela EU Business School.',
    'The music side of Tiago Monte': 'O lado musical de Tiago Monte',
    'The business side of Tiago Monte': 'O lado dos negócios de Tiago Monte',

    // home: opening screen
    'Frequency': 'Frequência',
    'Music · DJ sets · Events': 'Música · DJ sets · Eventos',
    'Enterprise': 'Negócios',
    'Sales · People · Ventures': 'Vendas · Pessoas · Empreendimentos',
    'Music · Business · Purpose ·': 'Música · Negócios · Propósito ·',
    'Entrepreneur': 'Empreendedor',
    '· Producer · DJ': '· Produtor · DJ',
    'Music where inspiration leads.': 'Música guiada pela inspiração.',
    'Business that moves the world forward.': 'Negócios que fazem o mundo avançar.',
    'Based in Luanda, Angola': 'Baseado em Luanda, Angola',

    // home: moving words
    'Create': 'Criar',
    'Innovate': 'Inovar',
    'Explore': 'Explorar',
    'Endure': 'Perseverar',
    'Connect': 'Conectar',
    'Create, Innovate, Explore, Endure, Connect': 'Criar, Inovar, Explorar, Perseverar, Conectar',

    // home: about
    'Drawn to': 'Atraído por',
    'Interests': 'Interesses',
    'Finance & investing': 'Finanças & investimento',
    'Energy': 'Energia',
    'Agriculture': 'Agricultura',
    'Music Production': 'Produção Musical',
    'AI': 'IA',
    'Blockchain': 'Blockchain',
    'Finance and investing: see the business side': 'Finanças e investimento: ver o lado dos negócios',
    'Music production: see the music page': 'Produção musical: ver a página de música',
    'Now': 'Atualmente',
    'Head of HR, DST Angola': 'Diretor de RH, DST Angola',
    'Sound': 'Som',
    'Organic & underground house': 'House orgânico & underground',
    'Speaks': 'Línguas',
    'Portuguese, English, Spanish': 'Português, Inglês, Espanhol',

    // home: closing
    'What drives me': 'O que me move',
    'In': 'Em',
    'pursuit': 'busca',
    'of': 'de',
    'purpose': 'propósito',
    'greatness.': 'grandeza.',
    'In pursuit of purpose and greatness.': 'Em busca de propósito e grandeza.',
    'You': '',
    'reap': 'Colhes',
    'what you': 'o que',
    'sow': 'semeias',
    'Galatians 6:7': 'Gálatas 6:7',
    "Let's": 'Vamos',
    'connect': 'conectar',
    'Tiago Monte: organic and underground house producer and DJ, entrepreneur and investor. Based in Luanda, Angola.':
      'Tiago Monte: produtor e DJ de house orgânico e underground, empreendedor e investidor. Baseado em Luanda, Angola.',

    // music page
    'Music · Call me Monte': 'Música · Call me Monte',
    'The music side of Tiago Monte: music production, DJ sets and the events he has played, from Sunset Sino to Abrir Abril.':
      'O lado musical de Tiago Monte: produção musical, DJ sets e os eventos onde tocou, do Sunset Sino ao Abrir Abril.',
    'The music side': 'O lado da música',
    'Sharing the art, one set at a time.': 'A partilhar a arte, um set de cada vez.',
    'Listen on SoundCloud': 'Ouvir no SoundCloud',
    'Organic · Underground · House': 'Orgânico · Underground · House',
    'Born in the': 'Nascida no',
    'studio,': 'estúdio,',
    'alive on the dance floor': 'viva na pista de dança',
    'Studio': 'Estúdio',
    'Production': 'Produção',
    "I produce within the creative house space: organic, underground and afrotech. I don't limit myself to one style; I follow what inspiration asks for.":
      'Produzo dentro do universo criativo do house: orgânico, underground e afrotech. Não me limito a um só estilo; sigo aquilo que a inspiração pede.',
    'Live': 'Ao vivo',
    'DJ sets': 'DJ sets',
    'DJing is how I share my art': 'Ser DJ é a forma como partilho a minha arte',
    'with the world': 'com o mundo',
    'For me, DJing is more than mixing tracks. It is the art of feeling a room, reading its energy, and transforming a fleeting moment into an unforgettable experience.':
      'Para mim, ser DJ é mais do que misturar faixas. É a arte de sentir uma sala, ler a sua energia e transformar um momento fugaz numa experiência inesquecível.',
    'Every set is a journey, a story told through rhythm, atmosphere, and emotion. Like a sine wave in motion, it rises to euphoric heights and falls into soulful valleys. The peaks ignite the dance floor, while the quieter moments offer space to breathe, take a sip, and surrender to the music.':
      'Cada set é uma viagem, uma história contada através do ritmo, da atmosfera e da emoção. Como uma onda sinusoidal em movimento, sobe a alturas eufóricas e desce a vales cheios de alma. Os picos incendeiam a pista de dança, enquanto os momentos mais calmos dão espaço para respirar, beber um gole e render-se à música.',
    'It’s a delicate dance between tension and release, anticipation and exhilaration. Every beat has a purpose, every transition tells a story, and every silence makes the next drop more powerful.':
      'É uma dança delicada entre tensão e libertação, expectativa e euforia. Cada batida tem um propósito, cada transição conta uma história e cada silêncio torna o próximo drop ainda mais poderoso.',
    'Because the magic isn’t just in the music. It’s in the connection, the warmth, the shared energy, and those moments when strangers become one with the rhythm.':
      'Porque a magia não está só na música. Está na ligação, no calor, na energia partilhada e naqueles momentos em que desconhecidos se tornam um só com o ritmo.',
    'I don’t just play music. I create moments you can feel long after the last track fades.':
      'Não me limito a tocar música. Crio momentos que se sentem muito depois de a última faixa se desvanecer.',
    'Genres': 'Géneros',
    'Where my music lives right now.': 'Onde a minha música vive neste momento.',
    'Organic house': 'House orgânico',
    'Underground house': 'House underground',
    'Events': 'Eventos',
    'The venues': 'Os locais',
    "I've played": 'onde já toquei',
    'And the people who made them.': 'E as pessoas que lhes deram vida.',
    'events ·': 'eventos ·',
    'photos': 'fotos',
    'More sets,': 'Mais sets,',
    'more stories': 'mais histórias',
    ', soon.': ', em breve.',
    'The other side: Business': 'O outro lado: Negócios',
    'Jump to an event': 'Saltar para um evento',
    'Photo viewer': 'Visualizador de fotos',
    'Close': 'Fechar',
    'Previous photo': 'Foto anterior',
    'Next photo': 'Foto seguinte',

    // crypto page
    'Live Crypto Prices — Bitcoin, Ethereum & Top 20 | Call me Monte': 'Preços de Criptomoedas ao Vivo — Bitcoin, Ethereum & Top 20 | Call me Monte',
    'Live prices of the top 20 cryptocurrencies in US dollars and euros: Bitcoin, Ethereum, XRP, Solana and more, with market mood, 7-day charts and plain-language explainers.':
      'Preços ao vivo das 20 maiores criptomoedas em dólares e euros: Bitcoin, Ethereum, XRP, Solana e mais, com o humor do mercado, gráficos de 7 dias e explicações simples.',
    'A hub for the curious': 'Um ponto de partida para curiosos',
    'Crypto': 'Cripto',
    'The top coins, live.': 'As principais moedas, ao vivo.',
    'What they are, how they move, and the words you need to follow along.': 'O que são, como se movem e as palavras que precisa de saber para acompanhar.',
    'Connecting…': 'A ligar…',
    'The market at a glance': 'O mercado num relance',
    'Total market value': 'Valor total do mercado',
    'Traded in 24 hours': 'Transacionado em 24 horas',
    'Across all coins': 'Em todas as moedas',
    'Bitcoin dominance': 'Domínio do Bitcoin',
    "Bitcoin's share of the whole market": 'A parte do Bitcoin no mercado total',
    'Fear & Greed': 'Medo & Ganância',
    'Top 20': 'Top 20',
    'live': 'ao vivo',
    'Currency': 'Moeda',
    'Tap a coin to learn more · Prices refresh every minute': 'Toque numa moeda para saber mais · Os preços atualizam a cada minuto',
    'Coin': 'Moeda',
    'Price': 'Preço',
    'Market value': 'Valor de mercado',
    'Last 7 days': 'Últimos 7 dias',
    'Crypto 101': 'Cripto 101',
    'The words': 'As palavras',
    'that matter': 'que importam',
    'Blockchain': 'Blockchain',
    'A shared record of transactions kept by thousands of computers at once. Nobody owns it, and once something is written, it can\'t quietly be changed.':
      'Um registo partilhado de transações, mantido por milhares de computadores ao mesmo tempo. Ninguém é dono dele e, depois de escrito, nada pode ser alterado às escondidas.',
    'Wallet': 'Carteira',
    'An app or device that holds the keys to your coins. Whoever has the keys controls the money, so they\'re never shared with anyone.':
      'Uma aplicação ou dispositivo que guarda as chaves das suas moedas. Quem tem as chaves controla o dinheiro, por isso nunca se partilham com ninguém.',
    'Stablecoin': 'Stablecoin',
    'A coin built to stay at the same value as a normal currency, usually $1. People use them to move dollars quickly without the price swings.':
      'Uma moeda feita para manter o mesmo valor de uma moeda normal, normalmente 1 $. Usa-se para mover dólares depressa, sem as oscilações de preço.',
    "Price × the number of coins in circulation. It's the usual way to rank coins by size, which is why Bitcoin sits at number one.":
      'Preço × número de moedas em circulação. É a forma habitual de ordenar as moedas por tamanho, e é por isso que o Bitcoin está em primeiro lugar.',
    'Volatility': 'Volatilidade',
    "How much and how fast a price moves. Crypto can move 10% or more in a day; that's the thrill and the risk.":
      'Quanto e quão depressa um preço se move. As criptomoedas podem variar 10% ou mais num dia; é essa a emoção e o risco.',
    "A 0 to 100 score of the market's mood, built from prices, trading and sentiment. Low means fear, high means greed.":
      'Uma pontuação de 0 a 100 do humor do mercado, feita a partir de preços, volume e sentimento. Baixa significa medo, alta significa ganância.',
    'For information only, not financial advice.': 'Apenas informativo, não é aconselhamento financeiro.',
    'Prices can change fast and may be slightly delayed. Data by': 'Os preços podem mudar depressa e ter um ligeiro atraso. Dados do',
    'Live prices are taking a break. Please try again in a minute.': 'Os preços ao vivo estão em pausa. Tente novamente dentro de um minuto.',
    'in 24 hours': 'em 24 horas',
    'Extreme fear': 'Medo extremo',
    'Fear': 'Medo',
    'Neutral': 'Neutro',
    'Greed': 'Ganância',
    'Extreme greed': 'Ganância extrema',
    'More on CoinGecko': 'Mais no CoinGecko',
    '24h high': 'Máximo 24h',
    '24h low': 'Mínimo 24h',
    'All-time high': 'Máximo histórico',
    'Reached on': 'Atingido em',
    'Coins in circulation': 'Moedas em circulação',
    'Traded in 24h': 'Transacionado em 24h',
    'Offline': 'Sem ligação',
    'Last updated': 'Atualizado há',
    'Live · just updated': 'Ao vivo · acabou de atualizar',
    'Live · updated': 'Ao vivo · atualizado há',
    'ago': '',
    'Blockchain: see live crypto prices': 'Blockchain: ver preços de cripto ao vivo',

    // crypto page: ask box
    'Ask about crypto': 'Perguntar sobre cripto',
    'Curious?': 'Curioso?',
    'Just ask': 'É só perguntar',
    'Your question': 'A sua pergunta',
    'Try “What is a stablecoin?” or “Solana price”': 'Experimente “O que é uma stablecoin?” ou “preço da Solana”',
    'Ask': 'Perguntar',
    'Popular questions': 'Perguntas populares',

    // business page
    'Business · Call me Monte': 'Negócios · Call me Monte',
    'The business side of Tiago Monte: sales, people and operations across Portugal, Mozambique and Angola, and the road so far.':
      'O lado dos negócios de Tiago Monte: vendas, pessoas e operações entre Portugal, Moçambique e Angola, e o caminho até aqui.',
    'The business side': 'O lado dos negócios',
    'People, sales and operations.': 'Pessoas, vendas e operações.',
    'Portugal · Mozambique · Angola': 'Portugal · Moçambique · Angola',
    'In short': 'Em resumo',
    "I'm passionate about investing, building ventures and the entrepreneurial path. My work spans":
      'Sou apaixonado por investir, criar negócios e pelo caminho do empreendedorismo. O meu trabalho abrange',
    'people, sales and operations': 'pessoas, vendas e operações',
    ', from Portugal to Mozambique to Angola.': ', de Portugal a Moçambique e Angola.',
    'Journey': 'Percurso',
    'The road': 'O caminho',
    'so far': 'até aqui',
    'The road so far': 'O caminho até aqui',
    'strategic supplier partnerships built': 'parcerias estratégicas com fornecedores criadas',
    'yearly revenue contributed': 'de faturação anual gerada',
    'continents lived and worked on': 'continentes onde vivi e trabalhei',
    '2026 — Now': '2026 — Presente',
    'Head of HR': 'Diretor de RH',
    "Leading Human Resources for DST Group's operations in Angola, based in Luanda.":
      'Lidero os Recursos Humanos das operações do Grupo DST em Angola, a partir de Luanda.',
    'Visit DST Group': 'Visitar o Grupo DST',
    'Head of Sales': 'Diretor Comercial',
    'Assim Store, a DST Group construction retail company': 'Assim Store, empresa de retalho de construção do Grupo DST',
    'Secured 90+ strategic supplier partnerships within 12 months, expanding the product portfolio and market reach.':
      'Garanti mais de 90 parcerias estratégicas com fornecedores em 12 meses, alargando o portefólio de produtos e o alcance de mercado.',
    'Negotiated six-figure contracts with major construction firms, with strong profit margins.':
      'Negociei contratos de seis dígitos com grandes construtoras, com margens de lucro sólidas.',
    'Negotiated exclusive agreements to bring EV chargers to the Portuguese market.':
      'Negociei acordos exclusivos para trazer carregadores de veículos elétricos para o mercado português.',
    "Set up yearly supply contracts with DST Group's stock material warehouse.":
      'Estabeleci contratos anuais de fornecimento com o armazém de materiais em stock do Grupo DST.',
    'Sourced high-end home brands (furniture, spas and appliances) for the online store, and ran sales and after-sales with construction companies.':
      'Selecionei marcas de topo para a casa (mobiliário, spas e eletrodomésticos) para a loja online, e geri as vendas e o pós-venda com empresas de construção.',
    'Co-Founder & Operations': 'Cofundador & Operações',
    'Delaware, US': 'Delaware, EUA',
    'Built the operation from the ground up: sourcing, logistics and customer fulfilment.':
      'Construí a operação de raiz: aprovisionamento, logística e entrega ao cliente.',
    'Negotiated supplier contracts to improve costs and supply reliability.':
      'Negociei contratos com fornecedores para reduzir custos e tornar o abastecimento mais fiável.',
    'Streamlined order management and improved the customer experience.':
      'Simplifiquei a gestão de encomendas e melhorei a experiência do cliente.',
    'Led a small operations team.': 'Liderei uma pequena equipa de operações.',
    'Operations, Volunteer': 'Operações, Voluntário',
    'Supported day-to-day lodge operations, including payroll and inventory.':
      'Apoiei as operações diárias do lodge, incluindo o processamento salarial e o inventário.',
    'Coordinated events and designed promotional materials to engage guests.':
      'Coordenei eventos e criei materiais promocionais para envolver os hóspedes.',
    'BBA, Business Administration': 'BBA, Gestão de Empresas',
    'Co-founded the finance club “Common Cents”.': 'Cofundei o clube de finanças “Common Cents”.',
    'Focused on strategic management, financial analysis and operations planning.':
      'Foco em gestão estratégica, análise financeira e planeamento de operações.',
    'Visit EU Business School': 'Visitar a EU Business School',
    'What I bring': 'O que trago',
    'People & leadership': 'Pessoas & liderança',
    'Leading Human Resources for DST Group in Angola, and running small teams from the ground up.':
      'Lidero os Recursos Humanos do Grupo DST em Angola e já criei e geri pequenas equipas de raiz.',
    'Sales & partnerships': 'Vendas & parcerias',
    '90+ supplier partnerships in a year, six-figure contracts and exclusive deals, like bringing EV chargers to Portugal.':
      'Mais de 90 parcerias com fornecedores num ano, contratos de seis dígitos e acordos exclusivos, como trazer carregadores de veículos elétricos para Portugal.',
    'Operations': 'Operações',
    'Sourcing, logistics, supplier contracts and fulfilment, from a Delaware start-up to a lodge in Maputo.':
      'Aprovisionamento, logística, contratos com fornecedores e entregas, de uma start-up no Delaware a um lodge em Maputo.',
    'Investing & ventures': 'Investimento & empreendimentos',
    'Building ventures and investing, grounded in a BBA and the finance club I co-founded in Barcelona.':
      'Criar negócios e investir, com base num BBA e no clube de finanças que cofundei em Barcelona.',
    "Fields I'm drawn to": 'Áreas que me atraem',
    'Based in': 'Baseado em',
    'work together': 'trabalhar juntos',
    'The other side: Music': 'O outro lado: Música',
  };

  // whole blocks whose words are animated one by one (the page script builds them)
  const HTML = {
    statement:
      'Sou movido pela vontade de pensar para além das fronteiras convencionais. O mundo é dinâmico, multifacetado e está em ' +
      'constante evolução, e sinto-me atraído pelas áreas que moldam o seu futuro. Sabendo que os meus dias estão contados, ' +
      'o que importa é o impacto que tenho em cada pessoa que faz parte do meu caminho, e o delas no meu. ' +
      '<em>Longa vida às histórias.</em>',
  };

  // text built by the page scripts, with numbers in it
  const PATTERNS = [
    [/^(\d{4}) edition$/, 'Edição de $1'],
    [/^(\d+) photos$/, '$1 fotos'],
    [/^Open photo (\d+) of (.+)$/, 'Abrir foto $1 de $2'],
    [/^Tiago Monte DJ set at (.+) (\d{4}), photo (\d+)$/, 'Tiago Monte a atuar no $1 $2, foto $3'],
    [/^(.+) (\d{4}), photo (\d+)$/, '$1 $2, foto $3'],
  ];

  const toPT = en => {
    if (Object.prototype.hasOwnProperty.call(PT, en)) return PT[en];
    for (const [re, out] of PATTERNS) if (re.test(en)) return en.replace(re, out);
    return null;
  };

  // ---- choosing the language: link (?lang=pt), last choice, then the browser's language ----
  const read = () => { try { return localStorage.getItem('lang'); } catch (e) { return null; } };
  const save = v => { try { localStorage.setItem('lang', v); } catch (e) {} };
  const fromUrl = new URLSearchParams(location.search).get('lang');
  let lang = (fromUrl === 'pt' || fromUrl === 'en') ? fromUrl
    : read() || ((navigator.language || '').toLowerCase().startsWith('pt') ? 'pt' : 'en');
  if (fromUrl === 'pt' || fromUrl === 'en') save(fromUrl);

  // ---- swapping text ----
  const original = new WeakMap();            // text node → its English text
  const ATTRS = ['aria-label', 'alt', 'title', 'placeholder'];
  const swapText = node => {
    if (!original.has(node)) original.set(node, node.textContent);
    const en = original.get(node), key = en.replace(/\s+/g, ' ').trim();
    if (!key) return;
    if (lang === 'en') { node.textContent = en; return; }
    const pt = toPT(key);
    if (pt === null) { node.textContent = en; return; }
    // keep the spacing around the text, unless the translation is empty
    node.textContent = pt === '' ? '' : en.match(/^\s*/)[0] + pt + en.match(/\s*$/)[0];
  };
  const swapAttr = (el, a) => {
    const store = 'i18n' + a.replace(/-(\w)/g, (_, c) => c.toUpperCase());
    if (!(store in el.dataset)) el.dataset[store] = el.getAttribute(a);
    const en = el.dataset[store];
    const pt = lang === 'pt' ? toPT(en.trim()) : null;
    el.setAttribute(a, pt === null ? en : pt);
  };
  const apply = (root = document.body) => {
    const walk = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: n => n.parentElement.closest('script, style, [data-i18n-skip]') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT,
    });
    let n; while ((n = walk.nextNode())) swapText(n);
    root.querySelectorAll(ATTRS.map(a => `[${a}]`).join(',')).forEach(el => ATTRS.forEach(a => el.hasAttribute(a) && swapAttr(el, a)));
    // page title and descriptions
    if (!document.documentElement.dataset.i18nTitle) document.documentElement.dataset.i18nTitle = document.title;
    const t = document.documentElement.dataset.i18nTitle;
    document.title = lang === 'pt' ? (toPT(t) ?? t) : t;
    document.querySelectorAll('meta[name="description"], meta[property="og:title"], meta[property="og:description"], meta[name="twitter:title"], meta[name="twitter:description"]').forEach(m => {
      if (!m.dataset.i18nContent) m.dataset.i18nContent = m.content;
      m.content = lang === 'pt' ? (toPT(m.dataset.i18nContent) ?? m.dataset.i18nContent) : m.dataset.i18nContent;
    });
    document.documentElement.lang = lang === 'pt' ? 'pt-PT' : 'en';
    const loc = document.querySelector('meta[property="og:locale"]');
    if (loc) loc.content = lang === 'pt' ? 'pt_PT' : 'en_US';
    setCanonical();
  };

  // canonical address of this page: the clean URL in English, ?lang=pt for the Portuguese version
  const setCanonical = () => {
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
    const url = new URL(location.href); url.hash = ''; url.search = '';
    if (new URLSearchParams(location.search).get('lang') === 'pt') url.search = '?lang=pt';
    link.href = url.href;
  };

  // ---- the EN | PT switch, added to the menu ----
  const css = document.createElement('style');
  css.textContent = `
    .nav-end { display: flex; align-items: center; gap: 14px; }
    .lang-switch { display: inline-flex; padding: 3px; border: 1px solid var(--line); border-radius: 999px; background: color-mix(in srgb, var(--bg) 60%, transparent); }
    .lang-switch button {
      all: unset; cursor: pointer; padding: 6px 11px; border-radius: 999px;
      font: 500 11px/1 var(--sans); letter-spacing: .14em; color: var(--muted); transition: background .3s, color .3s;
    }
    .lang-switch button:hover { color: var(--text); }
    .lang-switch button[aria-pressed="true"] { background: var(--text); color: var(--bg); }
    .lang-switch button:focus-visible { outline: 1px solid var(--accent); outline-offset: 2px; }
    @media (max-width: 420px) { .nav-end { gap: 8px; } .lang-switch button { padding: 6px 8px; } nav .pill { padding: 10px 14px; } }
    /* on phones, the Music and Business menus drop the Home button (the M logo goes home) so everything fits */
    @media (max-width: 600px) { nav:has(.nav-links a[aria-current]) .nav-end .pill { display: none; } }
  `;
  document.head.appendChild(css);

  const addSwitch = () => {
    const nav = document.getElementById('nav'), pill = nav && nav.querySelector('.pill');
    if (!pill) return;
    const end = document.createElement('div'); end.className = 'nav-end';
    const sw = document.createElement('div'); sw.className = 'lang-switch'; sw.setAttribute('role', 'group'); sw.setAttribute('aria-label', 'Language / Idioma');
    sw.innerHTML = '<button type="button" data-lang="en" lang="en">EN</button><button type="button" data-lang="pt" lang="pt">PT</button>';
    pill.replaceWith(end); end.append(sw, pill);
    sw.addEventListener('click', e => { const b = e.target.closest('button'); if (b) I18N.set(b.dataset.lang); });
  };
  const markSwitch = () => document.querySelectorAll('.lang-switch button').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === lang));

  const I18N = window.I18N = {
    get lang() { return lang; },
    t: en => (lang === 'pt' ? (toPT(en) ?? en) : en),
    html: HTML,
    apply,
    set(next) {
      if (next === lang) return;
      lang = next; save(lang);
      apply(); markSwitch();
      document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
    },
  };
  document.documentElement.lang = lang === 'pt' ? 'pt-PT' : 'en';

  // run once the page's own scripts have built everything
  const start = () => { addSwitch(); markSwitch(); apply(); if (lang === 'pt') document.dispatchEvent(new CustomEvent('langchange', { detail: lang })); };
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', start) : start();
})();
