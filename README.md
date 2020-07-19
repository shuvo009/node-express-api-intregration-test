# Nodejs Api Intregration Test
Here I demonstration how can we test our api with In-Memory MongoDB using jest.
## Common setup
Clone the repo and install the dependencies.
```
git clone https://github.com/shuvo009/nodejs-api-intregration-test.git
cd nodejs-api-intregration-test
```
```
npm install
```
To run this application
```
npm start
```
To run test
```
npm test
```
## Dependencies
* [Typescript](https://www.typescriptlang.org) - Typescript is an open-source programming language developed and maintained by Microsoft.
* [express](https://expressjs.com/) - The server for handling and routing HTTP requests
* [mongoose](https://mongoosejs.com/) - Mongoose provides a straight-forward, schema-based solution to model your application data

## Dev-Dependencies
* [jest](https://jestjs.io/) - Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
* [supertest](https://github.com/visionmedia/supertest) - Super-agent driven library for testing node.js HTTP servers using a fluent API
* [ts-jest](https://github.com/kulshekhar/ts-jest) - ts-jest is a TypeScript preprocessor with source map support for Jest that lets you use Jest to test projects written in TypeScript
* [@shelf/jest-mongodb](https://www.npmjs.com/package/@shelf/jest-mongodb) -  This preset assists you to configure all the settings MongoDB Memory Server.
