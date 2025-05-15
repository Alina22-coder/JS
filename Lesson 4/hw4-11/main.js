// #EKRNVPM
function sum(arr){
    let value = 0;
    for(let item = 0; item < arr.length; item++) {
        value += arr[item];
    }
    return(value);
}

console.log(sum([1,2,10]));