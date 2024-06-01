import inquirer from "inquirer";
import chalk from "chalk";
const ans = await inquirer.prompt([{
        name: "firstNumber",
        type: "number",
        message: "Enter you first number:"
    },
    {
        name: "secondNumber",
        type: "number",
        message: "Enter your second number:"
    },
    {
        name: "operation",
        type: "list",
        message: 'Please select operation type:',
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division']
    }
]);
if (ans.operation === 'Addition') {
    console.log(chalk.red(ans.firstNumber + ans.secondNumber));
}
else if (ans.operation === 'Subtraction') {
    console.log(chalk.blue(ans.firstNumber - ans.secondNumber));
}
else if (ans.operation === 'Multiplication') {
    console.log(chalk.yellowBright(ans.firstNumber * ans.secondNumber));
}
else if (ans.operation === 'Division') {
    console.log(chalk.gray(ans.firstNumber / ans.secondNumber));
}
