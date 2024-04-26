#! /usr/bin/env node
import inquirer from "inquirer";

import chalk from "chalk";

console.log(chalk.yellowBright("\t welcome to tata's Typescript quiz\n"))
console.log(chalk.cyanBright("\t BEST OF LUCK!!!\n"))

let quiz_questions = await inquirer.prompt([
    {
    name: "answer_1",
    type: "checkbox",
    message: "what is Typescript?",
    choices:["A JavaScript library",  
             "A programming language",
             "A database management system"],
},
{
   name: "answer_2",
   type: "checkbox",
   message: "Which keyword is used to declare a variable in Typescript?",
   choices: ["let",
             "const",
             "all of the above"],
},
{
    name: "answer_3",
    type: "checkbox",
    message: "What is the benefit of using TypeScript over plain JavaScript?",
    choices: ["Faster execution speed",
              "Stronger type checking",
              "Better browser compatibility"],
},
]);

if(quiz_questions.answer_1.includes("A programming language")){
   console.log(chalk.greenBright("correct answer"))
}
    else{
        chalk.redBright
        console.log(chalk.redBright("wrong answer"))
    }
 if(quiz_questions.answer_2.includes("all of the above")){
    console.log((chalk.greenBright("correct answer")))
 }
    else{
        chalk.redBright
       console.log(chalk.redBright("wrong answer"))
    }
if(quiz_questions.answer_3.includes("Stronger type checking" )){
    console.log(chalk.greenBright("correct answer"))
}
  else{
    chalk.redBright
    console.log(chalk.redBright("wrong answer"))
  }
 console.log(chalk.magentaBright("\t thank you for taking this quiz\n"));