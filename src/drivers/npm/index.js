'use strict'

const countryCode = require('./countries-isd-codes.json').countryCodes

module.exports.separateCountryCodeAndNumber = function (number) {
  if (typeof number !== 'string') {
    console.log('\x1b[31mNumber must be passed as a string!')
    throw new TypeError('Number must be passed as a string!')
  } else if (!number.includes('+')) {
    console.log(
      '\x1b[31m+ is missing in the number to separate the Country ISD Code & Phone Number'
    )
    throw new TypeError(
      '+ is missing in the number to separate the Country ISD Code & Phone Number'
    )
  } else {
    var countryIsdCode, phoneNumber, country

    countryCode.forEach((codes) => {
      if (number.includes(codes.isdCode)) {
        let code_size = codes.isdCode.length

        countryIsdCode = number.substring(0, code_size)
        phoneNumber = number.substring(code_size)
        country = codes.countryName
      }
    })

    return {
      code: countryIsdCode,
      number: phoneNumber,
      country,
    }
  }
}
