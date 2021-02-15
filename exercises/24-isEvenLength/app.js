// Write your function here
function isEvenLength(word) {
    let num = word.length;
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
var output = isEvenLength('wow');
console.log(output);