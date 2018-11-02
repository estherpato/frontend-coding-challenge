# Phone List API

## Requirements

NodeJS

To install on mac:
```
brew install node
```

To install on Ubuntu/Devian:
```
sudo apt install nodejs npm
```

To test if the install worked, try to install grunt:
```
npm install -g grunt-cli
```

## Setting up the node js server

Let's install express and nodmon, express will be used to create the server while nodmon will help us to keep track of changes to our application by watching changed files and automatically restart the server.

```
npm install --save-dev nodemon
npm install express --save
```

## How to deploy locally

Execute:
```
npm run start
```

## References
- [Build Node.js RESTful APIs in 10 Minutes](https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd)
- [REST Tutorial](https://github.com/miguelgrinberg/REST-tutorial)
- [How to install Node.js on Ubuntu 18.04](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/)
