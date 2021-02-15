// Write your function here

function getElementsThatEqual10AtProperty(obj, key) {
    let arr = [];

    let array = obj[key];
    // Si el array está vacío, debería retornar un array vacío.
    // Si el array no contiene ningún elemento igual a 10, debería retornar una array vacío.
    // Si la propiedad en esa key dada no es un array, debería retornar una array vacío.
    // Si no hay ninguna propiedad en dicha key, debería retornar una array vacío.

    for (let x = 0; x < array.length; x++) {
        if (Array.isArray(array) && array.length) {
            // si el array existe y no esta vacio

            if (array[x] === 10) {
                arr.push(array[x]);
            }
        }
        else{
            return arr;
        }
    }
    return arr;
}

var obj = {
    key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]