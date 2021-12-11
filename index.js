// Dice 1
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDice1="dice"+randomNumber1+".png"; //for dice number 1-6
var randomDiceimage1="images/"+randomDice1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceimage1);



// Dice2
var randomnumber2=Math.floor(Math.random()*6)+1;
var randomDice2="dice"+randomnumber2+".png";
var randomDiceimage2="images/"+randomDice2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceimage2);



// Printing Winner
if (randomNumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}else if(randomnumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player2 Wins"
}else{
    document.querySelector("h1").innerHTML="Draw Roll Again";
}
