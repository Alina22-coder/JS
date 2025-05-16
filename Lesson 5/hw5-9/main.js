// #bovDJDTIjt
let arrayFunction = (arr) => {
    for (let i =0; i < arr.length; i++) {
        document.write(`<div>${arr[i].id}, ${arr[i].name}, ${arr[i].age}</div>`);
    }
}
arrayFunction([{id:0, name:'Alina', age:22},{id:1, name:'Alina', age:45},{id:2, name:'Alina', age:86}]);