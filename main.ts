#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"

const answers : {
    numberOne: number,
    numberTwo:number,
    operator:string
} = await inquirer.prompt(
[
    {
        type:"number",
        name:"numberOne",
        message:"Enter ypur first number"
    },

    {
        type:"number",
        name:"numberTwo",
        message:"Enter ypur second number"

    },

    {
        type:"list",
        name:"operator",
        message:"Select which operation you want to perform",
        choices:["+","-","*","/"]

    }
]
)
const{numberOne,numberTwo,operator}=answers;

let result
switch (operator) {
    case "+":result=numberOne+numberTwo
    break;
    case "-":result=numberOne-numberTwo
    break;
    case "*":result=numberOne*numberTwo
    break;
    case "/":result=numberOne/numberTwo
    break;

    default:
        console.log("Invalid operator");
        
        break;
}

console.log(chalk.greenBright(`${numberOne}${operator}${numberTwo}=${result}`));
