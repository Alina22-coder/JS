// #2VaLt4vDczH
let div = document.createElement('div');

let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;
counter++;

localStorage.setItem('counter', counter);

div.innerText = counter;

document.body.appendChild(div);
