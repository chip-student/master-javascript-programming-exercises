// Write your function here

function removeElement(arr, num){
    let newArray = [];

    for(let i=0;i<arr.length;i++){
        if (arr[i] != num){
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

var output = removeElement([1, 2, 3, 2, 1], 2); console.log(output); // --> [1, 3, 1]