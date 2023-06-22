import { add, cat, cp, mv, rm, rn } from "../executors/files.js";
import { hash } from "../executors/hash.js";
import { help } from "../executors/help.js";
import { cd, ls, up } from "../executors/navigation.js";
import { os } from "../executors/os.js";
import { compress, decompress } from "../executors/zip.js";

const commands = {
  help: {
    executor: help,
    params: 0,
    description: 'To see all available commands'
  },
  up: {
    executor: up,
    params: 0,
    description: 'Go upper from current directory',
  },
  cd: {
    executor: cd,
    params: 1,
    description: 'Go to dedicated folder from current directory',
  },
  ls: {
    executor: ls,
    params: 0,
    description: 'Print in console list of all files and folders in current directory',
  },
  cat: {
    executor: cat,
    params: 1,
    description: 'Read file and print it\'s content in console',
  },
  add: {
    executor: add,
    params: 1,
    description: 'Create empty file in current working directory',
  },
  rn: {
    executor: rn,
    params: 2,
    description: 'Rename file',
  },
  cp: {
    executor: cp,
    params: 2,
    description: 'Copy file',
  },
  mv: {
    executor: mv,
    params: 2,
    description: 'Move file',
  },
  rm: {
    executor: rm,
    params: 1,
    description: 'Delete file',
  },
  os: {
    executor: os,
    params: 1,
    description: 'Operating system info',
  },
  hash: {
    executor: hash,
    params: 1,
    description: 'Calculate hash for file',
  },
  compress: {
    executor: compress,
    params: 1,
    description: 'Compress file',
  },
  decompress: {
    executor: decompress,
    params: 1,
    description: 'Decompress file',
  }
};

const osParams = {
  EOL: 'default system End-Of-Line',
  cpus: 'host machine CPUs info',
  homedir: 'home directory',
  username: 'current system username',
  architecture: 'CPU architecture'
}

export { commands, osParams };
