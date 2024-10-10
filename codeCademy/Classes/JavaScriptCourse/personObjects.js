
const person = {
    name:'Dolores'
}; 


person.favoriteFood = 'Tacos'; 
// console.log(person); 

person['FavoriteIceCream'] = 'chocolate'; 
// console.log(person); 

delete person.FavoriteIceCream; 

// console.log(person); 

person.eat = function() {
    console.log('Start eating'); 
}

// person.eat(); 


//