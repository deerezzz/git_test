//Promis = An Object that manages asynchronous operations. 
//          wrap a Promis Object around {asynchronous code}
//          "I promise to returan a value"
//          PENDING -> RESOLVED OR REJECTED 
//          new Promise((resolve, rejected) => {asynchronous Code})

//  DO THESE CHORES IN ORDER 

// 1. WALK THE DOG 
// 2. CLEAN THE KITCHEN 
// 3. TAKE OUT THE TRASH 

  function walkDog() {
    
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                const dogWalked = true; 

                if(dogWalked) {
                    resolve("You walked the dog"); 

                } else {
                    reject("You didn't walk the dog"); 
                }
            }, 1500); 
        }); 
  }

  function cleanKitchen(){

        return new Promise((resolve, reject) => {
            setTimeout(() => {

                const kitchenCleaned = true; 
                if(kitchenCleaned ) {
                    resolve("You cleaned the kitchen")
                } else {
                    reject("You didn't clean the kitchen"); 
                }
            }, 2500);       
        }); 
  }

  function takeOutTrash(){

        return new Promise((resolve, reject) => {
            setTimeout(() => {

                const trashTakenOut = false; 
                if(trashTakenOut){
                    resolve("You take out the trash"); 
                } else {
                    reject("You DIDN'T take out the trash. ")
                }
               
            }, 500); 
        }); 
  }

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("you finished alll the chores!")})
         .catch(error => console.error(error));
