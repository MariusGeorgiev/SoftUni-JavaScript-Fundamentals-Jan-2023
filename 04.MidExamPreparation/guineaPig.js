function guineaPig(input) {

    let foodKg = Number(input.shift()) * 1000;
    let hayKg = Number(input.shift())* 1000;
    let coverKg = Number(input.shift())* 1000;
    let weightKg = Number(input.shift())* 1000;
    
    let hasToGoToStore = false;

    for(let i = 1; i <= 30; i++) {

        foodKg = foodKg - 300;

        if(i % 2 === 0) {
            hayKg -= foodKg * 0.05;

        }

        if(i % 3 === 0) {
            coverKg -= weightKg / 3
        }

        if(foodKg <= 0 || hayKg <= 0 || coverKg <= 0) {
            hasToGoToStore = true
            break;
        }
    }
    return hasToGoToStore 
    ? `Merry must go to the pet store!` 
    : `Everything is fine! Puppy is happy! Food: ${(foodKg / 1000).toFixed(2)}, Hay: ${(hayKg / 1000).toFixed(2)}, Cover: ${(coverKg / 1000).toFixed(2)}.` 

}
console.log(guineaPig([10, 5, 5.2, 1]))
console.log(guineaPig(["9","5", "5.2", "1"]))
