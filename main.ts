#!/usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";

// step 01
const answer: {
numberOne: number
numberTwo: number
operator: string
} 
= await inquirer.prompt([
{ type: "number",
   name: "numberOne",
   message: " Enter your first number"
},
{ type: "number",
  name:  "numberTwo",
  message: "Enter your Second number"
},
{ type: "list",
  name: "operator",
  message: "Enter your operator",
  choices: ["+", "-", "*", "/"]}
])
// step 2
const { numberOne, numberTwo, operator } = answer;

let result 
switch (operator) {
    case "+" : result = numberOne + numberTwo;
         break;
         case "-" : result = numberOne - numberTwo;
            break;
            case "*" : result = numberOne * numberTwo;
            break;
            case "/" : result = numberOne / numberTwo;
                break;
                default:
                    console.log("Invalid operator");
                }
        console.log(chalk.yellow(`${numberOne} ${operator} ${numberTwo} = ${result}`))
                
