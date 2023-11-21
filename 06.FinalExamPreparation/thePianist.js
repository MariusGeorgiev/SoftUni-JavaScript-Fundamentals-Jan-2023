function thePianist(data) {

    let numPiecesIHave = Number(data.shift()[0])

    let arrPieces = []

    for(let i = 0; i < numPiecesIHave; i++) {
        
        let [piece, composer, key] = data[i].split("|")

        let objPieces = {
            pieces: piece,
            composer: composer,
            key: key
        }
        arrPieces.push(objPieces)  
    }

    for(let i = numPiecesIHave; i < data.length; i++) {
        if(data[i] === "Stop") {
            break;
        }

        let tokens = data[i].split("|");
        let command = tokens[0];
        

        switch(command) {
            case "Add": 

            if(arrPieces.find((el) => el.pieces === tokens[1])) {
                console.log(`${tokens[1]} is already in the collection!`);
            } else {

        [piece = tokens[1], composer = tokens[2], key = tokens[3]]

        let objNewPieces = {
            pieces: piece,
            composer: composer,
            key: key
        }
        arrPieces.push(objNewPieces)
        console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
                break;
            case "Remove":
                if(arrPieces.find((el) => el.pieces === tokens[1])) {
                    let index = arrPieces.findIndex((el) => el.pieces === tokens[1]);
                    arrPieces.splice(index, 1)
                    console.log(`Successfully removed ${tokens[1]}!`);
                } else {
                    console.log(`Invalid operation! ${tokens[1]} does not exist in the collection.`);
                }
                break;
            case "ChangeKey":
                if(arrPieces.find((el) => el.pieces === tokens[1])) {
                    let index = arrPieces.findIndex((el) => el.pieces === tokens[1]);
                    [piece = arrPieces[index].pieces, composer = arrPieces[index].composer, key = tokens[2]]

                    let objChangePieces = {
                        pieces: piece,
                        composer: composer,
                        key: key
                    }
                    arrPieces.splice(index, 1, objChangePieces)
                    console.log(`Changed the key of ${tokens[1]} to ${tokens[2]}!`);
                } else {
                    console.log(`Invalid operation! ${tokens[1]} does not exist in the collection.`);
                }

            break;
        }

    }
   
    for(let i = 0; i < arrPieces.length; i ++) {
        console.log(`${arrPieces[i].pieces} -> Composer: ${arrPieces[i].composer}, Key: ${arrPieces[i].key}`);
    }

}
thePianist([
  '3',
  'Fur Elise|Beethoven|A Minor',
  'Moonlight Sonata|Beethoven|C# Minor',
  'Clair de Lune|Debussy|C# Minor',
  'Add|Sonata No.2|Chopin|B Minor',
  'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
  'Add|Fur Elise|Beethoven|C# Minor',
  'Remove|Clair de Lune',
  'ChangeKey|Moonlight Sonata|C# Major',
  'Stop'  
])