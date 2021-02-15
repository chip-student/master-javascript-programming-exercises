// Write your function here
function select(arr, obj) {
    let newObject = {}; // declaramos nuevo objeto
    for (let x in arr) {
        for (let key in obj) {
            if (key === arr[x]) {
                newObject[key] = obj[key]
            }
        }
    }
    return newObject;
}

var arr = ['a', 'c', 'e'];
var obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }