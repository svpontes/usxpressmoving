document.addEventListener('DOMContentLoaded', function () {
    
    const contactButtonEnglish = document.getElementById('contactButtonEnglish');
    const contactButtonSpanish = document.getElementById('contactButtonSpanish');

    

    // Ouvinte de evento para o botão de envio em inglês
    contactButtonEnglish.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('formulario').submit();
    });

    // Ouvinte de evento para o botão de envio em espanhol
    contactButtonSpanish.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('formulario').submit();
    });
});

