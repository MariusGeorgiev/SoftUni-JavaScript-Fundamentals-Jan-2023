function formatGrade(grade) {

    let textGrade = ""
    if(grade < 3.00) {
        textGrade = "Fail"
        grade = 2
    } else if (grade < 3.50) {
        textGrade = "Poor"
    } else if (grade < 4.50) {
        textGrade = "Good"
    } else if (grade < 5.50) {
        textGrade = "Very good"
    } else if (grade >= 5.50) {
        textGrade = "Excellent"
    }

    if(grade < 3.00) {
    console.log(`${textGrade} (${grade})`);
    } else {
    console.log(`${textGrade} (${grade.toFixed(2)})`);
    }
}
formatGrade(3.50)