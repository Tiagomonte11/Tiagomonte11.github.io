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

    // AI page, mixer and the jog wheel
    "Spin me · Learn to mix · Spin me · Learn to mix ·": "Gire-me · Aprenda a misturar · Gire-me · Aprenda ·",
    "Try the DJ mixer": "Experimentar a mesa de DJ",
    "AI: news, games and milestones": "IA: notícias, jogos e marcos",
    "Try the decks": "Experimentar os pratos",
    "AI News, Games & Milestones | Call me Monte": "IA: Notícias, Jogos & Marcos | Call me Monte",
    "Live AI news from around the world, games where you play against and teach real AI, and how AI changed chess, medicine, translation and more. A free AI hub by Tiago Monte.": "Notícias de IA ao vivo de todo o mundo, jogos em que joga contra uma IA real e a ensina, e como a IA mudou o xadrez, a medicina, a tradução e muito mais. Um espaço gratuito sobre IA de Tiago Monte.",
    "News, games and the story so far": "Notícias, jogos e a história até aqui",
    "The breakthroughs, as they happen.": "As descobertas, à medida que acontecem.",
    "Then play with it, and see how far it’s come.": "Depois brinque com ela e veja até onde já chegou.",
    "Updated live": "Atualizado ao vivo",
    "Latest news": "Últimas notícias",
    "What’s new": "O que há de novo",
    "in AI": "na IA",
    "News source": "Fonte de notícias",
    "Worldwide": "Mundo",
    "Tech community": "Comunidade tech",
    "Refresh the news": "Atualizar as notícias",
    "Play with AI": "Brincar com IA",
    "Train your mind,": "Treine a mente,",
    "train a machine": "treine uma máquina",
    "Games": "Jogos",
    "Out-think the machine": "Engane a máquina",
    "Teach a neuron": "Ensine um neurónio",
    "Which came first?": "O que veio primeiro?",
    "Play rock, paper, scissors against an AI that studies your habits as you go. It can’t see your move; it only learns your patterns. Can you stay unpredictable?": "Jogue pedra, papel, tesoura contra uma IA que estuda os seus hábitos enquanto joga. Não vê a sua jogada; só aprende os seus padrões. Consegue manter-se imprevisível?",
    "People are terrible at being random. This is how recommendation apps learn what you’ll click next.": "As pessoas são péssimas a ser aleatórias. É assim que as aplicações de recomendações aprendem em que vai clicar a seguir.",
    "Pick a move": "Escolha uma jogada",
    "Rock": "Pedra",
    "Paper": "Papel",
    "Scissors": "Tesoura",
    "The AI is still studying you…": "A IA ainda o está a estudar…",
    "Tap the board to drop dots of each colour. A small neural network, running right here in your browser, keeps adjusting itself until it can tell your colours apart. The shading shows what it believes.": "Toque no quadro para pôr pontos de cada cor. Uma pequena rede neuronal, a funcionar aqui mesmo no seu navegador, vai-se ajustando até conseguir distinguir as cores. O sombreado mostra aquilo em que acredita.",
    "This is how AI learns from examples: guess, check, nudge, repeat, thousands of times a second.": "É assim que a IA aprende com exemplos: adivinha, confirma, ajusta, repete, milhares de vezes por segundo.",
    "Neural network board": "Quadro da rede neuronal",
    "Pink": "Rosa",
    "Blue": "Azul",
    "Circle": "Círculo",
    "Corners": "Cantos",
    "Clear": "Limpar",
    "Two moments from tech and AI history. Pick the one that happened first. Some of these will surprise you.": "Dois momentos da história da tecnologia e da IA. Escolha o que aconteceu primeiro. Alguns vão surpreendê-lo.",
    "Hint: the first chatbot is older than the Moon landing.": "Dica: o primeiro chatbot é mais antigo do que a chegada à Lua.",
    "or": "ou",
    "Next pair →": "Par seguinte →",
    "Before & after": "Antes & depois",
    "How AI": "Como a IA",
    "changed the game": "mudou o jogo",
    "Tap to see after ↻": "Toque para ver o depois ↻",
    "Before": "Antes",
    "Before · 1997": "Antes · 1997",
    "Before · 2015": "Antes · 2015",
    "Before · 50 years": "Antes · 50 anos",
    "Before · 2011": "Antes · 2011",
    "Before · 2004": "Antes · 2004",
    "Before · 1966": "Antes · 1966",
    "Before · 2016": "Antes · 2016",
    "Before · 1950": "Antes · 1950",
    "After · today": "Depois · hoje",
    "After · 2016": "Depois · 2016",
    "After · 2020 – 2024": "Depois · 2020 – 2024",
    "After · 2015": "Depois · 2015",
    "After · 2022": "Depois · 2022",
    "After · 2023": "Depois · 2023",
    "After · 2016 →": "Depois · 2016 →",
    "After · 2025": "Depois · 2025",
    "Chess": "Xadrez",
    "Go": "Go",
    "Proteins": "Proteínas",
    "Seeing": "Visão",
    "Driving": "Condução",
    "Chatbots": "Chatbots",
    "Weather": "Meteorologia",
    "Translation": "Tradução",
    "The test": "O teste",
    "Chess: before and after AI": "Xadrez: antes e depois da IA",
    "Go: before and after AI": "Go: antes e depois da IA",
    "Proteins: before and after AI": "Proteínas: antes e depois da IA",
    "Seeing: before and after AI": "Visão: antes e depois da IA",
    "Driving: before and after AI": "Condução: antes e depois da IA",
    "Chatbots: before and after AI": "Chatbots: antes e depois da IA",
    "Weather: before and after AI": "Meteorologia: antes e depois da IA",
    "Translation: before and after AI": "Tradução: antes e depois da IA",
    "The Turing test: before and after AI": "O teste de Turing: antes e depois da IA",
    "It took IBM a room-sized supercomputer, Deep Blue, to beat world champion Garry Kasparov. The world called it a turning point.": "A IBM precisou de um supercomputador do tamanho de uma sala, o Deep Blue, para vencer o campeão mundial Garry Kasparov. O mundo chamou-lhe um ponto de viragem.",
    "A free chess app on a phone now plays far stronger than any human ever has. Top players train with AI to find new ideas.": "Hoje, uma aplicação de xadrez gratuita num telemóvel joga muito melhor do que qualquer humano alguma vez jogou. Os melhores jogadores treinam com IA para encontrar ideias novas.",
    "The ancient board game has more possible positions than atoms in the universe. Experts thought beating a top human was still a decade away.": "Este antigo jogo de tabuleiro tem mais posições possíveis do que átomos no universo. Os especialistas achavam que vencer um grande mestre ainda estava a uma década de distância.",
    "DeepMind’s AlphaGo beat legend Lee Sedol 4–1. Its famous “move 37” looked like a mistake to experts, until it won.": "O AlphaGo da DeepMind venceu a lenda Lee Sedol por 4–1. A famosa “jogada 37” pareceu um erro aos especialistas, até ganhar.",
    "Working out the 3D shape of a single protein, key to understanding disease, could take scientists years of lab work.": "Descobrir a forma 3D de uma única proteína, essencial para compreender doenças, podia custar anos de trabalho de laboratório.",
    "AlphaFold predicted the shapes of over 200 million proteins, almost every one known. Its creators shared the 2024 Nobel Prize in Chemistry.": "O AlphaFold previu a forma de mais de 200 milhões de proteínas, quase todas as conhecidas. Os seus criadores partilharam o Nobel da Química de 2024.",
    "The best computer vision systems got about one in four photos wrong in the big ImageNet challenge.": "Os melhores sistemas de visão por computador erravam cerca de uma em cada quatro fotos no grande desafio ImageNet.",
    "Deep learning cut that error to under 4%, better than the roughly 5% estimated for people. Today your phone sorts your photos by face.": "O deep learning baixou esse erro para menos de 4%, melhor do que os cerca de 5% estimados para as pessoas. Hoje o seu telemóvel organiza as fotos por rosto.",
    "In DARPA’s first desert race for robot cars, not one finished. The best managed about 12 km of a 240 km course.": "Na primeira corrida no deserto da DARPA para carros robô, nenhum terminou. O melhor fez cerca de 12 km de um percurso de 240 km.",
    "Robotaxis with nobody in the driver’s seat now carry paying passengers through several US cities every day.": "Hoje, robotáxis sem ninguém ao volante transportam passageiros pagantes em várias cidades dos EUA, todos os dias.",
    "ELIZA, the first chatbot, mostly turned your words back into questions. Still, some people confided in it like a therapist.": "O ELIZA, o primeiro chatbot, limitava-se quase sempre a transformar as suas palavras em perguntas. Mesmo assim, houve quem lhe fizesse confidências como a um terapeuta.",
    "ChatGPT was estimated to reach 100 million users in about two months, one of the fastest-growing apps in history.": "Estima-se que o ChatGPT chegou aos 100 milhões de utilizadores em cerca de dois meses, uma das aplicações que mais depressa cresceu na história.",
    "A 10-day global forecast meant hours of number-crunching on some of the world’s biggest supercomputers.": "Uma previsão global a 10 dias exigia horas de cálculos em alguns dos maiores supercomputadores do mundo.",
    "DeepMind’s GraphCast makes a 10-day forecast in under a minute on a single machine, and beat traditional methods on most measures tested.": "O GraphCast da DeepMind faz uma previsão a 10 dias em menos de um minuto numa só máquina, e superou os métodos tradicionais na maioria das medidas testadas.",
    "Online translators stitched sentences together phrase by phrase, which is why results often sounded robotic.": "Os tradutores online juntavam as frases bocado a bocado, por isso o resultado soava muitas vezes robótico.",
    "Neural networks began translating whole sentences at once. Today you can talk to someone in another language in near real time.": "As redes neuronais passaram a traduzir frases inteiras de uma vez. Hoje pode falar com alguém noutra língua quase em tempo real.",
    "Alan Turing asked: if you chat with a machine and can’t tell it from a person, should we say it thinks?": "Alan Turing perguntou: se conversar com uma máquina e não a conseguir distinguir de uma pessoa, devemos dizer que pensa?",
    "In a study at UC San Diego, people chatting with GPT-4.5 judged it to be the human 73% of the time, more often than the real humans.": "Num estudo da Universidade da Califórnia em San Diego, quem conversou com o GPT-4.5 achou que era o humano em 73% das vezes, mais do que os humanos reais.",
    "About these stories:": "Sobre estas notícias:",
    "news headlines link to the original publishers, gathered automatically by GDELT and Hacker News. This page doesn’t write or edit them.": "os títulos levam aos jornais originais e são reunidos automaticamente pelo GDELT e pelo Hacker News. Esta página não os escreve nem edita.",
    "Crypto, live": "Cripto, ao vivo",
    "Learn to Beatmatch — Virtual DJ Mixer | Call me Monte": "Aprenda Beatmatching — Mesa de DJ Virtual | Call me Monte",
    "A free virtual DJ mixer by Tiago Monte. Two decks, real sound in your browser, and a step-by-step guide to beatmatching: match the tempo, line up the kicks, blend with the crossfader.": "Uma mesa de DJ virtual e gratuita de Tiago Monte. Dois pratos, som real no navegador e um guia passo a passo de beatmatching: acertar o andamento, alinhar os bombos e misturar com o crossfader.",
    "Learn to mix": "Aprenda a misturar",
    "The decks": "Os pratos",
    "Beatmatching is the first thing every DJ learns.": "O beatmatching é a primeira coisa que qualquer DJ aprende.",
    "Two tracks, one rhythm. Let’s do it together.": "Duas faixas, um só ritmo. Vamos fazê-lo juntos.",
    "🎧 Headphones or speakers on": "🎧 Ligue os auscultadores ou colunas",
    "Next": "Seguinte",
    "Start over": "Recomeçar",
    "DJ mixer": "Mesa de DJ",
    "Deck A": "Prato A",
    "Deck B": "Prato B",
    "Deep groove": "Groove profundo",
    "Afro percussion": "Percussão afro",
    "Tempo": "Andamento",
    "Play": "Tocar",
    "Deck A jog wheel": "Prato do Prato A",
    "Deck B jog wheel": "Prato do Prato B",
    "Deck A tempo": "Andamento do Prato A",
    "Deck B tempo": "Andamento do Prato B",
    "Nudge deck A back": "Atrasar ligeiramente o Prato A",
    "Nudge deck A forward": "Adiantar ligeiramente o Prato A",
    "Nudge deck B back": "Atrasar ligeiramente o Prato B",
    "Nudge deck B forward": "Adiantar ligeiramente o Prato B",
    "Deck A volume": "Volume do Prato A",
    "Deck B volume": "Volume do Prato B",
    "Beat alignment": "Alinhamento do ritmo",
    "Start both decks to compare": "Ponha os dois pratos a tocar para comparar",
    "Tempo difference": "Diferença de andamento",
    "Crossfader": "Crossfader",
    "Why beatmatch?": "Porquê fazer beatmatching?",
    "When two tracks play at the same speed with their kicks landing together, you can blend them for as long as you like. That smooth handover is what keeps a dance floor moving.": "Quando duas faixas tocam à mesma velocidade, com os bombos a bater juntos, pode misturá-las o tempo que quiser. É essa passagem suave que mantém a pista a dançar.",
    "Listen first": "Primeiro, ouça",
    "Two kicks slightly out of time sound like a galloping horse: “ba-dum, ba-dum”. When they’re locked, the two kicks become one, solid and punchy.": "Dois bombos ligeiramente desfasados soam a um cavalo a galope: “ta-tum, ta-tum”. Quando encaixam, os dois bombos tornam-se um só, sólido e com força.",
    "Small moves": "Pequenos gestos",
    "Real DJs fix drift with tiny touches: a small push or drag on the jog wheel, a fraction of a percent on the tempo fader. Patience beats big moves.": "Os DJs a sério corrigem a deriva com toques pequenos: um ligeiro empurrão ou travão no prato, uma fração de percentagem no fader de andamento. A paciência ganha aos gestos grandes.",
    "Music by Monte": "Música de Monte",
    "Cue": "Cue",
    "More areas": "Mais áreas",
    "News, games & milestones": "Notícias, jogos e marcos",
    "Live crypto prices": "Preços de cripto ao vivo",
    "Sync": "Sync",
    "Hold to preview from the cue point. Let go to jump back.": "Mantenha carregado para ouvir a partir do ponto de cue. Largue para voltar atrás.",
    "Match this deck’s tempo and beat to the other deck": "Acertar o andamento e o ritmo deste prato com o outro",
    "EQ & volume": "EQ e volume",
    "Deck A treble": "Agudos do Prato A", "Deck A mids": "Médios do Prato A", "Deck A bass": "Graves do Prato A",
    "Deck B treble": "Agudos do Prato B", "Deck B mids": "Médios do Prato B", "Deck B bass": "Graves do Prato B",
    "Cue, EQ, Sync": "Cue, EQ, Sync",
    ": hold it to preview the track from your cue point, let go to jump back.": ": mantenha carregado para ouvir a faixa a partir do ponto de cue; largue para voltar atrás.",
    ": turn the LOW down on the incoming track so two basslines don’t clash.": ": baixe os graves (LOW) da faixa que está a entrar, para os dois baixos não chocarem.",
    ": matches tempo and beat for you. Handy, but learn it by ear first.": ": acerta o andamento e o ritmo por si. Dá jeito, mas aprenda primeiro de ouvido.",

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
    /* EN / PT toggle, like an iPhone switch: tap it, or slide the knob across */
    .lang-switch {
      --w: 80px; --k: 40px; all: unset; box-sizing: border-box; position: relative; display: inline-block; width: var(--w); height: 34px;
      border-radius: 999px; border: 1px solid var(--line); background: color-mix(in srgb, var(--bg) 60%, transparent);
      cursor: pointer; touch-action: none; user-select: none; -webkit-tap-highlight-color: transparent; transition: border-color .3s;
    }
    .lang-switch:hover { border-color: color-mix(in srgb, var(--text) 35%, var(--line)); }
    .lang-switch:focus-visible { outline: 1px solid var(--accent); outline-offset: 3px; }
    .lang-switch .ls-label {
      position: absolute; top: 0; bottom: 0; width: 50%; display: grid; place-items: center;
      font: 500 11px/1 var(--sans); letter-spacing: .14em; color: var(--muted); transition: opacity .3s;
    }
    .lang-switch .ls-label.en { left: 0; } .lang-switch .ls-label.pt { right: 0; }
    .lang-switch .ls-knob {
      position: absolute; top: 3px; left: 3px; width: var(--k); height: 26px; border-radius: 999px; background: var(--text); color: var(--bg);
      display: grid; place-items: center; font: 600 11px/1 var(--sans); letter-spacing: .12em;
      box-shadow: 0 2px 8px rgba(0,0,0,.45); transition: transform .45s cubic-bezier(.2,.9,.25,1.15);
    }
    .lang-switch[data-on="pt"] .ls-knob { transform: translateX(calc(var(--w) - var(--k) - 8px)); }
    .lang-switch.dragging .ls-knob { transition: none; transform: translateX(var(--x)); }
    .lang-switch.dragging { cursor: grabbing; }
    @media (max-width: 420px) { .nav-end { gap: 8px; } .lang-switch { --w: 74px; --k: 36px; } nav .pill { padding: 10px 14px; } }
    /* on phones, the Music and Business menus drop the Home button (the M logo goes home) so everything fits */
    @media (max-width: 600px) { nav:has(.nav-links a[aria-current]) .nav-end .pill { display: none; } }
  `;
  document.head.appendChild(css);

  const addSwitch = () => {
    const nav = document.getElementById('nav'), pill = nav && nav.querySelector('.pill');
    if (!pill) return;
    const end = document.createElement('div'); end.className = 'nav-end';
    const sw = document.createElement('button'); sw.type = 'button'; sw.className = 'lang-switch';
    sw.setAttribute('role', 'switch'); sw.setAttribute('aria-label', 'Português');
    sw.innerHTML = '<span class="ls-label en" aria-hidden="true">EN</span><span class="ls-label pt" aria-hidden="true">PT</span><span class="ls-knob" aria-hidden="true"></span>';
    pill.replaceWith(end); end.append(sw, pill);

    // tap anywhere to switch, or drag the knob across and let go
    const knob = sw.querySelector('.ls-knob');
    let down = false, moved = false, startX = 0, from = 0, pos = 0;
    const travel = () => sw.clientWidth - knob.offsetWidth - 6;
    sw.addEventListener('pointerdown', e => {
      down = true; moved = false; startX = e.clientX; from = lang === 'pt' ? travel() : 0; pos = from;
      sw.setPointerCapture(e.pointerId);
    });
    sw.addEventListener('pointermove', e => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (!moved && Math.abs(dx) < 4) return;
      moved = true; sw.classList.add('dragging');
      pos = Math.max(0, Math.min(travel(), from + dx));
      sw.style.setProperty('--x', pos + 'px');
      knob.textContent = pos > travel() / 2 ? 'PT' : 'EN';
    });
    const release = () => {
      if (!down) return; down = false;
      const next = moved ? (pos > travel() / 2 ? 'pt' : 'en') : (lang === 'pt' ? 'en' : 'pt');
      sw.classList.remove('dragging');
      if (next !== lang) I18N.set(next); else markSwitch();
    };
    sw.addEventListener('pointerup', release); sw.addEventListener('pointercancel', release);
    sw.addEventListener('click', e => { if (e.detail === 0) I18N.set(lang === 'pt' ? 'en' : 'pt'); });   // keyboard: Enter or Space
    sw.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight' && lang !== 'pt') { e.preventDefault(); I18N.set('pt'); }
      if (e.key === 'ArrowLeft' && lang !== 'en') { e.preventDefault(); I18N.set('en'); }
    });
  };
  const markSwitch = () => {
    document.querySelectorAll('.lang-switch').forEach(sw => {
      sw.dataset.on = lang;
      sw.setAttribute('aria-checked', lang === 'pt');
      sw.setAttribute('aria-label', lang === 'pt' ? 'Idioma: Português (deslize para English)' : 'Language: English (slide for Português)');
      const k = sw.querySelector('.ls-knob'); if (k) k.textContent = lang.toUpperCase();
    });
  };
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const wait = ms => new Promise(r => setTimeout(r, ms));
  let swapping = false;

  const I18N = window.I18N = {
    get lang() { return lang; },
    t: en => (lang === 'pt' ? (toPT(en) ?? en) : en),
    html: HTML,
    apply,
    // the text slides out, the words change, then it slides back in from the other side
    async set(next) {
      if (next === lang || swapping) return;
      lang = next; save(lang);
      markSwitch();
      const root = document.documentElement;
      if (still) { apply(); document.dispatchEvent(new CustomEvent('langchange', { detail: lang })); return; }
      swapping = true;
      root.classList.add('i18n-out');
      await wait(200);
      apply();
      document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
      root.classList.remove('i18n-out'); root.classList.add('i18n-in');
      void root.offsetWidth;                       // let the browser place the text on the other side first
      root.classList.add('i18n-settle'); root.classList.remove('i18n-in');
      await wait(460);
      root.classList.remove('i18n-settle');
      swapping = false;
    },
  };
  document.documentElement.lang = lang === 'pt' ? 'pt-PT' : 'en';

  // run once the page's own scripts have built everything
  const start = () => { addSwitch(); markSwitch(); apply(); if (lang === 'pt') document.dispatchEvent(new CustomEvent('langchange', { detail: lang })); };
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', start) : start();
})();
