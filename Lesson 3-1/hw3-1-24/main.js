const arrOne =  ['a', 'b', 'c'];
let sum = '';
for(let i = 0; i < arrOne.length; i++){
  sum += arrOne[i];
}
console.log(sum);


let i = 0;
while(i < arrOne.length){
    sum+=arrOne[i];
    i++;
}
console.log(sum);

for(let item of arrOne){
    sum+=item;
}
console.log(sum);







