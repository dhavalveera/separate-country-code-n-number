# @dhavalveera/separate-country-code-n-number

---

Separate the Country ISD Code &amp; Phone Number

[![Separate Country Code and Phone Number NPM Package](https://img.shields.io/npm/v/@dhavalveera/separate-country-code-n-number?style=for-the-badge)](https://www.npmjs.com/package/@dhavalveera/separate-country-code-n-number) [![Separate Country Code and Phone Number NPM Package](https://img.shields.io/bundlephobia/min/@dhavalveera/separate-country-code-n-number?style=for-the-badge)](https://www.npmjs.com/package/@dhavalveera/separate-country-code-n-number) [![Separate Country Code and Phone Number NPM Package](https://img.shields.io/github/license/dhavalveera/separate-country-code-n-number?style=for-the-badge)](https://www.github.com/dhavalveera/separate-country-code-n-number)

---

### Install

---

```bash
npm i @dhavalveera/separate-country-code-n-number
```

### Usage

---

using CommonJS

```js
const countryCode =
  require('@dhavalveera/separate-country-code-n-number').separateCountryCodeAndNumber;

const { code, number } = countryCode('+911234567890');
//=> +91 1234567890
```

or

```js
const countryCode = countryCode('+911234567890').code;
const phoneNumber = countryCode('+911234567890').number;
```

---

using ESmodules

```js
import { separateCountryCodeAndNumber } from '@dhavalveera/separate-country-code-n-number';

const { code, number } = separateCountryCodeAndNumber('+911234567890');
//=> +91 1234567890
```

or

```js
const countryCode = separateCountryCodeAndNumber('+911234567890').code;
const phoneNumber = separateCountryCodeAndNumber('+911234567890').number;
```
