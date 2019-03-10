const form = document.querySelector('form');
const table = document.querySelector('table');

const submitHandler = event => {
    event.preventDefault();
    //Declaring consts.
    const weight = document.querySelector('#weight').value;
    const date = document.querySelector('#date').value;

    const weightInfo = `${weight} ${date}`;
    console.log(weightInfo);
    const tableRow = document.createElement("tr");
    const weightCell = document.createElement("td");
    const dateCell = document.createElement("td");
    weightCell.append(weight);
    dateCell.append(date);
    tableRow.appendChild(weightCell);
    tableRow.appendChild(dateCell);
    table.appendChild(tableRow);


}

form.addEventListener('submit', submitHandler);