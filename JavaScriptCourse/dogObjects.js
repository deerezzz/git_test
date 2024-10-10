
//***Notes***


// Functions are represented as objects, they have properties and methods. 

// primitive data types: number, string, boolean, null, undefined, symbol, BigInt. 
// Primitive values are copied by their value, objects are copied by reference. 
// Primitive vales refer to simple values, and are passed by copy. 
// object values refers to key value pairs, and includes arrays and are passed by reference. 

// To enumerate over the properties of an object use the for in loop to iterate over the keys. Object.keys or object.values, object.entries. examples below. 


const dog = {
    name: 'Max',
    breed: 'Daschshund', 
    age: 5,
    weightInPounds: 12, 
    eat: function () {
        console.log('Chomp!'); 
    }, 
    bark() {
        console.log('Woof!'); 
    }
}

// const anotherDog = {
//     name: 'Marley',
//     breed: 'Chocolate Lab', 
//     age: 3,
//     weightInPounds: 60, 
//     eat: function () {
//         console.log('Chomp!'); 
//     }, 
//     bark() {
//         console.log('Woof!'); 
//     }
// }

function getDog(name, breed, age, weightInPounds) {
    return {
        name,
        breed, 
        age,
        weightInPounds, 
        eat() {
            console.log('Chomp!'); 
        }, 
        bark() {
            console.log('Woof!')
        }
    }
}

const anotherDog = getDog('Marley', 'Chocolate Lab', 3, 60); 
