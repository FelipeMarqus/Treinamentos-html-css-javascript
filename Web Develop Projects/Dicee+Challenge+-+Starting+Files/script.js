
var dicesImg = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", 
                "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];

var randomdice1 = Math.floor(Math.random() * 6);
var randomdice2 = Math.floor(Math.random() * 6);

var diceRandom1 = dicesImg[randomdice1];
var diceRandom2 = dicesImg[randomdice2];

var player1 = document.querySelector(".dice .img1").setAttribute("src", diceRandom1);
var player2 = document.querySelector(".dice .img2").setAttribute("src", diceRandom2);


if (diceRandom1 > diceRandom2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";

}else if (diceRandom2 > diceRandom1) {
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins";

}else if (diceRandom1 === diceRandom2) {
    document.querySelector("h1").innerHTML = "🏁 Draw";

};
