document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "e") {
        event.preventDefault();

        let easterEgg = document.getElementById("easterEgg");

        if (easterEgg.style.display === "block") return;

        easterEgg.style.display = "block";
        easterEgg.style.opacity = "0";
        easterEgg.style.transform = "scale(0.5)";

        setTimeout(() => {
            easterEgg.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
            easterEgg.style.opacity = "1";
            easterEgg.style.transform = "scale(1)";
        }, 50);

        setTimeout(() => {
            easterEgg.style.transition = "opacity 0.5s ease-in";
            easterEgg.style.opacity = "0";

            setTimeout(() => {
                easterEgg.style.display = "none";
            }, 500);
        }, 3000);
    }
});
