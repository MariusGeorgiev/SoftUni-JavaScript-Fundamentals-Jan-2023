function passwordGenerator(str) {
    let concatenate = Array.from(str[0] + str[1])
    let word = str[2].toUpperCase()
    let count = 0;
    for (let i = 0; i < concatenate.length; i++) {
        if (concatenate[i].includes("a") ||
            concatenate[i].includes("e") ||
            concatenate[i].includes("i") ||
            concatenate[i].includes("o") ||
            concatenate[i].includes("u")) {
            concatenate[i] = word[count]
            count++
            if (count === word.length) {
                count = 0;
            }
        }
    }
    console.log(`Your generated password is ${concatenate.reverse().join("")}`);
}
passwordGenerator([
    'ilovepizza',
    'ihatevegetables',
    'orange'
])