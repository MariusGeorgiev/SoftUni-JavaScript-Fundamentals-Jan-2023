function rotateArray(arr) {

let numRotate  = Number(arr[arr.length - 1])
let newArr = arr.slice(0, arr.length - 1)

for(let i = 0; i < numRotate; i++) {
newArr.unshift(newArr[newArr.length - 1])
newArr.splice(newArr.length - 1,1)
}

console.log(newArr.join(" "));

}
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])
