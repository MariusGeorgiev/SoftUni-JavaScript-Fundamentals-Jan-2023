function englishNameOfTheLastDigit(input) {

    let digitsAll = input.toString();

    let digitsMax = ((input.toString().length) - 1);

    let lastDigit = Number(digitsAll[digitsMax]);

    let numberToName = "";

    switch (lastDigit) {
        case 0: numberToName = "zero"; break;
        case 1: numberToName = "one"; break;
        case 2: numberToName = "two"; break;
        case 3: numberToName = "three"; break;
        case 4: numberToName = "four"; break;
        case 5: numberToName = "five"; break;
        case 6: numberToName = "six"; break;
        case 7: numberToName = "seven"; break;
        case 8: numberToName = "eight"; break;
        case 9: numberToName = "nine"; break;
    }
   console.log(numberToName);
}
englishNameOfTheLastDigit([512]);