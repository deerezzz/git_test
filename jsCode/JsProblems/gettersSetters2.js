class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName; 
        this.lastName = lastName; 
        this.age = age; 
    }

    set firstName(newFirstName){
        if (typeof newFirstName === 'string' && newFirstName.length > 0) {
            this._firstName = newFirstName; 
        } else {
            console.error("First name must be a non-empty string"); 
        }
    }

    set lastName(newLastName){
        if (typeof newLastName === 'string' && newLastName.length > 0) {
            this._lastName = newLastName; 
        } else {
            console.error("Last name must be a non-empty string"); 
        }
    }

    set age(newAge){
        if (typeof newAge === 'number' && newAge >= 0) {
            this._age = newAge; 
        } else {
            console.error("Age must be a non-negative number"); 
        }
    }

    get firstName(){
        return this._firstName; 
    }

    get lastName(){
        return this._lastName; 
    }

    get age(){
        return this._age; 
    }

    get fullName(){
        return `${this._firstName} ${this._lastName}`;
    }
}

const person = new Person('Spongebob', 'SquarePants', 30);
console.log(person.firstName); // Spongebob
console.log(person.lastName);  // SquarePants
console.log(person.fullName);  // Spongebob SquarePants
console.log(person.age);       // 30

