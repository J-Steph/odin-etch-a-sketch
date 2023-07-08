let gridCount = 16;
drawGrid();


//Function to draw Grid
function drawGrid() {
    const container = document.querySelector('.container');
    //If container already exists, erase it before drawing new Grid
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }

    //Calculate box size based on gridCount variable
    let divSize = (1/gridCount * 100) + '%';

    //Draw Grid under container Div
    for(let i = 0; i < gridCount * gridCount; i++) {
        const div = document.createElement('div');
        div.setAttribute('id', `grid-${i}`);
        div.style.width = divSize;
        div.style.height = divSize;
        div.classList.add('box');
        div.addEventListener('mouseover', (e) => {
            console.log(e.target.id);
            let id = e.target.id;
            let div = document.querySelector(`#${id}`);
            div.classList.add('drawn');
        })
        container.appendChild(div);
    }       
}

//Function for home page Button
function handleClick() {
    let gridSize = prompt("Please select Grid Size", "16");
    gridCount = gridSize;
    drawGrid();
}