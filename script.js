document.body.classList.add("loaded");

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const features = document.querySelectorAll(".feature");

    features.forEach((feature) => {
        const header = feature.querySelector(".feature-header");
        const content = feature.querySelector(".feature-content");
        const toggleButton = feature.querySelector(".toggle-button");

        header.addEventListener("click", () => {
            features.forEach((f) => {
                if (f !== feature && f.classList.contains("active")) {
                    f.classList.remove("active");
                    f.querySelector(".feature-content").style.maxHeight = "0";
                    f.querySelector(".toggle-button").textContent = "+";
                }
            });

            feature.classList.toggle("active");
            if (feature.classList.contains("active")) {
                content.style.maxHeight = content.scrollHeight + "px";
                toggleButton.textContent = "−";
            } else {
                content.style.maxHeight = "0";
                toggleButton.textContent = "+";
            }
        });
    });
});