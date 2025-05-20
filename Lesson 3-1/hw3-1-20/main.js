const someArr = [15, 'alina', 664, 6843, true, 5, 46, 458, 'ok', false];
let numArr = [];
for(let i = 0; i < someArr.length; i++){
    if(typeof someArr[i] === 'number'){
        numArr.push(someArr[i]);
    }
}
console.log(numArr);





