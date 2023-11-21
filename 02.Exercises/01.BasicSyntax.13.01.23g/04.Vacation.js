function vacation(group, type, day) {

    let totalPrice = 0;

    switch(day) {
        case "Friday":
            switch(type) {
                case "Students":
                    totalPrice = group * 8.45;
                    if (group >= 30) {
                        totalPrice *= 0.85
                    }
                break;
                case "Business":
                    totalPrice = group * 10.90;
                    if (group >= 100) {
                        totalPrice -= 10 * 10.90
                    }
                break;
                case "Regular":
                    totalPrice = group * 15;
                    if (group >= 10 && group <= 20) {
                        totalPrice *= 0.95
                    }
                break;
            }
        break;
        case "Saturday":
            switch(type) {
                case "Students":
                    totalPrice = group * 9.80;
                    if (group >= 30) {
                        totalPrice *= 0.85
                    }
                break;
                case "Business":
                    totalPrice = group * 15.60;
                    if (group >= 100) {
                        totalPrice -= 10 * 15.60
                    }
                break;
                case "Regular":
                    totalPrice = group * 20;
                    if (group >= 10 && group <= 20) {
                        totalPrice *= 0.95
                    }
                break;
            }
        break;
        case "Sunday":
            switch(type) {
                case "Students":
                    totalPrice = group * 10.46;
                    if (group >= 30) {
                        totalPrice *= 0.85
                    }
                break;
                case "Business":
                    totalPrice = group * 16;
                    if (group >= 100) {
                        totalPrice -= 10 * 16
                    }
                break;
                case "Regular":
                    totalPrice = group * 22.50;
                    if (group >= 10 && group <= 20) {
                        totalPrice *= 0.95
                    }
                break;
            }
        break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
vacation(40,"Regular","Saturday")