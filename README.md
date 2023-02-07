# serversetup

Serversetup is a "npx tool" that generates essential files, configure npm packages and serves developers with basic setup of node express server within a minute just like create-react-app.

[![serversetup-npm-package-logo.png](https://i.postimg.cc/zBFPGc1q/serversetup-npm-package-logo.png)](https://postimg.cc/xJqPsgCZ)

## Installation

Install server setup with "npx"

```bash
  npx serversetup <directory-name>
```

After installation just move to your directory and run below cli command

```bash
  cd <your-directory>
  node --watch index
```

If you're using node version < 18

```bash
  cd <your-directory>
  npm i -g nodemon
  nodemon
```

To test if serversetup configured files are all okay paste url below to browser or just make a curl request

```bash
  curl http://localhost:3000
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`Mogodb connection url`

👋 .env constants are given inside index.js as comments feel free to use

## Authors

- [@atultiwaree](https://www.github.com/atultiwaree)

## Github repo of this project

- [@serversetupGithub](https://github.com/atultiwaree/serversetup)

## Tech Stack

**Server:** Node, Express

## Feedback

If you have any feedback, please reach out to us at atultiwaree@proton.me
