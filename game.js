
let startButton = document.getElementById("startButton");   //variable create kia variable ko name dia document mtlb pura html page id se pakadna 
let startScreen = document.getElementById("startScreen");
let gameScreen = document.getElementById("gameScreen");

startButton.addEventListener("click", function () {    // start button pr nazr rakho with the help eventlistner click toh fuction ye kaam kre
    startScreen.style.display = "none";
    gameScreen.style.display = "block";
});

let guessButton = document.getElementById("guessBtn");
let userInput = document.getElementById("userInput");
let message = document.getElementById("message");
let newGameButton=document.getElementById("newGameButton");
let attemptsText = document.getElementById("attemptsText");
let backArrow = document.getElementById("backArrow");
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts=0;

guessButton.addEventListener("click", function () {
    let userNumber = Number(userInput.value);
    // Input validation
    if (userInput.value === "" || userNumber < 1 || userNumber > 100) {
        message.textContent = "Invalid input! Enter a number between 1 and 100.";
        return;   // yahin function stop ho jayega
    }
    attempts++;
    attemptsText.textContent = `Attempts: ${attempts}`;

    let difference = Math.abs(userNumber - secretNumber);

    if (difference === 0) {
        message.textContent = `🎉 Correct! You guessed it in ${attempts} attempts.`;
        userInput.disabled = true;
        guessButton.disabled = true;
    } 
    else if (difference <= 3) {
        message.textContent = " Very Close! Just a little more!";
    } 
    else if (difference <= 7) {
        message.textContent = " Close! Keep trying!";
    } 
    else {
        if (userNumber > secretNumber) {
            message.textContent = "Too High! Try Again";
        } else {
            message.textContent = "Too Low! Try Again";
        }}  
    
});

backArrow.addEventListener("click", function () {
    gameScreen.style.display = "none";
    startScreen.style.display = "block";

    // game reset
    attempts = 0;
    attemptsText.textContent = "Attempts: 0";
    message.textContent = "";
    userInput.value = "";
    userInput.disabled = false;
    guessButton.disabled = false;

    secretNumber = Math.floor(Math.random() * 100) + 1;
});


newGameButton.addEventListener("click", function () {
    attemptsText.textContent = "Attempts: 0";
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    message.textContent = "";
    userInput.value = "";
    userInput.disabled = false;
    guessButton.disabled = false;
});
