 /* ! Async functionas are a way to work with asynchronous code 
 ina more synchronous way.They are built on top promises and are synatic sugar for promise
 */

const { reject } = require("async");

 console.log("Ordering your pizza...");

 // Creating a promise
 const pizzaPromise = () => {
    return new Promise((resolve, reject) => {
    // resolve and reject are callback functions
    //what is callback function?
    // A callback functions is a function  that is passed as an argument to another function
    //to be "called back" at a later time

    let order = true;
    if (order){
        setTimeout(() => { // Set timeout is used to simulate a delay
            resolve("After 5 seconds, Pizza delivered");
 
        }, 5000);
    } else {
        setTimeout(() => { // setTimeout is used to simulate a delay
               reject("after 5 seconds, Pizza got delivered!");
        }, 5000);
    }
 });
} 


// Calling the function with a promise
// use.them() to handle the resolved promise
// use.catch() to handle the rejected promise
pizzaPromise()
        .then((result) => {
            console.log(result);
        })
        .catch((error) => {
            console.log(error);
        });

        console.log("Waiting for your pizza..");

        //Terminoloy
        // Promise: an object that represents the eventual cpompletion (or failure) of an asynchronous operation and its resulting value.
        // Resolve: A call back function that is used when the promise is fulflled.
        //. Then()L A method thatn us used to handle the resolved promise.
        // .cathc(): A method that us used to handle thge rejected promise.