[![Lint](https://img.shields.io/github/actions/workflow/status/dhavalveera/separate-country-code-n-number/lint.yml)](https://github.com/dhavalveera/separate-country-code-n-number/actions/workflows/lint.yml)
[![wappalyzer NPM](https://img.shields.io/badge/npm-Separate%20Country%20Code%20%26%20Number-brightgreen)](https://www.npmjs.com/package/@dhavalveera/separate-country-code-n-number)

# Separate Country Code & Number

<!--- replace the NPM URL to my Portfolio's URL -->

**[Separate Country Code & Number](https://www.npmjs.com/package/@dhavalveera/separate-country-code-n-number) is used to separate the country ISD Code & Phone Number from the string, and returns Country Code, Phone Number & Country separately.**

If you don't have time to write the code to separate the country code & number from a single string, we offer the solution where you can get the Country ISD Code, Country Name & Phone Number separately with this tiny package.

## Prerequisites

- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org) version 14 or higher
- [Yarn](https://yarnpkg.com)

## Quick start

```sh
git clone https://github.com/dhavalveera/separate-country-code-n-number.git
cd separate-country-code-n-number
yarn install
yarn run link
```

## Usage

### Command line

```sh
node src/drivers/npm/cli.js "+911234567890"
```

**`output:`**

```sh
Country ISD Code =>  +91
Country Name =>  India
Phone Number is =>  1234567890
```
