#!/usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "UserGuessdNumber",
        type: "number",
        message: "please guess a number between 1-6:",
    }
]);
if (answers.UserGuessdNumber === randomNumber) {
    console.log("congratulations! you guessed a right number.");
}
else {
    console.log("you guessed wrong number");
}
