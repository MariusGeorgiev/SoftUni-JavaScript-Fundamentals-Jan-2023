function sumOfOddNumbers(num) {

let sumOdd = 0;
let counter = 0;


for (let i = 1; i <= 100; i++) {

    if (i % 2 !== 0) {

        sumOdd += i
        counter++

        console.log(i);
    }

    if (counter >= num) {
        break;
    }
}
console.log(`Sum: ${sumOdd}`);


}

sumOfOddNumbers(5)