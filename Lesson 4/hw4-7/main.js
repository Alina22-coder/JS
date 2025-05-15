// #0Kxco1edSN
function testFunction(lorem, a){
    document.write(`<ul>`);
    for (let item = 0; item < a; item++){
        document.write(`<li>${lorem}</li>`);
    }
    document.write(`</ul>`);
}

testFunction('Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 10);
