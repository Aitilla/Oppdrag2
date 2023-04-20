const bodyColor = document.getElementById('bodyColor');
const blindness = document.getElementById('blindness');
const classes = ['default', 'protanopia', 'deuteranopia', 'tritanopia'];
const names = ['Normal', 'Protanopia', 'Deuteranopia', 'Tritanopia'];
let currentIndex = 0;
const value = document.getElementById['option1', 'option2', 'option3', 'option4']
console.log(currentIndex);

function changeColor() {

    bodyColor.classList.remove(classes[currentIndex]);
    currentIndex = (currentIndex + 1) % classes.length;
    bodyColor.classList.add(classes[currentIndex]);
    blindness.innerHTML = names[currentIndex];
    console.log(currentIndex);

}

const optDiv = document.getElementById("optDiv");
const ulEl = document.createElement("ul");
const textarea = document.getElementById('textarea');
textarea.addEventListener('input', function() {
    console.log(textarea.value);
});

const addText = document.getElementById('addText');
addText.addEventListener('click', function() {
    if (textarea.value === ''){
        console.log('Invalid input');
    }else {
        console.log('Added:', textarea.value);
        optDiv.appendChild(ulEl);
        const liEl = document.createElement("li");
        const buttonEl = document.createElement("button");
        liEl.innerHTML = textarea.value + " ";
        ulEl.appendChild(liEl);
        liEl.appendChild(buttonEl);
        buttonEl.innerHTML = 'Remove';
        buttonEl.addEventListener('click', function() {
            liEl.removeChild(buttonEl);
            ulEl.removeChild(liEl);
            console.log('Removed:', liEl.innerHTML);
        });
        }
});



