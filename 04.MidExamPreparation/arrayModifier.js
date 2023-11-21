function arrayModifier(arr) {

    let arrayWithIntegers = arr.shift().split(" ").map(Number);
    
    for(let i = 0; i < arr.length; i++) {

        let command = arr[i].split(" ")
        let firstIndex = Number(command[1])
        let secondIndex = Number(command[2])

        switch (command[0]) {

            case "swap":
                let firstEl = arrayWithIntegers[secondIndex]
                let secondEl = arrayWithIntegers[firstIndex]

                arrayWithIntegers[firstIndex] = firstEl
                arrayWithIntegers[secondIndex] = secondEl
            break;

            case "multiply":
                let multiplyedNum = arrayWithIntegers[firstIndex] * arrayWithIntegers[secondIndex]
                arrayWithIntegers[firstIndex] = multiplyedNum
            break;

            case "decrease":
                for(let x = 0; x < arrayWithIntegers.length; x++) {
                    arrayWithIntegers[x] = arrayWithIntegers[x] - 1
                }
            break;
            case "end":
                console.log(arrayWithIntegers.join(", "));
            break;
        }
    }
}
arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ])
  