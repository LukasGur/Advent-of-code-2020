const readData = require('../readFromFile');

readData((response) => {
    response = response.split('\n').map(Number);
    
    for (let i = 0; i < response.length; i++) {
        const number = response[i];
        for (let x = 0; x < response.length; x++) {
            const secondNumber =  response[x];
            if (number + secondNumber === 2020) {
                // part 1
                console.log('part 1: '+ number * secondNumber);
            }
            for (let z = 0; z < response.length; z++) {
                const thirdNumber = response[z];
                if (number + secondNumber + thirdNumber === 2020) {
                    // part 2
                    return console.log('part 2: ' + number * secondNumber * thirdNumber);
                }
            }
        }
    }
});