function primeNumberChecker(num) {

    let isPrime = true

    for(let i = 2; i < num; i++) {
        if(num % i === 0) 
        isPrime = false
    }
    if(num === 2) {
        isPrime = false
    }
    return isPrime
}
primeNumberChecker(3)