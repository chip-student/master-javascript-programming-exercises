// Write your function here
function getElementsLessThan100AtProperty(obj, key) {
    let arr = [];
    let array = obj[key];
    //  Primer se valida que la propiedad exista
    if (obj.hasOwnProperty(key)) {

        // Si existe, se obtiene su valor
        if (Object.prototype.toString.call(array) === '[object Array]') {
            //  La propiedad es un array
            // Se valida que tenga elementos
            if (array.length > 0) {
                for (let x = 0; x < array.length; x++) {

                    // si el array existe y no esta vacio
                    if (array[x] < 100) {
                        arr.push(array[x]);
                    }
                }
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