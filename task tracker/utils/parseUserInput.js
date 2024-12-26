// filename: parseUserInput.js
/*
This function receives the user inputs and returns the course of action
and the necesary data to app functionality
*/
const errorStr = 
`
\t-"add": Adds a task to the task list. Format: "add task_name"
\t-"update": Updates task_name of existing task. Format: "update task_ID task_new_name"
\t-"delete": Deletes an existing task by task_ID. Format: "delete task_ID"
\t-"mark-in-progress": Marks a task as in-progress by task_ID. Format: "mark-in-progress task_ID"
\t-"mark-done": Marks a task as done by task_ID. Format: "mark-done"
\t-"list": List all tasks. Format: "list"
\t-"list todo": List all To Do tasks. Format: "list todo"
\t-"list in-progress": List all in-progress tasks. Format: "list in-progres"
\t-"list done": List all Done tasks. Format: "list done"
`;

function parseUserInput(user_args) {
    let command = user_args[0];
    switch (command) {
        case "add":
            let new_task_name = user_args[1];
            if (new_task_name == undefined){
                throw new Error("add must be followed by task name. Format: add task_name")
            }
            else if (!(typeof(new_task_name) == 'string')) {
                throw new Error(`${new_task_name} is not a valid text. Task names can be text only.`);
            }
            if (user_args.length > 2) {
                console.log("Warning, 1 arg expected... The rest of the args will be ignored.");
            }
            return {action:1, task_name:new_task_name}
            break;
        case "update":
            let idUpdate = Number(user_args[1]);
            let updatedTaskName = user_args[2];
            if (updatedTaskName == undefined) {
                throw new Error("update must be followed by id and new task name. Format: update id new_task_name")
            }
            else if (!(typeof(updatedTaskName) == 'string')) {
                throw new Error(`${updatedTaskName} is not a valid text. Task names can be text only.`);
            }
            if (!(Number.isInteger(idUpdate))) {
                throw new Error("ID must be an integer.")
            }
            if (user_args.length > 3) {
                console.log("Warning, 2 args expected... The rest of the args will be ignored.");
            }
            return {action:2, id:idUpdate, task_name:updatedTaskName};
            break;
        case "delete":
            let idDelete = Number(user_args[1]);
            if (!(Number.isInteger(idDelete))) {
                throw new Error("ID must be an integer.")
            }
            if (user_args.length > 2) {
                console.log("Warning, 1 arg expected... The rest of the args will be ignored.");
            }
            return {action:3, id:idDelete};
            break;
        case "list":
            let list_type = user_args[1];
            if (!(list_type == undefined || ['todo','in-progress','done'].includes(list_type))){
                throw new Error("list can only be followed by todo/in-progress/done.")
            }
            if (user_args.length > 3) {
                console.log("Warning, 1 or 2 args expected... The rest of the args will be ignored.");
            }
            return {action:4, list_type:list_type}
            break;
        case "mark-in-progress":
            let idUpdateInProgress = Number(user_args[1]);
            if (!(Number.isInteger(idUpdateInProgress))) {
                throw new Error("ID must be an integer.")
            }
            if (user_args.length > 2) {
                console.log("Warning, 1 arg expected... The rest of the args will be ignored.");
            }
            return {action:5, id:idUpdateInProgress};
            break;
        case "mark-done":
            let idUpdateDone = Number(user_args[1]);
            if (!(Number.isInteger(idUpdateDone))) {
                throw new Error("ID must be an integer.")
            }
            if (user_args.length > 2) {
                console.log("Warning, 1 arg expected... The rest of the args will be ignored.");
            }
            return {action:6, id:idUpdateDone};
            break;
        default:
            console.log(`Command "${command}" is not allowed. Please refer to the following available commands:`);
            console.log(errorStr);
            return 0;
    }

}

module.exports = { parseUserInput }