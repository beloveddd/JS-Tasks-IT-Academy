let str = "";
let number = 0;

while (number < 9) {
    number++;
    str = str + "|_";
    console.log(str);
}

// 1 цикл - чередующйися столбик
// 2 цикл - внутри 1 цикла, чередующийся, меньше на 1

let board = "";

for (let line = 1; line < 9; line++) {

        for (let inLine = 1; inLine < 9; inLine++) {

        if ( line % 2 === inLine % 2) {
            board += "\u2B1C";
        } else {
            board += "\u2B1B";
        }
    }

    board += "\n";
}

console.log(board);

