function triplesOfLatinLetters(n) {

    let numN = Number(n)

    for(let i = 0; i < numN; i++) {
        for(let j = 0; j < numN; j++) {
            for(let k = 0; k < numN; k++) {

                let charA = String.fromCharCode(97 + i);
                let charB = String.fromCharCode(97 + j);
                let charC = String.fromCharCode(97 + k);

                console.log(`${charA}${charB}${charC}`);

            }
        }
    }
}
triplesOfLatinLetters("2")