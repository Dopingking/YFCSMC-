// scripts.js

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image-placeholder");
    images.forEach((image, index) => {
        image.style.animationDelay = `${index * 0.5}s`;
    });
});
