function stringManipulator(data) {

    let stringForManipulation = data.shift();

    for(let i = 0; i < data.length; i++) {

        let command = data[i].split(" ");

        switch(command[0]) {

            case "Translate":
                stringForManipulation = stringForManipulation.split(command[1])
                stringForManipulation = stringForManipulation.join(command[2])
                console.log(stringForManipulation);
            break;
            case "Includes":
                if(stringForManipulation.includes(command[1])) {
                    console.log("True");
                } else {
                    console.log("False");
                }
            break;
            case "Start":
                if(stringForManipulation.startsWith(command[1])) {
                    console.log("True");
                } else {
                    console.log("False");
                }
            break;
            case "Lowercase":
                stringForManipulation = stringForManipulation.toLowerCase();
                console.log(stringForManipulation);
            break;
            case "FindIndex":
                let lastIndex = stringForManipulation.lastIndexOf(command[1]);
                console.log(lastIndex);
            break;
            case "Remove":
            let firstString = stringForManipulation.slice(0, command[1])
            let secondString = stringForManipulation.slice(Number(command[1]) + Number(command[2]))
            stringForManipulation = firstString + secondString
                console.log(stringForManipulation);
            break;

            //end
        }
    }
}
stringManipulator([
    "//Thi5 I5 MY 5trING!//",
"Translate 5 s",
"Includes string",
"Start //This",
"Lowercase",
"FindIndex i",
"Remove 0 10",
"End"
])
