
const modal = document.querySelector(".modal")
const srcVideo = document.getElementById("video")
const linkVideo = video.src
const fecharModal = document.querySelector(".fechar-modal")

function alternarModal(){
    modal.classList.toggle("aberto")
}

let trailer = () => {
    alternarModal()
    srcVideo.setAttribute("src", linkVideo)
}

fecharModal.addEventListener("click", () => {
    alternarModal()
    srcVideo.setAttribute("src", "")
})

