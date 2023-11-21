function printNthElement(arr) {

let stepN = Number(arr[arr.length - 1])
let buff = []

for(let i  = 0; i < arr.length - 1 ; i += stepN) {
    buff.push(arr[i])
}

console.log(buff.join(" "));

}
printNthElement(['5', '20', '31', '4', '20', '2'])
printNthElement(['1', '2', '3', '4', '5', '6'])
printNthElement(['dsa', 'asd', 'test', 'test', '2'])