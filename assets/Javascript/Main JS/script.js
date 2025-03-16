document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const ul = document.querySelector("ul");
    const icon = document.getElementById("icon");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("rotate");
        ul.classList.toggle("active");
        if (icon.classList.contains("fa-bars")) {
            icon.classList.replace("fa-bars", "fa-times");
        } else {
            icon.classList.replace("fa-times", "fa-bars");
        }
    });

    document.querySelectorAll("ul li").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("rotate");
        ul.classList.remove("active");
        icon.classList.replace("fa-times", "fa-bars");
    }));
});