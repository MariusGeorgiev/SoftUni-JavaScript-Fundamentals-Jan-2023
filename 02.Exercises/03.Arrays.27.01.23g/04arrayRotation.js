function arrayRotation(arr, rotationCount) {

    let buffArr = [];

    for (let i = 0; i < rotationCount; i++) {
        let currentElement = arr[0];
        for (let j = 1; j < arr.length; j++) {

            buffArr.push(arr[j])
        }
        buffArr.push(currentElement);
        arr = buffArr;
        buffArr = [];
    }
    console.log(arr.join(" "));
}
arrayRotation([51,47,32,61,21], 2);
arrayRotation([32,21,61,1], 4);
arrayRotation([2,4,15,31], 5)