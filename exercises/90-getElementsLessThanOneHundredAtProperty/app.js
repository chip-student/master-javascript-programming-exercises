// Write your function here
function getElementsLessThan100AtProperty(obj, key) {
    let arr = [];

    //
    let array = obj[key];
    for (let x = 0; x < array.length; x++) {
        if (Array.isArray(array) && array.length) {
            // si el array existe y no esta vacio

            if (array[x] < 100) {
                arr.push(array[x]);
            }
        }
    }
    return arr;
}

var obj = {
    key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]