// script.js

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const successScreen = document.getElementById("successScreen");

const messages = [
  "Ты настолько занята? 🥺",
  "Ну пожааалуйста",
  "Всего одно воскресенье 😔",
  "Я буду скучать",
  "Ты уверена?",
  "Это твой окончательный ответ?",
  "А если хорошо подумать?",
  "Кнопка «Нет» кажется сломанной 🤔"
];

let count = 0;
let yesScale = 1;

function moveNoButton() {
  noBtn.style.position = "fixed";

  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  let randomX, randomY;
  let validPosition = false;

  while (!validPosition) {
    randomX = Math.random() * maxX;
    randomY = Math.random() * maxY;

    const noBtnRect = { left: randomX, top: randomY, right: randomX + noBtn.offsetWidth, bottom: randomY + noBtn.offsetHeight };
    const yesBtnRect = yesBtn.getBoundingClientRect();

    if (noBtnRect.right < yesBtnRect.left || noBtnRect.left > yesBtnRect.right || noBtnRect.bottom < yesBtnRect.top || noBtnRect.top > yesBtnRect.bottom) {
      validPosition = true;
    }
  }

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;

  message.textContent = messages[count % messages.length];

  count++;

  yesScale += 0.15;
  yesBtn.style.transform = `scale(${yesScale})`;
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

yesBtn.addEventListener("click", () => {
  document.body.style.background = "#ffd1e8";

  document.querySelector(".buttons").style.display = "none";
  document.querySelector(".question").style.display = "none";
  message.style.display = "none";

  successScreen.classList.add("show");
});
