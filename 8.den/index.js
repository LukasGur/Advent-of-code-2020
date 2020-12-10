const readData = require('../readFromFile');

const infiniteLoop = (data) => {

    let accumulator = 0;
    let visitedLines = [];

    for (let i = 0; i < data.length; i++) {
        const instruction = data[i].substring(0, 3);
        let count = parseInt(data[i].substring(4));

        if (visitedLines.includes(i)) {
            return -1;
        }

        visitedLines.push(i);
        
        switch (instruction) {
            case "acc":
                accumulator += count;
                break;
            case "jmp":
                i += count-1;
                break;
            case "nop":
                break;
        }
    }

    return accumulator;
};


readData(response => {
    response = response.split("\n");
    let answer = -1;

    response.every((instruction, i) => {
        if (instruction.substring(0, 3) === "nop") {
            response[i] = response[i].replace("nop", "jmp");
            answer = infiniteLoop(response);
            response[i] = response[i].replace("jmp", "nop");
        }
        else if (instruction.substring(0, 3) === "jmp") {
            response[i] = response[i].replace("jmp", "nop");
            answer = infiniteLoop(response);
            response[i] = response[i].replace("nop", "jmp");
        }

        return answer === -1;
    });

    console.log(answer);
});