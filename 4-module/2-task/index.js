/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
    let rowsLength = table.rows.length;

    for(let i = 0; i < rowsLength; i++){
        table.rows[i].cells[i].style.background = "red";
    }
}

