// requirements: https://roadmap.sh/projects/task-tracker

// import created modules
var userInput = require('./utils/parseUserInput').parseUserInput;
var newTask = require('./utils/addNewTask').addNewTask;

// Task Database filename
const task_db_fname = "tasks_database.json"

// get args
var user_args = process.argv.slice(2);

// process user input
var {action, other, task_name} = userInput(user_args);
console.log(action, other, task_name);
switch(action) {
    case 1:
        newTask(task_name, task_db_fname);
        break;
    default:
        return 0;
}