function addAndRemove(arr) {

    let pushedArr = []

    for(let i = 0; i < arr.length; i ++) {

        if(i === 0) {
            pushedArr.push(i + 1)
        }

        if(arr[i] === "add" && i > 0) {
            pushedArr.push(i + 1)
        } else if (arr[i] === "remove" && i > 0) {
            pushedArr.splice(pushedArr.length - 1, 1)

        }

    }
    if(pushedArr.length < 1) {
        console.log("Empty");
    } else {
        console.log(pushedArr.join(" "));
    }
    

}
addAndRemove(['add', 'add', 'add', 'add'])
addAndRemove(['add', 'add', 'remove', 'add', 'add'])
addAndRemove(['remove', 'remove', 'remove'])