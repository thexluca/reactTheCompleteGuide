window.onload = function() {
    // Proprieties are variables attached to Classes and Objects.
    // Methods are functions attached to Classes and Objects.

    // Rewritten 15_UnderstandingClasses.js example Classes from ES6 syntax to ES7 syntax

    // Human Class 
    class Human {
        gender = 'female';
        printGender = () => {
            console.log(this.gender);
        }
    }
    // Person Class 
    class Person extends Human {        
        name = 'thexluca';
        gender = 'male'; // notice printGender() runs from Human class but it extends Person and will read the Person gender value.  
        printMyName = () => {
            console.log(this.name);
        }
    } 

    // Create Person 
    const person = new Person();
    person.printMyName(); 
    person.printGender();
}