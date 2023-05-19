window.onload = function() {
    
    // ** Primitive Types
    // Numbers, Strings, Booleans are Primitive Types. Whenever you assign the value assign or store the 
    // variable into another variable it will COPY the value.
    // ex. 
     const number = 1;
     const num2 = number; // will copy the value from number into num2

     console.log(num2); // 1

     // ** Reference Types
     // Objects and Arrays are Reference Types.
     // Important: reassigning objects and arrays will copy the pointer NOT the value.  
     const firstPerson = {
        name: "Max"
     }
     const secondPerson = firstPerson; // secondPerson is assigned a pointer to firstPerson values

     firstPerson.name = "Manu"; // Changing the name on firstPerson automatically changes it on secondPerson

     console.log(secondPerson); // Manu 

     // note: To copy objects in a immutable way use the spread operator. 
     const thirdPerson = {
        name: "George"
     }
     const fourthPerson = {...thirdPerson}; // spread operator will assign copy the values of thirdPerson 
     thirdPerson.name = "Washington"; 
     console.log(fourthPerson); // George 


     

}