function firstAndLastKNumbers(num) {

    let numK = num.shift();

    let arr1 = ""
    let arr2 = ""
    for(let i = 0; i < numK; i++) {

        arr1 += num[i] + " "
        arr2 = num.slice(-numK).toString().split(",").join(" ")
    }

    console.log(arr1);
    console.log(arr2);
}
firstAndLastKNumbers([2, 
    7, 8, 9])

    console.log(`---------`);

    firstAndLastKNumbers([3,
        6, 7, 8, 9]
       )