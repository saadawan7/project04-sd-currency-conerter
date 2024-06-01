#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    PKR: 1,
    USD: 0.0036,
    GBP: 0.0029,
    SAR: 0.013,
    INR: 0.30,
};
let conversion = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Select The Currency You Want To Convert From",
        choices: ["PKR", "USD", "GBP", "SAR", "INR"],
    },
    {
        name: "to",
        type: "list",
        message: "Select The Currency You Want To Convert InTo",
        choices: ["PKR", "USD", "GBP", "SAR", "INR"],
    },
    {
        name: "amount",
        type: "number",
        message: "Select The Amount You Want To Convert ",
    }
]);
let from_amount = currency[conversion.from];
let to_amount = currency[conversion.to];
let amount = conversion.amount;
let baseamount = amount / from_amount;
let Converted = Math.floor(baseamount * to_amount);
console.log(Converted);
