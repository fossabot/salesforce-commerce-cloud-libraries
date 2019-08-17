'use strict';

var server = require('server');

/** Just an example controlle to test moment functions */
server.get('Test', function (req, res, next) {
    res.json(
        {
            bool: require('chance/bool')({ likelihood: 30 }),
            falsy: require('chance/falsy')(),
            integer: require('chance/integer')(),
            natural: require('chance/natural')(),
            character: require('chance/character')({ casing: 'upper' }),
            float: require('chance/floating')(),
            letter: require('chance/letter')(),
            prime: require('chance/prime')({ min: 1, max: 20 }),
            string: require('chance/string')({ pool: 'abcde' }),
            // paragraph: require('chance/paragraph')() --> this one really slows down the page load
            age: require('chance/age')(),
            birthday: require('chance/birthday')({ type: 'child', string: true }),
            cf: require('chance/cf')(),
            first: require('chance/first')(),
            last: require('chance/last')(),
            cpf: require('chance/cpf')(),
            gender: require('chance/gender')(),
            prefix: require('chance/prefix')(),
            suffix: require('chance/suffix')(),
            name: require('chance/name')({ prefix: true, suffix: true, middle: true }),
            ssn: require('chance/ssn')(),
            animal: require('chance/animal')()
        });

    next();
});

module.exports = server.exports();
