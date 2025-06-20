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

    if(statusAtual === 'original'){
        imagem.src = imagem.dataset.loraSrc;
        downloadBtn.href = downloadBtn.dataset.loraHref;
        botao.textContent = 'Versão sem Lora';
        botao.dataset.status = 'lora';
    } else{
        imagem.src = imagem.dataset.originalSrc;
        downloadBtn.href = downloadBtn.dataset.href;
        botao.textContent = 'Versão com Lora';
        botao.dataset.status = 'original';
    }
}

for(i = 0; i < trocador.length; i++){
    trocador[i].addEventListener("click", trocar);
}
