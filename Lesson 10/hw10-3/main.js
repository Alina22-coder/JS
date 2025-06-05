// #ymAmN2xJ
let form = document.createElement("form");

let inputName = document.createElement("input");
inputName.id = "input__name";
inputName.type = "text";
inputName.placeholder = "Enter your name...";

let inputSurname = document.createElement("input");
inputSurname.id = "input__surname";
inputSurname.type = "text";
inputSurname.placeholder = "Enter your surname...";

let inputAge = document.createElement("input");
inputAge.id = "input__age";
inputAge.type = "number";
inputAge.placeholder = "Enter your age...";
inputAge.min = 1;
inputAge.max = 100;

let button = document.createElement("button");
button.innerText = "Submit";


let div = document.createElement("div");

button.addEventListener("click", function (e) {
    e.preventDefault();

    let name = inputName.value;
    let surname = inputSurname.value;
    let age = inputAge.value;

    let obj = {
        name,
        surname,
        age
    }

    let jsonNewObj = JSON.stringify(obj, null, 2);
    div.innerText = jsonNewObj;

})



form.append(inputName, inputSurname, inputAge, button);


document.body.append(form, div);
