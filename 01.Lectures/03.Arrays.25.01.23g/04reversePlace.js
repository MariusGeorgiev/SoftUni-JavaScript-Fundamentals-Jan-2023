function reversePlace(arr) {

    for(let i = 0; i < arr.length / 2; i++)  {

        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;

        
    }
    
    console.log(arr.join(' '));

}
reversePlace([10,20,30,40]);
reversePlace(['abc', 'def', 'hig', 'klm', 'nop'])