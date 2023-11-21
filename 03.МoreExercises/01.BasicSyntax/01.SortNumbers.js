function sortNumbers(one, two, three){

    const numbers = [one, two, three];
    numbers.sort(function(a, b){return b-a});

console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

}
sortNumbers(2,1,3)

