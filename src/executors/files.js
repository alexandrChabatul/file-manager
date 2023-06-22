import { writeFile, access, rename } from "fs/promises";
import path from "path";

const add = async (directory, filename) => {
  await writeFile(path.join(directory, filename), "");
  return { message: `File ${filename} successfully created.` };
};

const rn = async (directory, filename, newFilename) => {
  const oldPath = path.join(directory, filename);
  const newPath = path.join(directory, newFilename);
  await access(oldPath);
  await rename(oldPath, newPath);
};

const cp = () => {};
const mv = () => {};
const rm = () => {};
const cat = () => {};

export { add, rn, cp, mv, rm, cat };
