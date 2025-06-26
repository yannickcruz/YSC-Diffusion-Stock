// Seletor de idiomas
const languageMain = document.getElementById("langMain");
const languageSec = document.getElementById("langSec");
function changeLanguage(){
    const actualUrl = this.value;
    console.log("mudou");
    console.log(actualUrl);
    if(this.options[this.selectedIndex].text !== "idiomas"){
        window.location.href = actualUrl; 
    }
    
}
languageMain.addEventListener('change', changeLanguage);
languageSec.addEventListener('change', changeLanguage);

const button_menu = document.querySelector(".button_toggle");
const nav_button = document.querySelector(".navbutton.res");

function navbuttonshow(){
    nav_button.classList.toggle("show");
}

button_menu.addEventListener("click", navbuttonshow);

//Carrossel
let indice = 0;
const imagens = document.querySelectorAll('.frame img');
const totalIndice = imagens.length;

function atualizador(){
    indice = (indice + 1) % totalIndice;
    for(i = 0; i < totalIndice; i++){
        if(i === indice){
            imagens[i].classList.add('ativo');
            //console.log("Imagem atualizada para: Ativo");
        } else{
            imagens[i].classList.remove('ativo');
            //console.log("Imagem atualizada para: Hidden");
        }
    }

}

setInterval(atualizador, 3000);


// Hexagon Rotation
let acao = false;
const hexagon = document.getElementById("hexIMG");
hexagon.style.transition = 'transform 0.75s ease';

function hexRotation(){
    if(acao){
        hexagon.style.transform = 'rotate(45deg)';
        //console.log("Hex Funciona");
    } else{
        //console.log("Hex está oculto");
        hexagon.style.transform = 'rotate(-45deg)';
    }
}

const observador = new IntersectionObserver(function(entradas){
    for(let i = 0; i < entradas.length; i++){
        acao = entradas[i].isIntersecting;
    }
}, {threshold: 0.6});

observador.observe(hexagon);

window.addEventListener("scroll", function(){
    if(acao){
        hexRotation();
    } else hexRotation();
});

