function rightPlace(string, charat, result) {

    let res = string.replace("_", charat);
    let output = res === result? "Matched": "Not Matched";

    console.log(output);
}
rightPlace('Str_ng', 'I', 'Strong')
rightPlace('Str_ng', 'i', 'String')