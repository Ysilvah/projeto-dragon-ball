
const botao=document.querySelector(".botao");
const botaoFecharModal=document.querySelector(".fechar-modal");
const video=document.getElementById("video");
const modal=document.querySelector(".modal");
const linkDoVideo=video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botao .addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});