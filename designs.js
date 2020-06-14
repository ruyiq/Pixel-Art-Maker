const table = document.getElementById("pixelCanvas");
const cells = document.getElementsByClassName('cell');
const sizePicker = document.getElementById('sizePicker');
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');

// config sizePicker
sizePicker.addEventListener('submit',function(){
  event.preventDefault();
  let row_count = height.value;
  let col_count = width.value;
  makeGrid(row_count, col_count);
});

//reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr
function makeGrid(numrows, numcols) {
    let table_body = '';
    // add row to table body
    for (let r = 0; r < numrows; r++) {
        table_body += '<tr class="row-' + r + '">';
        // add columns to table body
        for (let c = 0; c < numcols; c++) {
            table_body += '<td class="cell" id="row-' + r + '_cell-' + c + '"></td>';
        }
        table_body += '</tr>';
    }
    table.innerHTML = table_body;

    // update color once a click is made
    addColorChangeListener();
}

// add click events to all cells
function addColorChangeListener() {
  //loop over all cells and try to find the one being clicked.
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function (e) {
            let clickedCell = e.target;
            const color = document.getElementById("colorPicker").value;
            clickedCell.style.backgroundColor = color;
        });
    }
}


// Build a default 10x10 grid.
makeGrid(10, 10);
