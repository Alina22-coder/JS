// #EKRNVPM
 let sum = (arr) => {
    let value = 0
    for (let i = 0; i < arr.length; i++){
        value+= arr[i];
    }
    return value;

}
console.log(sum([1,2,10]));
