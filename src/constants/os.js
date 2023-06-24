import { EOL, cpus, homedir, userInfo, arch } from "os";

const osParams = {
  EOL: {
    message: "default system End-Of-Line",
    value: EOL,
  },
  cpus: {
    message: "host machine CPUs info",
    value: cpus(),
  },
  homedir: {
    message: "home directory",
    value: homedir(),
  },
  username: {
    mesasge: "current system username",
    value: userInfo().username,
  },
  architecture: {
    message: "CPU architecture",
    value: arch(),
  },
};

export { osParams };
