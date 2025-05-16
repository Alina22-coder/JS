// #gEFoxMMO
let arrayFunction = (arr) => {
    document.write(`<ul>`);
    for (let i = 0; i<arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write(`</ul>`);
}
arrayFunction([10, 16, 'Alina', true, 6893702, false]);
