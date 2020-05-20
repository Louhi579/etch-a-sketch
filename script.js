let sketch = document.querySelector('#container');
let sketchHeight = sketch.clientHeight;
let sketchWidth = sketch.clientWidth;
let div;

let squares = 16;
sketchStart(squares);
let gridButton = document.querySelector('#set')

gridButton.addEventListener("click", function(e) {
    let squares = prompt('Please choose grid size');
    clearContainer(sketch);
    sketchStart(squares);
});

function sketchStart(squares) {
    
    let totalSquares = squares * squares;
    let squaresWidth = (sketchWidth / squares) + 'px';
    let squaresHeight = (sketchHeight / squares) + 'px';

    sketch.setAttribute('style', `display: grid; grid-template-columns: repeat(${squares}, ${squaresWidth});
        grid-template-rows: repeat(${squares}, ${squaresHeight})`);

    for (let i = 0; i < totalSquares; i++) {
        div = document.createElement('div');
        div.classList.add('paint');
        sketch.appendChild(div);
    }

    
    let paintClass = document.querySelectorAll('.paint');
    

    for (let i = 0; i < paintClass.length; i++) {
        paintClass[i].addEventListener("mouseover", function (e) {
            event.target.style.backgroundColor = "black";

            eventHandler();
        })
    }


}
function clearContainer(container){
    container.innerHTML = "";
}

