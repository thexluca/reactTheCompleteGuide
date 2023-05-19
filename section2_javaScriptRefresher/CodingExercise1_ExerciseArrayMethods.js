window.onload = function() {

    function transformToObjects(numberArray) {
        // Todo: Add your logic
        // should return an array of objects
        const objects = numberArray.map( (num)=>({val:num}) );
        return objects;
    }

    const numArray = [1, 2, 3];

    const numObjects = transformToObjects(numArray);
    console.log(numObjects);
}