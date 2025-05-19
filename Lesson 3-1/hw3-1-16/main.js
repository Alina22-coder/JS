//#reLkOkTB29Q

const arrBook = [
    {title: 'BookOne',
        pages: 200,
        authors:['authors1', 'authors2', 'authors3'],
        genres: ['genres1', 'genres2']
    },
    {title: 'BookTwo',
        pages: 8528,
        authors:['authors1', 'authors2'],
        genres: ['genres1', 'genres2', 'genres3', 'genres4']
    },
    {title: 'BookThree',
        pages: 742,
        authors:['authors1', 'authors2', 'authors3'],
        genres: ['genres1', 'genres2']
    },
    {title: 'BookFour',
        pages: 3659,
        authors:['authors1', 'authors2', 'authors3', 'authors4', 'authors5'],
        genres: ['genres1', 'genres2', 'genres3', 'genres4', 'genres5']
    },
    {title: 'BookFive',
        pages: 638,
        authors:['authors1', 'authors2'],
        genres: ['genres1', 'genres2']
    }
]

// let maxPages = arrBook[0];
// for (let i = 1; i < arrBook.length; i++) {
//     if (arrBook[i].pages > maxPages.pages){
//         maxPages = arrBook[i];
//     }
// }
// console.log(maxPages);

// let maxGenres = arrBook[0];
// for (let i = 1; i < arrBook.length; i++){
//     if (arrBook[i].genres > maxGenres.genres){
//         maxGenres = arrBook[i];
//     }
// }
// console.log(maxGenres);

// let maxTitle = arrBook[0]
// for (let i = 1; i<arrBook.length; i++) {
//     if(arrBook[i].title.length > maxTitle.title.length){
//         maxTitle = arrBook[i];
//     }
// }
// console.log(maxTitle);

for (let i = 0; i < arrBook.length; i++){
    if (arrBook[i].authors === 2){
        console.log(arrBook[i]);
    }
}

