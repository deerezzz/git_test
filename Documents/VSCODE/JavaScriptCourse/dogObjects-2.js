


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

function Dog(name,breed,age,weightInPounds) {
      // this. {}

      //Add properties to this. 

      this.name = name; 
      this.breed = breed; 
      this.age = age; 
      this.weightInPounds = weightInPounds; 

      this.eat = function (){
        console.log(this.name + ': Chomp!'); 
      }

      this.bark =  function () {
        console.log(this.name +': Woof!'); 
      }

      //return this 

}

const anotherDog = new Dog('Marley', 'Choco Lab', 3 , 60); 
console.log( anotherDog ); 

