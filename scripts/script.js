let isMaximized = false;

function toggleChat() {
  const chatContainer = document.getElementById('chat-container');
  if (isMaximized) {
    chatContainer.style.width = '300px';
    chatContainer.style.height = '400px';
  } else {
    chatContainer.style.width = '600px';  // Largura quando maximizado
    chatContainer.style.height = '800px'; // Altura quando maximizado
  }
  isMaximized = !isMaximized;
}

function handleOption(option) {
  const message = document.createElement('div');
  message.className = 'message user-message';
  message.textContent = option;
  document.getElementById('chat-box').appendChild(message);
  // Aqui você pode adicionar a lógica para o bot responder
}



function handleOption(userInput) {
  const chatBox = document.getElementById('chat-box');
  
  // Adiciona a mensagem do usuário no chat
  const userMessage = document.createElement('div');
  userMessage.className = 'message user-message';
  userMessage.innerText = userInput;
  chatBox.appendChild(userMessage);
  
  // Rolagem automática para o final do chat
  chatBox.scrollTop = chatBox.scrollHeight;
  
  let botReply = '';
  
  switch(userInput) {
    case 'O que é a Dengue?':
      botReply = 'A dengue é uma doença viral transmitida pelo mosquito Aedes aegypti. É comum em áreas tropicais e subtropicais.';
      break;
    case 'Sintomas da Dengue':
      botReply = 'Os sintomas incluem febre alta, dores de cabeça, dor atrás dos olhos, dores musculares e nas articulações, e erupções cutâneas.';
      break;
    case 'Prevenção da Dengue':
      botReply = 'A prevenção da dengue envolve evitar o acúmulo de água parada, usar repelente e vestir roupas que cubram o corpo.';
      break;
    case 'Tratamento da Dengue':
      botReply = 'O tratamento envolve repouso, hidratação e medicamentos para aliviar os sintomas. Não há tratamento antiviral específico.';
      break;
    case 'Mapa da Dengue no Brasil':
      botReply = 'Você pode ver o mapa da dengue no Brasil <a href="pages/mapa-dengue.html" target="_blank">clicando aqui</a>.';
      break;
    case 'Acessar Dashboard':
      botReply = 'Para acessar o dashboard, faça login <a href="pages/login.html" target="_blank">aqui</a>.';
      break;
    case 'Ver Gráfico da Dengue':
      botReply = 'Você pode visualizar o gráfico da dengue no dashboard <a href="pages/dashboard.html" target="_blank">clicando aqui</a>.';
      break;
    default:
      botReply = 'Desculpe, não entendi sua pergunta.';
  }
  
  // Adiciona a resposta do bot no chat
  const botMessage = document.createElement('div');
  botMessage.className = 'message bot-message';
  botMessage.innerHTML = botReply; // Permitir HTML na resposta
  chatBox.appendChild(botMessage);
  
  // Rolagem automática para o final do chat
  chatBox.scrollTop = chatBox.scrollHeight;
  
  // Mostrar novamente as opções após a resposta
  showOptions();
}

function showOptions() {
  const options = document.getElementById('options');
  
  // Limpa as opções antigas (se necessário)
  options.innerHTML = '';
  
  // Adiciona as opções de interação novamente
  options.innerHTML = `
    <button class="option-btn" onclick="handleOption('O que é a Dengue?')">O que é a Dengue?</button>
    <button class="option-btn" onclick="handleOption('Sintomas da Dengue')">Sintomas da Dengue</button>
    <button class="option-btn" onclick="handleOption('Prevenção da Dengue')">Prevenção da Dengue</button>
    <button class="option-btn" onclick="handleOption('Tratamento da Dengue')">Tratamento da Dengue</button>
    <button class="option-btn" onclick="handleOption('Mapa da Dengue no Brasil')">Mapa da Dengue no Brasil</button>
    <button class="option-btn" onclick="handleOption('Acessar Dashboard')">Acessar Dashboard</button>
    <button class="option-btn" onclick="handleOption('Ver Gráfico da Dengue')">Ver Gráfico da Dengue</button>
  `;
}

// Exibe as opções no início
window.onload = showOptions;
