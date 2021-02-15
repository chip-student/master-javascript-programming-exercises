// Write your function here

function getOddLengthWordsAtProperty(obj, key){
    let newArray = [];
    let arr = obj[key];
    for (let i=0;i<arr.length;i++){
        if (arr[i].length % 2 != 0){
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']