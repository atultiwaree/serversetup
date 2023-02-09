#! /usr/bin/env node

//Using module instead of global console

const { log } = require("node:console");

const { pckgJson } = require("./templates/package.template");
const { packageInstaller } = require("./installer");
const chalk = require("chalk");
const path = require("path");
const fs = require("fs");

const args = process.argv.slice(2);

if (args.length < 1) {
  console.error(chalk.red("🚩  Please enter folder name"));
  process.exit(1); //an error occurred
}

const inputDirectory = args.join("");

if (!fs.existsSync(inputDirectory)) {
  log(chalk.gray(`Setting up server for ${inputDirectory}`));

  fs.mkdirSync(inputDirectory);
  log(chalk.green(`[1/4]  ✔️  Created directory ${inputDirectory} `));

  var pathToWritePackage = path.join(process.cwd(), inputDirectory);

  try {
    fs.writeFileSync(path.join(pathToWritePackage, "package.json"), JSON.stringify(pckgJson(inputDirectory)));
    log(chalk.green("[2/4]  ✔️  Created Package.json"));
  } catch (e) {
    throw new Error("Package json create error");
  }

  try {
    fs.copyFileSync(`${__dirname}/templates/template.js`, `${pathToWritePackage}/index.js`);
    log(chalk.green("[3/4]  ✔️  Created Index.js"));
  } catch (e) {
    throw new Error("Copy file operation halt");
  }

  //Install packages
  packageInstaller(pathToWritePackage);
} else {
  console.error(chalk.redBright("❌ Directory already exists."));
  process.exit(1);
}
