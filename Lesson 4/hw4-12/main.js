// #kpsbSQCt2Lf
function swap(arr,index1,index2){
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
}

swap([11,22,33,44],0,1);
console.log(swap([11,22,33,44],0,1));
