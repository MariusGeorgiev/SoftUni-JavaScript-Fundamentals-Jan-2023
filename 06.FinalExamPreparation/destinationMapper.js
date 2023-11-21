function destinationMapper(string) {

    let pattern = /([=]|[\/])(?<destination>[A-Z]{1}[A-Za-z]{2,})\1/g;

    let travelPints = 0;
    let destinations = []

    let match = pattern.exec(string)

    while (match) {
       destinations.push(match.groups.destination);
       travelPints += match.groups.destination.length
    
       match = pattern.exec(string)
    }

    console.log(`Destinations: ${destinations.join(", ")}`);
    console.log(`Travel Points: ${travelPints}`);

}
destinationMapper(
    "=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="
    )