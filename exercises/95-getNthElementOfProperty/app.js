// Write your function here
function getNthElementOfProperty(obj, key, pos){
    for (let i=0;i<obj.key.length;i++){
        if (obj.key[i]===obj.key[pos]){
            return obj.key[i];
        }
    }
}

var obj = {
  key: [1, 2, 6]
};
var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2