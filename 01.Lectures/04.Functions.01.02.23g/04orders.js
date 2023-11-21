function orders(type, num) {

    let totalPrice = 0;

    if(type === "coffee") {
        totalPrice = num * 1.50
    } if (type === "water") {
        totalPrice = num * 1.00
    } if (type === "coke") {
        totalPrice = num * 1.40
    } if (type === "snacks") {
        totalPrice = num * 2.00
    }

    console.log(totalPrice.toFixed(2));

}
orders("coffee", 2)