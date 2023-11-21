function partyTime(input) {

let index = 0;
let list = input[index];
index++

let listMap = {
    vip: [],
    regular: [],
}

    while(list !== 'PARTY') {  

        if(list[0] >= 0 && list[0] <= 9) {
            listMap.vip.push(list)
        } else {
            listMap.regular.push(list)
        }

        list = input[index];
        index++;
    }
 
    for(let i = (listMap.vip.length + listMap.regular.length + 1); i < input.length; i++) {

        if(listMap.vip.includes(input[i])) {
            let index = listMap.vip.indexOf(input[i])

            listMap.vip.splice(index, 1)
        } else {
            let index = listMap.regular.indexOf(input[i])

            listMap.regular.splice(index, 1)
        }
    }

    console.log(listMap.vip.length + listMap.regular.length);

        console.log(`${listMap.vip.join("\n")}`);
        console.log(`${listMap.regular.join("\n")}`); 
    
}
partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]


)