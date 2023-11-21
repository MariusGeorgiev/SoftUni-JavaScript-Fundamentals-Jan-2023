function wordOccurrences(input) {

    let wordsMap = new Map()

    for(let el of input) {
        let wordCunts = 1

        if(!wordsMap.has(el)) {
    
            wordsMap.set(el, wordCunts)

        } else if (wordsMap.has(el)) {
            let currentCount = wordsMap.get(el)

            wordsMap.set(el, currentCount + wordCunts)
        }   
        
    }
    let sorted = Array.from(wordsMap).sort((a,b) => b[1] - a[1])

    for(const [key, value] of sorted) {
        console.log(`${key} -> ${value} times`);
    }

}
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"])