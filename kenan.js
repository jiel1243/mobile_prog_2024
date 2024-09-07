// JS BASIC SYNTAX

// 1. DECLARING AND ASSIGNMENT OF VARIABLES

var name = "Khennan";// let /variables are used for values that can change 
let age = 20;
let hasHobbies = true;

const nameThatCannotChange = "Khennan"; // const / contstants are used for values that should not change
// meaning const nameThatCannotChange = "Khennan"; cannot be cahnge in the entire

//*CONDITIONAL STATEMENTS
if (hasHobbies) { // if hasHobbies is true
    console.log("I have hobbies");
}

if(age > 20){
    console.log("I am older than 20");
}else if(age<20){
    console.log("I am younger than 20");
}else{
    console.log("I am 20 years old");
}

switch(name){
    case "Khennan":
        console.log("Your name is Khennan");
        break; // break is used to exit the switch stement 
        default: // default is used when none of the cases are met 
            console.log("Your are not Khennan");
}   

// 2. PRINTING TO THE CONSOLE

console.log(name);
console.log(age);
console.log(hasHobbies);

console.log(nameThatCannotChange);

console.log(`My name is ${name} and I am ${age} years old.`);// Output: My name Khennan and I am 20 years old // '$name' this is example of string interpoolation 

// 2. ARRAY DECLARATION

let hobbies = ["Sports", "Cooking", "Online Games"];

// printing the array 
console.log(hobbies);// Output: ["Sports", "Cooking", "Reading"]
// accessing an element in the array
console.log(hobbies[0]); //Output: Online Games

for (let hobby of hobbies) {
    console.log(hobby);
}

// adding an element to the array
hobbies.push("Programming"); 

console.log(hobbies); // Output: ["Sports", "Cooking", "Reading", "Programming"]

// * MAPPING ARRAY
// mapping is used to loop through an array and modify the elements
hobbies = hobbies.map((hobby) => {
    return hobby + " is fun";
});

console.log(hobbies); // Output: ["Sports is fun", "Cooking is fun", "Reading is fun", "Programming is fun"]

// 3. OBJECT DECLRATION 

let person = { //
    name: "Khennan", // this is a property/field
    age: 20, // this is a property/field
    hasHobbies:true, // this is a property/field
    greet(){ // this is method/function of the object
        console.log("Hello, I am " + this.name);
    }
};

//accessing object properties
console.log(person.name); //Output: Khennan
console.log(person.age); // Output: 20
console.log(person.hasHobbies); // Output: true

// 4. FUNCTION DECLARATION

function myFunction(){
    console.log("Hello");
}


// calling the function
myFunction(); // Output: Hello

const myFunction2 = () => {
    // code
    return "Hello"; // RETURN is used to a value from a function. you can return a string, numberm boolean, array object etc
    // return stops the functiomn executing futherr
};

// ! In functon, you can add variables, if statements, loops , arrays, objects etc
// calling function
console.log(myFunction2()); // Output: Hello

// * ADDING PARAMETERS/ARGUMENTS TO FUNCTIONS

function describeStudent(name, age) { 
    console.log("This person is " + name + " is " + age + " years old");
}

describeStudent(name, age);

// * ANOTHER WAY TO WRITE A FUNCTION USING ARROW FUNCTION
const describeStudent2 = (name, age) => {
    return `This person is ${name} and is ${age} yerss old`;
};

console.log(describeStudent2(name, age)); // Output: this person is Max and is 20 years old