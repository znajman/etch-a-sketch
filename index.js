document.addEventListener('DOMContentLoaded', function () {
    document.body.onload = addDrawingArea();

    const resize = document.querySelector('.resize');
    resize.addEventListener('click', resizeDrawArea);
});

// create drawing area
function addDrawingArea(n = 10) {
    
    // select where to place div in the DOM
    const drawArea = document.querySelector('.draw-area');
    
    
    // create drawing area
    for (let i = 0; i < n; i++) {

        // create a row of divs
        const newRow = document.createElement('div');
        newRow.classList.add('row');
        for (let i = 0; i < n; i++) {
            // create new div
            const newDiv = document.createElement('div');
            newDiv.classList.add('pixel');
            newRow.appendChild(newDiv);
        }

        drawArea.appendChild(newRow);
    }

    draw();
}

// function to draw on the area
function draw() {

    // select the area where to draw
    const drawArea = document.querySelectorAll('.pixel');
    console.log(drawArea);

    // check every pixel
    drawArea.forEach(pixel => {
        // if mouse enters the pixel
        pixel.addEventListener('mouseenter', function() {
            // make the pixel black
            pixel.style.backgroundColor = 'black';
        });
    });
}

// delete the existing draw area and create a new one with prompted size
function resizeDrawArea() {
    let n = prompt('Select size:');
    while( !Number.isInteger(+n) && n < 100 && n > 0) {
        console.log(n);
        n = prompt('Select size:');
    }
    deleteDrawingArea();
    addDrawingArea(n);
}

// delete the draw area
function deleteDrawingArea() {
    // select div to delete 
    const drawArea = document.querySelector('.draw-area');

    while (drawArea.firstChild) {
        drawArea.removeChild(drawArea.firstChild);
    }
}