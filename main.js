// query selector variables go here 👇
var inputs = document.querySelectorAll(".input");
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

// // THIS ONE SHOWS THE RIGHT MESSAGE:
// function getRandomMessage() {
//   for (var i = 0; i < inputs.length; i++) {
//     if (inputs[i].checked) {
//       messageText.innerText = getRandomIndex(mantras);
//     } else {
//       messageText.innerText = getRandomIndex(affirmations);
//     };
//   };
//   showHide(messageText, icon);
//   clearButton.classList.remove("hidden");
// };

function showMessage() {
  showHide(messageText, icon); // remove icon, show message
  showHide(clearButton, errorMessage); // remove error message, reveal clear button
}

function clearMessage() {
  showHide(icon, messageText);
  errorMessage.classList.add("hidden");
  clearButton.classList.add("hidden");
}

// // ERROR MESSAGE & REFACTOR ATTEMPT
function getRandomMessage() {
  for (var i = 0; i < inputs.length; i++) { // loop over each radio input
    if (inputs[i].checked) { // if either input is checked
      messageText.innerText = getRandomIndex(inputs[i].value); // get random message for the checked value
      showMessage(); // reveal clear button, remove error message (if there is one)
      console.log(inputs[i].value); // WHY ISN'T THIS COMING THROUGH ABOVE???
    } else {
      errorMessage.classList.remove("hidden"); // if neither input has been checked, disable "Receive Message" button and show red error message
    };
  };
};
