window.onload = function() {
    /*
        ** Arrow Functions ** 
        Arrow Functions prevent 'this' keyword issues during runtime.
    */

    /* Normal function */
    function myFunction() {
        console.log('this is a normal function');
    }
    myFunction();

    /* Arrow Function */
    const myFunc = () => { 
        console.log('this is an arrow function');
    }
    myFunc();
    
    const printMyName = (name) => {
        console.log(name);
    }
    printMyName('thexluca');

    const multiply = (number) => {
        return number * 2;
    }
    console.log( multiply(2) );
    // The above function can be rewritten like below function. 
    const multiplyRewritten = number => number * 2;
    console.log( multiplyRewritten(2) );

        // * Arrow Functions Scope 
    // Arrow functions do NOT block off the scope of 'this'. 
    const tahoe = {
        mountains: ["Freel", "Rose", "Tallac", "Rubicon", "Silver"],
        print: function(delay = 1000){
            setTimeout(() => {
                console.log(this.mountains.join(", "));
            }, delay);
        } 
    };
    tahoe.print(); // Freel, Rose, Tallac, Rubicon, Silver
    // "print" property uses a function expression(blocking outside scopes). 
    // Therefore 'this' can only point to its object, tahoe. 
    // Inside "print", setTimeout() uses a arrow function(NOT blocking outside scope) allowing outside scope of 'this' to be its parent function scope, referring to the object, tahoe.
    // If setTimeout() was a function expression, all scopes would be blocked, 'this' would just point to window. 

    // ** Return Objects 
    const person = (firstName, lastName) => ({
        first: firstName,
        last: lastName
    });
    console.log(person('Flad', 'Hanson'));
    // note: To return objects, wrap the returned object with parentheses. 

}