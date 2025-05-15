// #pghbnSB

function arrFunction (arr){
    let min = arr[0];

    for(let item = 1; item < arr.length; item++){
        if(arr[item] < min){
            min = arr[item];
        }
    }

    return min;

}

console.log(arrFunction([2,17,13,6,22,31,45,66,100,-18]));
