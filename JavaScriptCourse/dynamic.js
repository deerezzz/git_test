 
 
 // objects are dynamic because you can change and mutate the properties and methods of the objects after it has been initialized. 
 // instantiate a new object, existing object, constructors can be accessed by dot notations. 




 const person = {
    name: 'Steven'
 }; 

//  console.log(person); 

 person.favoriteFood = 'tacos';
//  console.log(person); 


 person['favoridteIceCream'] = 'Chocolate'; 
//  console.log(person); 

 delete person.favoriteIceCream; 

//  console.log(person); 

person.eat = function () {
    console.log('start eating'); 
}

person.eat{}; 