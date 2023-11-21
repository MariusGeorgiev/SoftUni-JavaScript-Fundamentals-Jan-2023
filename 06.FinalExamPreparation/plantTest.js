function plantDisc (arr){

    let num = Number(arr.shift())
    let plants = {}
    for (let i = 0 ; i<num; i++){
        let plant = arr.shift().split("<->")
        if(plants.hasOwnProperty(plant[0])){
            plants[plant[0]]["rarity"]= Number(plants[plant[0]]["rarity"]) + Number(plant[1])
        }else{
        plants[plant[0]] = {["rarity"] : plant[1], ["rating"] : 0, ["countrating"]:0 }
        }
    }


    console.table(plants);
}
    plantDisc([
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