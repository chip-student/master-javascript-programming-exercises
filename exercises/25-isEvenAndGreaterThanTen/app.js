// Write your function here
function isEvenAndGreaterThanTen(num){
    if((num % 2 == 0) && (num > 10)){
        return true;
    }else{
        return false;
    }
}

var output = isEvenAndGreaterThanTen(13);
console.log(output);