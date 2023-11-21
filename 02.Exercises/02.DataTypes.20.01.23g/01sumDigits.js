function sumDigits(digits) {

    let lengthDigits = digits.toString().length
    let sum = 0;

    for(let i = 0; i <= lengthDigits - 1; i++) {
        let currentDigit = digits.toString()

        sum += Number(currentDigit[i])
    }
    console.log(sum);
}
sumDigits(245678)