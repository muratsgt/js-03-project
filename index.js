const words = [
    "inception", "interstellar", "dark", "knight",
    "matrix", "fight", "butterfly" 
];

const pictureSetup = '<line x1="0" y1="290" x2="100" y2="290" stroke ="white" stroke-width="4"/>'
+'<line x1="50" y1="290" x2="50" y2="48" stroke ="white" stroke-width="4" />'
+'<line x1="50" y1="50" x2="122" y2="50" stroke ="white" stroke-width="4" />'
+'<line x1="120" y1="50" x2="120" y2="80" stroke ="white" stroke-width="4" />';

const pictureParts = [
    '<circle cx="120" cy="100" r="18" stroke="white" stroke-width="4" fill=rgba(0,0,0,0) />',
    '<line x1="120" y1="120" x2="120" y2="170" stroke ="white" stroke-width="4" />',
    '<line x1="120" y1="140" x2="90" y2="130" stroke ="white" stroke-width="4" />',
    '<line x1="120" y1="140" x2="150" y2="130" stroke ="white" stroke-width="4" />',
    '<line x1="120" y1="170" x2="100" y2="210" stroke ="white" stroke-width="4" />',
    '<line x1="120" y1="170" x2="140" y2="210" stroke ="white" stroke-width="4" />'
    ];

const guessElem = document.querySelector("#guess");
const wrongElem = document.querySelector("#wrongLetters");
const pictureElem = document.querySelector("#picture");

let pressedLetters = [];
let wrongLetters = [];
let guessWord = [];
let wordLength = 0;
let counter = 0;
let wrongCounter = 0;
startGame();

document.addEventListener('keydown',keyPressed);

function keyPressed(ky){
    if((ky.keyCode < 65 || ky.keyCode > 90)){
        return;
    }
    else if (pressedLetters.includes(ky.key)){
        enteredAllready();
    }
    else if (guessWord.includes(ky.key)){
        addTrue(ky.key);
    }else{
        addWrong(ky.key);
    }
    if(counter >= wordLength){
        winGame();
        startGame();
    }else if(wrongCounter >= 6){
        lostGame();
        startGame();
    }
}

function addTrue(letter){
    pressedLetters.push(letter);
    const letterElems = guessElem.querySelectorAll(`.${letter}`);
    letterElems.forEach(a => {
        a.innerText = letter;
        counter++;
    })
}

function addWrong(letter){
    pressedLetters.push(letter);
    wrongElem.innerText += letter + " " + "," ;
    pictureElem.innerHTML += pictureParts[wrongCounter];
    wrongCounter++;
}

function enteredAllready(){
    alert("Already entered that letter!")
}

function winGame(){
    alert("You won the game!");
}

function lostGame(){
    alert("You lost the game!");
}


function startGame() {
    guessElem.innerHTML = "";
    wrongElem.innerHTML = "";
    pictureElem.innerHTML = pictureSetup;
    pressedLetters = [];
    wrongLetters = [];
    counter = 0;
    wrongCounter = 0;
    let randNum = Math.floor(Math.random() * words.length);
    guessWord = words[randNum].split("");
    guessWord.forEach( a =>{
        let x = document.createElement("div");
        x.classList.add("letter");
        x.classList.add(a);
        x.innerText = " ";
        guessElem.appendChild(x);
    })
    wordLength = guessWord.length;
}

