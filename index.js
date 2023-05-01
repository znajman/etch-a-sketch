document.addEventListener('DOMContentLoaded', function () {
    document.body.onload = addDrawingArea;
});

function addDrawingArea() {
    
    // select where to place div in the DOM
    const drawArea = document.querySelector('.draw-area');
    
    
    // create drawing area
    for (let i = 0; i < 4; i++) {

        // create a row of divs
        const newRow = document.createElement('div');
        for (let i = 0; i < 4; i++) {
            // create new div
            const newDiv = document.createElement('div');
            newRow.appendChild(newDiv);
        }
        
        drawArea.appendChild(newRow);
    } 
}