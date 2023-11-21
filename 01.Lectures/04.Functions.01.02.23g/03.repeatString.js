function repeatString(string, timesRepeat) {

    let repeatetString = ""
    for (let i = 0; i < timesRepeat; i++) {
        repeatetString += string
    }
    console.log(repeatetString);

}
repeatString("abc", 3)