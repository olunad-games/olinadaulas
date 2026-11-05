// Para adicionar uma cientista, basta incluir um novo objeto nesta lista.
// A roleta se ajusta sozinha ao número de nomes.
const cientistas = [
    {
        rotulo: "Marie Curie",
        nome: "Marie Curie",
        meta: "Física e química · Polônia/França · 1867–1934",
        historia: "Descobriu os elementos polônio e radio e foi a primeira pessoa a ganhar dois Prêmios Nobel, em Física (1903) e em Química (1911). Criou o termo radioatividade e liderou o uso de aparelhos de raio X móveis para atender feridos na Primeira Guerra Mundial."
    },
    {
        rotulo: "Rosalind Franklin",
        nome: "Rosalind Franklin",
        meta: "Química e cristalografia · Reino Unido · 1920–1958",
        historia: "Usando difração de raios X, produziu a famosa Fotografia 51 do DNA, imagem decisiva para que se entendesse a estrutura em dupla hélice. Seu trabalho também foi essencial para o estudo de vírus, como o do mosaico do tabaco."
    },
    {
        rotulo: "Ada Lovelace",
        nome: "Ada Lovelace",
        meta: "Matemática · Reino Unido · 1815–1852",
        historia: "Escreveu, em 1843, notas sobre a Máquina Analítica de Charles Babbage que incluem o que é considerado o primeiro algoritmo feito para um computador. Ela já imaginava que máquinas poderiam manipular símbolos além de números, como música."
    },
    {
        rotulo: "Katherine Johnson",
        nome: "Katherine Johnson",
        meta: "Matemática · Estados Unidos · 1918–2020",
        historia: "Matemática da NASA, calculou trajetórias de voos espaciais, incluindo a de Alan Shepard, primeiro americano no espaço. Em 1962, John Glenn pediu que ela conferisse à mão os cálculos do computador antes de sua órbita ao redor da Terra."
    },
    {
        rotulo: "Bertha Lutz",
        nome: "Bertha Lutz",
        meta: "Biologia e zoologia · Brasil · 1894–1976",
        historia: "Zoóloga do Museu Nacional, estudou anfíbios, especialmente as rãs brasileiras. Foi também uma das principais líderes da luta pelo voto feminino no Brasil e participou da conferência que criou a ONU, em 1945, defendendo a igualdade entre mulheres e homens."
    },
    {
        rotulo: "Johanna Döbereiner",
        nome: "Johanna Döbereiner",
        meta: "Agronomia e microbiologia · Brasil · 1924–2000",
        historia: "Nascida na Tchecoslováquia e naturalizada brasileira, pesquisou a fixação biológica de nitrogênio. Seu trabalho mostrou que bactérias podem nutrir a soja, dispensando adubos químicos e gerando grande economia para a agricultura do país."
    },
    {
        rotulo: "Mayana Zatz",
        nome: "Mayana Zatz",
        meta: "Genética · Brasil · nascida em 1947",
        historia: "Professora da USP, coordena o Centro de Estudos do Genoma Humano e de Células-Tronco. Suas pesquisas sobre doenças genéticas, como as distrofias musculares, ajudaram famílias a receber diagnóstico e aconselhamento no Brasil."
    },
    {
        rotulo: "Jaqueline G. de Jesus",
        nome: "Jaqueline Goes de Jesus",
        meta: "Biomedicina e virologia · Brasil",
        historia: "Em fevereiro de 2020, integrou a equipe que sequenciou o genoma do coronavírus SARS-CoV-2 no Brasil em cerca de 48 horas após o primeiro caso confirmado no país, em trabalho com Ester Sabino. A rapidez ajudou a acompanhar a chegada do vírus."
    },
    {
        rotulo: "Chien-Shiung Wu",
        nome: "Chien-Shiung Wu",
        meta: "Física · China/Estados Unidos · 1912–1997",
        historia: "Conhecida como a Primeira Dama da Física, participou do Projeto Manhattan. Em 1956, seu experimento comprovou que a paridade não se conserva nas interações fracas, resultado que rendeu o Nobel a seus colegas teóricos."
    },
    {
        rotulo: "Tu Youyou",
        nome: "Tu Youyou",
        meta: "Farmacologia · China · nascida em 1930",
        historia: "Ao pesquisar plantas da medicina tradicional chinesa, isolou a artemisinina, base de tratamentos contra a malária que salvaram milhões de vidas. Recebeu o Prêmio Nobel de Fisiologia ou Medicina em 2015."
    },
    {
        rotulo: "Dorothy Hodgkin",
        nome: "Dorothy Hodgkin",
        meta: "Química e cristalografia · Reino Unido · 1910–1994",
        historia: "Usou raios X para descobrir a estrutura de moléculas essenciais, como a penicilina, a vitamina B12 e a insulina. Recebeu o Nobel de Química em 1964, e seus métodos abriram caminho para a biologia estrutural moderna."
    },
    {
        rotulo: "Sonia Guimarães",
        nome: "Sonia Guimarães",
        meta: "Física · Brasil",
        historia: "Primeira mulher negra brasileira a obter doutorado em Física, é professora do Instituto Tecnológico de Aeronáutica (ITA). Pesquisa sensores de infravermelho e incentiva meninas negras a seguirem carreiras científicas."
    },
    
    {
        rotulo: "Tatiana Sampaio",
        nome: "Tatiana Sampaio",
        meta: "Bióloga e pesquisadora · Brasil · Século XX–XXI",
        historia: "Professora e pesquisadora da UFRJ, tornou-se conhecida por seus estudos sobre a polilaminina, substância desenvolvida a partir da laminina que apresenta potencial na regeneração de tecidos nervosos e na recuperação de lesões na medula espinhal."
     },
    {
        rotulo: "Bertha Lutz",
        nome: "Bertha Lutz",
        meta: "Bióloga e política · Brasil · 1894–1976",
        historia: "Foi uma importante pesquisadora brasileira, especialista em anfíbios. Também se destacou na luta pelos direitos das mulheres, participando de movimentos que contribuíram para a conquista do voto feminino no Brasil."
    },
     {
      rotulo: "Jaqueline Goes de Jesus",
        nome: "Jaqueline Goes de Jesus",
        meta: "Biomédica e pesquisadora · Brasil · 1989–",
        historia: "Ganhou reconhecimento por integrar a equipe que realizou o sequenciamento do genoma do coronavírus no Brasil, em apenas 48 horas após a identificação do primeiro caso no país, contribuindo para os estudos sobre a COVID-19."
  },
  {
        rotulo: "Johanna Döbereiner",
        nome: "Johanna Döbereiner",
        meta: "Agrônoma e microbiologista · Alemanha/Brasil · 1924–2000",
        historia: "Revolucionou a agricultura brasileira por meio de pesquisas sobre bactérias capazes de fixar nitrogênio nas plantas. Suas descobertas permitiram reduzir o uso de fertilizantes químicos e contribuíram para o desenvolvimento da agricultura sustentável."
  }
];

const canvas = document.getElementById("roleta");
const ctx = canvas.getContext("2d");
const botao = document.getElementById("girar");
const caixa = document.getElementById("historia");

// tamanho lógico do desenho; multiplicamos pela densidade da tela para ficar nítido
const TAM = 520;
const dpr = window.devicePixelRatio || 1;
canvas.width = TAM * dpr;
canvas.height = TAM * dpr;
ctx.scale(dpr, dpr);

// as fatias usam as mesmas cores do degradê do título
const paleta = ["#ff0000", "#ff7f00", "#ffff00", "#0000ff", "#4b0082"];
const hexParaRgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));

function corDaFatia(i) {
    const t = (i / (cientistas.length - 1)) * (paleta.length - 1);
    const k = Math.min(Math.floor(t), paleta.length - 2);
    const f = t - k;
    const a = hexParaRgb(paleta[k]);
    const b = hexParaRgb(paleta[k + 1]);
    return a.map((v, j) => Math.round(v + (b[j] - v) * f));
}

function desenhar() {
    const n = cientistas.length;
    const ang = (2 * Math.PI) / n;
    const c = TAM / 2;
    ctx.clearRect(0, 0, TAM, TAM);

    cientistas.forEach((s, i) => {
        const ini = i * ang - Math.PI / 2; // a fatia 0 começa no topo
        const rgb = corDaFatia(i);
        const luz = 0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2];

        ctx.beginPath();
        ctx.moveTo(c, c);
        ctx.arc(c, c, c - 4, ini, ini + ang);
        ctx.closePath();
        ctx.fillStyle = `rgb(${rgb})`;
        ctx.fill();
        ctx.strokeStyle = "rgba(255,255,255,0.85)";
        ctx.lineWidth = 2;
        ctx.stroke();

        // nome escrito ao longo do raio da fatia
        ctx.save();
        ctx.translate(c, c);
        ctx.rotate(ini + ang / 2);
        ctx.textAlign = "right";
        ctx.textBaseline = "middle";
        ctx.fillStyle = luz > 150 ? "#1a1033" : "#ffffff";
        ctx.font = '700 17px "Bricolage Grotesque", sans-serif';
        ctx.fillText(s.rotulo, c - 26, 0);
        ctx.restore();
    });

    // centro da roleta
    ctx.beginPath();
    ctx.arc(c, c, 30, 0, 2 * Math.PI);
    ctx.fillStyle = "#14102b";
    ctx.fill();
    ctx.strokeStyle = "#f1eefc";
    ctx.lineWidth = 4;
    ctx.stroke();
}

// espera a fonte carregar para o desenho sair com a tipografia certa
document.fonts.ready.then(desenhar);
desenhar();

let rotacao = 0;
let girando = false;
let sorteada = 0;
const reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

botao.addEventListener("click", () => {
    if (girando) return;
    girando = true;
    botao.disabled = true;

    const n = cientistas.length;
    const angFatia = 360 / n;
    sorteada = Math.floor(Math.random() * n); // sorteio aleatório

    // ponto de parada: centro da fatia sorteada sob o ponteiro (com pequena variação)
    const desvio = (Math.random() - 0.5) * angFatia * 0.7;
    const alvo = -(sorteada + 0.5) * angFatia + desvio;
    const falta = (((alvo - rotacao) % 360) + 360) % 360;
    const voltas = reduzirMovimento ? 1 : 5 + Math.floor(Math.random() * 3);

    rotacao += voltas * 360 + falta;
    canvas.style.transform = `rotate(${rotacao}deg)`;
});

// quando a animação termina, mostra a história
canvas.addEventListener("transitionend", () => {
    if (!girando) return;
    mostrarHistoria(sorteada);
    girando = false;
    botao.disabled = false;
    botao.textContent = "Girar de novo";
});

function mostrarHistoria(i) {
    const s = cientistas[i];
    caixa.style.setProperty("--cor", `rgb(${corDaFatia(i)})`);
    caixa.innerHTML = "";

    const titulo = document.createElement("h2");
    titulo.textContent = s.nome;
    const meta = document.createElement("p");
    meta.className = "meta";
    meta.textContent = s.meta;
    const texto = document.createElement("p");
    texto.className = "texto";
    texto.textContent = s.historia;

    caixa.append(titulo, meta, texto);
}
