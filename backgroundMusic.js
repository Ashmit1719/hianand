document.addEventListener("DOMContentLoaded", function () {
    const audio = new Audio("assets/music/about_you.mp3"); // Use one song; you can modify this to cycle through songs if needed.
    audio.loop = true;
    audio.volume = 0.5;
    document.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
        }
    }, { once: true });
});