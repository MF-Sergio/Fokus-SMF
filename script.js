/* SELETORES */
const html = document.querySelector('html');
const foco = document.querySelector('.app__card-button--foco');
const curto = document.querySelector('.app__card-button--curto');
const longo = document.querySelector('.app__card-button--longo');
const timerDisplay = document.querySelector('#timer');
const bannerDisplay = document.querySelector('.app__image');
const titleDisplay = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const musicaFoco = document.querySelector('#alternar-musica');
const startPause = document.querySelector('#start-pause');
const startPauseBtn = document.querySelector('#start-pause span');
const startPauseImg = document.querySelector('#start-pause img');

/* TEMPORIZADOR */
const duracaoFoco = 25 * 60;
const duracaoDescansoCurto = 5 * 60;
const duracaoDescansoLongo = 15 * 60;
let tempoDecorridoEmSegundos = 0;
let intervalo = null;
const somZera = new Audio('sons/beep.mp3');
const somInicia = new Audio('sons/play.wav');
const somPausa = new Audio('sons/pause.mp3');

function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', { minute: '2-digit', second: '2-digit' })
    timerDisplay.innerHTML = `${tempoFormatado}`
}

const contagemRegressiva = () => {
    if (tempoDecorridoEmSegundos <= 0) {
        //somZera.play();
        alert('Tempo finalizado!')
        zerar()
        clearInterval(intervalo);
        return
    }
    tempoDecorridoEmSegundos -= 1
    mostrarTempo()
    startPauseBtn.textContent = "Pausar"
}
function iniciar() {
    if (!intervalo) intervalo = setInterval(contagemRegressiva, 1000);
}
function zerar() {
    clearInterval(intervalo)
    startPauseBtn.textContent = "Começar"
    startPauseImg.src = "./imagens/play_arrow.png"
    intervalo = null
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

    botoes.forEach(function (botao) {
        mostrarTempo();
        botao.classList.remove('active')
    });


    switch (contexto) {
        case 'foco':
            timerDisplay.textContent = '25:00';
            titleDisplay.innerHTML = 'Otimize sua produtividade,<br> <strong class="app__title-strong">mergulhe no que importa.</strong>';
            break;


        case 'descanso-curto':
            timerDisplay.textContent = '05:00';
            titleDisplay.innerHTML = 'Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>';
            break;

        case 'descanso-longo':
            timerDisplay.textContent = '15:00';
            titleDisplay.innerHTML = 'Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>';
            break;

        default:
            break;
    }
}

/* EVENTOS DOS BOTÕES */
foco.addEventListener('click', () => {
    tempoDecorridoEmSegundos = duracaoFoco;
    alterarContexto('foco')
    foco.classList.add('active')
})

curto.addEventListener('click', () => {
    tempoDecorridoEmSegundos = duracaoDescansoCurto;
    alterarContexto('descanso-curto')
    curto.classList.add('active')
})

longo.addEventListener('click', () => {
    tempoDecorridoEmSegundos = duracaoDescansoLongo;
    alterarContexto('descanso-longo')
    longo.classList.add('active')
})