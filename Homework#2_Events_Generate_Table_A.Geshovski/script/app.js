// ******** Homework#2 ******* //

function generateTable(column, row) {
  body.innerHTML = ``;

  let table = document.getElementById(`table`);
  table = ``;

  for (let i = 0; i < row; i++) {
    let tData = "";
    for (let j = 0; j < column; j++) {
      tData += `<td>
                    ${i + 1}
                            ${j + 1}
                                    </td>`;
    }
    // table += `<tr>${tData}</tr>`;
    body.innerHTML += `<tr>${tData}</tr>`;
  }
}

let body = document.getElementById("body");
let genBtn = document.getElementById(`generateBtn`);
let rowInput = document.getElementById(`row`);
let columnInput = document.getElementById(`column`);

genBtn.addEventListener(`click`, function () {
  generateTable(columnInput.value, rowInput.value);
});
