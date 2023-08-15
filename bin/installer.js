const log = require("node:console").log;
var execs = require("child_process").exec;

const packageInstaller = require("./utils/spwan.utils");

const chalk = require("chalk");

module.exports.packageInstaller = (pathToWritePackage) => {
  log(chalk.green("[5/6]  🚧 Installing package: 'Express', 'Dotenv', 'Morgan'"));

  var args = "npm install express morgan dotenv";

  var options = {
    stdio: "inherit",
    encoding: "utf-8",
    stdio: ["ignore", "pipe", "inherit"],
    cwd: pathToWritePackage,
    env: process.env,
    shell: true,
  };

  var childProcess = packageInstaller.spwanWrapper(args, options);

  log(childProcess.stdout);

  log(chalk.green("[6/6]  🚧 Installing package globally: 'Nodemon'"));

  var childProcessNodemon = packageInstaller.spwanWrapper("npm i -g nodemon", options);

  log(childProcessNodemon.stdout);

  log(chalk.blue("✔️  All done move to your folder, type 'nodemon' to start your server"));
};
