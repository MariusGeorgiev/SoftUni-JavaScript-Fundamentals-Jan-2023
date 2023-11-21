function magicCards(input) {

    let deck = input.shift().split(":")
    let newDeck = []

    for(let i = 0; i < input.length; i++) {

        let command = input[i].split(" ")
        
        switch(command[0]) {
            
            case "Add":
            if (deck.includes(command[1])) {
                newDeck.push(command[1])
            } else {
                console.log("Card not found.");
            }
            break;
            case "Insert":
                if (deck.includes(command[1]) && newDeck.length > Number(command[2]) && Number(command[2]) >= 0){
                    let index = Number(command[2])
                newDeck.splice(index, 0, command[1]);   
                } else {
                    console.log("Error!");
                }
            break;
            case "Remove":
                if (newDeck.includes(command[1])) {
                    let index = newDeck.indexOf(command[1])
                    newDeck.splice(index, 1)
                } else {
                    console.log("Card not found.");
                }
            break;
            case "Swap":
                let firstIndex = newDeck.indexOf(command[1])
                let secondIndex = newDeck.indexOf(command[2])

                let firstEl = newDeck[secondIndex]
                let secondEl = newDeck[firstIndex]

                newDeck[firstIndex] = firstEl
                newDeck[secondIndex] = secondEl
            break;
            case "Shuffle":
                newDeck.reverse()
            break;
            case "Ready":
                console.log(newDeck.join(" "));
            break;
        }
    }
    
}
magicCards([
    "Innervate:Moonfire:Pounce:Claw:Wrath:Bite",
"Add Moonfire",
"Add Bite",
"Insert Claw 0",
"Swap Claw Moonfire",
"Remove Bite",
"Ready"
])
console.log("---------------");
magicCards(["Timetwister:CopyArtifact:Lifeweaver:TimeWalk",
"Add UndergroundSea",
"Add Timetwister",
"Remove Wrath",
"Add CopyArtifact",
"Shuffle deck",
"Ready"])
console.log("---------------");
magicCards(["BlackLotus:Bite:Innervate:Moonfire:CopyArtifact",
"Add BlackLotus",
"Insert Claw 1",
"Add Moonfire",
"Add Bite",
"Ready"])



