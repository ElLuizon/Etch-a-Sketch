// Seleccionar el contenedor
const container = document.getElementbyId("container");

// Tamaño de la cuadricula (16x16)
const gridSize = 16;

//crear la cuadricula con ciclo for
for(let i = 0; i < gridSize * gridSize; i++){
    //crear un nuevo elemento div
    const square = document.createAttribute("div");

    //Agregar la clase "square" al div
    square.classList.add("square");

    // Agregar el div al contenedor
    container.appendChild(square)
}
