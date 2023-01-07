#!/usr/bin/env node

var countryCode =
  require('@dhavalveera/separate-country-code-n-number').separateCountryCodeAndNumber

console.log('Country ISD Code => ', countryCode(process.argv[2]).code)
console.log('Country Name => ', countryCode(process.argv[2]).country)
console.log('Phone Number is => ', countryCode(process.argv[2]).number)

console.log('\x1b[32mThank You for using my Package...')
