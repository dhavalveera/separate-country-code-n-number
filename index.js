'use strict';

const countryCode = require('./countries-isd-codes.json').countryCodes;

module.exports.separateCountryCodeAndNumber = function (number) {
  for (let i = 0; i < countryCode.length; i++) {
    if (number.includes(countryCode[i])) {
      let code_size = countryCode[i].length;
      return {
        code: number.substring(0, code_size),
        number: number.substring(code_size),
      };
    }
  }
};
