// #LhSfdhM3
let now = new Date();
console.log(now);

localStorage.getItem('now');
localStorage.setItem('now', JSON.stringify(now));

const sessionsList = JSON.parse(localStorage.getItem('sessionsList')) || [];
sessionsList.push(now);
localStorage.setItem('sessionsList', JSON.stringify(sessionsList));