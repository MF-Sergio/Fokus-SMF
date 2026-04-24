/* SELETORES */
const btnAddTarefa = document.querySelector('.app__button--add-task');
const formAddTarefa = document.querySelector('.app__form--add-task');
const textarea = document.querySelector('.app__form-textarea');
const ulTarefas = document.querySelector('.app__section-task-list');
const btnCancelar = document.querySelector('.app__form-footer__button--cancel');
const descricaoTarefa = document.querySelector('.app__section-active-task-description');
const btnRemoverTarefa = document.querySelector('#btn-remover-concluidas');
const btnRemoverTodas = document.querySelector('#btn-remover-todas');

/* ESTADO DA APLICACAO */
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
let tarefaSelecionada = null;
let liTarefaSelecionada = null;

/* FUNCOES DE PERSISTENCIA */
function atualizarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

/* FUNCOES DE RENDERIZACAO E INTERACAO */
const criarElementoTarefa = (tarefa) => {
    const li = document.createElement('li');
    li.classList.add('app__section-task-list-item');

    const svg = document.createElement('svg');
    svg.innerHTML = `<svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
                fill="#01080E"></path>
        </svg>
    `;

    const paragrafo = document.createElement('p');
    paragrafo.textContent = tarefa.descricao;
    paragrafo.classList.add('app__section-task-list-item-description');

    const botao = document.createElement('button');
    botao.classList.add('app_button-edit');

    const imagemBotao = document.createElement('img');
    imagemBotao.setAttribute('src', '/imagens/edit.png');
    botao.append(imagemBotao);

    if (tarefa.completa) {
        li.classList.add('app__section-task-list-item-complete');
        botao.disabled = true;
    } else {
        botao.onclick = () => {
            const novaDescricao = prompt('Qual é o novo nome da tarefa?');
            if (!novaDescricao || !novaDescricao.trim()) return;

            const descricaoLimpa = novaDescricao.trim();
            paragrafo.textContent = descricaoLimpa;
            tarefa.descricao = descricaoLimpa;
            atualizarTarefas();
        };

        li.onclick = () => {
            document
                .querySelectorAll('.app__section-task-list-item-active')
                .forEach((elemento) => {
                    elemento.classList.remove('app__section-task-list-item-active');
                });

            if (tarefaSelecionada === tarefa) {
                if (descricaoTarefa) descricaoTarefa.textContent = '';
                tarefaSelecionada = null;
                liTarefaSelecionada = null;
                return;
            }

            if (descricaoTarefa) descricaoTarefa.textContent = tarefa.descricao;
            tarefaSelecionada = tarefa;
            liTarefaSelecionada = li;

            li.classList.add('app__section-task-list-item-active');
        };
    }

    li.append(svg, paragrafo, botao);
    return li;
};

/* EVENTOS DE FORMULARIO */
btnAddTarefa.addEventListener('click', () => {
    formAddTarefa.classList.toggle('hidden');
});

btnCancelar.addEventListener('click', () => {
    formAddTarefa.classList.add('hidden');
    textarea.value = '';
});

formAddTarefa.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const tarefa = {
        descricao: textarea.value.trim(),
        completa: false,
    };

    if (!tarefa.descricao) return;

    tarefas.push(tarefa);
    atualizarTarefas();

    const elementoTarefa = criarElementoTarefa(tarefa);
    ulTarefas.append(elementoTarefa);

    textarea.value = '';
    formAddTarefa.classList.add('hidden');
});

/* EVENTO GLOBAL */
document.addEventListener('FocoFinalizado', () => {
    if (tarefaSelecionada && liTarefaSelecionada) {
        liTarefaSelecionada.classList.remove('app__section-task-list-item-active');
        liTarefaSelecionada.classList.add('app__section-task-list-item-complete');

        const botaoEditar = liTarefaSelecionada.querySelector('button');
        if (botaoEditar) {
            botaoEditar.disabled = true;
        }

        tarefaSelecionada.completa = true;
        atualizarTarefas();

        tarefaSelecionada = null;
        liTarefaSelecionada = null;
        if (descricaoTarefa) descricaoTarefa.textContent = '';
    }
});

/* EVENTOS DE REMOCAO */
btnRemoverTarefa.onclick = () => {
    tarefas = tarefas.filter((tarefa) => !tarefa.completa);
    atualizarTarefas();

    ulTarefas.innerHTML = '';
    tarefas.forEach((tarefa) => {
        ulTarefas.append(criarElementoTarefa(tarefa));
    });

    if (descricaoTarefa) descricaoTarefa.textContent = '';
    tarefaSelecionada = null;
    liTarefaSelecionada = null;
};

btnRemoverTodas.onclick = () => {
    tarefas = [];
    atualizarTarefas();

    ulTarefas.innerHTML = '';

    if (descricaoTarefa) descricaoTarefa.textContent = '';
    tarefaSelecionada = null;
    liTarefaSelecionada = null;
};

/* INICIALIZACAO */
tarefas.forEach((tarefa) => {
    const elementoTarefa = criarElementoTarefa(tarefa);
    ulTarefas.append(elementoTarefa);
});