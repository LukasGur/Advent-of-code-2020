const readData = require('../readFromFile');

readData((response) => {
    response = response.split('\n');
    let arrayOfId = [];
    let answer = 0;

    let standardAirplane = {
        rows: 128,
        columns: 8
    }

    for (let i = 0; i < response.length; i++) {
        const seatCode = response[i];

        let row = {
            code: seatCode.substring(0, 7),
            lower: 0,
            upper: standardAirplane.rows-1,
        };
        let column = {
            code: seatCode.substring(7, 10),
            lower: 0,
            upper: standardAirplane.columns-1,
        };
        
        for (let x = 0; x < column.code.length; x++) {
            const letterColumn = column.code[x];

            if (letterColumn === "L") {
                // lower
                column.upper -= Math.round((column.upper - column.lower) / 2);
            }
            else if (letterColumn === "R") {
                // upper
                column.lower += Math.round((column.upper - column.lower) / 2);
            }
        }

        for (let z = 0; z < row.code.length; z++) {
            const letterRow = row.code[z];
            
            if (letterRow === "F") {
                // lower
                row.upper -= Math.round((row.upper - row.lower) / 2);
            }
            else if (letterRow === "B") {
                // upper
                row.lower += Math.round((row.upper - row.lower) / 2);
            }
        }

        let boardingId = row.upper * 8 + column.upper;

        arrayOfId.push(boardingId);
    }

    arrayOfId.sort((a,b) => a - b);


    for (let i = 0; i < arrayOfId.length; i++) {
        const id = arrayOfId[i];
        
        if (id !== i + arrayOfId[0] && arrayOfId[i-1] && arrayOfId[i+1]) {
            answer = (i + arrayOfId[0]);
            break;
        }
    }

    console.log(answer);
});