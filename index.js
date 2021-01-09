alert("Refresh for new result");
var randomNumber1 = Math.random();
randomNumber1= Math.floor(randomNumber1*6 +1);
var randomImageSource1="dice"+randomNumber1+".png"

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6 +1);
var randomImageSource2="dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src",randomImageSource1);
document.querySelector(".img2").setAttribute("src",randomImageSource2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="🚩 1 Wins the Game";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML="2 Wins the Game 🚩";
}
else{
  document.querySelector("h1").innerHTML="DRAW!!!";
}
