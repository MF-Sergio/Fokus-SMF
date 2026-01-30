# Fokus - Timer Pomodoro Interativo 🎯⏰

![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Manipulação DOM](https://img.shields.io/badge/DOM-Manipulation-purple?style=for-the-badge)

## ⬆️ Deploy do Projeto

```https://fokus-smf.vercel.app/```

## 📋 Sobre o Projeto

**Fokus** é uma aplicação web interativa baseada na **Técnica Pomodoro**, criada para aumentar a produtividade e concentração em tarefas importantes. O projeto demonstra habilidades avançadas em **manipulação do DOM** com JavaScript puro, criando uma experiência visual e sonora imersiva.

### 🍅 O que é a Técnica Pomodoro?

A técnica Pomodoro é um método de gestão de tempo que utiliza intervalos cronometrados:
- **25 minutos** de foco intenso em uma tarefa
- **5 minutos** de pausa curta para descanso
- **15 minutos** de pausa longa após ciclos completos

Este projeto implementa esses três modos com interface dinâmica e feedback audiovisual.

## 🎯 Objetivo Educacional

O projeto foi desenvolvido com foco em **manipulação avançada do DOM**, explorando:

- ✅ **innerHTML** - Alteração dinâmica de textos na tela
- ✅ **setAttribute** - Modificação de atributos (imagens, data-attributes)
- ✅ **classList** - Manipulação de classes CSS dinamicamente
- ✅ **querySelector/querySelectorAll** - Seleção de elementos
- ✅ **addEventListener** - Escuta de eventos e interações
- ✅ **Audio API** - Controle programático de sons
- ✅ **setInterval/clearInterval** - Gerenciamento de temporizadores

## ✨ Funcionalidades

### 🎨 Interface Dinâmica
- **3 Modos Selecionáveis**:
  - 🎯 **Foco** (25:00) - Para trabalho concentrado
  - ☕ **Descanso Curto** (05:00) - Pausas rápidas
  - 🌴 **Descanso Longo** (15:00) - Pausas prolongadas

- **Mudanças Visuais Automáticas**:
  - Alteração de cor de fundo para cada modo
  - Troca de imagem contextual
  - Atualização de textos motivacionais
  - Feedback visual no botão de controle

### ⏱️ Controle de Tempo
- Cronômetro regressivo em formato MM:SS
- Botão **Começar/Pausar** com alternância inteligente
- Indicador visual de estado (play/pause)
- Alerta ao finalizar o tempo

### 🎵 Experiência Sonora
- **Sons de Feedback**:
  - ▶️ Som ao iniciar o timer
  - ⏸️ Som ao pausar
  - 🔔 Alarme ao finalizar o tempo
- **Música de Fundo** (opcional):
  - Trilha sonora ambiente (Luna Rise)
  - Toggle on/off via checkbox
  - Loop contínuo durante uso

## 🚀 Tecnologias Utilizadas

| Tecnologia | Percentual | Uso no Projeto |
|------------|-----------|----------------|
| **CSS3** | 36.9% | Estilos, animações e responsividade |
| **JavaScript** | 32.1% | Lógica, manipulação DOM e interatividade |
| **HTML5** | 31.0% | Estrutura semântica da aplicação |

### Recursos JavaScript Destacados

```javascript
// Manipulação do DOM
const html = document.querySelector('html');
const timerDisplay = document.querySelector('#timer');
const bannerDisplay = document.querySelector('.app__image');

// Alteração dinâmica de atributos
html.setAttribute('data-contexto', 'foco');
bannerDisplay.setAttribute('src', '/imagens/foco.png');

// Manipulação de classes
botao.classList.add('active');
botao.classList.remove('active');

// Controle de áudio
const somInicia = new Audio('sons/play.wav');
somInicia.play();

// Temporizador
intervalo = setInterval(contagemRegressiva, 1000);
```

## 📂 Estrutura do Projeto

```
Fokus-SMF/
│
├── index.html              # Estrutura principal da aplicação
├── styles.css              # Estilos e design responsivo
├── script.js               # Lógica e manipulação do DOM
│
├── imagens/                # Assets visuais
│   ├── foco.png           # Banner do modo Foco
│   ├── descanso-curto.png # Banner do descanso curto
│   ├── descanso-longo.png # Banner do descanso longo
│   ├── play_arrow.png     # Ícone de play
│   └── pause.png          # Ícone de pause
│
└── sons/                   # Arquivos de áudio
    ├── play.wav           # Som de início
    ├── pause.mp3          # Som de pausa
    ├── beep.mp3           # Alarme final
    └── luna-rise-part-one.mp3  # Música de fundo
```

## 🔍 Conceitos Técnicos Implementados

### 1. Manipulação do DOM

#### **innerHTML** - Alteração de Conteúdo
```javascript
titleDisplay.innerHTML = 'Otimize sua produtividade,<br> <strong>mergulhe no que importa.</strong>';
```

#### **setAttribute** - Modificação de Atributos
```javascript
html.setAttribute('data-contexto', 'descanso-curto');
bannerDisplay.setAttribute('src', '/imagens/descanso-curto.png');
```

#### **classList** - Gerenciamento de Classes
```javascript
botao.classList.add('active');
botao.classList.remove('active');
botao.classList.toggle('active');
```

### 2. Gerenciamento de Estado

```javascript
// Constantes de duração
const duracaoFoco = 25 * 60;           // 1500 segundos
const duracaoDescansoCurto = 5 * 60;   // 300 segundos
const duracaoDescansoLongo = 15 * 60;  // 900 segundos

// Variáveis de estado
let tempoDecorridoEmSegundos = 0;
let intervalo = null;
```

### 3. Funções Principais

| Função | Responsabilidade |
|--------|------------------|
| `alterarContexto()` | Muda modo (foco/descanso) e atualiza UI |
| `mostrarTempo()` | Formata e exibe tempo no formato MM:SS |
| `contagemRegressiva()` | Decrementa tempo e verifica finalização |
| `iniciar()` | Inicia o setInterval do cronômetro |
| `zerar()` | Para o timer e reseta interface |

### 4. Event Listeners e Interatividade

```javascript
// Botão Start/Pause
startPause.addEventListener('click', () => {
    if (!intervalo) {
        iniciar();
        somInicia.play();
        startPauseImg.src = "./imagens/pause.png";
    } else {
        zerar();
        somPausa.play();
    }
});

// Toggle de música
musicaFoco.addEventListener('change', () => {
    musica.checked ? musica.play() : musica.pause();
});
```

## 🎨 Design e Experiência Visual

### Paleta de Cores por Contexto

| Modo | Cor Principal | Significado |
|------|--------------|-------------|
| **Foco** | 🟣 Roxo/Púrpura | Concentração e produtividade |
| **Descanso Curto** | 🟢 Verde | Relaxamento e renovação |
| **Descanso Longo** | 🔵 Azul | Descanso profundo |

### Elementos Visuais
- ✨ Gradientes suaves no background
- 🎭 Ilustrações modernas e futuristas
- 🎯 Interface minimalista e focada
- 📱 Design responsivo para todos os dispositivos

## 🌐 Como Executar o Projeto

### Opção 1: Abrir Diretamente

1. **Clone o repositório**
```bash
git clone https://github.com/MF-Sergio/Fokus-SMF.git
```

2. **Navegue até a pasta**
```bash
cd Fokus-SMF
```

3. **Abra no navegador**
- Clique duas vezes em `index.html`
- Ou arraste o arquivo para o navegador

### Opção 2: Servidor Local

```bash
# Com Python 3
python -m http.server 8000

# Ou com Node.js (npx)
npx http-server -p 8000
```

Acesse: `http://localhost:8000`

## 📱 Demonstração Visual

### Modo Foco (25:00)
![Modo Foco](image1)
*Interface no modo de concentração com cronômetro de 25 minutos*

### Modo Descanso Curto (05:00)
![Modo Descanso](image2)
*Interface no modo de pausa curta com cronômetro de 5 minutos*

## 💡 Aprendizados e Conceitos Aplicados

Durante o desenvolvimento deste projeto, foram explorados:

### JavaScript Vanilla
- ✅ Manipulação avançada do DOM
- ✅ Event delegation e handling
- ✅ Cache de seletores para performance
- ✅ Gerenciamento de estado com variáveis
- ✅ Funções puras e responsabilidade única
- ✅ API de Áudio do navegador
- ✅ Formatação de datas e tempo

### Boas Práticas
- ✅ **Cache de seletores**: Evita consultas repetidas ao DOM
- ✅ **Funções pequenas**: Cada função tem uma responsabilidade
- ✅ **Constantes nomeadas**: Código auto-documentado
- ✅ **Separação de concerns**: Lógica, apresentação e estrutura separadas
- ✅ **Event listeners organizados**: Código modular e manutenível

### UX/UI
- ✅ Feedback visual imediato
- ✅ Feedback sonoro para ações
- ✅ Estados visuais claros (ativo/inativo)
- ✅ Design responsivo
- ✅ Acessibilidade considerada

## 🎓 Conceitos da Técnica Pomodoro

### Como Usar o Fokus

1. **📝 Escolha uma tarefa** para focar
2. **⏰ Inicie o timer** no modo Foco (25 min)
3. **💼 Trabalhe com concentração** até o alarme
4. **☕ Faça uma pausa curta** (5 min)
5. **🔄 Repita** o ciclo 3-4 vezes
6. **🌴 Faça uma pausa longa** (15 min)

### Benefícios
- 🎯 Aumento de foco e concentração
- ⚡ Redução de procrastinação
- 📊 Melhor gestão de tempo
- 🧠 Prevenção de fadiga mental
- ✅ Sensação de progresso constante

## 🔧 Customização

### Ajustar Tempos

Para modificar a duração dos timers, edite em `script.js`:

```javascript
const duracaoFoco = 25 * 60;           // Altere para seu tempo preferido
const duracaoDescansoCurto = 5 * 60;   // Ex: 10 * 60 = 10 minutos
const duracaoDescansoLongo = 15 * 60;  // Ex: 20 * 60 = 20 minutos
```

### Trocar Música de Fundo

Substitua o arquivo em `/sons/luna-rise-part-one.mp3` por sua música preferida.

### Personalizar Cores

Edite as variáveis CSS em `styles.css`:

```css
[data-contexto="foco"] {
    --main-bg-color: #8B5CF6; /* Sua cor preferida */
}
```

## 🚧 Melhorias Futuras

- [ ] Implementar histórico de sessões (localStorage)
- [ ] Adicionar estatísticas de produtividade
- [ ] Criar notificações do navegador
- [ ] Adicionar modo escuro
- [ ] Implementar sistema de metas diárias
- [ ] Adicionar sons customizáveis
- [ ] Criar lista de tarefas integrada
- [ ] Gráficos de produtividade semanal
- [ ] PWA (Progressive Web App)
- [ ] Sincronização em nuvem

## ♿ Acessibilidade

Recursos implementados:
- ✅ Controles acessíveis por clique
- ✅ Estados visuais claros (classes .active)
- ✅ Tempo exibido em formato legível (MM:SS)
- ✅ Feedback visual e sonoro

Melhorias recomendadas:
- [ ] Navegação por teclado (tabindex)
- [ ] Atributos ARIA (aria-live para timer)
- [ ] Textos alternativos completos
- [ ] Suporte a leitores de tela

## 🤝 Contribuições

Contribuições são bem-vindas! Para contribuir:

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/MinhaFeature`)
3. **Commit** suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. **Push** para a branch (`git push origin feature/MinhaFeature`)
5. Abra um **Pull Request**

### Sugestões de Contribuição
- 🐛 Reportar bugs
- 💡 Propor novas funcionalidades
- 📝 Melhorar documentação
- 🎨 Aprimorar design/UX
- ♿ Implementar acessibilidade

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e de portfólio.

## 🎯 Sobre o Desenvolvimento

### Contexto
Projeto desenvolvido com foco em **manipulação avançada do DOM** com JavaScript puro (Vanilla JS), sem frameworks ou bibliotecas externas. O objetivo é demonstrar domínio dos conceitos fundamentais do JavaScript e da Web API.

### Desafios Superados
- ✅ Gerenciamento de múltiplos estados (modos, timer, áudio)
- ✅ Sincronização de mudanças visuais e sonoras
- ✅ Controle preciso de temporizadores
- ✅ Design responsivo e adaptável
- ✅ Performance na manipulação do DOM

## 👨‍💻 Autor

**Sergio Mendes**

- GitHub: [@MF-Sergio](https://github.com/MF-Sergio)
- Projeto: [Fokus-SMF](https://github.com/MF-Sergio/Fokus-SMF)

## 📚 Referências

- [Técnica Pomodoro - Francesco Cirillo](https://francescocirillo.com/pages/pomodoro-technique)
- [MDN Web Docs - DOM](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model)
- [MDN - Web Audio API](https://developer.mozilla.org/pt-BR/docs/Web/API/Web_Audio_API)

---

⭐ **Se este projeto foi útil para você, considere dar uma estrela no repositório!**

**Desenvolvido com 💜 e muitos Pomodoros** 🍅⏰

---

### 💬 Feedback

Gostou do projeto? Tem sugestões? Abra uma [issue](https://github.com/MF-Sergio/Fokus-SMF/issues) ou entre em contato!

**#Pomodoro #Produtividade #JavaScript #ManipulaçãoDOM #VanillaJS**
