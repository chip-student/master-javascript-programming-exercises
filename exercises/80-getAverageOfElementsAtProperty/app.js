// Write your function here

function getAverageOfElementsAtProperty(obj, key) {

    //  if ((obj[key].isArray) || (obj[key].length === 0))
     if (obj[key].length === 0)
    {
        return 0;
    }

    let sum = 0;
    for (var x = 0; x < obj[key].length; x++) {

        sum += obj.key[x]

    }

    let promedio = sum / obj[key].length;
    return promedio;
}

var obj = {
    key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output);
