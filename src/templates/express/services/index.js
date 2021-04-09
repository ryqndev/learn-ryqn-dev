import chalk from 'chalk';
import {init as initDB} from '../libs/lowdb.js';

function init(){
    console.log(chalk.cyanBright("============ SERVER START =============="));
    console.log(chalk.cyanBright("Initializing all services:\n"));
    initDB();
    console.log("\n");
}

export default init;