let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    //alert("Clicked Add Row");
	let table = document.getElementById("grid");
	//if empty table
	if (numCols == 0 || numRows == 0){
		var row = table.insertRow(0);
		var cells = row.insertCell(0);
		numRows++;
		numCols++;
		cells.innerHTML = numRows;
	}
	else {
		var rowlength = document.getElementById("grid").rows[0].cells.length;
		var newrow = table.insertRow(0);
		numRows++;
		for(var x=0; x<rowlength; x++){
			var cells = newrow.insertCell(x);
			cells.innerHTML = numRows;
		}
	}
}
//Add a column
function addC() {
    //alert("Clicked Add Col");
	let table = document.getElementById("grid");
	if (table.rows.length ==0){
		var row = table.insertRow(0);
		var cells = row.insertCell(0);
		numRows++;
		numCols++;
		cells.innerHTML = numCols;
	}
	else {
		var numrows = document.getElementById("grid").rows.length;
		var rowlength = document.getElementById("grid").rows[0].cells.length;
		for(var x=0; x<numrows; x++){
			var cells = table.rows[x].insertCell(rowlength);
		}
		cells.innerHTML = 1+numCols++;
	}
}

//Remove a row
function removeR() {
    //alert("Clicked Remove Row")
	if(numRows > 0 || numCols >0){
		let table = document.getElementById("grid");
		let row = table.deleteRow(0);
		numRows--;
	}
	else if(numRows == 1){
		let table = document.getElementById("grid");
		let row = table.deleteRow(0);
		numRows = 0;
		numCols = 0;
	}
}
//Remove a column
function removeC() {
    //alert("Clicked Remove Col")
	let table = document.getElementById("grid");
	if(numRows > 0 || numCols > 0){
		//let rows = document.getElementById("grid").rows;
		var numrows = document.getElementById("grid").rows.length;
		var rowlength = document.getElementById("grid").rows[0].cells.length;
		for(var r=0; r<numrows; r++){
			table.rows[r].deleteCell(rowlength-1);
		}
		numCols--;
	}
	else if(numCols == 1){
		var numrows = document.getElementById("grid").rows.length;
		var rowlength = document.getElementById("grid").rows[0].cells.length;
		for(var r=0; r<numrows; r++){
			table.rows[r].deleteCell(rowlength-1);
		}
		numCols = 0;
		numRows = 0;
	}
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    return colorSelected;
}

function fill(){
	let table = document.getElementById("grid");
	table.querySelectorAll('td').forEach(td => td.style.backgroundColor = selected());
}

function clearAll(){
	let table = document.getElementById("grid");
	table.querySelectorAll('td').forEach(td => td.style.backgroundColor = 'white');
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
