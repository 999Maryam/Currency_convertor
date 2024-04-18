#! /usr/bin/env node
import inquirer from "inquirer";

let currencies ={
    "PKR":{
        "USD": 0.0036,
        "UAE": 0.013,
        "PKR": 1
    },
    "USD" :{
        "USD": 1,
        "UAE": 3.67,
        "PKR": 279.22
    },
    "UAE" :{
        "USD": 0.27,
        "UAE": 1,
        "PKR": 76.03 
    }
}
type next={
    from: "PKR" | "USD" | "UAE",
     to: "PKR" | "USD" | "UAE",
     amount: number
}
let answer: next = await inquirer.prompt([
    {
        name: "amount",
        message: "Enter your amount:",
        type: "number"
    
    },
    {
        name: "from",
        message: "Select your currency:",
        type: "list",
        choices: ["PKR", "USD", "UAE"]
    },
    {
        name: "to",
        message: "Select your convertion currency",
        type: "list",
        choices: ["PKR", "USD", "UAE"]
    }
]);
let {from ,to ,amount}=answer
if(from && to && amount){
    let result = currencies[from][to]*amount;
    console.log(`Your result from ${from} to ${to} is ${result}`)
}
else{
    console.log("invalid input");
}