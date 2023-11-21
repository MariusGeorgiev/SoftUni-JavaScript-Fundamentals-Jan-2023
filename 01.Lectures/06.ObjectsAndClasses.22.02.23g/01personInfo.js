function personInfo(fName, lName, incominAge) {

    let myPersonInfo = {
        firstName: fName,
        lastName: lName,
        age: incominAge
    }
    return myPersonInfo
}
console.log(personInfo("Peter", "Pan", "20"))