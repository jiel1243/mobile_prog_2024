
// ! Destructing objects and arrays
// SEPT2024



const person = {
    name: 'John',
    age: 25,
    hobbies: ['reading', 'cooking'],
    greet: function() {
        console.log('HEllO, my name is' + this.name + 'and I am' + this.age + ' Years old');

    }
    
};

// When to use destucturing
// Destructuring is useful whn you only need a specific property of an object
// Regular Function
// regular passing of object
// even though we are passing the whole object, we are only using the name property

 // const printname = (per a) => {
   // console.log(personData.name);//
 //  console.log(personData.hobbies);//
   // console.log(personData.age);//
  //  console.log(person.greet());//
 

// printname(person); 

const printName = ( { name}) => {
    console.log(`Hello, my name is ${name}.`);
}

printName(person);

// if we are only intrested in the name property of the object, we can use desturcuting
// destructuring the object
// const printName = ( { name }) => {
// console.log(name) ;   }

// we pass the object as an argument to the function
printName(person);

const {name, age} = person;
console.log(name,age);

// destructuring arrays
const hobbies = ['reading', 'cooking'];
const [hobby1,hobby2] = hobbies;
console.log(hobby1,hobby2);

/* Reminders when using destructuring:
- The property name must watch the object property name.
- The property name must be enclosed in curly braces.
- The property name must be followed by a colon.
*/

 

