var random=Math.floor(Math.random()*6)+1;
var randomimge="dice"+random+".png";
var randomsrc="images/"+randomimge;
var imge1=document.querySelectorAll("img")[0]
imge1.setAttribute("src",randomsrc);
var random2=Math.floor(Math.random()*6)+1;
var randomimge2="images/dice"+random2+".png";
var imge2=document.querySelectorAll("img")[1]
imge2.setAttribute("src",randomimge2);
var random3=Math.floor(Math.random()*6)+1;
var randomimge3="images/dice"+random3+".png";
var imge3=document.querySelectorAll("img")[2]
imge3.setAttribute("src",randomimge3);

if(random>random2){
    document.querySelector("h1").innerHTML="player 1 wins";
}else if(random<random2){
    document.querySelector("h1").innerHTML="player 2 wins";
}else{
    document.querySelector("h1").innerHTML="draw................!!!!!!!!!!111111";
}
