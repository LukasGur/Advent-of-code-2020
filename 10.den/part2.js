const readData = require("../readFromFile");

const fibonacci = n => {
    let first = 0
    let second = 0
    let third = 1
    let next;

    for( i = 0; i < n; i++){
        next = first + second + third
        first = second
        second = third
        third = next
    }

    return third
}


readData(response => {
    const data = [0, ...response.split("\n").map(Number).sort((a, b) => a - b)];

    let answer = 1;

    let counter = 0;
    let previous = 0;
    let diff;

    data.forEach((adapter, i) => {
        diff = adapter - previous;

        if (diff === 1) {
            ++counter;
        }
        else if (diff === 3) {
            answer *= fibonacci(counter);
            counter = 0;
        }

        if (data.length - 1 === i) {
            answer *= fibonacci(counter);
        }

        previous = adapter;
    });

    console.log("Part 2:", answer);
});