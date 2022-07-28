
 function chessBoard(width) {
    if (width % 2 === 0) {
        str1 = " #";
        str2 = "# ";
        result = "";
        let i = 1;
        while (i <= width) {
            if (i % 2 > 0) {
                result += str1.repeat(width / 2) + `\n`;
            } else {
                result += str2.repeat(width / 2) + `\n`;
            }
            i++;
        }

        console.log(result);
    } else {
        return "You have to choose an even width for the chess board!";
    }
 }

 chessBoard(8);