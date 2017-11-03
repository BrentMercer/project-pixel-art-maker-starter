// Take selected height and width, build table, then insert to pixel_canvas
function makeGrid() {
	const inputWidth = $('#input_width').val();
	const inputHeight = $('#input_height').val();
	const table = document.getElementById('pixel_canvas');

	for (let i = 0; i < inputHeight; i++) {
		// Inserts rows into the table
		const row = table.insertRow(i);
		for (let j = 0; j < inputWidth; j++) {
			// Inserts 10 cells into each of the rows
			const cell = row.insertCell(j);
			cell.addEventListener('click', function(evt) { 
				let color = $('#colorPicker').val();
				$(evt.target).css('background-color', color);
			})
		}
	}
}

// Listen for Submit button to call makeGrid()
$('#sizePicker').submit(function(evt) {
	evt.preventDefault();
	makeGrid();
})
