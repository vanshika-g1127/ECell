/* assets/script.js */
document.addEventListener("DOMContentLoaded", function() {
    const textElements = document.querySelectorAll('.text-slide');
    textElements.forEach(el => {
        setTimeout(() => {
            el.classList.add('visible');
        }, 100);
    });
});

document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('subscribe-email').value;
    alert(`Thank you for subscribing with ${email}`);
});
