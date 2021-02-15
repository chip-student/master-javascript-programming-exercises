function addProperty(obj, key) {
    // your code here
    // obj[key] = true
     obj[key] = "Brandom"
    return obj

}

var myObj = {
    firstName: "Sergio",
    lastName: "Calderon",
    age: 50,
    eyeColor: "blue"
};
addProperty(myObj, 'firstName');
console.log(myObj.firstName);