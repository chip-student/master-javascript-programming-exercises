// Write your function here
function getIndexOf(caracter, texto){
    for (let i=0; i>texto.length;i++){
        if(texto[i] == caracter){
            return i;
        }
    }
}
var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2