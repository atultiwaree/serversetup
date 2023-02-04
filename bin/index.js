#! /usr/bin/env node

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
  console.log(chalk.gray("🤖  Logs..."));
  fs.mkdirSync(inputDirectory);
  console.log(chalk.green(`✔️  Created directory ${inputDirectory} `));
  var pathToWritePackage = path.join(process.cwd(), inputDirectory);

  fs.writeFile(path.join(pathToWritePackage, "package.json"), JSON.stringify(pckgJson(inputDirectory)), (err) => {
    if (err) {
      console.error(err);
    }
    // file written successfully
    console.log(chalk.green("✔️  Package.json created"));
  });

  fs.copyFile(`${__dirname}/templates/template.js`, `${pathToWritePackage}/index.js`, (err) => {
    if (err) throw err;
    console.log(chalk.green("✔️  Index.js created"));
  });

  //Install packages
  packageInstaller(pathToWritePackage);
} else {
  console.error(chalk.redBright("❌ Directory already exists."));
  process.exit(1);
}
