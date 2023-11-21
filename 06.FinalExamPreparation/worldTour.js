function worldTour(destinations) {

    let stops = destinations.shift()

    for(let i = 0; i < destinations.length; i++) {

        let tokens = destinations[i].split(":")

        switch(tokens[0]) {
            case "Add Stop":
                if(stops.length - 1 >= tokens[1]) {
                let firstString = stops.slice(0, tokens[1])
                let addDestination = tokens[2]
                let secondString = stops.slice(tokens[1])
                stops = firstString + addDestination + secondString
                console.log(stops);
                } else {
                    console.log(stops);
                }
            break;
            case "Remove Stop":
            if(stops.length - 1 >= tokens[1] && stops.length > tokens[2]) {
                let firstHalf = stops.slice(0, tokens[1]);
                let secondHalf = stops.slice(Number(tokens[2]) + 1);
                stops = firstHalf + secondHalf
                console.log(stops);
            } else {
                console.log(stops);
            }
            break;
            case "Switch":
            if(stops.includes(tokens[1])) {
            stops = stops.replace(tokens[1], tokens[2])
            console.log(stops);
            } else {
                console.log(stops);
            }
            break;
            case "Travel":
                console.log(`Ready for world tour! Planned stops: ${stops}`);
            break;
        }
    }
}
worldTour([
"Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"
])
