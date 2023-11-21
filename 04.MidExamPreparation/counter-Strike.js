function counterStrike(input) {

    let health = Number(input.shift())
    let countWon = 0;

    for(let i = 0; i < input.length; i++) {
        if(input[i] === "End of battle") {
            console.log(`Won battles: ${countWon}. Energy left: ${health}`);
            return;  
        }
        if(health - input[i] < 0) {
            console.log(`Not enough energy! Game ends with ${countWon} won battles and ${health} energy`);
            return;
        } 
        countWon++;
        health = health - Number(input[i])
        if(countWon % 3 === 0) {
            health = health + countWon
        }    
    }
}
counterStrike([
    "100",
"10",
"10",
"10",
"1",
"2",
"3",
"73",
"10"])
console.log("------------");
counterStrike(["200",
"54",
"14",
"28",
"13",
"End of battle"])

