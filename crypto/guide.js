/*
  "Ask about crypto": a free, built-in guide for the crypto page.
  No AI service and no accounts: it matches what people type against the library below
  and, for coins and the market, answers with the live numbers already on the page.

  To add an answer: copy one entry, give it a new id, a few keywords people might type
  (English and Portuguese, no accents needed), the question in both languages, and the answer.
  "rel" lists related entries shown as follow-up buttons.
*/
(() => {
  const KB = [
    { id: 'what-crypto', rel: ['blockchain', 'bitcoin', 'buy'],
      k: ['what is crypto', 'what is cryptocurrency', 'cryptocurrency', 'crypto currency', 'o que e cripto', 'criptomoeda', 'criptomoedas', 'o que sao criptomoedas', 'explain crypto', 'crypto meaning'],
      q: ['What is cryptocurrency?', 'O que é uma criptomoeda?'],
      a: ['Money that only exists online and isn’t issued by a bank or government. Instead, it runs on a blockchain, a shared record kept by thousands of computers, so you can send it to anyone in the world without a middleman. Bitcoin was the first; today there are thousands.',
          'Dinheiro que só existe online e não é emitido por nenhum banco ou governo. Funciona numa blockchain, um registo partilhado mantido por milhares de computadores, por isso pode enviá-lo a qualquer pessoa no mundo sem intermediários. O Bitcoin foi a primeira; hoje existem milhares.'] },

    { id: 'why-crypto-name', rel: ['what-crypto', 'blockchain'],
      k: ['why is it called crypto', 'why crypto', 'cryptography', 'porque se chama cripto', 'criptografia'],
      q: ['Why is it called “crypto”?', 'Porque se chama “cripto”?'],
      a: ['From cryptography, the maths behind secret codes. It’s what keeps your coins locked to your keys and stops anyone from faking a payment.',
          'Vem de criptografia, a matemática dos códigos secretos. É ela que mantém as suas moedas presas às suas chaves e impede que alguém falsifique um pagamento.'] },

    { id: 'blockchain', rel: ['mining', 'staking', 'transaction'],
      k: ['blockchain', 'block chain', 'how does blockchain work', 'what is a blockchain', 'o que e blockchain', 'cadeia de blocos', 'ledger', 'livro razao'],
      q: ['What is a blockchain?', 'O que é uma blockchain?'],
      a: ['Think of a notebook that thousands of people hold an identical copy of. Every few seconds or minutes a new page (a “block”) of transactions is added, and each page is sealed to the one before it. Changing an old page would mean fooling most of the copies at once, which is practically impossible.',
          'Imagine um caderno de que milhares de pessoas têm uma cópia idêntica. A cada poucos segundos ou minutos junta-se uma nova página (um “bloco”) de transações, e cada página fica selada à anterior. Alterar uma página antiga obrigaria a enganar a maioria das cópias ao mesmo tempo, o que é praticamente impossível.'] },

    { id: 'buy', rel: ['exchange', 'wallet', 'risk'],
      k: ['how to buy', 'how do i buy', 'where to buy', 'buy crypto', 'buy bitcoin', 'get bitcoin', 'como comprar', 'onde comprar', 'comprar bitcoin', 'comprar cripto', 'start investing', 'como comecar'],
      q: ['How do people buy crypto?', 'Como se compra cripto?'],
      a: ['Most people use an exchange: an app or website where you sign up, verify your ID, add money from your bank or card, and buy. Once you have some, you can keep it there or move it to your own wallet. A good rule for beginners: start small, use well-known exchanges, and never buy because someone online is pushing you to.',
          'A maioria usa uma plataforma (exchange): uma aplicação ou site onde se regista, confirma a identidade, junta dinheiro do banco ou cartão e compra. Depois pode deixá-lo lá ou passá-lo para a sua própria carteira. Uma boa regra para quem começa: comece com pouco, use plataformas conhecidas e nunca compre porque alguém online o está a pressionar.'] },

    { id: 'advice', rel: ['risk', 'volatility', 'scams'],
      k: ['should i buy', 'should i invest', 'good investment', 'is it a good time', 'will it go up', 'price prediction', 'make money', 'get rich', 'devo comprar', 'devo investir', 'bom investimento', 'vai subir', 'previsao', 'ganhar dinheiro', 'ficar rico', 'best coin', 'melhor moeda'],
      q: ['Should I buy now?', 'Devo comprar agora?'],
      a: ['I can’t tell you that, and honestly nobody can predict crypto prices reliably. What I can say: only put in money you could lose without it hurting, understand what you’re buying, and be wary of anyone promising guaranteed returns. This page is for information, not financial advice.',
          'Não lhe posso dizer isso e, sinceramente, ninguém consegue prever os preços das cripto com segurança. O que posso dizer: invista apenas dinheiro que poderia perder sem lhe fazer falta, perceba o que está a comprar e desconfie de quem promete lucros garantidos. Esta página é informativa, não é aconselhamento financeiro.'] },

    { id: 'risk', rel: ['scams', 'volatility', 'wallet'],
      k: ['is crypto safe', 'is it safe', 'risks', 'risky', 'dangerous', 'can i lose', 'lose money', 'e seguro', 'riscos', 'arriscado', 'perder dinheiro', 'perigoso'],
      q: ['Is crypto safe?', 'As cripto são seguras?'],
      a: ['The technology itself is solid, but there are real risks: prices can fall sharply, exchanges can fail, scams are common, and if you lose your keys nobody can get your coins back for you. There’s also no bank guarantee like with a normal savings account. Treat it as a high-risk asset.',
          'A tecnologia em si é sólida, mas há riscos reais: os preços podem cair a pique, as plataformas podem falir, as burlas são comuns e, se perder as suas chaves, ninguém lhe devolve as moedas. Também não há garantia bancária como numa conta poupança. Trate-as como um investimento de alto risco.'] },

    { id: 'price-move', rel: ['volatility', 'fear-greed', 'market-cap'],
      k: ['why prices go up', 'why prices go down', 'why does price change', 'what moves the price', 'porque sobe', 'porque desce', 'porque os precos mudam', 'o que move o preco', 'supply and demand', 'oferta e procura'],
      q: ['Why do prices go up and down?', 'Porque é que os preços sobem e descem?'],
      a: ['Mostly supply and demand. News, big investors buying or selling, interest rates, new regulations and plain hype all change how many people want to buy versus sell. Because crypto markets are younger and smaller than stock markets, those swings are much bigger.',
          'Sobretudo oferta e procura. Notícias, grandes investidores a comprar ou vender, taxas de juro, novas regras e simples entusiasmo mudam quantas pessoas querem comprar ou vender. Como os mercados de cripto são mais jovens e pequenos que os de ações, as oscilações são muito maiores.'] },

    { id: 'market-today', live: 'market', rel: ['price-move', 'fear-greed', 'dominance'],
      k: ['why is crypto down', 'why is crypto up', 'market today', 'how is the market', 'crash', 'dump', 'pump', 'what happened today', 'porque esta a cair', 'porque esta a subir', 'mercado hoje', 'como esta o mercado', 'queda', 'o que aconteceu hoje'],
      q: ['How is the market doing today?', 'Como está o mercado hoje?'],
      a: ['', ''] },

    { id: 'volatility', rel: ['price-move', 'stablecoin'],
      k: ['volatility', 'volatile', 'why so volatile', 'volatilidade', 'volatil', 'oscilacoes'],
      q: ['What does volatility mean?', 'O que é volatilidade?'],
      a: ['How much and how fast a price moves. A stock might move 1% in a normal day; a coin can move 10% or more. That’s why some people love crypto and others stay away from it.',
          'Quanto e quão depressa um preço se move. Uma ação pode mexer 1% num dia normal; uma criptomoeda pode mexer 10% ou mais. É por isso que uns adoram cripto e outros fogem delas.'] },

    { id: 'wallet', rel: ['seed', 'hot-cold', 'scams'],
      k: ['wallet', 'crypto wallet', 'what is a wallet', 'carteira', 'o que e uma carteira', 'where to keep', 'onde guardar', 'store crypto', 'guardar cripto'],
      q: ['What is a crypto wallet?', 'O que é uma carteira de cripto?'],
      a: ['An app or small device that holds the keys to your coins. The coins themselves live on the blockchain; the wallet just proves they’re yours and lets you send them. Whoever has the keys controls the money, which is why you never share them.',
          'Uma aplicação ou pequeno dispositivo que guarda as chaves das suas moedas. As moedas estão na blockchain; a carteira só prova que são suas e permite enviá-las. Quem tem as chaves controla o dinheiro, por isso nunca as partilhe.'] },

    { id: 'hot-cold', rel: ['wallet', 'seed'],
      k: ['hot wallet', 'cold wallet', 'hardware wallet', 'ledger device', 'carteira fria', 'carteira quente', 'carteira fisica'],
      q: ['Hot wallet or cold wallet?', 'Carteira quente ou fria?'],
      a: ['A hot wallet is an app connected to the internet: handy for everyday use. A cold wallet is a small device that stays offline: safer for larger amounts, because hackers can’t reach it. Many people use both, like a wallet in your pocket and a safe at home.',
          'Uma carteira quente é uma aplicação ligada à internet: prática para o dia a dia. Uma carteira fria é um pequeno dispositivo que fica offline: mais segura para valores maiores, porque os hackers não lhe chegam. Muita gente usa as duas, como a carteira no bolso e o cofre em casa.'] },

    { id: 'seed', rel: ['wallet', 'scams'],
      k: ['seed phrase', 'recovery phrase', 'private key', '12 words', '24 words', 'frase de recuperacao', 'frase semente', 'chave privada', '12 palavras', '24 palavras', 'lost my keys', 'perdi as chaves'],
      q: ['What is a seed phrase?', 'O que é uma frase de recuperação?'],
      a: ['A list of 12 or 24 words your wallet gives you when you create it. It’s the master key: anyone with those words can take everything, and if you lose them and your device, the coins are gone for good. Write it on paper, keep it somewhere safe, and never type it into a website or send it to anyone.',
          'Uma lista de 12 ou 24 palavras que a carteira lhe dá quando a cria. É a chave mestra: quem tiver essas palavras pode levar tudo e, se as perder juntamente com o dispositivo, as moedas desaparecem para sempre. Escreva-a em papel, guarde-a num sítio seguro e nunca a escreva num site nem a envie a ninguém.'] },

    { id: 'scams', rel: ['seed', 'risk', 'rug-pull'],
      k: ['scam', 'scams', 'fraud', 'avoid scams', 'is this a scam', 'burla', 'burlas', 'fraude', 'esquema', 'golpe', 'evitar burlas', 'guaranteed returns', 'lucro garantido', 'doubling'],
      q: ['How do I avoid crypto scams?', 'Como evitar burlas com cripto?'],
      a: ['A few red flags cover most of them: promises of guaranteed or fast returns, someone asking for your seed phrase, “support staff” who message you first, celebrities “giving away” coins, and pressure to act right now. Real projects and exchanges never ask for your recovery words.',
          'Alguns sinais de alerta apanham a maioria: promessas de lucros garantidos ou rápidos, alguém a pedir a sua frase de recuperação, “apoio ao cliente” que o contacta primeiro, celebridades a “oferecer” moedas e pressão para agir já. Projetos e plataformas a sério nunca pedem as suas palavras de recuperação.'] },

    { id: 'rug-pull', rel: ['scams', 'meme'],
      k: ['rug pull', 'rugpull', 'rug'],
      q: ['What is a rug pull?', 'O que é um “rug pull”?'],
      a: ['When the people behind a new coin hype it up, collect investors’ money and then disappear, leaving the coin worthless. It happens most with brand-new tokens that nobody can verify.',
          'Quando os criadores de uma moeda nova a promovem, recolhem o dinheiro dos investidores e depois desaparecem, deixando a moeda sem valor. Acontece sobretudo com tokens acabados de lançar que ninguém consegue verificar.'] },

    { id: 'stablecoin', rel: ['volatility', 'cbdc'],
      k: ['stablecoin', 'stable coin', 'usdt', 'usdc', 'tether', 'what is tether', 'moeda estavel', 'dolar digital', 'digital dollar'],
      q: ['What is a stablecoin?', 'O que é uma stablecoin?'],
      a: ['A coin designed to stay at the same value as a normal currency, usually $1. Companies like Tether (USDT) and Circle (USDC) hold reserves to back each coin. People use them to move dollars around the world quickly, or to park money without the usual crypto swings.',
          'Uma moeda feita para manter o mesmo valor de uma moeda normal, normalmente 1 $. Empresas como a Tether (USDT) e a Circle (USDC) guardam reservas para garantir cada moeda. Usam-se para mover dólares pelo mundo depressa, ou para guardar dinheiro sem as oscilações habituais das cripto.'] },

    { id: 'market-cap', rel: ['volume', 'dominance'],
      k: ['market cap', 'market capitalization', 'market value', 'capitalizacao', 'valor de mercado'],
      q: ['What is market cap?', 'O que é a capitalização de mercado?'],
      a: ['Price multiplied by the number of coins in circulation. It tells you how big a coin is overall, which matters more than the price of a single coin: a $0.10 coin can be worth more in total than a $1,000 one.',
          'O preço multiplicado pelo número de moedas em circulação. Diz-lhe o tamanho total de uma moeda, o que importa mais do que o preço de uma unidade: uma moeda de 0,10 $ pode valer mais no total do que uma de 1000 $.'] },

    { id: 'volume', rel: ['market-cap', 'exchange'],
      k: ['volume', 'trading volume', '24h volume', 'traded in 24 hours', 'volume de negociacao', 'transacionado'],
      q: ['What does trading volume mean?', 'O que significa volume de negociação?'],
      a: ['The total value of a coin bought and sold over a period, usually 24 hours. High volume means lots of activity and it’s easy to buy or sell; low volume means prices can jump around with just a few trades.',
          'O valor total de uma moeda comprado e vendido num período, normalmente 24 horas. Volume alto significa muita atividade e facilidade em comprar ou vender; volume baixo significa que poucos negócios podem mexer muito o preço.'] },

    { id: 'dominance', live: 'dominance', rel: ['market-cap', 'altcoin'],
      k: ['bitcoin dominance', 'btc dominance', 'dominance', 'dominio do bitcoin', 'dominancia'],
      q: ['What is Bitcoin dominance?', 'O que é o domínio do Bitcoin?'],
      a: ['', ''] },

    { id: 'fear-greed', live: 'mood', rel: ['market-today', 'price-move'],
      k: ['fear and greed', 'fear & greed', 'fear greed index', 'market mood', 'sentiment', 'medo e ganancia', 'humor do mercado', 'sentimento'],
      q: ['What is the Fear & Greed index?', 'O que é o índice de Medo & Ganância?'],
      a: ['', ''] },

    { id: 'altcoin', rel: ['meme', 'token-coin'],
      k: ['altcoin', 'altcoins', 'alt coin', 'alts'],
      q: ['What is an altcoin?', 'O que é uma altcoin?'],
      a: ['Any cryptocurrency that isn’t Bitcoin. Ethereum, Solana and XRP are all altcoins. Some are serious projects; many are short-lived experiments.',
          'Qualquer criptomoeda que não seja o Bitcoin. Ethereum, Solana e XRP são altcoins. Algumas são projetos sérios; muitas são experiências de curta duração.'] },

    { id: 'token-coin', rel: ['altcoin', 'smart-contract'],
      k: ['token vs coin', 'difference between coin and token', 'what is a token', 'token', 'diferenca entre moeda e token', 'o que e um token'],
      q: ['What’s the difference between a coin and a token?', 'Qual é a diferença entre moeda e token?'],
      a: ['A coin runs on its own blockchain (Bitcoin, Ether, Solana). A token is built on top of someone else’s blockchain, the way an app runs on a phone. USDT and UNI, for example, are tokens that live on Ethereum and other chains.',
          'Uma moeda funciona na sua própria blockchain (Bitcoin, Ether, Solana). Um token é criado em cima da blockchain de outro, como uma aplicação num telemóvel. O USDT e o UNI, por exemplo, são tokens que vivem no Ethereum e noutras redes.'] },

    { id: 'meme', rel: ['risk', 'rug-pull'],
      k: ['meme coin', 'memecoin', 'meme coins', 'dogecoin', 'shiba', 'pepe'],
      q: ['What is a meme coin?', 'O que é uma meme coin?'],
      a: ['A coin built around a joke or internet meme, like Dogecoin. Their value comes almost entirely from community hype rather than any use, so they can soar and crash very fast.',
          'Uma moeda criada à volta de uma piada ou meme da internet, como o Dogecoin. O valor vem quase só do entusiasmo da comunidade e não de uma utilidade, por isso podem disparar e afundar muito depressa.'] },

    { id: 'mining', rel: ['halving', 'staking'],
      k: ['mining', 'mine bitcoin', 'miners', 'proof of work', 'mineracao', 'minerar', 'mineiros', 'prova de trabalho'],
      q: ['What is crypto mining?', 'O que é a mineração de cripto?'],
      a: ['How Bitcoin adds new blocks. Powerful computers race to solve a maths puzzle; the winner adds the next block and earns new bitcoin as a reward. It uses a lot of electricity, which is exactly what makes cheating too expensive. This system is called proof of work.',
          'É assim que o Bitcoin junta novos blocos. Computadores potentes competem para resolver um problema matemático; quem ganha junta o próximo bloco e recebe bitcoins novos como recompensa. Gasta muita eletricidade, e é precisamente isso que torna a batota cara demais. Chama-se prova de trabalho.'] },

    { id: 'staking', rel: ['mining', 'defi'],
      k: ['staking', 'stake', 'proof of stake', 'prova de participacao', 'fazer staking'],
      q: ['What is staking?', 'O que é staking?'],
      a: ['Instead of mining, networks like Ethereum and Solana are secured by people locking up (“staking”) their coins. Stakers help confirm transactions and earn rewards, a bit like interest. If they cheat, they can lose part of what they staked.',
          'Em vez de mineração, redes como o Ethereum e a Solana são protegidas por pessoas que bloqueiam (“fazem staking de”) as suas moedas. Quem faz staking ajuda a confirmar transações e ganha recompensas, um pouco como juros. Se fizer batota, pode perder parte do que bloqueou.'] },

    { id: 'halving', rel: ['mining', 'supply'],
      k: ['halving', 'halvening', 'bitcoin halving'],
      q: ['What is the Bitcoin halving?', 'O que é o “halving” do Bitcoin?'],
      a: ['About every four years, the reward miners get for each new block is cut in half. It slows down how fast new bitcoin is created, until the 21 million limit is reached around the year 2140.',
          'Mais ou menos a cada quatro anos, a recompensa dos mineiros por cada bloco novo é cortada para metade. Isso abranda a criação de bitcoins novos, até se atingir o limite de 21 milhões por volta do ano 2140.'] },

    { id: 'supply', live: 'supply', rel: ['halving', 'satoshi'],
      k: ['how many bitcoin', 'how many bitcoins', 'bitcoin supply', '21 million', 'max supply', 'quantos bitcoins', 'quantos bitcoin', '21 milhoes', 'oferta maxima'],
      q: ['How many bitcoins are there?', 'Quantos bitcoins existem?'],
      a: ['', ''] },

    { id: 'satoshi', rel: ['what-crypto', 'supply'],
      k: ['who created bitcoin', 'who invented bitcoin', 'satoshi', 'satoshi nakamoto', 'quem criou o bitcoin', 'quem inventou o bitcoin'],
      q: ['Who created Bitcoin?', 'Quem criou o Bitcoin?'],
      a: ['Someone using the name Satoshi Nakamoto, who published the Bitcoin paper in 2008 and launched the network in January 2009. Nobody knows for sure who Satoshi is, and they stopped posting in 2011. The smallest unit of bitcoin, 0.00000001, is named a “satoshi” after them.',
          'Alguém que usava o nome Satoshi Nakamoto, que publicou o documento do Bitcoin em 2008 e lançou a rede em janeiro de 2009. Ninguém sabe ao certo quem é o Satoshi, que deixou de publicar em 2011. A unidade mais pequena de bitcoin, 0,00000001, chama-se “satoshi” em sua honra.'] },

    { id: 'smart-contract', rel: ['defi', 'gas'],
      k: ['smart contract', 'smart contracts', 'contrato inteligente', 'contratos inteligentes'],
      q: ['What is a smart contract?', 'O que é um contrato inteligente?'],
      a: ['A small program stored on a blockchain that runs exactly as written, with no one able to stop or change it. Think of a vending machine: put in the right coin and the drink comes out, no shopkeeper needed. They power lending apps, exchanges and NFTs.',
          'Um pequeno programa guardado numa blockchain que corre exatamente como foi escrito, sem que ninguém o possa parar ou alterar. Pense numa máquina de venda: põe a moeda certa e sai a bebida, sem precisar de lojista. É o que faz funcionar aplicações de empréstimos, plataformas e NFTs.'] },

    { id: 'defi', rel: ['smart-contract', 'exchange'],
      k: ['defi', 'decentralized finance', 'decentralised finance', 'financas descentralizadas'],
      q: ['What is DeFi?', 'O que é DeFi?'],
      a: ['Short for decentralised finance: banking-style services, like lending, borrowing and trading, run by smart contracts instead of banks. Anyone with a wallet can use them, but mistakes and hacks have no customer service to fix them.',
          'Abreviatura de finanças descentralizadas: serviços parecidos com os de um banco, como emprestar, pedir emprestado e negociar, feitos por contratos inteligentes em vez de bancos. Qualquer pessoa com uma carteira pode usá-los, mas erros e ataques não têm apoio ao cliente que os resolva.'] },

    { id: 'nft', rel: ['smart-contract', 'web3'],
      k: ['nft', 'nfts', 'non fungible', 'non-fungible token'],
      q: ['What is an NFT?', 'O que é um NFT?'],
      a: ['A one-of-a-kind token on a blockchain that proves who owns a specific item: a piece of digital art, a ticket, an in-game item. Unlike a bitcoin, which is identical to every other bitcoin, each NFT is unique.',
          'Um token único numa blockchain que prova quem é dono de um item específico: uma obra de arte digital, um bilhete, um objeto de um jogo. Ao contrário de um bitcoin, que é igual a todos os outros, cada NFT é único.'] },

    { id: 'gas', rel: ['transaction', 'smart-contract'],
      k: ['gas', 'gas fee', 'gas fees', 'transaction fee', 'fees', 'network fee', 'taxas', 'taxa de rede', 'taxa de transacao', 'comissoes'],
      q: ['What are gas fees?', 'O que são taxas de gás?'],
      a: ['The small fee you pay the network to process a transaction. On Ethereum it’s called “gas”. When lots of people are using the network at once, fees go up, like surge pricing on a ride app.',
          'A pequena taxa paga à rede para processar uma transação. No Ethereum chama-se “gás”. Quando muita gente usa a rede ao mesmo tempo, as taxas sobem, como as tarifas dinâmicas das aplicações de transporte.'] },

    { id: 'transaction', rel: ['gas', 'blockchain'],
      k: ['how long does a transaction take', 'confirmations', 'send crypto', 'transfer crypto', 'how to send', 'quanto tempo demora', 'confirmacoes', 'enviar cripto', 'transferir cripto', 'como enviar'],
      q: ['How do crypto transfers work?', 'Como funcionam as transferências de cripto?'],
      a: ['You send coins to the receiver’s address, a long string of letters and numbers. The network checks it and adds it to a block; each new block after that is a “confirmation”. Bitcoin takes around 10 minutes per block, networks like Solana a few seconds. Always double-check the address: sent coins can’t be pulled back.',
          'Envia as moedas para o endereço de quem recebe, uma longa sequência de letras e números. A rede verifica e junta a transação a um bloco; cada bloco seguinte é uma “confirmação”. No Bitcoin cada bloco demora cerca de 10 minutos; em redes como a Solana, poucos segundos. Confirme sempre o endereço: moedas enviadas não se conseguem reaver.'] },

    { id: 'exchange', rel: ['buy', 'wallet', 'defi'],
      k: ['exchange', 'exchanges', 'cex', 'dex', 'binance', 'coinbase', 'kraken', 'plataforma', 'corretora', 'casa de cambio'],
      q: ['What is a crypto exchange?', 'O que é uma plataforma de cripto?'],
      a: ['A marketplace for buying, selling and swapping coins. Centralised exchanges (like Coinbase or Binance) are companies that hold your coins while they’re on the platform. Decentralised exchanges (like Uniswap) let you trade straight from your own wallet, with no company in between.',
          'Um mercado para comprar, vender e trocar moedas. As plataformas centralizadas (como a Coinbase ou a Binance) são empresas que guardam as suas moedas enquanto estão lá. As descentralizadas (como a Uniswap) permitem negociar diretamente a partir da sua carteira, sem nenhuma empresa pelo meio.'] },

    { id: 'ath', rel: ['bull-bear', 'volatility'],
      k: ['ath', 'all time high', 'all-time high', 'record high', 'maximo historico', 'recorde'],
      q: ['What does ATH mean?', 'O que significa ATH?'],
      a: ['All-time high: the highest price a coin has ever reached. Tap any coin in the table above to see its all-time high and when it happened.',
          'All-time high, o máximo histórico: o preço mais alto que uma moeda já atingiu. Toque numa moeda na tabela acima para ver o seu máximo histórico e quando aconteceu.'] },

    { id: 'bull-bear', rel: ['fear-greed', 'ath'],
      k: ['bull market', 'bear market', 'bullish', 'bearish', 'bull run', 'mercado em alta', 'mercado em baixa', 'touro', 'urso'],
      q: ['What are bull and bear markets?', 'O que são mercados “bull” e “bear”?'],
      a: ['A bull market is a long stretch of rising prices and optimism; a bear market is a long stretch of falling prices and gloom. The names come from how each animal attacks: a bull thrusts its horns up, a bear swipes down.',
          'Um mercado “bull” (touro) é um longo período de preços a subir e otimismo; um mercado “bear” (urso) é um longo período de quedas e pessimismo. Os nomes vêm da forma como cada animal ataca: o touro atira os chifres para cima, o urso dá a patada para baixo.'] },

    { id: 'slang', rel: ['bull-bear', 'fear-greed'],
      k: ['hodl', 'fomo', 'fud', 'to the moon', 'wagmi', 'diamond hands', 'whale', 'baleia'],
      q: ['What do HODL, FOMO and FUD mean?', 'O que significam HODL, FOMO e FUD?'],
      a: ['HODL: holding on through ups and downs (it started as a typo of “hold”). FOMO: fear of missing out, buying because everyone else is. FUD: fear, uncertainty and doubt, negative talk that pushes people to sell. And a “whale” is someone holding a huge amount.',
          'HODL: aguentar as moedas nas subidas e descidas (começou como um erro de escrita de “hold”). FOMO: medo de ficar de fora, comprar porque toda a gente está a comprar. FUD: medo, incerteza e dúvida, conversa negativa que leva a vender. E uma “baleia” é alguém com uma quantidade enorme.'] },

    { id: 'etf', rel: ['buy', 'risk'],
      k: ['etf', 'bitcoin etf', 'spot etf', 'fundo'],
      q: ['What is a Bitcoin ETF?', 'O que é um ETF de Bitcoin?'],
      a: ['A fund you can buy through a normal stock broker that tracks the price of Bitcoin, so you get exposure without holding the coins yourself. The US approved the first spot Bitcoin ETFs in January 2024.',
          'Um fundo que se compra através de uma corretora normal de ações e que acompanha o preço do Bitcoin, para ter exposição sem guardar as moedas. Os EUA aprovaram os primeiros ETFs de Bitcoin à vista em janeiro de 2024.'] },

    { id: 'web3', rel: ['defi', 'nft'],
      k: ['web3', 'web 3'],
      q: ['What is Web3?', 'O que é a Web3?'],
      a: ['A name for the idea of an internet where people own their data and digital items through blockchains, instead of big platforms owning everything. Some of it is real today; a lot of it is still a promise.',
          'O nome para a ideia de uma internet em que as pessoas são donas dos seus dados e objetos digitais através de blockchains, em vez de serem as grandes plataformas a ter tudo. Parte disso já existe; muito ainda é uma promessa.'] },

    { id: 'airdrop', rel: ['scams', 'token-coin'],
      k: ['airdrop', 'airdrops', 'free crypto', 'free coins', 'moedas gratis', 'cripto gratis'],
      q: ['What is an airdrop?', 'O que é um airdrop?'],
      a: ['When a project gives out free tokens, usually to early users, to spread the word. Real ones exist, but “free crypto” is also the most common scam bait: if it asks you to connect your wallet to a strange site or send coins first, walk away.',
          'Quando um projeto oferece tokens grátis, normalmente aos primeiros utilizadores, para se dar a conhecer. Existem a sério, mas “cripto grátis” é também o isco de burla mais comum: se pedir para ligar a carteira a um site estranho ou enviar moedas primeiro, afaste-se.'] },

    { id: 'cbdc', rel: ['stablecoin', 'what-crypto'],
      k: ['cbdc', 'central bank digital currency', 'digital euro', 'euro digital', 'moeda digital do banco central'],
      q: ['What is a CBDC?', 'O que é uma CBDC?'],
      a: ['A central bank digital currency: a digital version of a country’s official money, issued by its central bank, like the digital euro the EU is working on. Unlike crypto, it’s controlled by the state.',
          'Uma moeda digital de banco central: uma versão digital do dinheiro oficial de um país, emitida pelo banco central, como o euro digital em que a UE está a trabalhar. Ao contrário das cripto, é controlada pelo Estado.'] },

    { id: 'taxes', rel: ['buy', 'legal'],
      k: ['tax', 'taxes', 'do i pay tax', 'imposto', 'impostos', 'pago imposto', 'irs', 'declarar'],
      q: ['Do I pay tax on crypto?', 'Pago impostos sobre cripto?'],
      a: ['In many countries, yes, often when you sell at a profit, but the rules differ a lot from place to place and change often. Keep a record of what you buy and sell, and check with your country’s tax authority or an accountant.',
          'Em muitos países sim, muitas vezes quando vende com lucro, mas as regras variam muito de país para país e mudam com frequência. Guarde registo do que compra e vende, e confirme com a autoridade tributária do seu país ou com um contabilista.'] },

    { id: 'legal', rel: ['taxes', 'risk'],
      k: ['is crypto legal', 'legal', 'allowed', 'banned', 'regulation', 'e legal', 'permitido', 'proibido', 'regulacao', 'regulamentacao', 'angola', 'portugal', 'mocambique', 'mozambique'],
      q: ['Is crypto legal?', 'As cripto são legais?'],
      a: ['It depends on the country, and the rules are changing fast almost everywhere. Some countries regulate it like other investments, some restrict it, a few ban it. Before buying, check your central bank’s and financial regulator’s current position.',
          'Depende do país, e as regras estão a mudar depressa em quase todo o lado. Alguns países regulam-nas como outros investimentos, outros restringem-nas, alguns proíbem-nas. Antes de comprar, confirme a posição atual do banco central e do regulador financeiro do seu país.'] },

    { id: 'about-page', rel: ['what-crypto', 'advice'],
      k: ['who made this', 'where does the data come from', 'is this live', 'data source', 'coingecko', 'de onde vem os dados', 'quem fez isto', 'e ao vivo'],
      q: ['Where do these prices come from?', 'De onde vêm estes preços?'],
      a: ['From CoinGecko, a large independent crypto data site. The page refreshes them every minute. This guide was put together by Tiago Monte as a starting point for curious people, not as financial advice.',
          'Do CoinGecko, um grande site independente de dados de cripto. A página atualiza-os a cada minuto. Este guia foi preparado pelo Tiago Monte como ponto de partida para curiosos, não como aconselhamento financeiro.'] },
  ];

  const SUGGEST = ['what-crypto', 'blockchain', 'stablecoin', 'buy', 'scams', 'market-today'];
  // words that don't help find an answer
  const STOP = new Set(('a an the is are was be to of in on for and or but what whats how why who when where which do does did can could should would i me my you your it its this that there about with from at as by so just really please tell explain mean means meaning ' +
    'o a os as um uma uns umas e de do da dos das em no na nos nas para por com sem que qual quais como porque porquê quando onde quem e é sao são ser foi isto isso este esta me eu meu minha voce você seu sua se mais muito pode podes significa significado explica explique diz').split(' '));

  const norm = s => ' ' + String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9&]+/g, ' ').trim() + ' ';
  const words = s => norm(s).trim().split(' ').filter(w => w && !STOP.has(w));
  const pt = () => window.I18N && I18N.lang === 'pt';
  const L = () => (pt() ? 1 : 0);
  const tr = s => (window.I18N ? I18N.t(s) : s);

  // prepare the library once
  KB.forEach(e => {
    e._k = e.k.map(norm);
    e._w = new Set([...words(e.q[0]), ...words(e.q[1]), ...e.k.flatMap(words)]);
  });

  const score = (query, e) => {
    const nq = norm(query), qw = words(query);
    let s = 0;
    e._k.forEach(k => { if (nq.includes(k)) s += 3 + (k.trim().split(' ').length - 1) * 2; });
    qw.forEach(w => { if (e._w.has(w)) s += 1; });
    return s;
  };

  /* coins named in the question, from the live table */
  const AMBIGUOUS = new Set(['near', 'rain', 'leo', 'sui', 'usds', 'one', 'gas', 'ton']);
  // well-known coins, recognised even before the live prices arrive
  const KNOWN = { bitcoin: ['bitcoin', 'btc'], ethereum: ['ethereum', 'eth', 'ether'], tether: ['tether', 'usdt'], binancecoin: ['bnb', 'binance coin'],
    ripple: ['xrp', 'ripple'], 'usd-coin': ['usdc', 'usd coin'], solana: ['solana', 'sol'], tron: ['tron', 'trx'], dogecoin: ['dogecoin', 'doge'],
    cardano: ['cardano', 'ada'], chainlink: ['chainlink', 'link'], stellar: ['stellar', 'xlm'], litecoin: ['litecoin', 'ltc'], monero: ['monero', 'xmr'],
    zcash: ['zcash', 'zec'], 'avalanche-2': ['avalanche', 'avax'], 'bitcoin-cash': ['bitcoin cash', 'bch'], uniswap: ['uniswap', 'uni'], dai: ['dai'],
    hyperliquid: ['hyperliquid', 'hype'], 'shiba-inu': ['shiba inu', 'shib'], 'the-open-network': ['toncoin'] };
  const findKnown = nq => {
    for (const [id, names] of Object.entries(KNOWN)) if (names.some(n => new RegExp(`\\b${n}\\b`).test(nq))) {
      const name = names[0].replace(/\b\w/g, ch => ch.toUpperCase());
      return { id, name: id === 'ripple' ? 'XRP' : id === 'binancecoin' ? 'BNB' : name, symbol: names[names.length - 1], offline: true };
    }
    return null;
  };
  const findCoin = query => {
    const data = typeof cache !== 'undefined' && cache[cur];
    const nq = norm(query);
    if (!data) return findKnown(nq);
    const cryptoWord = /\b(coin|token|price|preco|moeda|cripto|crypto|worth|vale|cotacao)\b/.test(nq);
    for (const c of data.coins) {
      const names = [c.name, c.symbol, c.id.replace(/-/g, ' ')].map(x => norm(x).trim()).filter(x => x.length >= 3 || x === 'xrp');
      for (const n of names) {
        if (!new RegExp(`\\b${n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`).test(nq)) continue;
        if (AMBIGUOUS.has(n) && !cryptoWord) continue;
        return c;
      }
    }
    // common nicknames
    if (/\b(btc|bitcoin|bitcoins)\b/.test(nq)) return data.coins.find(c => c.id === 'bitcoin');
    if (/\b(eth|ether|ethereum)\b/.test(nq)) return data.coins.find(c => c.id === 'ethereum');
    return null;
  };

  /* answers that use the live numbers */
  const liveAnswer = kind => {
    const data = typeof cache !== 'undefined' && cache[cur];
    if (!data) return pt() ? 'Os dados ao vivo ainda estão a carregar. Tente dentro de alguns segundos.' : 'The live data is still loading. Try again in a few seconds.';
    const g = data.global, chg = g.market_cap_change_percentage_24h_usd, fg = g.fear_and_greed_index;
    const dom = (g.market_cap_percentage.btc || 0).toLocaleString(loc(), { maximumFractionDigits: 1 });
    const cap = money(g.total_market_cap[cur], { compact: true });
    const up = chg >= 0, absChg = Math.abs(chg).toLocaleString(loc(), { maximumFractionDigits: 2 });
    const moodPT = { 'Extreme Fear': 'medo extremo', 'Fear': 'medo', 'Neutral': 'neutro', 'Greed': 'ganância', 'Extreme Greed': 'ganância extrema' };
    if (kind === 'market') {
      const movers = [...data.coins].sort((a, b) => (b.price_change_percentage_24h_in_currency ?? 0) - (a.price_change_percentage_24h_in_currency ?? 0));
      const best = movers[0], worst = movers[movers.length - 1];
      const f = c => `${esc(c.name)} (${pct(c.price_change_percentage_24h_in_currency)})`;
      return pt()
        ? `Nas últimas 24 horas o mercado ${up ? 'subiu' : 'caiu'} ${absChg}%, e vale agora cerca de ${cap} no total. No top 20, quem está melhor é ${f(best)} e quem está pior é ${f(worst)}.${fg ? ` O humor do mercado está em ${fg.value}/100, ${moodPT[fg.sentiment] || fg.sentiment}.` : ''} Movimentos de um dia raramente têm uma única causa: notícias, grandes investidores e o sentimento geral contam todos.`
        : `Over the last 24 hours the market is ${up ? 'up' : 'down'} ${absChg}%, and it’s worth about ${cap} in total. In the top 20, the best performer is ${f(best)} and the weakest is ${f(worst)}.${fg ? ` Market mood sits at ${fg.value}/100, “${fg.sentiment.toLowerCase()}”.` : ''} One-day moves rarely have a single cause: news, big investors and general sentiment all play a part.`;
    }
    if (kind === 'dominance') return pt()
      ? `É a fatia do Bitcoin no valor total de todas as criptomoedas. Neste momento está em ${dom}%. Quando sobe, normalmente o dinheiro está a fugir para o Bitcoin, visto como mais seguro; quando desce, os investidores estão a arriscar mais em altcoins.`
      : `Bitcoin’s share of the total value of all cryptocurrencies. Right now it’s ${dom}%. When it rises, money is usually moving into Bitcoin as the “safer” option; when it falls, investors are taking more risk on altcoins.`;
    if (kind === 'mood') return pt()
      ? `Uma pontuação de 0 a 100 do humor do mercado, feita a partir de preços, volume e sentimento. ${fg ? `Hoje está em ${fg.value}, ${moodPT[fg.sentiment] || fg.sentiment}. ` : ''}Perto de 0 há medo e as pessoas vendem; perto de 100 há ganância e as pessoas compram com entusiasmo, muitas vezes antes de uma correção.`
      : `A 0 to 100 score of the market’s mood, built from prices, trading and sentiment. ${fg ? `Today it’s ${fg.value}, “${fg.sentiment.toLowerCase()}”. ` : ''}Near 0, fear dominates and people sell; near 100, greed takes over and people buy eagerly, often right before a pullback.`;
    if (kind === 'supply') {
      const b = data.coins.find(c => c.id === 'bitcoin');
      const circ = b ? num(b.circulating_supply, false) : null;
      return pt()
        ? `Só vão existir 21 milhões de bitcoins.${circ ? ` Neste momento já há cerca de ${circ} em circulação.` : ''} Os restantes são criados cada vez mais devagar através da mineração, até por volta de 2140.`
        : `There will only ever be 21 million bitcoins.${circ ? ` About ${circ} are already in circulation.` : ''} The rest are being created more and more slowly through mining, until around 2140.`;
    }
    return '';
  };

  const coinAnswer = (c, query) => {
    const a = typeof ABOUT !== 'undefined' && ABOUT[c.id];
    if (c.offline) return (a ? a[pt() ? 'pt' : 'en'] + ' ' : '') + (pt() ? 'O preço ao vivo ainda está a carregar; veja a tabela acima dentro de momentos.' : 'The live price is still loading; check the table above in a moment.');
    const story = a ? a[pt() ? 'pt' : 'en'] : (pt() ? `${esc(c.name)} é a moeda número ${c.market_cap_rank} por valor de mercado.` : `${esc(c.name)} is number ${c.market_cap_rank} by market value.`);
    const price = money(c.current_price), ch = pct(c.price_change_percentage_24h_in_currency);
    const now = pt()
      ? `Neste momento vale ${price} (${ch} em 24 horas), com um valor de mercado de ${money(c.market_cap, { compact: true })}.`
      : `Right now it’s at ${price} (${ch} in 24 hours), with a market value of ${money(c.market_cap, { compact: true })}.`;
    const asksPrice = /\b(price|prices|preco|worth|vale|cost|costs|custa|cotacao|quanto|much|trading at)\b/.test(norm(query));
    return asksPrice ? `${now} ${story}` : `${story} ${now}`;
  };

  /* pick the answer */
  const answer = query => {
    const coin = findCoin(query);
    const ranked = KB.map(e => ({ e, s: score(query, e) })).sort((a, b) => b.s - a.s);
    const top = ranked[0];
    // a named coin wins unless the question is clearly about a general topic (e.g. "how do I buy bitcoin")
    // (a few broad topics, like "what is crypto", never override a named coin)
    if (coin && !(top.s >= 6 && !['what-crypto', 'stablecoin', 'meme'].includes(top.e.id)))
      return { kind: 'coin', coin, query };
    if (top.s >= 3) return { kind: 'kb', e: top.e };
    return { kind: 'none', near: ranked.filter(r => r.s > 0).slice(0, 3).map(r => r.e) };
  };

  /* ---- the chat box ---- */
  const log = document.getElementById('askLog'), form = document.getElementById('askForm'), input = document.getElementById('askInput');
  const chips = document.getElementById('askChips');
  if (!log || !form) return;
  const history = [];          // { query, result } kept so answers can be redrawn in the other language

  const render = () => {
    log.innerHTML = history.map(({ query, result }) => {
      let body = '', rel = [];
      if (result.kind === 'coin') {
        const c = (cache[cur] && cache[cur].coins.find(x => x.id === result.coin.id)) || result.coin;
        body = coinAnswer(c, query);
        rel = ['market-cap', 'buy', 'advice'];
      } else if (result.kind === 'kb') {
        body = result.e.live ? liveAnswer(result.e.live) : esc(result.e.a[L()]);
        rel = result.e.rel || [];
      } else {
        body = pt() ? 'Ainda não tenho resposta para isso. Experimente perguntar de outra forma, ou escolha um destes temas:' : 'I don’t have an answer for that one yet. Try asking another way, or pick one of these:';
        rel = (result.near.length ? result.near.map(e => e.id) : SUGGEST.slice(0, 3));
      }
      const relBtns = rel.map(id => KB.find(e => e.id === id)).filter(Boolean)
        .map(e => `<button type="button" class="ask-chip" data-id="${e.id}">${esc(e.q[L()])}</button>`).join('');
      return `<div class="msg me"><p>${esc(query)}</p></div>
        <div class="msg bot"><span class="av" aria-hidden="true">M</span><div><p>${body}</p>${relBtns ? `<div class="ask-rel">${relBtns}</div>` : ''}</div></div>`;
    }).join('');
    log.hidden = !history.length;
    chips.innerHTML = SUGGEST.map(id => KB.find(e => e.id === id)).map(e => `<button type="button" class="ask-chip" data-id="${e.id}">${esc(e.q[L()])}</button>`).join('');
  };

  const ask = (query, forced) => {
    query = query.trim(); if (!query) return;
    history.push({ query, result: forced ? { kind: 'kb', e: forced } : answer(query) });
    if (history.length > 6) history.shift();
    render();
    const last = log.lastElementChild;
    if (last) {
      last.classList.add('typing');
      setTimeout(() => last.classList.remove('typing'), 450);
      last.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'nearest' });
    }
  };

  form.addEventListener('submit', e => { e.preventDefault(); ask(input.value); input.value = ''; });
  document.getElementById('ask').addEventListener('click', e => {
    const b = e.target.closest('.ask-chip'); if (!b) return;
    const entry = KB.find(x => x.id === b.dataset.id);
    if (entry) ask(entry.q[L()], entry);
  });
  document.addEventListener('langchange', render);
  render();

  /* floating "Ask" button: appears once you've scrolled past the top, jumps to the box */
  const fab = document.getElementById('askFab'), box = document.getElementById('ask');
  if (fab && box) {
    const vis = () => {
      const r = box.getBoundingClientRect(), inView = r.top < innerHeight && r.bottom > 0;
      fab.classList.toggle('show', scrollY > innerHeight * .6 && !inView);
    };
    addEventListener('scroll', vis, { passive: true }); vis();
    fab.addEventListener('click', () => { box.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); setTimeout(() => input.focus({ preventScroll: true }), 500); });
  }
})();
