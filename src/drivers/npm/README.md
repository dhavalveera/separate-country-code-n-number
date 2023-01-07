# @dhavalveera/separate-country-code-n-number

Separate the Country ISD Code &amp; Phone Number

[![Separate Country Code and Phone Number NPM Package](https://img.shields.io/npm/v/@dhavalveera/separate-country-code-n-number)](https://www.npmjs.com/package/@dhavalveera/separate-country-code-n-number) [![Separate Country Code and Phone Number NPM Package](https://img.shields.io/bundlephobia/min/@dhavalveera/separate-country-code-n-number)](https://www.npmjs.com/package/@dhavalveera/separate-country-code-n-number) [![Separate Country Code and Phone Number NPM Package](https://img.shields.io/github/license/dhavalveera/separate-country-code-n-number)](https://www.github.com/dhavalveera/separate-country-code-n-number)

---

### Install

---

```sh
npm i @dhavalveera/separate-country-code-n-number
```

**or**

```sh
yarn add @dhavalveera/separate-country-code-n-number
```

## Usage

### Command line

```sh
npx @dhavalveera/separate-country-code-n-number "+911234567890"
```

**`output:`**

```sh
Country ISD Code =>  +91
Country Name =>  India
Phone Number is =>  1234567890
```

using CommonJS

```js
const countryCode =
  require('@dhavalveera/separate-country-code-n-number').separateCountryCodeAndNumber

const { code, number, country } = countryCode('+911234567890')
console.log(code, number, country)
//=> +91 1234567890 India
```

or

```js
const countryCode = countryCode('+911234567890').code
const phoneNumber = countryCode('+911234567890').number
const country = countryCode('+911234567890').country

console.log(countryCode, phoneNumber, country)
//=> +91 1234567890 India
```

---

using ESmodules

```js
import { separateCountryCodeAndNumber } from '@dhavalveera/separate-country-code-n-number'

const { code, number, country } = separateCountryCodeAndNumber('+911234567890')

const { code, number, country } = countryCode('+911234567890')
//=> +91 1234567890 India
```

or

```js
const countryCode = separateCountryCodeAndNumber('+911234567890').code
const phoneNumber = separateCountryCodeAndNumber('+911234567890').number
const country = separateCountryCodeAndNumber('+911234567890').country

console.log(countryCode, phoneNumber, country)
//=> +91 1234567890 India
```
