window.onload = function() {
    
    // Refreshing Array Methods
    // Mozilla js docs has documentation on all methods.
         
    const numbers = [1, 2, 3 ];
    console.log(numbers);

    // The map() method is called on arrays and goes through 
    // each value of the array and runs the function that is passed. 
    const doubleNumbers = numbers.map((num) => {
        return num * 2;
    });

    console.log(doubleNumbers);


}