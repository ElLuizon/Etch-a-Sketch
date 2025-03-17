// Seleccionar el contenedor
const container = document.querySelector("#container");

// Seleccionar el boton
const newGrid = document.querySelector("#newGrid");

// Funcion para crear la cuadricula
function createGrid(gridSize) {
    //limpiar el contenedor
    container.innerHTML = "";
    
    // calcular el tamaño del cuadrado
    const squareSize = 960/ gridSize; //960px es el tamaño total de la cuadricula

    
    //crear la cuadricula con ciclo for
    for(let i = 0; i < gridSize * gridSize; i++){
        //crear un nuevo elemento div
        const square = document.createElement("div");
    
        //Agregar la clase "square" al div
        square.classList.add("square");
        
        // Establecer el tamaño del cuadrado 
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        //Agregar el efecto de 'Hover´para cuando pase el raton en el cuadro
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";//cabmia el fondo a negro
        });
        // Agregar el div al contenedor
        container.appendChild(square);
    
    }
}

// Crear una cuadricula inicial
createGrid(16);

// Agregar un event listener al boton
newGrid.addEventListener("click", () => {
    // Solicitar al usuario el numero de cuadros por lado
    const newGridSize = prompt("Add the number of squares by side (maximun 100)");

    // Validar la entrada del usuario
    if (newGridSize && !isNaN(newGridSize)) {
        const size = parseInt(newGridSize);

        if(size > 0 && size <= 100) {
            //crear una nueva cuadricula con el tamaño especificado
            createGrid(size);
        } else {
            alert("please, add a number between 1 & 100");
        }
    } else {
        alert("Invalid Input. Please add a number");
    }
});
