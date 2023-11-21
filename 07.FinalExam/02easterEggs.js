function easterEggs(data) {
    
    let pattern = /([@#]{1,})(?<color>[a-z]{3,})([@|#]{1,})([!`|,<>;:'"~@*/ %^$&+-_]*[\D\W])([/]{1,})(?<number>\d+)\5/g

    let match = pattern.exec(data);

    while(match) {
        console.log(`You found ${match.groups.number} ${match.groups.color} eggs!`);
        match = pattern.exec(data);
    }
}
easterEggs(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/'])
console.log("------------");
easterEggs(['#@##@red@#/8/@rEd@/2/#@purple@////10/'])

function easterEggs(data) {

    //let patternoOld = /([@#]{1,})(?<color>[a-z]{3,})([@|#]{1,})([#@*/%^$&]*)([/]{1,})(?<number>\d+)\5/
    
    let pattern = /([@#]{1,})(?<color>[a-z]{3,})([@|#]{1,})([!`|,<>;:'"~@*/ %^$&+-_]*)([/]{1,})(?<number>\d+)\5/g

    let match = pattern.exec(data);

    while(match) {
        console.log(`You found ${match.groups.number} ${match.groups.color} eggs!`);
        match = pattern.exec(data);
    }
}