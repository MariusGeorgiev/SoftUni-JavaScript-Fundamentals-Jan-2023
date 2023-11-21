function evenAndOddSubtraction(arr) {

    let evenSum = 0;
    let oddSum = 0
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenSum += Number(arr[i])
        } else {
            oddSum += Number(arr[i])
        }
    }
    console.log(evenSum - oddSum);
}
evenAndOddSubtraction([1,2,3,4,5,6])
evenAndOddSubtraction([3,5,7,9])
evenAndOddSubtraction([2,4,6,8,10])