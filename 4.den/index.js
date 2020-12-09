const readData = require('../readFromFile');

readData((response) => {
    response = response.split('\n\n');
    let answer = 0;

    const required = [ 'byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid' ];

    for (let i = 0; i < response.length; i++) {
        const element = response[i].split(/[\n ]/);
        let requiredCounter = 0;

        for (let x = 0; x < required.length; x++) {
            const requiredElement = required[x];
            
            let item = element.find((passportInformation) => {
                return passportInformation.includes(requiredElement);
            });

            
            if (item) {
                item = item.split(':')[1];
                
                switch (requiredElement) {
                    case 'byr':
                        let birthYear = parseInt(item, 10);
                        if (birthYear >= 1920 && birthYear <= 2002) {
                            ++requiredCounter;
                        }
                        break;
                    case 'iyr':
                        let issueYear = parseInt(item, 10);
                        if (issueYear >= 2010 && issueYear <= 2020) {
                            ++requiredCounter;
                        }
                        break;
                    case 'eyr':
                        let expirationYear = parseInt(item, 10);
                        if (expirationYear >= 2020 && expirationYear <= 2030) {
                            ++requiredCounter;
                        }
                        break;
                    case 'hgt':
                        if (item.includes('cm')) {
                            const height = parseInt(item.substring(0, 3), 10);
                            if (height >= 150 && height <= 193 ) {
                                ++requiredCounter;
                            }
                        }
                        else if (item.includes('in')) {
                            const height = parseInt(item.substring(0, 2), 10);
                            if (height >= 59 && height <= 76 ) {
                                ++requiredCounter;
                            }
                        }
                        break;
                    case 'hcl':
                        if (item[0] === '#' && item.length === 7) {
                            ++requiredCounter;
                        }
                        break;
                    case 'ecl':
                        const eyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']
                        if (eyeColors.includes(item)) {
                            ++requiredCounter;
                        }
                        break;
                    case 'pid':
                        if (item.length === 9) {
                            ++requiredCounter;
                        }
                        break;
                    default: 
                        console.log('Problém')
                        break;
                }
            }
            else {
                break;
            }

        }

        if (requiredCounter === required.length){
            ++answer;
        }
    }
    
    console.log(answer);
});