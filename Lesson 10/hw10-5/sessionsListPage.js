const sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];

sessionsList.forEach(function (date) {
    const p = document.createElement('p');
    p.innerText = date;
    document.body.appendChild(p);
});