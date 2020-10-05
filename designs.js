// Select color input
// Select size input

let gridHeight = document.getElementById('inputHeight');
let gridWidth = document.getElementById('inputWidth');
let colorvalue = document.getElementById('colorPicker');
let canvas = document.getElementById('pixelCanvas');
let formInfo = document.getElementById('sizePicker'); 
let selectedColor = '';
let canvasHasData = false;

/**
* Prevent Form from resubmitting and redirecting url when onsubmit
* was clicked
*/
formInfo.onsubmit = function(event){
    event.preventDefault();
    makeGrid();
};

//allow multiple colors
colorvalue.onchange = function(){
    selectedColor = '';
    selectedColor = colorvalue.value;
};

// When size is submitted by the user, call makeGrid()
function makeGrid() {
 
    clearGrid();
    //console.log('test');
    console.log(gridWidth.value);
    // Your code goes here!
    selectedColor = colorvalue.value;
    console.log(selectedColor);

    for (let r = 0; r < gridHeight.value; r++) {
        let row = canvas.insertRow(r);
        canvasHasData = true;
        for (let c = 0; c < gridWidth.value; c++) {
            let cell = row.insertCell(c);
            cell.addEventListener("click", onCellClicked);
        }
    }

};

/**
* Clear The canvas if there is data and check if there is
* data on startup using canvasHasData
*/
function clearGrid() {
    let r = canvas.rows.length - 1;
    canvasHasData = canvas.rows.length > 0 ? true : false
    while (r >= 0)
    {
        if(r >=0 && canvasHasData == true)
        canvas.deleteRow(r);
        r--;
    }
    canvasHasData = false;
}

function onCellClicked(){
    this.setAttribute("style", `background-color:${selectedColor}`);
}