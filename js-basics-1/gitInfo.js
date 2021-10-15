/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = "Git is a local software (installed on one's device), which initiates a snapshot of one's code through a git init, add, commit and push process of commands. When Git is connected via GitHub (which acts as cloud storage): Git allows a user to execute steps in the terminal to upload user code to GitHub. This code is stored in the online repository in GitHub."
//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
let gitHubDefinition = "GitHub is the cloud storage space for your code. GitHub allows a user to create a repository, which is linked to Git via the 'git push' command in one's GitBash terminal. GitBash commands provide the file/file changes to be uploaded to GitHub (git init, git add ., git commit -m '', and git push)."
//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE
let init = ["This command communicates a local repository is opened.", git init]
//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
let clone = ["This command makes a duplicate/copy of the user's code", git clone]
//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
let status = ["This command tells a user if the branch is up to date, recommends any changes not yet commited and lets a user know if changes were made to the commit.", git status]
//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
let add = ["This command adds all the files in the file folder to be committed and pushed to GitHub.", git add .]
//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
let commit = ["This command commits the added files with a message to GitHub. The message typically depicts what changes and additions were made.", git commit -m "message string"]

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
let push = ["This command sends the files to the GitHub repository. This repository is typically linked at initialization once all other steps are performed (e.g. git init, git add ., git commmit -m) and 'push code' is copied from GitHub into a user's terminal.", git push ]