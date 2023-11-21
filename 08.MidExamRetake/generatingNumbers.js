function generatingNumbers(data) {

    let sequence = data.shift().split(" ")

    for(let i = 0; i < data.length; i++) {

        let command = data[i].split(" ")

        switch(command[0]) {
            case "add":
                for(let i = command.length -1 ; i > 2; i--) {
                    sequence.unshift(Number(command[i]))
                }
            break;
            case "remove":
                switch (command[1]) {
                    case "greater":
                        let newArrWithGreater = []
                        for(let i = 0; i < sequence.length; i++) {
                            if(sequence[i] <= Number(command[3])) {
                                newArrWithGreater.push(sequence[i])
                            }
                        }
                        sequence = newArrWithGreater
                    break;
                    case "at":
                        if(sequence.length > Number(command[3])) {
                            sequence.splice(command[3] , 1)
                        }

                    break;
                }

            break;

            case "replace":
                let index = sequence.indexOf(command[1])
                sequence[index] = command[2]
            break;

            case "find":
                switch (command[1]) {
                    case "even":
                        let newEvenArr = []
                        for(let i = 0; i < sequence.length; i++) {
                            if(sequence[i] % 2 === 0) {
                                newEvenArr.push(sequence[i])
                            }
                        }
                        console.log(newEvenArr.join(" "));
                    break;
                    case "odd":
                        let newOddArr = []
                        for(let i = 0; i < sequence.length; i++) {
                            if(sequence[i] % 2 !== 0) {
                                newOddArr.push(sequence[i])
                            }
                        }
                        console.log(newOddArr.join(" "));
                    break;
                }

            break;

            case "END":
                console.log(sequence.join(", "));

            break;
        }
           
        
    }

}
generatingNumbers([
    "1 2 3 10 10 6 4 10",
"add to start 1 2 3",
"remove greater than 5",
"find even",
"END"
])

console.log("------------");
generatingNumbers(["1 2 3 10 10 6 4 10",
"find odd",
"replace 4 1",
"remove greater than 5",
"END"])
console.log("----------------");
generatingNumbers(["1 2 3 10 10 6 4 10",
"replace 10 1",
"remove at index 0",
"add to start 4 2",
"END"])

