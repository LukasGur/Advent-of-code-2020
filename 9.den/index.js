const readData = require("../readFromFile");

const reduceArray = (arr, callback) => {
    
};

readData(response => {
    response = response.split("\n").map(Number);
    let preamble = response.slice(0, 25);
    let data = [...response].slice(25);

    // part one
    let allRight = [Number];
    while (data.length && allRight.length) {
        allRight = preamble.filter((first, i) => {
            for (let y = i; y < preamble.length; y++) {
                const second = preamble[y];
                if (second + first === data[0] && second != first) {
                    preamble.push(data[0]);
                    preamble.splice(0, 1);
                    data.splice(0, 1);
                    return true;
                }
            }
        });
    }

    let answerPartOne = data[0];
    console.log("part one:", answerPartOne);

    // part two
    let answerPartTwo;
    let encryptionWeakness = [];
    let reducer = (acc, curr) => acc + curr;
    for (let i = 0; i < response.length; i++) {
        const element = response[i];

        let sum = encryptionWeakness.reduce(reducer, element);

        if (sum < answerPartOne) {
            encryptionWeakness.push(element);
        }
        else if (sum == answerPartOne && encryptionWeakness.length > 1) {
            encryptionWeakness.push(element);
            break;
        }
        else if (sum > answerPartOne)  {
            encryptionWeakness.splice(0, 1);
            i--
        }
    }

    encryptionWeakness.sort((x, y) => x - y);
    answerPartTwo = encryptionWeakness[0] + encryptionWeakness[encryptionWeakness.length-1];
    console.log("part one:", answerPartTwo);
});