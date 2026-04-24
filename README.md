# Fokus — Pomodoro + Lista de Tarefas (CRUD)

![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![DOM](https://img.shields.io/badge/DOM-Manipulation-purple?style=for-the-badge)

Aplicação web baseada na **Técnica Pomodoro** que evolui para um fluxo completo de produtividade: **timer + tarefas**.

## ⬆️ Deploy

```text
https://fokus-smf.vercel.app/
```

## 📌 Sobre o projeto

O **Fokus** é uma aplicação para ajudar no foco e na organização do trabalho. A proposta começa com um **Pomodoro interativo** (com mudanças visuais e sons conforme o modo) e, na continuação do projeto, evolui para incluir uma **lista de tarefas com CRUD (Create, Read, Update, Delete)**.

Além de controlar o tempo, a aplicação passa a permitir:

- criar tarefas para trabalhar durante os ciclos de foco;
- **selecionar** uma tarefa ativa;
- **finalizar** tarefas concluídas;
- **deletar** tarefas;
- persistir a lista usando **localStorage** (armazenamento local) com **JSON.stringify** e **JSON.parse**.

> A ideia é fazer uma jornada completa em uma aplicação já existente: adicionar novas funcionalidades, manter o código evoluindo com segurança e aprender técnicas de **depuração (debug)** para encontrar e corrigir comportamentos inesperados.

## 🍅 Técnica Pomodoro (resumo)

- **25 minutos** de foco
- **5 minutos** de descanso curto
- **15 minutos** de descanso longo

## ✨ Funcionalidades

### ⏱️ Timer Pomodoro
- Modos: **Foco**, **Descanso Curto**, **Descanso Longo**
- Cronômetro regressivo (MM:SS)
- Botão **Começar/Pausar**
- Feedback visual (mudança de contexto na UI)
- Alert/alarme ao finalizar (dependendo da configuração)

### 🎵 Experiência sonora
- Som ao iniciar
- Som ao pausar
- Alarme ao finalizar
- Música de fundo opcional (toggle)

### ✅ Lista de tarefas (continuação do projeto)
Na continuação, o projeto passa a incluir uma camada de tarefas para acompanhar o que será feito em cada ciclo.

**Operações esperadas (CRUD):**
- **Create**: adicionar nova tarefa
- **Read**: listar tarefas salvas
- **Update**: marcar como finalizada / alterar estado
- **Delete**: remover tarefa

**Interações importantes:**
- Selecionar uma tarefa para ser a “tarefa atual” do ciclo
- Disparar ações via **eventos customizados** (CustomEvent) para desacoplar UI e lógica
- Persistência no **localStorage**

## 🎯 Objetivo educacional

Este repositório foi desenvolvido com foco em **JavaScript puro (Vanilla JS)** e evolução incremental de funcionalidades.

Conceitos/práticas trabalhadas ao longo do projeto:

- Manipulação do DOM (`querySelector`, `classList`, `setAttribute`, `innerHTML`)
- Temporizadores (`setInterval`, `clearInterval`)
- API de Áudio
- Persistência com `localStorage`
- Serialização JSON (`JSON.stringify` / `JSON.parse`)
- **Eventos customizados** para comunicação entre componentes/partes do código
- Técnicas de **debug** (breakpoints, step-by-step, inspeção de variáveis)

## 🚀 Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura da página |
| CSS3 | Estilização, responsividade e temas por contexto |
| JavaScript | Lógica do timer, interação com DOM, persistência e eventos |

## 📂 Estrutura do projeto

```text
Fokus-SMF/
├── index.html
├── styles.css
├── script.js
├── imagens/
└── sons/
```

## 🌐 Como executar localmente

### Opção 1 — Abrir diretamente
1. Clone o repositório:
```bash
git clone https://github.com/MF-Sergio/Fokus-SMF.git
```
2. Entre na pasta:
```bash
cd Fokus-SMF
```
3. Abra o `index.html` no navegador.

### Opção 2 — Servidor local
```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx http-server -p 8000
```
Acesse: `http://localhost:8000`

## 🔧 Customização rápida

### Ajustar tempos
Em `script.js`:
```js
const duracaoFoco = 25 * 60;
const duracaoDescansoCurto = 5 * 60;
const duracaoDescansoLongo = 15 * 60;
```

### Trocar música de fundo
Substitua o arquivo em `sons/luna-rise-part-one.mp3`.

## 🧭 Próximos passos sugeridos

- [ ] Implementar/expandir lista de tarefas (CRUD completo)
- [ ] Persistência consistente e migração de dados no `localStorage`
- [ ] Histórico de sessões (pomodoros concluídos)
- [ ] Estatísticas simples (por dia/semana)
- [ ] Melhorar acessibilidade (ARIA, foco via teclado)
- [ ] Notificações do navegador ao finalizar um ciclo

## 🤝 Contribuições

1. Faça um fork
2. Crie uma branch: `git checkout -b feature/minha-feature`
3. Commit: `git commit -m "Minha feature"`
4. Push: `git push origin feature/minha-feature`
5. Abra um Pull Request

## 👨‍💻 Autor

**Sergio Mendes**

- GitHub: [@MF-Sergio](https://github.com/MF-Sergio)

---

Se este projeto te ajudou, considere deixar uma ⭐ no repositório.
