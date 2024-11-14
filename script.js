const btn_here = document.querySelector('.btn_here');
const msg = document.getElementById('msg');

const messages = [
  "No olvides comer bien",
  "Mantente bien hidratada",
  "Trata de tomarte un descanso",
  "Recuerda sonreír, !Es Gratis¡",
  "Haz algo que te haga feliz hoy ☺️"
];

function getRandomMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

btn_here.addEventListener('click', () => {
  const message = getRandomMessage();
  msg.textContent = message;
});
