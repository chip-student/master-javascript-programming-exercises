// Write your function here
function computeAverageOfNumbers(arr) {

    let sum = 0;
    for (var x = 0; x < arr.length; x++) {
        sum += arr[x];
    }

    let promedio = sum / arr.length;
    return promedio;
}

var input = [1, 2, 3, 4, 5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3
