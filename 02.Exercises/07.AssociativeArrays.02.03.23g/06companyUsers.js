function companyUsers(input) {

    let companyMap = new Map()

    for (let el of input) {
        let tokens = el.split(" -> ")
        let companyName = tokens[0]
        let companyId = tokens[1]

        if (!companyMap.has(companyName)) {
            companyMap.set(companyName, companyId)
        } else if (companyMap.has(companyName)) {
            let oldId = companyMap.get(companyName)

            companyMap.set(companyName, `${oldId} ${companyId}`)
        }
    }

    const sortedAsc = new Map([...companyMap].sort());

    for (let el of sortedAsc) {
        let split = el[1].split(" ")
        let uniqueChars = [...new Set(split)];

        console.table(`${el[0]}\n-- ${uniqueChars.join("\n-- ")}`)
        
    }

}
companyUsers
([
        'SoftUni -> AA12345',
        'SoftUni -> CC12344',
        'Lenovo -> XX23456',
        'SoftUni -> AA12345',
        'Movement -> DD11111'
        ])