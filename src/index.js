import readline from 'readline';
import { getUsername, checkAndParseLine } from './utils/utils.js';
import os from 'os';

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const userHomeDir = os.homedir();
const username = getUsername();
let directory = userHomeDir;

const exitPhrase = `Thank you for using File Manager, ${username}, goodbye!`;

process.stdout.write(`Welcome to the File Manager, ${username}!\n`)
process.stdout.write(`You are currently in ${directory}\n`)

rl.on('line', async (input) => {
  if (input.length === 0) return process.stdout.write(pathPhrase);
  if (input.toLowerCase() === '.exit') return closeStream();

  try {
    const params = checkAndParseLine(input);
    
    const result = await params.executor(directory, ...params.params);
    handleResult(result);
  } catch(e) {
    console.error(e.message)
  }
  process.stdout.write(`You are currently in ${directory}\n`)
});

rl.on('SIGINT', () => {
  closeStream();
});

const closeStream = () => {
  process.stdout.write(exitPhrase)
  rl.close();
  return;
}

const handleResult = (result) => {
  if (result.directory) directory = result.directory;
  if (!result.message) return;
  if (result.viewType === 'table') return console.table(result.message);
  console.log(result.message);
}