console.log("Welcome to the password validator")
let password = console.log("Please provide your password for validation.")
password.prompt("")
if (password.length >= 13) {
    console.log("Success, your password meets the criteria.")
} else if (password.length < 13) {
    console.log("Failure, your password is too short.")
}