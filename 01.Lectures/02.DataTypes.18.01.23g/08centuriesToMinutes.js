function centuriesToMinutes(numCenturies) {

    let years = numCenturies * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = days * 24;
    let minutes = hours * 60;

    console.log(`${numCenturies} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes `);

}
centuriesToMinutes(1)