function replaceRepeatingChars(string){

    let sort = string[0] + ""
    
    for(let i = 1; i < string.length; i++) {

        let lastChar = string[i - 1]

        if(string[i] !== lastChar) {
            sort += string[i]
        }

    }
    console.log(sort);
}
replaceRepeatingChars('qqqwerqwecccwd')