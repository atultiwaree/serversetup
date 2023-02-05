const { log } = require("node:console");

const { spawn } = require("child_process");
const chalk = require("chalk");
module.exports.packageInstaller = (pathToWritePackage) => {
  log(chalk.green("🚧  Installing package: Express, Dotenv, Morgan, Nodemon"));

  var args = "npm install express morgan dotenv";

  var options = {
    stdio: "inherit", //feed all child process logging into parent process
    cwd: pathToWritePackage,
    env: process.env,
    shell: true,
  };

  var childProcess = spawn(args, options);

  childProcess.on("close", function (code) {
    // process.stdout.write('"npm install" finished with code ' + code + "\n");
    log(chalk.green('✔️  "npm installation" finished with code ' + code + "\n"));
    log(chalk.blue("❤  Thanks for trying serversetup"));
  });
};
