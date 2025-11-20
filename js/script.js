// Smooth fade-in of all rule cards on scroll
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".rule-card");

    const reveal = () => {
        const triggerPoint = window.innerHeight * 0.85;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerPoint) {
                card.classList.add("visible");
            }
        });
    };

    reveal();
    window.addEventListener("scroll", reveal);
});

// Optional: Click to collapse/expand rule cards
// Remove this section if you want cards always open.

document.addEventListener("click", (e) => {
    const cardHeader = e.target.closest(".rule-card h2");
    if (!cardHeader) return;

    const card = cardHeader.parentElement;
    card.classList.toggle("collapsed");
});

// Optional: Smooth scroll for anchor links
const links = document.querySelectorAll("a[href^='#']");
links.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 20,
                behavior: "smooth"
            });
        }
    });
});
