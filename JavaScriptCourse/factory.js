

// const dog  = {
//     name: 'Max', 
//     breed: 'Dachschund',
//     age: 5, 
//     weightInPounds: 12,
//     eat: function () {
//       console.log('Chomp!');
//     }, 
//     bark() {
//       console.log('Woof!'); 
//     }
//   }
  
  // const anotherdog  = {
  //   name: 'Marley', 
  //   breed: 'Choco lab',
  //   age: 3, 
  //   weightInPounds: 60,
  //   eat: function () {
  //     console.log('Chomp!');
  //   }, 
  //   bark() {
  //     console.log('Woof!'); 
  //   }
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
      bark(){
        console.log('Woof!'); 
      }
    }
  }

  // **Constructor Functions**
  
      function Dog(name, breed, age, weightInPounds) {
        //this = {}; 

        // Add properties to this 
        this.name = name; 
        this.breed = breed; 
        this.age = age;
        this.weightInPounds = weightInPounds; 

        this.eat = function() {
          console.loog(this.name + ': Chomp!'); 
      }

        this.bark = function () {
          console.log(this.name + ':Woof!'); 
        }

          // return this; 

      }

      const anotherDog = new Dog('Marley', 'Choco Lab', 3, 60); 

      console.log(anotherDog); 




       


