window.onload = function() {
    // Destructuring
    // Easily extract array elements or object proprieties and store them in variables.

    // Array destructuring. 
    const numbers = [1, 2, 3 ];
    [num1, ,num3] = numbers; // notice it skips num2 with leavin a blank between commas. 
    console.log(num1, num3);

    // Object Destructuring
    const person = {
        name : 'thexluca',
        age : 32,
        gender : 'male'
    };
    // obj destructuing example 1 
    const {name, gender} = person;
    console.log(gender);
    // obj destructuring example 2 
    ({name: value1, age: value2} = person); // The parentheses ( ... ) around the assignment statement are required when using object literal destructuring assignment without a declaration.
    console.log(value2);
}