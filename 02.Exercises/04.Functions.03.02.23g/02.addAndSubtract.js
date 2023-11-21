function addAndSubtract(a, b ,c) {
    let sumFirstTwoNum = a + b;
    let subtractSecondTwoNumbers = sumFirstTwoNum - c;
    return subtractSecondTwoNumbers;
}
 console.log(addAndSubtract(23,6,10))

 //----------------------------------

 function addAndSubtract(a, b ,c) {
    
    let sum = sumTwoNumbers(a,b);
    let subtract = subtractTwoNumbers(sum, c);
    
    function sumTwoNumbers(a,b) {
    return a + b;  
    }
    function subtractTwoNumbers(a,b) {
    return a - b;
    }

    return subtract
}
console.log(addAndSubtract(23,6,10))

//------------------------------------------

function addAndSubtract(a, b, c) {
    return a + b - c;
}
console.log(addAndSubtract(23,6,10))
