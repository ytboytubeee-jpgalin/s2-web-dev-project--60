// BigPlanetarium JavaScript

// Welcome alert button message
const exploreButton = document.querySelector(".btn");

if (exploreButton) {
    exploreButton.addEventListener("click", function () {
        console.log("User clicked the explore button.");
    });
}

// Contact form message
const contactForm = document.querySelector("form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for contacting BigPlanetarium!");
    });
}

// Planet card interaction
const planetCards = document.querySelectorAll(".planet-card");

planetCards.forEach(function (card) {
    card.addEventListener("click", function () {
        card.classList.toggle("active-card");
    });
});