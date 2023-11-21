function schoolGrade(inputArray) {
    let studentMap = new Map();
 
    for (let line of inputArray) {
        let token = line.split(" ");
        let name = token.shift();
        let gradesArray = token;
 
 
        if (!studentMap.has(name)) {
            studentMap.set(name, gradesArray);
 
        } else {
            let currentGrades = studentMap.get(name);
 
            for (let grade of gradesArray) {
                currentGrades.push(grade);
            }
            studentMap.set(name, currentGrades);
 
        }
    }
    
        let sortedArray = Array.from(studentMap.entries()).sort(([keyA, valueA], [keyB, valueB]) => keyA.localeCompare(keyB))
 
 
        for (let [key, value] of sortedArray) {
            let sum = 0;
            for (let grade of value){
                sum += Number(grade);
            }
            let averageGrade = sum/value.length;
            console.log(`${key}: ${averageGrade.toFixed(2)}`);
        }
 
    }
schoolGrade(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])