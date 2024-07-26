/* assets/script.js */
document.addEventListener("DOMContentLoaded", function() {
    const textElements = document.querySelectorAll('.text-slide');
    textElements.forEach(el => {
        setTimeout(() => {
            el.classList.add('visible');
        }, 100);
    });
});
