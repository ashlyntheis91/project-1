const form = document.querySelector('form');
const table = document.querySelector('table');

const submitHandler = event => {
    event.preventDefault();
    //Declaring consts.
    const weight = document.querySelector('#weight').value;
    const date = document.querySelector('#date').value;
    //declaring table elements.
    const tableRow = document.createElement("tr");
    const weightCell = document.createElement("td");
    const dateCell = document.createElement("td");
    //filling out table elements inserting the form data.
    weightCell.append(weight);
    dateCell.append(date);
    tableRow.appendChild(weightCell);
    tableRow.appendChild(dateCell);
    //appending table row to main table.
    table.appendChild(tableRow);


}
//registering form eventlistener.
form.addEventListener('submit', submitHandler);