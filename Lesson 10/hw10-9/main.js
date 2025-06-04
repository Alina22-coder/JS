// #bq1zkx7WP
const cash = document.createElement('div');

let cashValue = localStorage.getItem('cash');
if (cashValue === null) {
    cashValue = 100;
} else {
    cashValue = parseInt(cashValue);
}

const timeNow = Date.now();
const localTime = localStorage.getItem('timeNow');
const timeSecund = 10 * 1000;

if(localTime === null || (timeNow - parseInt(localTime) >= timeSecund)) {
    cashValue += 10;

    localStorage.setItem('cash', cashValue);
    localStorage.setItem('timeNow', timeNow);
}

cash.innerText = cashValue + 'грн';
document.body.appendChild(cash);
