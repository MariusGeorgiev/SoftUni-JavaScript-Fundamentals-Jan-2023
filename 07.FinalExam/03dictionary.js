function dictionary(text){

    let dictionaryStored = {}

        let splitDefinitions = text[0].split(" | ");

        for(let el of splitDefinitions) {
            let splitWord = el.split(": ")
            
            if(dictionaryStored.hasOwnProperty(splitWord[0])){
                dictionaryStored[splitWord[0]]["textForPrint"] = dictionaryStored[splitWord[0]]["textForPrint"] += "\n" + " -" + splitWord[1]
            } else {

                dictionaryStored[splitWord[0]] = {
                    ["textForPrint"]: splitWord[1],
                    } 
            }  
        }    
        
        let splitCommand = text[1].split(" | ");

        let saveKey = []
            for(key in dictionaryStored) {
                saveKey.push(key)
            }
        
        if(text[2] === "Hand Over") {
            console.log(saveKey.join(" "));
        } else if (text[2] === "Test") {
            let elForCompare = []
            for(let el of splitCommand) {
                elForCompare.push(el) 
                }
                for(keys in dictionaryStored) {
                    console.log(`${keys}:\n -${dictionaryStored[keys]["textForPrint"]}`);
            
                }
            }         

}
dictionary(["tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",
"bit | code | tackle",
"Test"])

