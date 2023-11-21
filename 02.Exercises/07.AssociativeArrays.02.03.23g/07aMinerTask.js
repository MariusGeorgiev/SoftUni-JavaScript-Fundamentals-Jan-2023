function aMinerTask(input) {

    let resourceMap = new Map()

    for(let i = 0; i < input.length; i+=2) {
        let resourceName = input[i]
        let quantity = Number(input[i+1])

        if(!resourceMap.has(resourceName)) {
            resourceMap.set(resourceName, quantity);
        } else if (resourceMap.has(resourceName)) {
            let currentQuantity = resourceMap.get(resourceName)
            resourceMap.set(resourceName, quantity + currentQuantity)
        }
    }

    for(const [key, value] of resourceMap) {
        console.log(`${key} -> ${value}`);
    }
    
}
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    )