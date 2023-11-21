function piccolo(data) {
    let parking = new Map();

    for(let carData of data) {
        let [direction, carNumber] = carData.split(", ");
        if(direction === "IN") {
            parking.set(carNumber, "");
        } else {
            parking.delete(carNumber);
        }
    }

    let sort = Array.from(parking).sort((a,b) => a[0].localeCompare(b[0]));

    if (parking.size === 0) {
        console.log("Parking loy is Empty");

    } else {
    for(let carNumber of sort) {
        console.log(carNumber[0]);

    }
}

}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)