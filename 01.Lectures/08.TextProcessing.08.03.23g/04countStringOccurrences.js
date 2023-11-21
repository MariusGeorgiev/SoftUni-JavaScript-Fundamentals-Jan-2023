function countStringOccurrences(text, word) {

    let tokens = text.split(" ");
    let count = 0
    for(const token of tokens) {
        if(token === word) {
            count++
        }

    }
    return count
}
console.log(countStringOccurrences('This is a word and it also is a sentence',
'is'))