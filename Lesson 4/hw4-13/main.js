// #mkGDenYnNjn
const currencyValues = [
    {currency:'USD', value:25},
    {currency:'EUR', value:42}
]

function exchange(sumUAH,currencyValues,exchangeCurrency){
    for (let item of currencyValues){
        if (item.currency === exchangeCurrency){
            return sumUAH / item.value;
        }
    }
}

console.log(exchange(10000, currencyValues, 'USD'));
console.log(exchange(10000, currencyValues, 'EUR'));

