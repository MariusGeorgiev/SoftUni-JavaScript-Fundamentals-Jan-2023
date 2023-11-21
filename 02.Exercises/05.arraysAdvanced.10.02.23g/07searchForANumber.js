function searchForANumber (arr1, arr2){

    let howManyElements = arr2.shift();
    let howToDelete = arr2.shift();
    let specialNum = arr2.pop();
    let newArr = arr1.slice(0,howManyElements);
    let deletedNumArr = newArr.slice(howToDelete);
    let counter = 0;
    
    for (let i = 0; i < deletedNumArr.length; i++) {
 
        let currentNum = deletedNumArr[i];
       if (currentNum === specialNum) {
        counter++;
       }
 
    }
    console.log(`Number ${specialNum} occurs ${counter} times.`);
 
}
searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )