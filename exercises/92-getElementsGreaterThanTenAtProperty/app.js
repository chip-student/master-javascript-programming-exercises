// Write your function here
function getElementsGreaterThan10AtProperty(obj, key) {
    let arr = [];

    let array = obj[key];

    for (let x = 0; x < array.length; x++) {
        if (Array.isArray(array) && array.length) {
            // si el array existe y no esta vacio
            if (array[x] > 10) {
                arr.push(array[x]);
            }
        }
        else {
            return arr;
        }
    }
    return arr;
}


var obj = {
    key: [1, 20, 30]
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]