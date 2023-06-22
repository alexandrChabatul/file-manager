import path, { isAbsolute } from "path";
import { checkPath } from "../utils/utils.js";
import { readdir } from "fs/promises";

const up = (directory) => {
  const pathArr = directory.split("\\");
  const newPath =
    pathArr.length > 1 ? pathArr.slice(0, -1).join("\\") : directory;
  return {
    directory: newPath,
  };
};

const cd = async (directory, userPath) => {
  if (isAbsolute(userPath)) {
    await checkPath(userPath);
    return { directory: userPath };
  }
  const newPath = path.join(directory, userPath);
  await checkPath(newPath);
  return { directory: newPath };
};

const ls = async (directory) => {
  const table = (await readdir(directory, { withFileTypes: true })).map(
    (dirent) => ({
      name: dirent.name,
      type: dirent.isDirectory() ? "Directory" : "File",
    })
  );
  return {
    message: table,
    viewType: "table",
  };
};

export { up, cd, ls };
