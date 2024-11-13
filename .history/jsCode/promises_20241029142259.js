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
    
        setTimeout(() => {
            console.log("You walk the dog"); 
            callback(); 
        }, 1500); 
  }

  function cleanKitchen(callback){
    setTimeout(() => {
        console.log("You cleaned the Kitchen"); 
        callback(); 
    }, 2500); 
  }

  function takeOutTrash(callback){
    setTimeout(() => {
        console.log("You take out the trash"); 
        callback(); 
    }, 500); 
  }

  walkDog(() => {
    cleanKitchen(() => {
        takeOutTrash(() => console.log("You finished all the chores!")); 
    }); 
  }); 