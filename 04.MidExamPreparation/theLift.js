function theLift(data) {

    let waitingPeople = Number(data[0])
    let currentStateOnLift = data[1].split(" ")
    let count = 0

    for(let i = 0; i < currentStateOnLift.length; i++) {
        count++

        currentStateOnLift[i] = Number(currentStateOnLift[i])
       
        if(currentStateOnLift[i] >= 0 && currentStateOnLift[i] <= 4) {

            if(waitingPeople >= 4) {
            waitingPeople -= 4;
            currentStateOnLift[i] += 4
            } else {
                currentStateOnLift[i] += waitingPeople
                waitingPeople -= waitingPeople
            }

            let numberOnLiftBiggerThenFour = 0;

            if(currentStateOnLift[i] > 4) {
                numberOnLiftBiggerThenFour = currentStateOnLift[i] - 4
                waitingPeople += numberOnLiftBiggerThenFour
                currentStateOnLift[i] = 4
            }
            numberOnLiftBiggerThenFour = 0;
        }

        if(waitingPeople === 0 && currentStateOnLift[i] < 4) {
            console.log(`The lift has empty spots!\n${currentStateOnLift.join(" ")}`);
            break;
        }
        if(waitingPeople === 0 && currentStateOnLift[i] === 4 && currentStateOnLift.length === currentStateOnLift[i] + 1) {
            console.log(`${currentStateOnLift.join(" ")}`);
            break;
        }

       
        // if(waitingPeople === 0) {
        //     break;
        // }
        
    }

    if(waitingPeople > 0 && currentStateOnLift.length === count) {
        console.log(`There isn't enough space! ${waitingPeople} people in a queue!\n${currentStateOnLift.join(" ")}`);
    }  

}
theLift([
    "20",
    "0 0 0 0 0"
])
console.log("---------");
theLift([
    "20",
    "0 2 0"
])