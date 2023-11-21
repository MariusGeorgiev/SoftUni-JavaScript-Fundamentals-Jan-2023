function condenseArrayToNumber(arr) {

    let currentArr = arr;

    while (currentArr.length > 1) {

    let newArr = [];

    for (let i = 0; i < currentArr.length - 1; i++) {
        let firstElement = currentArr[i];
        let secondElement = currentArr[i + 1];


        newArr.push(firstElement + secondElement);
        
    }
    currentArr = newArr

}

    console.log(currentArr[0]);

}
condenseArrayToNumber([2,10,3])
condenseArrayToNumber([5,0,4,1,2])
condenseArrayToNumber([1])