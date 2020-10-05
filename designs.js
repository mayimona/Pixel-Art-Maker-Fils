// Select color input
// Select size input

var gridHeight = document.getElementById('inputHeight');
var gridWidth = document.getElementById('inputWidth');
var colrvalue = document.getElementById('colorPicker');
var canvas = document.getElementById('pixelCanvas');
let selectedColor = '';

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    clearGrid();
    //console.log('test');
    console.log(gridWidth.value);
    // Your code goes here!
    selectedColor = colrvalue.value;
    console.log(selectedColor);


    for (let r = 0; r < gridHeight.value; r++) {
        var row = canvas.insertRow(r);
        for (let c = 0; c < gridWidth.value; c++) {
            var cell = row.insertCell(c);
           // cell.addEventListner("click", onCellClicked(selectedColor, cell));
        }
    }

};

function clearGrid() {
    while (canvas.firstChild)
        canvas.removeChild(canvas.firstChild);
}

function onCellClicked(colorToChange, cell) {
    cell.setAttribute("style", `background-color:${colorToChange}`);

}