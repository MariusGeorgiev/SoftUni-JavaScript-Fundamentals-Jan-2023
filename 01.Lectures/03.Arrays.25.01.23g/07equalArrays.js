function equalArrays(arr1, arr2) {

    let arr1Sum = 0;
    let arr2Sum = 0;

    for (let i = 0; i <= arr1.length - 1; i++) {

        let arr1CurrentNum = Number(arr1[i]);
        arr1Sum += arr1CurrentNum;

        if (arr1[i] !== arr2[i]) {
            console.log( `Arrays are not identical. Found difference at ${i} index`);
            break;
        }
    }

    for (let i = 0; i <= arr2.length - 1; i++) {

        let arr2CurrentNum = Number(arr2[i]);
        arr2Sum += arr2CurrentNum;
    }

    if (arr1Sum === arr2Sum) {

        console.log(`Arrays are identical. Sum: ${arr1Sum}`);
    } 

}
equalArrays(['10','20','30'], ['10','20','30'])
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5'])
equalArrays(['1'], ['10'])