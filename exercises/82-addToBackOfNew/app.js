// Write your function here

function addToBackOfNew(array, item) {

    //El método Array.from() crea una nueva instancia de Array a partir de un objeto iterable
    //Primera forma de hacer el ejercicio
     let newArray = Array.from(array);
     newArray.push(item)

    //Segunda forma de hacer el ejercicio
    /*let newArray = [];

    for(var i=0; i<array.length;i++)
    {
        newArray.push(array[i]);
    }
    newArray.push(item);*/

    return newArray;
}
var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]