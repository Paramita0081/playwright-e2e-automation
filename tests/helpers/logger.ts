import {test} from "@playwright/test";
import chalk from "chalk";

type level= "log"|"info"|"warn"|"error";

export async function log(level: level, message: string){
    const timestamp = new Date().toISOString();
    const formattedMessage = `${timestamp} [${level.toUpperCase()}] ${message}`;
    let coloredline = formattedMessage;

    //Pick color based on log level
    switch(level){
        case "log":
            coloredline = chalk.white(formattedMessage);
            break;
        case "info":
            coloredline = chalk.blue(formattedMessage);
            break;
        case "warn":
            coloredline = chalk.yellow(formattedMessage);
            break;
        case "error":
            coloredline = chalk.red(formattedMessage);
            break;
    }
    

    //print colored message to terminal
    (console[level] || console.log) (coloredline);

    //send plain text message to test report

    
    

    //await test.step(formattedMessage, async () => {});
   // test.info().annotations.push({ type: level, description: message });    
}

