function commonElements(firstArr, secondArr) {

    for (let i = 0; i < firstArr.length; i++) {
        let firstWord = firstArr[i];
        for (let j = 0; j < secondArr.length; j++) {
            let secondWord = secondArr[j];
            if (firstWord === secondWord) {
                console.log(firstWord);
            }
        }
    }
} 
function commonElements2(firstArr, secondArr) {
    for (let i = 0; i < firstArr.length; i++) {
        let currentWord = firstArr[i];
        if (secondArr.includes(currentWord)) {
            console.log(currentWord);
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)

commonElements2(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)