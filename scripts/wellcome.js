const messageDiv = document.getElementById('wellcome-message');
let username = localStorage.getItem('nombre');

document.addEventListener('DOMContentLoaded', () => {
  if (!username) {
    username = prompt("Cual es tu nombre?");
    localStorage.setItem("nombre", username);
  }

  messageDiv.innerHTML = `
    <h2> Hola, ${username}. Bienvenido a mi web! </h2>
  `;
});
