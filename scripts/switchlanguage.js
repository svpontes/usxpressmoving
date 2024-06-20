document.addEventListener('DOMContentLoaded', function () {
    const toggleEnglish = document.getElementById('toggleEnglish');
    const toggleSpanish = document.getElementById('toggleSpanish');
    const englishContent = document.getElementById('englishContent');
    const spanishContent = document.getElementById('spanishContent');

    const contactButtonEnglish = document.getElementById('contactButtonEnglish');
    const contactButtonSpanish = document.getElementById('contactButtonSpanish');

    toggleEnglish.addEventListener('click', function (event) {
        event.preventDefault();
        englishContent.style.display = 'block';
        spanishContent.style.display = 'none';
    });

    toggleSpanish.addEventListener('click', function (event) {
        event.preventDefault();
        englishContent.style.display = 'none';
        spanishContent.style.display = 'block';
    })});

   