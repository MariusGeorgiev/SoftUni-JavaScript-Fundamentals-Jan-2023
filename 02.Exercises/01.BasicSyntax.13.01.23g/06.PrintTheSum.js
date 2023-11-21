function printAndSum(start, end) {

    let sum = 0;
    let numbers = "";

    for (let i = start; i <= end; i ++) {
        sum += i;
        numbers += i + " "

    }

    console.log(numbers.trim());
    console.log(`Sum: ${sum}`);
}

printAndSum(5,10)

//.trim() - maha speisovete na string otzad i otpred