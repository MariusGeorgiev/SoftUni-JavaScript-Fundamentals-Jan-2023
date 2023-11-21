function smallestTwoNumbers(num) {

    let min = num.sort((a,b) =>{ return a - b}) 
    
    let twoNumbers = []

    for(let i = 0; i < 2; i++) {

        twoNumbers.push(Number(min[i]))
    }
    return twoNumbers.join(' ');

}
console.log(smallestTwoNumbers([30, 15, 50, 5]))