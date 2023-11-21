function requiredReading(pagesNumBook, pageReadsPerHour, numDaysToReadTheBook) {

    let totalTimeForReadTheBook = pagesNumBook / pageReadsPerHour;
    let requireHoursPerDay = totalTimeForReadTheBook / numDaysToReadTheBook;

    console.log(requireHoursPerDay);
}
requiredReading(212,20,2)