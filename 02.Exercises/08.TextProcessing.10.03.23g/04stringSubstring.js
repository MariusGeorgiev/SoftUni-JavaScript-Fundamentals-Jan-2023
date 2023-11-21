function stringSubstring(word, text){

    let arrFromText = text.toLowerCase().split(" ")

    let searchWord = arrFromText.includes(word)

    if(searchWord) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }

}
stringSubstring(
    'javascript',
'JavaScript is the best programming language'

)