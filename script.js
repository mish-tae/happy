function showSurprise() {

    let surprise = document.getElementById("surprise");

    if (surprise.style.display === "none" || surprise.style.display === "") {

        surprise.style.display = "block";

    } else {

        surprise.style.display = "none";

    }

}
const binaryContainer = document.getElementById("binaryContainer");

for (let i = 0; i < 50; i++) {

    const binary = document.createElement("div");

    binary.classList.add("binary");

    // Random 0s and 1s
    binary.innerText = Math.random() > 0.5 ? "0" : "1";

    // Random horizontal position
    binary.style.left = Math.random() * 100 + "%";

    // Random speed
    binary.style.animationDuration =
        (5 + Math.random() * 10) + "s";

    // Random starting position
    binary.style.animationDelay =
        Math.random() * 10 + "s";

    binaryContainer.appendChild(binary);
}