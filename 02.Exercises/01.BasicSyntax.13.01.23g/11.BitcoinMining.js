function bitcoinMining(input) {
    let index = 0;
    let gold = input[index];
    
    let goldPricePerGram = 67.51;
    let oneBitcoinPrice = 11949.16;

    let boughtBitcoins = 0;
    let numFinalBitcoins = 0;
    let goldInMoneyLeft = 0;

    let dayOfTheFirstBitcoins = 0;
    let dayOfFirstBitStr = ""
   
    for (let i = 1; i <= input.length; i++){

        gold = input[index]
        index++;
        let goldLeftGrams = 0;

        if (i % 3 === 0) {
            goldLeftGrams += gold * 0.70
        } else {
            goldLeftGrams += gold
        }
        let currentGoldInMoney = goldLeftGrams * goldPricePerGram;
        goldInMoneyLeft += currentGoldInMoney

        if (oneBitcoinPrice <= goldInMoneyLeft) {
            boughtBitcoins = Math.floor(goldInMoneyLeft / oneBitcoinPrice)
           goldInMoneyLeft -= (boughtBitcoins * oneBitcoinPrice)
           numFinalBitcoins += boughtBitcoins

         dayOfTheFirstBitcoins = i
         dayOfFirstBitStr += i + " "
        } 
    }
    if (dayOfTheFirstBitcoins > 0) {
    console.log(`Bought bitcoins: ${numFinalBitcoins}`);
    console.log(`Day of the first purchased bitcoin: ${Number(dayOfFirstBitStr[0])}`);
    console.log(`Left money: ${goldInMoneyLeft.toFixed(2)} lv.`);
    } else if (dayOfTheFirstBitcoins < 1) {
    console.log(`Bought bitcoins: ${numFinalBitcoins}`);
    console.log(`Left money: ${goldInMoneyLeft.toFixed(2)} lv.`);
    } 
}
bitcoinMining([100, 200, 300])
console.log(`--------------`);
bitcoinMining([50, 100])
console.log(`--------------`);
bitcoinMining([3124.15, 504.212, 2511.124])