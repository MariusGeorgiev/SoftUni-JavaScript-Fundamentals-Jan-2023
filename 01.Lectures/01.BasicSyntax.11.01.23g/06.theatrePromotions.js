function theatrePromotions(day, age) {

    let priceTicket = 0;

    if (age >= 0 && age <= 18) {
        switch (day) {
            case "Weekday": priceTicket = 12; break;
            case "Weekend": priceTicket = 15; break;
            case "Holiday": priceTicket = 5; break;
        }

    } else if (age > 18 && age <= 64) {
        switch (day) {
            case "Weekday": priceTicket = 18; break;
            case "Weekend": priceTicket = 20; break;
            case "Holiday": priceTicket = 12; break;
        }

    } else if (age > 64 && age <= 122) {
        switch (day) {
            case "Weekday": priceTicket = 12; break;
            case "Weekend": priceTicket = 15; break;
            case "Holiday": priceTicket = 10; break;
        }

    }

    if (age >= 0 && age <= 122) {
        console.log(`${priceTicket}$`);
    } else {
        console.log("Error!");
    }
}
theatrePromotions('Weekday', 122)