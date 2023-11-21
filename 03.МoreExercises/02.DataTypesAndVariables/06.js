function chessboard(num) {
    let buff = ""
    for (let row = 0; row < num; row++) {

        buff += "<div>\n"
        for (let col = 0; col < num; col++) {

            if(col % 2 !== 0) {
                buff += "\t<span> class= ></span> \n"

            } else {
                buff += "\t<span> class= ></span> \n"
            }
            
            
        }
    }

    console.log(buff);
}
chessboard(3)