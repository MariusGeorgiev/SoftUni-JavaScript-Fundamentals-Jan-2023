function thePyramidOfKingDjoser(lengthStart, lengthEnd) {

    let lengthEndEnd = lengthEnd

    if (lengthEnd < 1) {
        lengthEndEnd = 1
    }

    let counterStone = 0;
    let counterMarble = 0;
    let counterLapis = 0;
    let counterGold = 0;

    let counterRows = 0;
    let counterRowsAfter5 = 0;

    let maxRows = 0;

    for (let i = lengthStart; i >= lengthEndEnd; i-=2) {
        maxRows ++;
    }

    for (let i = lengthStart; i >= lengthEndEnd; i-=2) {

        counterRows++;
        counterRowsAfter5++;

        let currentMarble = ((i - 2) * 2) + (i * 2)
        let currentStone = (i - 2) * (i - 2)
        let currentLapis = ((i - 2) * 2) + (i * 2)
        let currentGold = i * i

        if (counterRowsAfter5 === maxRows) {
            counterGold += currentGold
        } 
        if (counterRows >= 5 && counterRowsAfter5 !== maxRows) {
            counterStone += currentStone;
            counterLapis += currentLapis;
            counterRows = 0;
        } else if (counterRows < 5 && counterRowsAfter5 !== maxRows) {
            counterStone += currentStone;
            counterMarble += currentMarble;
        }   
    }
    console.log(`Stone required: ${Math.ceil(counterStone  * lengthEnd)}`);
    console.log(`Marble required: ${Math.ceil(counterMarble * lengthEnd)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(counterLapis * lengthEnd)}`);
    console.log(`Gold required: ${Math.ceil(counterGold * lengthEnd)}`);
    console.log(`Final pyramid height: ${Math.floor(counterRowsAfter5 * lengthEnd)}`);
}
thePyramidOfKingDjoser(23 , 0.5)