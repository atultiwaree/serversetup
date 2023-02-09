const log = require("node:console").log;

const packageInstaller = require("./utils/spwan.utils");

const chalk = require("chalk");

module.exports.packageInstaller = (pathToWritePackage) => {
  log(chalk.green("[4/4]  🚧 Installing package: Express, Dotenv, Morgan, Nodemon"));

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

  log(chalk.green("👍 Required 'npm packages' has been installed"));

  log(chalk.blue("❤  Thanks for trying serversetup"));
};
