const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        card.style.transform = "scale(0.98)";

        setTimeout(() => {
            card.style.transform = "";
        },100);
    });
});

console.log("Portfolio Loaded");