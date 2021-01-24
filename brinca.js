/* CREAMOS SCRIPT QUE ACCEDA A NUESTRO PERSONAJE(CARACTER/DINO) Y AL BLOQUE
QUE CREAMOS */

var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}
/* CREAMOS EL DEAD DETECTOR PARA QUE CUANDO NUESTRO CARACTER(DINOSAURIO) 
TOQUE EL BLOQUE(CACTUS) LO MARQUE EN EL SCORE Y LO CHEQUE ESTO CADA 10MILISEC*/
var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){ /*Le indicamos COMO Y QUE PASA AL ENCONTRARSE
        NUESTROS BLOQUES*/
        block.style.animation = "none";
        alert("Game Over ಥ_ಥ . Score:  "  // LA CARITA DEL ALERT ES DE AQUI http://facebook-iconosgestuales-simbolos.blogspot.com/2009/04/figuras-curiosas-disenadas-con-simbolos.html
        +Math.floor(counter/100));         /*EL ALERT para saber el score y que perdimos el juego*/
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;                         //AGREGUE LOS PUNTOS QUE GANAMOS
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);
