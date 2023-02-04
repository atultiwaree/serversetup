
# serversetup

Serversetup is a "npx tool" that generates essential files, configure npm packages and serves developers with basic setup of node express server within a minutejust like create-react-app.


[![serversetup-npm-package-logo.png](https://i.postimg.cc/zBFPGc1q/serversetup-npm-package-logo.png)](https://postimg.cc/xJqPsgCZ)


## Installation

Install my-project with npm

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

To test type bellow command in your terminal or just paste url in your browser 

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

    
## Tech Stack


**Server:** Node, Express


## Feedback

If you have any feedback, please reach out to us at atultiwaree@proton.me

