function charactersInRange(charA, charB){

    let numFromCharA = charA.charCodeAt(0);
    let numFromCharB = charB.charCodeAt(0);

    let startIndex = numFromCharA > numFromCharB ? numFromCharB : numFromCharA;
    let endIndex = numFromCharA > numFromCharB ? numFromCharA : numFromCharB;
    buff = ""

    for (let i = startIndex + 1; i < endIndex; i++) {
        buff += String.fromCharCode(i) + " "
    }

    console.log(buff);
}
charactersInRange('C','#')

//------------------------------

function charactersInRange1(charA, charB){

    let numFromCharA = charA.charCodeAt(0);
    let numFromCharB = charB.charCodeAt(0);

    let startIndex = numFromCharA > numFromCharB ? numFromCharB : numFromCharA;
    let endIndex = numFromCharA > numFromCharB ? numFromCharA : numFromCharB;
    buff = ""

    for (let i = startIndex + 1; i < endIndex; i++) {
        
        buff = concatenationString(buff , convertFromNumberToChar(i))
    }

    console.log(buff);

    function concatenationString(buff, string) {
        buff += string + " ";
        return buff;
    }

    function convertFromNumberToChar(num) {
        return String.fromCharCode(num)
    }

    function convertFromCharToNumber(char) {
        return char.CharCodeAt(0)
    }

    function smallestOfTwoNumbers(a,b) {
        return Math.min(a,b);
    }

    function biggestOfTwoNumbers(a,b) {
        return Math.max(a,b);
    }

}
charactersInRange1('C','#')