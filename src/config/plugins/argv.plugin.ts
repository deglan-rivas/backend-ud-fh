import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const argvs = yargs(hideBin(process.argv)).parseSync();

