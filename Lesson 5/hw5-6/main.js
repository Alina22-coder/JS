// #hOL6126
let itemList = (lorem) => {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++){
        document.write(`<li>${lorem}</li>`)
    }
    document.write(`</ul>`);
}

itemList('Lorem ipsum dolor sit amet.');