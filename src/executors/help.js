import { commands } from "../constants/commands.js";

const help = () => {
  return Object.entries(commands).reduce((acc, el) => {
    acc += `${el[0]} - ${el[1].description}\n`;
    return acc;
  }, '\n')
};

export { help };
