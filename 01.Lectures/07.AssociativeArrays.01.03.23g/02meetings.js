function meetings(input) {
        let obj = {};
        for(let el of input) {
            let[day,name] = el.split(' ');
     
            if(obj.hasOwnProperty(day)) {
                console.log(`Conflict on ${day}!`);
            } else {
                obj[day] = name;
                console.log(`Scheduled for ${day}`);
            }
        }
        for(let info in obj) {
            console.log(`${info} -> ${obj[info]}`);
        }
}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'
])