
let contactForm = document.querySelector('#contact-form');

contactForm.addEventListener('submit', function(event){
    event.preventDefault()
    let nomeForm = document.querySelector('#nome').value;
    let emailForm = document.querySelector('#email').value;
    let mensagemForm = document.querySelector('#mensagem').value;
    
    let formData = new FormData();
    formData.append('nome', nomeForm);
    formData.append('email', emailForm);
    formData.append('mensagem', mensagemForm);

    fetch('https://formsubmit.co/ajax/marciobarcelospimentel@gmail.com', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            return response.text('OK');
        } else {
            throw new Error('Ocorreu um erro durante o envio do formulário.');
        }
    })
    .then(data => {
        document.querySelector('#nome').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#mensagem').value = '';

        let statusForm = document.querySelector('#status');
        statusForm.textContent = 'Enviado com sucesso!';
    }, 1500)
    .catch(error => {
        console.error('Erro:', error);
        let statusForm = document.querySelector('#status');
        statusForm.textContent = 'Erro ao enviar o formulário.';
    });
});


window.onload = function () {
    const btnBackToTop = document.querySelector('#back-to-top');

    window.onscroll = function () {
        if (document.documentElement.scrollTop > 100) {
            btnBackToTop.style.display = 'block';
        } else {
            btnBackToTop.style.display = 'none';
        }
    };

    btnBackToTop.onclick = function () {
        scrollToTop();
    };

    function scrollToTop() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, scrollTop - scrollTop / 8);
        }
    }
};

