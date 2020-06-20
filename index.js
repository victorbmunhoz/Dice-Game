var dicePics = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png" ]

window.onload = function choosePic(){
var randomNumber1 = Math.floor(Math.random() * dicePics.length);
document.querySelector(".img1").src = dicePics[randomNumber1];

var randomNumber2 = Math.floor(Math.random() * dicePics.length);
document.querySelector(".img2").src = dicePics[randomNumber2];

if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "🖏 Draw!"
}

else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 wins!!"
}  

else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!! 🚩"
}  
}



