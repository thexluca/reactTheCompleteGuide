window.onload = function() {

    // Human Class 
    class Human {
        constructor() {
            this.gender = 'female';
        }
        printGender() {
            console.log(this.gender);
        }
    }
    // Person Class 
    class Person extends Human {
        constructor() {
            super(); //run super if you extend a class, else you will get a error. The 'super' keyword runs the parent class constructor. 
            this.name = 'thexluca';
            this.gender = 'male'; // notice printGender() runs from Human class but it extends Person and will read the Person gender value.  
        }
        printMyName() {
            console.log(this.name);
        }
    } 

    // Create Person 
    const person = new Person();
    person.printMyName(); 
    person.printGender();

}