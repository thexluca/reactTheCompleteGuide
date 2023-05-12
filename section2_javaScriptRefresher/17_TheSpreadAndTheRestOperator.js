window.onload = function() {
    // Spread or Rest Operator (Three dots ... )

    // Spread - Used to split up array elements or object proprieties.

    // Spread operator on array.
    const numbers = [1, 2, 3, 4, 5 ];
    const newNumbers = [...numbers, 6, 7, 8 ]; // the spread operator added the oldArray into the newArray.
    console.log(newNumbers);
    
    // Spread operator on objects.
    const person = {
        name : 'thexluca'
    };
    const newPerson = {
        ...person, // spread operator added the object proprieties to the new object
        age: 32
    }
    console.log(newPerson);

    // Rest - Used to merge a list of function arguments into and array. 
    const names = (...args) => {
        return args[1];
    }
    console.log(names('Andy', 'Ben', 'Cris', 'Dan'));
}