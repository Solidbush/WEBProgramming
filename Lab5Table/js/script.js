window.onload = function () {
    let count_rows = localStorage.getItem("rows");
    let count_columns = localStorage.getItem("columns");
    if (count_rows > 0 && count_columns > 0){
        generateTable(count_rows, count_columns)
    }
}


function clearTable(){
    document.getElementById('table__id').remove();
    localStorage.setItem("rows", "0");
    localStorage.setItem("columns", "0")
}

function clearForm() {
    document.getElementById('rows').value = null;
    document.getElementById('columns').value = null;
    clearTable();
}

function buttonOnClick() {
    let count_rows = document.getElementById('rows').value;
    let count_columns = document.getElementById('columns').value;
    generateTable(count_rows, count_columns)
}

function generateTable(count_rows, count_columns) {
    let table = document.getElementById('table__id')
    if (table){
        clearTable()
    }
    if (count_rows > 0 && count_columns  > 0){
        const tbl = document.createElement("table");
        const tblBody = document.createElement("tbody");
        tbl.id = "table__id";
        localStorage.setItem("rows", count_rows);
        localStorage.setItem("columns", count_columns)

        for (let i = 0; i < count_rows; i++) {
            const row = document.createElement("tr");
            for (let j = 0; j < count_columns; j++) {
                const cell = document.createElement("td");
                const cellText = document.createTextNode(`cell in row ${i}, column ${j}`);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            tblBody.appendChild(row);
        }

        tbl.appendChild(tblBody);
        document.body.appendChild(tbl);
        tbl.setAttribute("border", "2");
    }
    else {
        window.alert("Something was wrong! Please, try to input only positive counts!");
    }
}
