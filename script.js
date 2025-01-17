let container = document.querySelector(".container");

for (let _ = 0; _ < 16 * 16; _++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);
}

