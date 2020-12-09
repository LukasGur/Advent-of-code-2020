const fs = require("fs");

module.exports = (callback) => {
    fs.readFile('./input', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }

        return callback(data);
    });
};