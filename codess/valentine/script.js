const messages = [
    "Sei sicura?",
    "Sei veramente sicura??",
    "Sii positiva",
    "Cucciola ti prego...",
    "Lo sapevo!",
    "Se dici di no sarò veramente triste...",
    "Veramente molto molto triste...",
    "Veramente molto molto molto molto triste...",
    "Ok bene, smetterò di chiedertelo...",
    `Scherzavo, clicca "si" perfavore! ❤️`
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "done.html";
}
