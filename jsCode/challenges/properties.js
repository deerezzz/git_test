
const movie = {
    title: 'a',
    releaseYear: 2018, 
    rating: 4.5,
    director: 'b'
};

showPropterties(movie); 

function showPropterties(obj) {
   for (let key in obj) 
    if (typeof obj[key] === 'string')
    console.log(key, obj[key]); 
}; 