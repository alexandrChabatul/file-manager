import { osParams } from "../constants/os.js";

const os = (directory, param) => {
    const paramArr = param.split('--');
    if (paramArr.length < 2 || !osParams[paramArr[1]]) {
        throw Error(`${param} is not defined... Try one of this values:\n  ${getDefaultMessage()}`);
    }
    return { message: osParams[paramArr[1]].value };
};

const getDefaultMessage = () => {
    return Object.entries(osParams).reduce((acc, el) => {
          acc += `--${el[0]} - ${el[1].message}\n`;
          return acc;
        }, '\n')
}

export { os };