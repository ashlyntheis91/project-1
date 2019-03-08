const form = document.querySelector('form');

const submitHandler = event => {
    event.preventDefault();
    //Declaring consts.
    const weight = document.querySelector('#weight').value;
    const date = document.querySelector('#date').value;

    const weightInfo = `${weight} ${date}`;
    console.log(weightInfo);


}

form.addEventListener('submit', submitHandler);