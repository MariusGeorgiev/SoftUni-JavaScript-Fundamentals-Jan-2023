function storeProvision(store, orderStore) {

    let myStore = {}

    for (let i = 0; i < store.length; i+=2) {
        let name = store[i];
        let quantity = store[i + 1];
        myStore[name] = Number(quantity);
    }

    for (let i = 0; i < orderStore.length; i+=2) {
        let name = orderStore[i];
        let quantity = Number(orderStore[i + 1])
        
        
        if (myStore.hasOwnProperty(name)) {
            myStore[name] += quantity;
        } else {
            myStore[name] = quantity;
        }

    }

    for(let product of Object.keys(myStore)) {
        console.log(`${product} -> ${myStore[product]}`);
    }

}
storeProvision
(
    ['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']
)