window.onload = function() {
    // Destructuring
    // Easily extract array elements or object proprieties and store them in variables.

    // ** Array destructuring. 
    const numbers = [1, 2, 3 ];
    [num1, ,num3] = numbers; // notice it skips num2 with leavin a blank between commas. 
    console.log(num1, num3);

    // .. more destructuing arrays
    const animals = ['horse', 'mouse', 'cat'];
    const [firstAnimal] = animals;
    console.log(firstAnimal); // horse
    const [, , thirdAnimal] = animals;
    console.log(thirdAnimal); // cat

    // ** Object Destructuring
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

    // .. more destructuring objects 
    const sandwich = {
        bread: "dutch crunch",
        meat: "tuna",
        cheese: "swiss",
        topping: ['lettuce', 'tomatoes', 'mustard']
    };

    let { bread, meat } = sandwich;
    console.log(`${bread} and ${meat}`); // dutch crunch and tuna 

    // * Destructuring object passed in function arguments. 
    // Instead of using dot notation syntax to dig into objects, we can 
    // destructure the value we need out of an object. 
    // ex.
    const lordify = ( {firstname} ) => {
        console.log(`${firstname} of Canterbury`);
    };
    const regularPerson = {
        firstname: 'Bill',
        lastname: 'Wilson'
    };
    lordify(regularPerson); // Bill of Canterbury

    // Further, destructuring object with a nested object 
    // ex.
    const lordifySpouse = ( {spouse: {firstname}} ) => {
        console.log(`${firstname} of Canterbury`);
    };
    const regularPersonSpouse = {
        firstname: 'Bill',
        lastname: 'Wilson',
        spouse: {
            firstname: 'Andrea',
            lastname: 'Wilson'
        }
    };
    lordifySpouse(regularPersonSpouse); // Andrea of Canterbury

}