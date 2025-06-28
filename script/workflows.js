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


const trocador = document.querySelectorAll('.changer');


function trocar(evento){
    const botao = this;
    const workflow = botao.parentNode.parentNode;
    const downloadBtn = workflow.querySelector('.download a');
    const statusAtual = botao.dataset.status;
    const imagem = workflow.querySelector('.workflowPreview');
    const nav = document.querySelector(".navbar");
    const eng = nav.getAttribute('value');
    console.log(eng)

    if(statusAtual === 'original'){
        imagem.src = imagem.dataset.loraSrc;
        downloadBtn.href = downloadBtn.dataset.loraHref;
        if(eng == "english"){
            botao.textContent = 'Without Lora';
        } else{
            botao.textContent = 'Versão sem Lora';
        }
        botao.dataset.status = 'lora';
    } else{
        imagem.src = imagem.dataset.originalSrc;
        downloadBtn.href = downloadBtn.dataset.href;
        if(eng == "english"){
            botao.textContent = 'Lora version';
        } else{
            botao.textContent = 'Versão com Lora';
        }
        botao.dataset.status = 'original';
    }
}

for(i = 0; i < trocador.length; i++){
    trocador[i].addEventListener("click", trocar);
}
