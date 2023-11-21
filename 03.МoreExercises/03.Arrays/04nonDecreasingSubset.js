function nonDecreasingSubset(arr) {

    let newArr = []

    for(let i = 0; i < arr.length; i++) {
        if(newArr.length < 1 || newArr[newArr.length -1]  < arr[i] || newArr[newArr.length -1] === arr[i]) {
            newArr.push(arr[i])
        }    
    }

    console.log(newArr.join(" "));

}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24])
nonDecreasingSubset([20, 3, 2, 15,20, 6, 1])