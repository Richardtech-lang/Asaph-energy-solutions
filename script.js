
// Asaph Energy Solutions - Website JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // Mobile navigation
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelector(".nav-links");

    if (navbar && navLinks) {
        const menuButton = document.createElement("button");

        menuButton.className = "menu-toggle";
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open navigation menu");
        menuButton.setAttribute("aria-expanded", "false");

        navbar.appendChild(menuButton);

        menuButton.addEventListener("click", function () {
            navLinks.classList.toggle("show");

            const isOpen = navLinks.classList.contains("show");

            menuButton.setAttribute("aria-expanded", isOpen);
            menuButton.textContent = isOpen ? "✕" : "☰";
        });
    }

});
