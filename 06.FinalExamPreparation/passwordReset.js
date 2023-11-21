function passwordReset(input) {

    let password = input.shift();

    for(let i = 0; i < input.length; i++) {

        let currentCommand = input[i].split(" ")

        switch(currentCommand[0]) {

            case "TakeOdd":
                let newConcatenatePass = ""
                for(let x = 1; x < password.length; x+=2) {
                    newConcatenatePass += password[x] 
                }
                password = newConcatenatePass
                console.log(password);
            break;
            case "Cut":
                let firstString = password.slice(0, currentCommand[1])
                let secondString = password.slice(Number(currentCommand[1]) + Number(currentCommand[2]))
                password = firstString + secondString
                console.log(password);
            break;
            case "Substitute":
                if(password.includes(currentCommand[1])) {
                   password = password.split(currentCommand[1])
                   password = password.join(currentCommand[2])
                    console.log(password);
                } else {
                    console.log("Nothing to replace!");
                }
            break;
            case "Done":
                console.log(`Your password is: ${password}`);
            break;
        }
    }
}
passwordReset([
    "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"
])
