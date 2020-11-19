// query selector letiables 👇
let affirmationsChoice = document.querySelector("#affirmations");
let mantrasChoice = document.querySelector("#mantras");
let receiveButton = document.querySelector("#receive");
let clearButton = document.querySelector("#clear");
let messageText = document.querySelector(".message-text");
let errorMessage = document.querySelector("#message-error");
let icon = document.querySelector(".icon");
let messageForm = document.querySelector(".message-form");
let output = document.querySelector(".output");
let enterButton = document.querySelector("#enter");
let login = document.querySelector(".login");
let greeting = document.querySelector("#greeting");
let loginName = document.querySelector(".login-name");
let loginError = document.querySelector("#login-error");

// provided data/global letiables 👇
let affirmations = [
  "I forgive myself and set myself free.",
  "I believe I can be all that I want to be.",
  "I am in the process of becoming the best version of myself.",
  "I have the freedom & power to create the life I desire.",
  "I choose to be kind to myself and love myself unconditionally.",
  "My possibilities are endless.",
  "I am worthy of my dreams.",
  "I am enough.",
  "I deserve to be healthy and feel good.",
  "I am full of energy and vitality and my mind is calm and peaceful.",
  "Every day I am getting healthier and stronger.",
  "I honor my body by trusting the signals that it sends me.",
  "I manifest perfect health by making smart choices."
];
let mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don’t let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather."
];

// event listeners 👇
enterButton.addEventListener("click", checkLogin);
receiveButton.addEventListener("click", getRandomMessage);
clearButton.addEventListener("click", clearMessage);

// functions and event handlers 👇
function checkLogin(event) {
  event.preventDefault();
  let username = loginName.value;
  !username ? loginError.classList.remove("hidden") : showMain(username);
}

const showMain = username => {
  showHide(messageForm, login);
  showHide(output, loginError);
  greeting.innerText =
    `Welcome, ${username}! Which type of message would you like today?`;
}

const getRandomIndex = array => {
  return array[Math.floor(Math.random() * array.length)];
}

const showHide = (show, hide) => {
  show.classList.remove("hidden");
  hide.classList.add("hidden");
}

function getRandomMessage() {
  if (mantrasChoice.checked) {
    getMessageChoice(mantras);
  } else if (affirmationsChoice.checked) {
    getMessageChoice(affirmations);
  } else {
    errorMessage.classList.remove("hidden");
  }
}

const getMessageChoice = type => {
  messageText.innerText = getRandomIndex(type);
  showHide(messageText, icon);
  showHide(clearButton, errorMessage);
}

function clearMessage() {
  showHide(icon, messageText);
  errorMessage.classList.add("hidden");
  clearButton.classList.add("hidden");
}
