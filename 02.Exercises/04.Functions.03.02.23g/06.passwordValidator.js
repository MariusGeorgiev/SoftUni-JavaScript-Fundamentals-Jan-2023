function passwordValidator(password) {

    let hasValidLength = validateLength(password);
    let hasValidSpecialChar = validateNonSpecialChar(password);
    let hasValidDigit = checkForContainTwoNumbers(password);
    printResult(hasValidLength, hasValidSpecialChar, hasValidDigit)

    function validateLength(password) {
        if(password.length >= 6 && password.length <= 10) {
            return true
        } else {
            return false
        }
    }

    function validateNonSpecialChar(text) {
        for (let char of text) {
            let num = char.charCodeAt(0);
            let isLowerChar = checkCharForLowerCase(num);
            let isUpperChar = checkCharForUpperCase(num);
            let isNumber = checkContainNumber(num);
            if(!isLowerChar && !isUpperChar && !isNumber) {
                return false;
            }
        }
        return true;
    }

    function checkContainNumber(num) {
        if (num >= 48 && num <= 57) {
            return true;
        }
        return false;
    }

    function checkCharForUpperCase(num) {
        if (num >= 65 && num <= 90) {
            return true;
        }
        return false;
    }

    function checkCharForLowerCase(num) {
        if (num >= 97 && num <= 122) {
            return true;
        }
        return false;
    }

    function checkForContainTwoNumbers(password) {
        let counter = 0;
        for (let ch of password) {
            let isNumber = checkContainNumber(ch.charCodeAt(0))
            if (isNumber) {
                counter++;
            }
        }
        if (counter >= 2) {
            return true;
        } 
        return false;
    }

    function printResult(validLength, validSymbol, validDigit) {
        if(!validLength) {
            console.log("Password must be between 6 and 10 characters");
        }
        if(!validSymbol) {
            console.log("Password must consist only of letters and digits");
        }
        if(!validDigit) {
            console.log("Password must have at least 2 digits");
        }
        if(validLength && validSymbol && validDigit) {
            console.log("Password is valid");
        }
    }
}
passwordValidator('logIn');
console.log('-------');
passwordValidator('MyPass123');
console.log('-------');
passwordValidator('Pa$s$s');