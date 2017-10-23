// Select color input
// Select size input

// Take selected height and width, build table, then insert to pixel_canvas
function makeGrid() {
	let table;
	let inputWidth = $('#input_width').val();
	let inputHeight = $('#input_height').val();
	let pixelCanvas = $('#pixel_canvas');
	for (let i = 0; i < inputHeight; i++) {
		table += "<tr>";
		for (let j = 0; j < inputWidth; j++) {
			table += "<td></td>";
		}
		table += "</tr>";
	}
	pixelCanvas.html(table);
}

// Listen for Submit button click and call makeGrid()
$('#sizePicker').click(function(evt) {
	evt.preventDefault();
	makeGrid();
})

// Listen for click in cell and apply selected color
$('#pixel_canvas').click(function(evt) {
	let color = $('#colorPicker').val();
	$(evt.target).css('background-color', color);
})
