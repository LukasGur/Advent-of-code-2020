const readData = require('../readFromFile');

readData((response) => {
    response = response.split('\n\n');
    let answer = 0;
    response.forEach(group => {
        let arrayOfQuestions = [];
        group.split('\n').forEach((person, indexOfPerson) => {
            person = person.split('');
            
            if (indexOfPerson === 0) {
                return arrayOfQuestions = person;
            }

            arrayOfQuestions = person.filter(x => arrayOfQuestions.includes(x));
        });

        answer += arrayOfQuestions.length;
    });

    console.log(answer);
});