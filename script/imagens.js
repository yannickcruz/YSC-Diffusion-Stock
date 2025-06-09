const button_menu = document.querySelector(".button_toggle");
const nav_button = document.querySelector(".navbutton.res");

function navbuttonshow(){
    nav_button.classList.toggle("show");
}

button_menu.addEventListener("click", navbuttonshow);

const images = document.querySelectorAll(".grids img");
const imgTarget = document.getElementById("extend");
const overlay = document.querySelector(".imgExpandida");
const downloadBtn = document.querySelector("#imgDownload a");
const imgSize = document.querySelector(".imgInfo");

function expandir(evento){
    imgTarget.src = this.src;
    downloadBtn.href = this.dataset.link;
    overlay.classList.add('ativo');
    imgSize.textContent = `Dimensões: ${imgTarget.naturalWidth * 4}x${imgTarget.naturalHeight * 4}`;
}

for(let i = 0; i < images.length; i++){
    images[i].addEventListener('click', expandir);
}

function fechar(){
    overlay.classList.remove('ativo');
}

const closeButton = document.getElementById("close");
closeButton.addEventListener('click', fechar);

