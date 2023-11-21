function maxNumber(arr) {

    buffLastIndex = arr[arr.length - 1]

    let newArr = []

    for (let i = 0; i < arr.length; i++) {

        let sort = arr.sort((a, b) => b - a)

        let currentAr = sort[i]

        if (sort[i] >= buffLastIndex && sort[i] !== sort[i + 1] && sort[i] > Number.MIN_SAFE_INTEGER) {
            newArr.push(currentAr)
        }
    }
    console.log(newArr.join(" ")); 
    //console.log(Number.MIN_SAFE_INTEGER);
}
maxNumber([1, 4, 3, 2])
maxNumber([14, 24, 3, 19, 15, 17])
maxNumber([41, 41, 34, 20])
maxNumber([27, 19, 42, 2, 13, 45, 48])
maxNumber([20, 40, -242, 2, 7, 0, 12])
maxNumber([-20, -40, -242, -2, -7, 0, -12])

