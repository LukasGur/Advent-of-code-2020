const readData = require("../readFromFile");

readData(response => {
    const data = [0, ...response.split("\n").map(Number).sort((a, b) => a - b)];

    let joltsDifferences = {
        jolt1: 0,
        jolt2: 0,
        jolt3: 1
    };

    let previous = 0;
    let diff;

    data.forEach(adapter => {
        diff = adapter - previous;

        if ( diff < 4 && diff > 0 ) {
            ++joltsDifferences["jolt" + diff];
        }

        previous = adapter;
    });
    
    console.log("Part 1:", joltsDifferences.jolt1 * joltsDifferences.jolt3);
});