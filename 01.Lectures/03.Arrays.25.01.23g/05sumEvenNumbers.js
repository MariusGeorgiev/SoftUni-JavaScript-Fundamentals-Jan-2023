function sumEvenNumbers(array) {
    
    let evenSum = 0;
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenSum += Number(array[i])
        }
    }
    console.log(evenSum);
}
sumEvenNumbers(['1','2','3','4','5','6'])
sumEvenNumbers(['3','5','7','9'])