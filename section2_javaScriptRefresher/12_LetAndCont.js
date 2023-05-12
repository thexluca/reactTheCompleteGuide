window.onload = function() {
    /* 
        ** Let and Const **
        var still works but ES6 brought let and const. 
        let - variable values/ the new var/ use let to create a variable that is a variable. 
        const - constant values/ use const to create a  variable that has a constant value/ will never change.  
         
    */

    let myName1 = 'thexluca';
    myName1 = 'My name is thexluca';
    console.log(myName1);

     const myName2 = 'thexluca';
     myName2 = "This value change will never work on a const variable"
     console.log(myName2);


    
}