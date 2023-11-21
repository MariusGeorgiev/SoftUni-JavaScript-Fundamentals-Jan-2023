function coffeeLover(input) {

    let coffeeType = input.shift().split(" ");
    let countCommands = input.shift();

    for(let i = 0; i < countCommands; i++) {
        let command = input.shift().split(" ");

        switch(command[0]) {

            case "Include": coffeeType.push(command[1]); break;

            case "Remove":
                let numForRemove = Number(command[2])

            if (command[1] === 'first') {
                for(let i = 1; i <= numForRemove; i++) {
                    coffeeType.shift()
                }
            } else if (command[1] === "last") {
                for(let i = 1; i <= numForRemove; i++) {
                    coffeeType.pop()
                }
            }
                break;

            case "Prefer":

                let first = coffeeType[command[1]];
                let second = coffeeType[command[2]];

            if(command[1] <= coffeeType.length && command[2] <= coffeeType.length) {

                coffeeType.splice(command[1], 1, second);
                coffeeType.splice(command[2], 1, first);
            }
            break;
            
            case "Reverse": coffeeType.reverse((a,b) => b - a); break;
        }
    }
    console.log(`Coffees: ${coffeeType.join(' ')}`);
}
coffeeLover(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
 "5",
  "Include TurkishCoffee",
   "Remove first 2",
    "Remove last 1",
     "Prefer 3 1",
      "Reverse"])

console.log("-----------------");

coffeeLover(["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
"5",
"Include OrdinaryCoffee",
"Remove first 1",
"Prefer 0 1",
"Prefer 3 1",
"Reverse"])

console.log("--------------------");
coffeeLover(["Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica",
 "3",
  "Include OrdinaryCoffee",
   "Remove first 1",
    "Prefer 4 1"])
