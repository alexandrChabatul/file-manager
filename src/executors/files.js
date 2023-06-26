import { createReadStream, createWriteStream } from "fs";
import { writeFile, access, rename, rm as rmPromises } from "fs/promises";
import { getRealPath } from "../utils/utils.js";
import { stdout } from "process";

const add = async (directory, filename) => {
  const path = await getRealPath(directory, filename, false)
  await writeFile(path, "");
  return { message: `File ${filename} successfully created.` };
};

const rn = async (directory, filename, newFilename) => {
  const oldPath = await getRealPath(directory, filename);
  const newPath = await getRealPath(directory, newFilename, false);
  await access(oldPath);
  await rename(oldPath, newPath);
  return { message: `File ${filename} successfully renamed.` };
};

const cp = async (directory, filename, newFilename) => {
  const oldPath = await getRealPath(directory, filename);
  const newPath = await getRealPath(directory, newFilename, false);
  const readable = createReadStream(oldPath);
  const writeable = createWriteStream(newPath);
  await readable.pipe(writeable);
  return { message: `File ${filename} successfully copied.` };
};
const mv = async (directory, filename, newFilename) => {
  await cp(directory, filename, newFilename);
  await rm(directory, filename);
  return { message: `File ${filename} successfully removed.` };
};

const rm = async (directory, filename) => {
  const path = await getRealPath(directory, filename, false)
  await rmPromises(path);
  return { message: `File ${filename} successfully deleted.` };
};
const cat = async (directory, filename) => {
  const path = await getRealPath(directory, filename);
  const readable = createReadStream(path);
  await readable.pipe(stdout);
  return { message: `File ${filename} successfully readed.` };
};

export { add, rn, cp, mv, rm, cat };
