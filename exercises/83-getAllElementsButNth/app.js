// Write your function here
function getAllElementsButNth(array, posicion) {

    //se elimina posision 'b'
    let myNewArray = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] == array[posicion])
        {
            array.slice(posicion, i);
        }
        else{
            myNewArray.push(array[i]);
        }
    }
    return myNewArray;
}

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']