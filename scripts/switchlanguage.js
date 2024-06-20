document.addEventListener('DOMContentLoaded', function () {
    const toggleEnglish = document.getElementById('toggleEnglish');
    const toggleSpanish = document.getElementById('toggleSpanish');
    const englishContent = document.getElementById('englishContent');
    const spanishContent = document.getElementById('spanishContent');

    toggleEnglish.addEventListener('click', function (event) {
        event.preventDefault();
        englishContent.style.display = 'block';
        spanishContent.style.display = 'none';
    });

    toggleSpanish.addEventListener('click', function (event) {
        event.preventDefault();
        englishContent.style.display = 'none';
        spanishContent.style.display = 'block';
    });
});
