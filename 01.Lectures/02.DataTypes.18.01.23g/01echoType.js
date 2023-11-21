function echoType(params) {

    let type = typeof params
    
    if (type === "string" || type === "number") {
        console.log(type);
        console.log(params);
    } else {
        console.log(type);
        console.log('Parameter is not suitable for printing');
    }

}

echoType('Hello, JavaScript!')
echoType(18)
echoType(null)