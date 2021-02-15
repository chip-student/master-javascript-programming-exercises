// Write your function here
function addToFrontOfNew(array, item) {

    // El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
    //Primera solucion
    let newArray = Array.from(array);
    newArray.splice(0,0,item)

    //Segunda Solucion
    // let newArray = [];
    // newArray.push(item)

    // for(var i=0; i<array.length;i++)
    // {
    //     newArray.push(array[i]);
    // }

    return newArray;

}


var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); //--> [1, 2]