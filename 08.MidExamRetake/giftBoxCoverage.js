function giftBoxCoverage(arr) {

    let sidesArea = Number(arr.shift())
    let sheetsPaper = Number(arr.shift())

    let dimensionBox = sidesArea * sidesArea * 6;

    let count = 0
    let sheetsAllArea = 0

    for(let i = 0; i < sheetsPaper; i++) {

        count++;
        let sideAOfSheet = Number(arr.shift());
        let sideBOfSheet = Number(arr.shift());

        if(count % 3 === 0 && count % 5 !== 0) {
            sheetsAllArea += ((sideAOfSheet * sideBOfSheet * 0.75))

        } 
        if (count % 3 !== 0 && count % 5 !== 0){
            sheetsAllArea += (sideAOfSheet * sideBOfSheet)
        }
    }

    if(sheetsAllArea < dimensionBox) {
        let percentNonCovered = (sheetsAllArea / dimensionBox) * 100
        console.log(`You are out of paper!\n${(100 - percentNonCovered).toFixed(2)}% of the box is not covered.`);
        
     } 
     if (sheetsAllArea >= dimensionBox) {
        let coveredPercent = ((sheetsAllArea - dimensionBox) / sheetsAllArea ) * 100
        console.log(`You've covered the gift box!\n${coveredPercent.toFixed(2)}% wrap paper left.`);
     }
}
giftBoxCoverage([
    "10",
"5",
"3",
"0.5",
"2.4",
"5",
"3.7",
"1",
"3",
"34.7",
"5",
"80"])
console.log("--------------");
giftBoxCoverage(["2",
"2",
"0.2",
"7",
"6",
"8.5"])

