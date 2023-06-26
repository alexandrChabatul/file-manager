import { createHash } from "crypto";
import { getRealPath } from "../utils/utils.js";
import { readFile } from 'fs/promises';

const hash = async (directory, filename) => {
    const path = await getRealPath(directory, filename);
    const file = await readFile(path);
    const data = createHash('sha256').update(file).digest('hex');
    return { message: data };
};

export { hash }; 