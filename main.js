// query selector variables go here 👇
var affirmationsChoice = document.querySelector("#affirmations");
var mantrasChoice = document.querySelector("#mantras");
var receiveButton = document.querySelector("#receive");
var clearButton = document.querySelector("#clear");
var messageText = document.querySelector(".message-text");
var errorMessage = document.querySelector(".error");
var icon = document.querySelector(".icon");

// provided data 👇
var affirmations = [
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
var mantras = [
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

// global variables 👇

// event listeners go here 👇
receiveButton.addEventListener("click", getRandomMessage);
clearButton.addEventListener("click", clearMessage);

// functions and event handlers go here 👇
function getRandomIndex(array) {
  return array[Math.floor(Math.random() * array.length)];
};

function showHide(show, hide) {
  show.classList.remove("hidden");
  hide.classList.add("hidden");
};

function showMessage() {
  showHide(messageText, icon);
  showHide(clearButton, errorMessage);
};

function clearMessage() {
  showHide(icon, messageText);
  errorMessage.classList.add("hidden");
  clearButton.classList.add("hidden");
};

// REFACTOR THIS
function getRandomMessage() {
  if (mantrasChoice.checked) {
    messageText.innerText = getRandomIndex(mantras);
    showMessage();
  } else if (affirmationsChoice.checked) {
    messageText.innerText = getRandomIndex(affirmations);
    showMessage();
  } else {
    errorMessage.classList.remove("hidden");
  };
};
