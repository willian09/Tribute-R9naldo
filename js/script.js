// Função para abrir o modal com a imagem em alta resolução
function openModal(imageSrc) {
    var modal = document.querySelector('.modal');
    var modalImage = document.getElementById('modalImage');
    modalImage.src = imageSrc;
    modal.style.display = 'block';

    document.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
}

// Função para fechar o modal
function closeModal() {
    var modal = document.querySelector('.modal');
    modal.style.display = 'none';
    document.removeEventListener('click', closeModal);
}

// Adicione um evento de clique às miniaturas das imagens
var images = document.querySelectorAll('.imagens, .img-header, .img-seleca, .img-inter, .img-trophy');
images.forEach(function (image) {
    image.addEventListener('click', function() {
        openModal(this.src);
    });
});