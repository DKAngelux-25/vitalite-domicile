// Ombre header au scroll
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    header.style.boxShadow = window.scrollY > 50 
        ? "0 5px 15px rgba(0,0,0,0.1)" 
        : "none";
});

// Apparition des cartes au scroll
const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
    cards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }
    });
});
