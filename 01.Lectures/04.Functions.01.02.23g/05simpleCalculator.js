function simpleCalciulator(num1, num2, operator) {

    let multiply = (num1, num2) => num1 * num2;
    let divide = (num1, num2) => num1 / num2;
    let add = (num1, num2) => num1 + num2;
    let subtract = (num1, num2) => num1 - num2;

    let result = eval(`${operator}(${num1.toString()}, ${num2.toString()})`)

    console.log(result)

}
simpleCalciulator(5,5, "multiply")