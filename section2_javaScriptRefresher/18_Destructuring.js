window.onload = function() {
    // Destructuring
    // Easily extract array elements or object proprieties and store them in variables.

    // Array destructuring. 
    const numbers = [1, 2, 3 ];
    [num1, ,num3] = numbers; // notice it skips num2 with leavin a blank between commas. 
    console.log(num1, num3);

    // Object
    const person = {
        name : 'thexluca',
        age : 32
    };

}