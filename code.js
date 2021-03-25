// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

//addOne
function addOne(input){
    if (typeof input !== "number"){
        return NaN;
    } else {
        return input + 1;
    }
}

function sayHello(input) {
    if(typeof input === "number" || input === ""){
        return "Please enter a valid name.";
    } else {
        return (input === undefined || input === true || input === false) ? "Hello, World!" : "Hello, " + input + "!";
    }
}

function isFive(input) {
    return (parseFloat(input) === 5) ? true : Boolean();
}