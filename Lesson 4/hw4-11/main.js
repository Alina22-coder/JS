// #EKRNVPM
const array = [2,17,13,6,22,31,45,66,100,-18];

function arrFunction(arr){
    let sum = 0;
    for(let item = 0; item < arr.length; item++) {
        sum += arr[item];
    }
    console.log(sum);
}

arrFunction(array);