// Write your function here
function countAllCharacters(word) {
    let array = Array.from(word);
    var repetidos = {};

    array.forEach(function (numero) {
        repetidos[numero] = (repetidos[numero] || 0) + 1;
    });

    return repetidos;
}


var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}