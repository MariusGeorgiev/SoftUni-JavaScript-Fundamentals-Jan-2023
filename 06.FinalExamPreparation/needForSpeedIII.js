function needForSpeedIII(data) {

    let numCarObtain = data.shift()[0]

    let carObtainedObj = {}
    
    for(let i = 0; i < numCarObtain; i++) {
        let currentCar = data[i].split("|")

        carObtainedObj[currentCar[0]] = {
            ["distance"]: Number(currentCar[1]),
            ["fuel"]: Number(currentCar[2])}
    }

    for(let i = numCarObtain; i < data.length; i++) {

        let currentCommand = data[i].split(" : ")

        let car = currentCommand[1]

        switch(currentCommand[0]) {
            case "Drive":
                let distance = Number(currentCommand[2])
                let fuel = Number(currentCommand[3])
                if(carObtainedObj[car]["fuel"] >= fuel) {

                    carObtainedObj[car]["distance"] = carObtainedObj[car]["distance"] + distance;
                    carObtainedObj[car]["fuel"] = carObtainedObj[car]["fuel"] - fuel;

                    console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                } else if (fuel > carObtainedObj[car]["fuel"]) {
                    console.log(`Not enough fuel to make that ride`);
                }
                if(carObtainedObj[car]["distance"] > 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete carObtainedObj[car]
                }
            break;
            case "Refuel":
                let fuelRef = Number(currentCommand[2]);

                if(fuelRef + carObtainedObj[car]["fuel"] > 75) {
                    let refillFuel = 75 - carObtainedObj[car]["fuel"]
                    carObtainedObj[car]["fuel"] = 75
                    console.log(`${car} refueled with ${refillFuel} liters`);
                } else {
                    carObtainedObj[car]["fuel"] = carObtainedObj[car]["fuel"] + fuelRef;
                    console.log(`${car} refueled with ${fuelRef} liters`);
                }
            break;
            case "Revert":
                let distanceDecreased = Number(currentCommand[2]);
                
                if(carObtainedObj[car]["distance"] - distanceDecreased < 10000) {
                    carObtainedObj[car]["distance"] = 10000
                } else if (carObtainedObj[car]["distance"] - distanceDecreased > 10000) {
                    carObtainedObj[car]["distance"] = carObtainedObj[car]["distance"] - distanceDecreased
                    console.log(`${car} mileage decreased by ${distanceDecreased} kilometers`);
                }
            break;
            case "Stop":
                for(key in carObtainedObj) {
                    console.log(`${key} -> Mileage: ${carObtainedObj[key]["distance"]} kms, Fuel in the tank: ${carObtainedObj[key]["fuel"]} lt.`);
                }
            break;
        }
    }
}
needForSpeedIII([
        '3',
        'Audi A6|38000|62',
        'Mercedes CLS|11000|35',
        'Volkswagen Passat CC|45678|5',
        'Drive : Audi A6 : 543 : 47',
        'Drive : Mercedes CLS : 94 : 11',
        'Drive : Volkswagen Passat CC : 69 : 8',
        'Refuel : Audi A6 : 50',
        'Revert : Mercedes CLS : 500',
        'Revert : Audi A6 : 30000',
        'Stop'
      ])
console.log("-----------------");
needForSpeedIII([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ])