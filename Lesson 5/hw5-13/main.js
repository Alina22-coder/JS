// #mkGDenYnNjn
let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (let item of currencyValues){
        if(item.currency === exchangeCurrency){
            return sumUAH/item.value;
        }
    }
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))