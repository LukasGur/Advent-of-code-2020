const readData = require('../readFromFile');

const getNumberOfBagsInBag = (searchBag, data) => {
    let actualBag = data.filter(bag => bag[0].includes(searchBag));
    actualBag = actualBag[0];

    let answer = 0;

    if (actualBag[1] === "no other bags.") {
        return answer;
    }

    actualBag[1].split(", ").forEach(bag => {
        bag = bag.split(" ");
        let bagsNumber = parseInt(bag[0], 10);
        let bagName = `${bag[1]} ${bag[2]}`;

        answer += bagsNumber + bagsNumber * getNumberOfBagsInBag(bagName, data);
    });

    return answer;
};

const getNumbersOfEventualBags = (eventualBags, data) => {
    let newBags = false;
    data.forEach(bag => {
        eventualBags.forEach(eventualBag => {
            if (bag[1].includes(eventualBag) && !eventualBags.includes(bag[0])) {
                eventualBags.push(bag[0]);
                newBags = true;
            };
        });
    });

    if (newBags) {
        return getNumbersOfEventualBags(eventualBags, data);
    }

    return eventualBags.length - 1;
};

readData((response) => {
    response = response.split('\n');
    response = response.map(bag => bag.split(' bags contain '));

    let myBag = "shiny gold"
    // first part day 7
    console.log('part 1: ' + getNumbersOfEventualBags([myBag], response));
    // second part day 7
    console.log('part 2: ' + getNumberOfBagsInBag(myBag, response));
});