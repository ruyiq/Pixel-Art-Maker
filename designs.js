const canvas = document.getElementById('pixelCanvas')
const color = document.getElementById('colorPicker')
const tbody = document.createElement('tbody');

// Store the value of columns

// Access forms
const size = document.getElementById('sizePicker');

size.addEventListener('submit', function(e){
  e.preventDefault();  // Prevents the submit button from refreshing the page by default
	tbody.innerHTML='';
  const column = document.getElementById('inputWidth').value;

// Store the value of rows
const row = document.getElementById('inputHeight').value;
  console.log(row);
  for (r = 0; r < row; r++) {
    const tr = document.createElement('tr');
    tbody.appendChild(tr);
    for (c = 0; c < column; c++) {
      const td = document.createElement('td');
      tr.appendChild(td);
    }
    canvas.appendChild(tbody);
  }

canvas.appendChild(tbody);

});
