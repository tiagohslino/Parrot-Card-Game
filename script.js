let userNumCards = prompt("Com quantas cartas você quer jogar? (Somente números pares)");
let numCards = parseInt(userNumCards);
let cardsHTML = "";
let cont = 0;
let compareCard = "";
let activeCard = "";
let totalPoints = 0;
let move = 0;

while ((numCards % 2 != 0) || (numCards < 4) || (numCards > 14)){
    userNumCards = prompt("Com quantas cartas você quer jogar? (Somente números pares)");
    numCards = parseInt(userNumCards);
}

const cardsArray = [
    "assets/bobrossparrot.gif",
    "assets/explodyparrot.gif",
    "assets/fiestaparrot.gif",
    "assets/metalparrot.gif",
    "assets/revertitparrot.gif",
    "assets/tripletsparrot.gif",
    "assets/unicornparrot.gif",
];

const finalArray = [];

    for (let k=0; k<(numCards/2); k++) {
        finalArray.push(cardsArray[k]);
        finalArray.push(cardsArray[k]);
    }

finalArray.sort(comparador);

function comparador() {
    return Math.random() - 0.5;
}

console.log(finalArray);

window.onload = function distributeTotalCards(){
    const cardsTotal = document.querySelector(".cards-container");

    for (let i = 0; i < numCards; i++) {
            cardsHTML += `<li class="card-back" id="cardId${i+1}" 
            onclick="revealCard(this)"><img src="assets/back.png" /></li>`;
    }
    
    cardsTotal.innerHTML = cardsHTML;
}

distributeTotalCards();

function revealCard (frontCard){
    
    const selectedID = frontCard.id;
    const selectedCard = document.getElementById(selectedID);
    const scoreContainer = document.querySelector(".placar");
    const cardFace = document.querySelector(".card-front");

    for (let j=0; j < numCards; j++){
        if (selectedID == `cardId${j+1}`){
            selectedCard.outerHTML = `<li class="card-front" id="cardId${j+1}" 
            onclick="revealCard(this)"><img src="${finalArray[j]}" /></li>`;
            cardFace.classList.toggle("toggle");   
            activeCard = `${finalArray[j]}`;
        }     
    }
    
    if (cont == 0) {
        compareCard = activeCard;        
    }

    if (cont == 1) {
        if (compareCard == activeCard) {
            totalPoints++;
            cont = -1;   
        } else {
            cont = -1;     
        }
    }
 
    cont++;
    move++;
    
    scoreContainer.innerHTML = `<div class="score">PONTOS = ${totalPoints}</div> 
                                <div class="moves">JOGADAS = ${move}</div>`;
}

