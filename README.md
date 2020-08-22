![Tested with TestCafe](https://img.shields.io/badge/tested%20with-TestCafe-2fa4cf.svg)
# testcafe-screenplay-demo
Project to understand how to implement the [screenplay](https://blog.caplin.com/2017/01/04/screenplay-pattern-a-solid-alternative-pattern-to-page-objects/) pattern with Testcafe framework

 ## Installation
 1. Install [Node](https://nodejs.org/en/) 
 2. Clone this repository `$ git clone git@github.com:atejeda-qa/testcafe-screenplay-demo.git` 
 3. Install dependencies  `$ npm i`
 
## To test
```sh 
$ npm test
```
## Project structure
```
testcafe-page-object-demo
├─ .gitignore
├─ .testcaferc.json
├─ package-lock.json
├─ package.json
├─ README.md
└─ src
   ├─ pages
   │  ├─ header.js
   │  └─ results.js
   ├─ questions
   │  └─ header.js
   ├─ tasks
   │  └─ header.js
   └─ test
      └─ test.js

```