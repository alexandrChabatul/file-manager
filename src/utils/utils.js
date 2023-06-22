import { commands } from "../constants/commands.js";
import { stat } from "fs/promises";
import path, { isAbsolute } from "path";

const getUsername = () => {
  const user = process.argv.find((el) => el.startsWith("--username"));
  if (!user) return "Anonymous";
  return user.split("=")[1] || "Anonymous";
};

const checkAndParseLine = (line) => {
  const elems = line.split(" ");
  checkCommandAndArgs(elems);
  return {
    executor: commands[elems[0]].executor,
    params: elems.slice(1),
  };
};

const checkCommandAndArgs = (elems) => {
  if (!commands[elems[0]])
    throw Error(
      'No such command. Write command "help" to see all commands list.'
    );
  const params = commands[elems[0]].params;
  if (elems.length - 1 < params)
    throw Error(`${params} arguments expected for ${elems[0]} command`);
};

const getRealPath = async (directory, inputPath) => {
  if (isAbsolute(inputPath)) {
    await stat(inputPath);
    return userPath;
  }
  const newPath = path.join(directory, inputPath);
  await stat(inputPath);
  return newPath;
};

const getCommandFunction = (command) => {};

export { getUsername, checkAndParseLine, getRealPath };
