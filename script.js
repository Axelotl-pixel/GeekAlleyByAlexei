// =====================
// CALCULATOR FUNCTIONS
// =====================

// Diameter Calculator
function calculateDiameter() {
    // your original code
}

// Area Calculator
function calculateArea() {
    // your original code
}

// Volume Calculator
function calculateVolume() {
    // your original code
}

// Perimeter Calculator
function calculatePerimeter() {
    // your original code
}


// =====================
// HAMBURGER MENU
// =====================

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

if (hamburger && navLinks) {

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        hamburger.innerHTML =
            navLinks.classList.contains("show") ? "✕" : "☰";
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
            hamburger.innerHTML = "☰";
        });
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove("show");
            hamburger.innerHTML = "☰";
        }
    });

}
