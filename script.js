const form = document.getElementById('rsvpForm');
const formMessage = document.getElementById('formMessage');

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
