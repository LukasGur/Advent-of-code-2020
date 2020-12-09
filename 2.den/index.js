const readData = require('../readFromFile');

readData((response) => {
    response = response.split('\n');

    let answerCount = 0;

    for (let i = 0; i < response.length; i++) {
        const element = response[i];
        // first part
        let min = parseInt(element.split('-')[0]);
        let max = parseInt(element.split(' ')[0].split('-')[1]);
        let character = element.split(' ')[1][0];
        let password = element.split(' ')[2];

        let regex = new RegExp(character, "g");
        let mentionCount = (password.match(regex) || []).length;

        if (mentionCount >= min && mentionCount <= max) {
            //! ++answerCount;
        }
        // /first part

        // second part
        if (password[min-1] === character && password[max-1] !== character || password[min-1] !== character && password[max-1] === character) {
            ++answerCount;
        }
        // /second part
    }

    console.log(answerCount);
});