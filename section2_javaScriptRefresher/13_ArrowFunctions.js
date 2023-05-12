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

}