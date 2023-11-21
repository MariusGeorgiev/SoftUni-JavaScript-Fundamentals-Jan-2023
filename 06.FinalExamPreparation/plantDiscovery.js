function plantDiscovery(data) {

    let numPlants = Number(data.shift()[0])

    let plantsAll = {};

    for (let i = 0; i < numPlants; i++) {
        let inputPlants = data[i].split("<->");
        
        plantsAll[inputPlants[0]] = {["rarity"]: Number(inputPlants[1]), ["rating"]: 0, ["avgRating"]: 0}
    }

    for(let i = numPlants; i < data.length; i++) {

        if(data[i] === "Exhibition") {
            console.log(`Plants for the exhibition:`);
            
            for(let key in plantsAll) {
                let avg = plantsAll[key]["avgRating"]

                if(avg == 0 || plantsAll[key]["rating"] == 0) {
                console.log(`- ${key}; Rarity: ${plantsAll[key]["rarity"]}; Rating: ${(plantsAll[key]["rating"]).toFixed(2)}`);
                } else {
                console.log(`- ${key}; Rarity: ${plantsAll[key]["rarity"]}; Rating: ${(plantsAll[key]["rating"] / avg).toFixed(2)}`);
                }
            }
            break;
        }

        let typeAction = data[i].split(": "); // on index [0]
        let action = typeAction[1].split(" - "); // on index[0] is plant, on index [1] is rating or rarity
        
        if(plantsAll.hasOwnProperty(action[0])) {

            switch(typeAction[0]) {
                case "Rate":
                    plantsAll[action[0]]["avgRating"] += 1
                    plantsAll[action[0]]["rating"] += Number(action[1])
                break;
                case "Update":
                    plantsAll[action[0]]["rarity"] = Number(action[1])
                break;
                case "Reset":
                    plantsAll[action[0]]["rating"] = 0
                    plantsAll[action[0]]["avgRating"] = 0
                break;
            }
        } else {
            console.log("error");
        }
        }

}
plantDiscovery([
    "3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"
])