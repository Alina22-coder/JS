// #Jg0gPO00
const input = document.createElement('input');
input.type = 'number';

const p = document.createElement('p');

input.addEventListener('input', function() {
    let kilograms  =parseFloat(input.value);
    if (!isNaN(kilograms)) {
      const pounds = kilograms * 2.20462;
        p.innerHTML = pounds.toFixed(2);
    } else {
        p.innerText = '';
    }

})

document.body.appendChild(input);
document.body.appendChild(p);