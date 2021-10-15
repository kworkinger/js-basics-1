//This code will allow a user to determine if they've used enough characters in their password.
const readline = require("readline")
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

reader.question("Please provide your password for validation. ", function (answer){
    if (answer.length >= 13){
        console.log("Success, your password meets the criteria.")
    } else {
        console.log("Failure, your password is too short.")
    }
})
