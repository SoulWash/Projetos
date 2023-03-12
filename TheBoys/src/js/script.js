const buttonCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.image');

buttonCarrossel.forEach((botao, i)=> {
    botao.addEventListener('click', () => {
        desativarButtonSelect();
        AdicionarButtonSelect(botao);

        removerImageActive();
        imagens[i].classList.add('ativa')
    })
})

function AdicionarButtonSelect(botao) {
    botao.classList.add('selecionado');
}

function removerImageActive() {
    const activeImage = document.querySelector('.ativa');
    activeImage.classList.remove('ativa');
}

function desativarButtonSelect() {
    const buttonSelect = document.querySelector('.selecionado');
    buttonSelect.classList.remove('selecionado');
}

