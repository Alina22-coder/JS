// #0Kxco1edSN
let itemList = (lorem, number) => {
    document.write(`<ul>`);
    for (let i = 0; i < number; i++){
        document.write(`<li>${lorem}</li>`);
    }
    document.write(`</ul>`);
}
itemList('Довільний текст', 10);