function imprimir_en(id,valor) {
    document.getElementById.innerHTML=valor;
}

function tirar_dados(){
var numero_aleatorio1=Math.floor(Math.random()*6)+1;
var numero_aleatorio2=Math.floor(Math.random()*6)+1;

var fuente1='images/Dice'+numero_aleatorio1+'.png';
var fuente2='images/Dice'+numero_aleatorio2+'.png';
    
document.querySelector('.img1').setAttribute('src',fuente1);
document.querySelector('.img2').setAttribute('src',fuente2);
}
function init(){
    var boton;
    boton=document.getElementById("boton")
    boton.onclick=tirar_dados;
}
window.onload=init;