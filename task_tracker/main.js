// requirements: https://roadmap.sh/projects/task-tracker

// import created modules
var userInput = require('./utils/parseUserInput').parseUserInput;
var newTask = require('./utils/addNewTask').addNewTask;
var updateTask = require('./utils/UpdateTask').UpdateTask;
var deleteTask = require('./utils/DeleteTask').DeleteTask;
var listTask = require('./utils/ListTask').ListTask;

// Task Database filename
const task_db_fname = "tasks_database.json"

// get args
var user_args = process.argv.slice(2);

// process user input
var {action, id, task_name, list_type} = userInput(user_args);
switch(action) {
    case 1:
        newTask(task_name, task_db_fname);
        break;
    case 2:
        updateTask(id, task_name, task_db_fname);
        break;
    case 3:
        deleteTask(id, task_db_fname);
        break;
    case 4:
        listTask(list_type, task_db_fname);
        break;
    case 5:
        updateTask(id, task_name='mark-in-progress', task_db_fname);
        break;
    case 6:
        updateTask(id, task_name='mark-done', task_db_fname);
        break;
    default:
        return 0;
}