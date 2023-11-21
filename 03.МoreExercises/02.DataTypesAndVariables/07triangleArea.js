function triangleArea(one, two, three) {

    let s = (one + two + three) / 2
    let area = Math.sqrt(s * (s - one) * (s - two) * (s - three))

    console.log(area);

}
triangleArea(2,
    3.5,
    4
    )