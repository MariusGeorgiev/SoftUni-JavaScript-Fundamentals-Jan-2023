function towns(data) {

    for(let i = 0; i < data.length; i++) {

        let splitData = data[i].split(" | ")

        let townInfo = {
            town: splitData[0],
            latitude: Number(splitData[1]).toFixed(2),
            longitude: Number(splitData[2]).toFixed(2),
        }
        console.log(townInfo);
    }
   
}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)