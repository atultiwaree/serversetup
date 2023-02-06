const log = require("node:console").log;
const spwanSync = require("node:child_process").spawnSync;

const chalk = require("chalk");
module.exports.packageInstaller = (pathToWritePackage) => {
  log(chalk.green("🚧 Installing package: Express, Dotenv, Morgan, Nodemon"));

  var args = "npm install express morgan dotenv";

  var options = {
    /**
     * feed all child process logging into parent process
     */
    stdio: "inherit",
    /**
     * converts buffer outputof spwansync to
     * @type string utf-8
     */
    encoding: "utf-8",
    stdio: ["ignore", "pipe", "inherit"],
    cwd: pathToWritePackage,
    env: process.env,
    shell: true,
  };

  var childProcess = spwanSync(args, options);

  log(childProcess.stdout);
  log(chalk.green('✔️  Required "npm packages" has been installed'));
  log(chalk.blue("❤  Thanks for trying serversetup"));
};
