document.getElementById("toggle-btn").addEventListener("click", function () {
    let profContent = document.getElementById("professional-content");
    let socContent = document.getElementById("social-content");
    let tagline = document.getElementById("tagline");

    if (profContent.classList.contains("hidden")) {
        profContent.classList.remove("hidden");
        socContent.classList.add("hidden");
        this.textContent = "Switch to Social";
        tagline.textContent = "AI & ML Enthusiast | Developer";
    } else {
        profContent.classList.add("hidden");
        socContent.classList.remove("hidden");
        this.textContent = "Switch to Professional";
        tagline.textContent = "Tech Explorer | Creative Mind";
    }
});