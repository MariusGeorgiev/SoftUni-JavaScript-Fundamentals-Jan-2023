function softUniReception(arr) {

let allEmployees = Number(arr[0]) + Number(arr[1]) + Number(arr[2])

let studentsQuestions = Number(arr[3])
let countHours = 0

while(studentsQuestions !== 0) {

    countHours++;
    if(countHours % 4 === 0) {

    } else {
        studentsQuestions = studentsQuestions - allEmployees
    }

    if(studentsQuestions < 0) {
        studentsQuestions = 0
    }

}

    console.log(`Time needed: ${countHours}h.`);

}
softUniReception(['5','6','4','20'])
console.log("------------------");
softUniReception(['1','2','3','45'])
console.log("--------------------");
softUniReception(['3','2','5','40'])
