//Promis = An Object that manages asynchronous operations. 
//          wrap a Promis Object around {asynchronous code}
//          "I promise to returan a value"
//          PENDING -> RESOLVED OR REJECTED 
//          new Promise((resolve, rejected) => {asynchronous Code})

//  DO THESE CHORES IN ORDER 

// 1. WALK THE DOG 
// 2. CLEAN THE KITCHEN 
// 3. TAKE OUT THE TRASH 

  function walkDog(callback) {
    
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("You walk the dog"); 
            }, 1500); 
        }); 
  }

  function cleanKitchen(callback){

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("You cleaned the Kitchen"); 
            }, 2500);       
        }); 
  }

  function takeOutTrash(callback){

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("You take out the trash"); 
            }, 500); 
        }); 
  }

  walkDog(() => {
    cleanKitchen(() => {
        takeOutTrash(() => console.log("You finished all the chores!")); 
    }); 
  }); 