// Henter og lager alle variabler som skal brukes
const bodyColor = document.getElementById('bodyColor');
const blindness = document.getElementById('blindness');
const changeColor = document.getElementById('changeColor');
const classes = ['default', 'protanopia', 'deuteranopia', 'tritanopia'];
const names = ['Normal', 'Protanopia', 'Deuteranopia', 'Tritanopia'];
let currentIndex = 0;
console.log(currentIndex);

// Bruker en addEventListener istedet for onclick for å endre på nettsiden til tilsvarende farge
changeColor.addEventListener('click', function () {
    bodyColor.classList.remove(classes[currentIndex]);
    currentIndex = (currentIndex + 1) % classes.length;
    bodyColor.classList.add(classes[currentIndex]);
    blindness.innerHTML = names[currentIndex];
    console.log(currentIndex);
});

// Henter og lager alle variabler som skal brukes
const optDiv = document.getElementById("optDiv");
const ulEl = document.createElement("ul");
const textarea = document.getElementById('textarea');
// Logger alt som blir skrevet
textarea.addEventListener('input', function () {
    console.log(textarea.value);
});

// Legger til alt som blir skrevet i textarea
const addText = document.getElementById('addText');
addText.addEventListener('click', function () {
    if (textarea.value === '') {
        console.log('Invalid input');
    } else {
        console.log('Added:', textarea.value);
        optDiv.appendChild(ulEl);
        const liEl = document.createElement("li");
        const buttonEl = document.createElement("button");
        liEl.innerHTML = textarea.value + " ";
        ulEl.appendChild(liEl);
        liEl.appendChild(buttonEl);
        buttonEl.innerHTML = 'Remove';
        buttonEl.addEventListener('click', function () {
            liEl.removeChild(buttonEl);
            ulEl.removeChild(liEl);
            console.log('Removed:', liEl.innerHTML);
        });
    }
});

const submit = document.getElementById('submit');

submit.addEventListener('click', function () {
    console.log('Submitted:');
});