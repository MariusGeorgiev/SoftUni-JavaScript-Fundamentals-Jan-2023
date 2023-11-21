function oddAndEvenSum(num) {

    let toString = num.toString().split("")

    let oddSum = 0;
    let evenSum = 0;

    for(let el of toString) {
        if(el % 2 === 0) {
            evenSum += Number(el);
        } else {
        oddSum += Number(el);
        }
    }
    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`
    
}
console.log(oddAndEvenSum(1000435))