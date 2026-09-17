const form = document.getElementById('rsvpForm');
const formMessage = document.getElementById('formMessage');

const targetDate = new Date('2027-02-07T17:30:00');

const updateCountdown = () => {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById('days').textContent = '00';
    document.getElementById('hours').textContent = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
};

updateCountdown();
setInterval(updateCountdown, 1000);

if (form) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const confirmacao = document.getElementById('confirmacao').value;

    if (!nome || !email || !confirmacao) {
      formMessage.textContent = 'Por favor, preencha todos os campos obrigatórios.';
      formMessage.className = 'form-message error';
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
      formMessage.textContent = 'Informe um e-mail válido para confirmar sua presença.';
      formMessage.className = 'form-message error';
      return;
    }

    formMessage.textContent = `Obrigado, ${nome}! Sua confirmação foi registrada com sucesso.`;
    formMessage.className = 'form-message success';
    form.reset();
    document.getElementById('convidados').value = '1';
  });
}
