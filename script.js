let container = document.querySelector(".container");

let boxes = 16;

container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "500px";
container.style.height = "500px";
container.style.border = "1px solid black";

let button = document.querySelector("#box-button");
button.addEventListener("click", () => { 
    let boxes;
    do {
        let input = prompt("Please enter the number of boxes.");
        boxes = parseInt(input);
    } while (boxes < 16 || boxes > 100);
    container.innerHTML = "";
    for (let _ = 0; _ < boxes * boxes; _++) {
        const s = document.createElement("div");
        s.addEventListener("mouseenter", () =>  {
            s.style.backgroundColor = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;            
        })
        s.style.flex = `1 0 calc(100% / ${boxes})`;
        s.style.border = "1px solid black";
        s.style.backgroundColor = "#BEBEBE";
        container.appendChild(s);
    }
});
