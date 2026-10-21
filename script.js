/* SELETORES */
const html = document.querySelector('html');
const timerDisplay = document.querySelector('#timer');
const bannerDisplay = document.querySelector('.app__image');
const titleDisplay = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const musicaFoco = document.querySelector('#alternar-musica');
const startPause = document.querySelector('#start-pause');
const startPauseBtn = document.querySelector('#start-pause span');
const startPauseImg = document.querySelector('#start-pause img');
const resetButton = document.querySelector('#reset');
const botoesContainer = document.querySelector('.app__card-list');

/* TEMPORIZADOR */
const duracaoFoco = 10;
const duracaoDescansoCurto = 5 * 60;
const duracaoDescansoLongo = 15 * 60;
let tempoDecorridoEmSegundos = duracaoFoco;
let intervalo = null;
const somZera = new Audio('sons/beep.mp3');
const somInicia = new Audio('sons/play.wav');
const somPausa = new Audio('sons/pause.mp3');
const duracoesPorContexto = {
    foco: duracaoFoco,
    'descanso-curto': duracaoDescansoCurto,
    'descanso-longo': duracaoDescansoLongo
};

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', { minute: '2-digit', second: '2-digit' })
    timerDisplay.innerHTML = `${tempoFormatado}`
}

const contagemRegressiva = () => {
    tempoDecorridoEmSegundos -= 1;
    mostrarTempo();
    startPauseBtn.textContent = 'Pausar';

    if (tempoDecorridoEmSegundos <= 0) {
        const focoAtivo = html.getAttribute('data-contexto') == 'foco';

        if (focoAtivo) {
            const evento = new CustomEvent('FocoFinalizado');
            document.dispatchEvent(evento);
        }

        alert('Tempo finalizado!');
        zerar();
        return;
    }
};
function iniciar() {
    if (!intervalo) intervalo = setInterval(contagemRegressiva, 1000);
}
function zerar() {
    clearInterval(intervalo);
    startPauseBtn.textContent = 'Começar';
    startPauseImg.src = './imagens/play_arrow.png';
    intervalo = null;
}

function resetar() {
    zerar();
    tempoDecorridoEmSegundos = duracoesPorContexto[html.dataset.contexto];
    mostrarTempo();
}

if (startPause) {
    startPause.addEventListener('click', () => {
        if (!intervalo) {
            iniciar();
            somInicia.play();
            startPauseImg.src = "./imagens/pause.png"
        } else {
            zerar();
            somPausa.play();
        }
    });
} else {
    console.warn('#start-pause não encontrado');
}

if (resetButton) {
    resetButton.addEventListener('click', resetar);
}

/* MÚSICA DE FUNDO */

const musica = new Audio('sons/luna-rise-part-one.mp3')
musica.loop = true;

musicaFoco.addEventListener('change', () => {
    if (musicaFoco.checked) {
        musica.play()
    } else {
        musica.pause()
    }
})



/* ALTERAR CONTEXTO */
function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto);
    bannerDisplay.setAttribute('src', `/imagens/${contexto}.png`)
    botoes.forEach(botao => botao.classList.remove('active'));
    tempoDecorridoEmSegundos = duracoesPorContexto[contexto];
    mostrarTempo();

    if (contexto === 'foco') {
        titleDisplay.innerHTML = 'Otimize sua produtividade,<br> <strong class="app__title-strong">mergulhe no que importa.</strong>';
    } else if (contexto === 'descanso-curto') {
        titleDisplay.innerHTML = 'Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>';
    } else if (contexto === 'descanso-longo') {
        titleDisplay.innerHTML = 'Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>';
    }
}

/* EVENTOS DOS BOTÕES */
if (botoesContainer) {
    botoesContainer.addEventListener('click', evento => {
        const botao = evento.target.closest('[data-contexto]');

        if (!botao) return;

        alterarContexto(botao.dataset.contexto);
        botao.classList.add('active');
    });
}

alterarContexto(html.dataset.contexto || 'foco');