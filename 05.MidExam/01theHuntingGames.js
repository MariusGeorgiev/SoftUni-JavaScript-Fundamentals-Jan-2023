function theHuntingGames(arr) {

    let days = Number(arr.shift());
    let players = Number(arr.shift());
    let groupEnergy = Number(arr.shift());
    let waterPerDay = Number(arr.shift());
    let foodPerDay = Number(arr.shift());

    let totalWater = days * players * waterPerDay;
    let totalFood = days * players * foodPerDay;

   for(let i = 1; i <= days; i++) {

    let lostEnergy = Number(arr[i-1])

    groupEnergy -= lostEnergy

     if (i % 2 === 0) {
        groupEnergy += groupEnergy * 0.05;
        totalWater -= totalWater * 0.30;
     } 
     if (i % 3 === 0) {
        totalFood -= totalFood / players;
        groupEnergy += groupEnergy * 0.10;
     } 

   }

   if(groupEnergy <= 0) {

    console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
     } else {
    console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
     }


}
theHuntingGames([
"10",
"7",
"5035.5",
"11.3",
"7.2",
"942.3",
"500.57",
"520.68",
"540.87",
"505.99",
"630.3",
"784.20",
"321.21",
"456.8",
"330"
])
console.log('___________');
theHuntingGames([
"12",
"6",
"4430",
"9.8",
"5.5",
"620.3",
"840.2",
"960.1",
"220",
"340",
"674",
"365",
"345.5",
"212",
"412.12",
"258",
"496"
])
