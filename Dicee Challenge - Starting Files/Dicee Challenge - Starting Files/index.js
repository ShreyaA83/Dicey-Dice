var n=Math.random();
var m=Math.floor((n*6)+1);
var randomimage="./images/dice"+m+".png";
document.querySelector(".img1").setAttribute("src",randomimage);
var p=Math.random();
var q=Math.floor((p*6)+1);
var randomimage2="./images/dice"+q+".png";
document.querySelector(".img2").setAttribute("src",randomimage2);
if(m>q){
    document.querySelector("h1").innerHTML="Player 1 is Winner";
}
else if(m<q){
    document.querySelector("h1").innerHTML="Player 2 is Winner";
}
else{
    document.querySelector("h1").innerHTML="Tie";   
}
