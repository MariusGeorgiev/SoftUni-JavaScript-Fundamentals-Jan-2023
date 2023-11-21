function oddOccurrences(input) {
    let words = input.toLowerCase().split(" ");
 
    let map = new Map();
    for(let word of words) {
        if(map.has(word)){
            let curOccur = map.get(word);
            map.set(word, curOccur += 1);
        } else {
            map.set(word, 1);
        }
    }
 
    let result = [];
    for (let [key, count] of map) {
        if(count % 2 !== 0) {
            result.push(key);
        }
    }
 
    console.log(result.join(" "));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')