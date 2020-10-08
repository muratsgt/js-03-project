const words = [
    "inception", "interstellar", "dark", "knight",
    "matrix", "fight", "butterfly" 
];

let wordArray = words[0].split("");

const guessElem = document.querySelector("#guess");

wordArray.forEach( a =>{
    let x = document.createElement("div");
    x.classList.add("letter");
    x.innerText = a;
    guessElem.appendChild(x);
})