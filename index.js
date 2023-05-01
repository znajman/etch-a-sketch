document.addEventListener('DOMContentLoaded', function () {
    document.body.onload = addDrawingArea;

});

// create drawing area
function addDrawingArea() {
    
    // select where to place div in the DOM
    const drawArea = document.querySelector('.draw-area');
    
    
    // create drawing area
    for (let i = 0; i < 4; i++) {

        // create a row of divs
        const newRow = document.createElement('div');
        newRow.classList.add('row');
        for (let i = 0; i < 4; i++) {
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
