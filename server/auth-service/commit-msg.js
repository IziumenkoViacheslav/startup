#!/usr/bin/env node

const fs = require("fs");
const { execSync } = require("child_process");

const message = fs.readFileSync(process.env.HUSKY_GIT_PARAMS, "utf8").trim();

const currentBranch = () => {
  const branches = execSync("git branch", { encoding: "utf8" });
  return branches
    .split("\n")
    .find((b) => b.charAt(0) === "*")
    .trim()
    .substring(2);
};

const regexp = new RegExp(`${currentBranch()}`,"giu");

if(!regexp.test(message)){
  fs.writeFileSync(process.env.HUSKY_GIT_PARAMS, `${currentBranch()} | ${message}`);
}
process.exit(0);
