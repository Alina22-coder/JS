// #NKB0tgWIK1G
const arr = [];
for(let i = 0; i < 100; i++) {
    let newArray = {id: i, name: `Object ${i+1}`};
    arr.push(newArray);
}

const prevBtn = document.createElement('button');
prevBtn.innerText = 'Prev' ;

const nextBtn = document.createElement('button');
nextBtn.innerText = 'Next' ;

const pageLoading =  Number(localStorage.getItem('pageLoading')) || 1;


let currentPageNumber = pageLoading;
const div = document.createElement('div');

function renderPage(pageNumber) {
    div.innerHTML = '';

    const startPage = (pageNumber - 1) * 10;
    const endPage = startPage + 10;
    const currentPage = arr.slice(startPage, endPage);

    currentPage.forEach(page => {
        const p = document.createElement('p');
        p.textContent = `${page.id} - ${page.name}`;
        div.appendChild(p);
    })
}


nextBtn.addEventListener('click', function (){
    if(currentPageNumber <= 10){
        currentPageNumber++;
        renderPage(currentPageNumber);
        localStorage.setItem('pageLoading', currentPageNumber)
    }
})

prevBtn.addEventListener('click', function (){
    if(currentPageNumber > 1){
        currentPageNumber--;
        renderPage(currentPageNumber);
        localStorage.setItem('pageLoading', currentPageNumber)
    }
})
renderPage(currentPageNumber);
document.body.append(nextBtn,prevBtn, div);