document.addEventListener("DOMContentLoaded", function () {
    function createFloatingElement(content, className) {
        const elem = document.createElement("div");
        elem.className = className;
        elem.textContent = content;
        elem.style.left = Math.random() * 100 + "vw";
        document.querySelector(".background-animations").appendChild(elem);
        setTimeout(() => elem.remove(), 5000);
    }
    setInterval(() => {
        createFloatingElement("❤️", "heart");
        createFloatingElement("🎊🎉", "confetti");
        createFloatingElement("I LOVE YOU", "heart");
    }, 500);
});