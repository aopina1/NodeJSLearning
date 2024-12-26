// filename: ListTask.js
/*
This function opens the task registers and deletes an existing task.
*/

// import Node.js modules
var fs = require('fs');

function ListTask(list_type,task_db_fname){
    fs.exists(task_db_fname, function(exists) {
        if (exists) {// search for task and delete object
            fs.readFile(task_db_fname, function(err, data) {
                if (err) {throw err;}
                else {
                    existingData = JSON.parse(data);
                    if (list_type == undefined){
                        console.log("List of all task:");
                    }
                    else {
                        console.log(`List of all tasks with status "${list_type}":`)
                    }
                    existingData.forEach(function(task,arrIdx){
                        if (!(list_type == undefined)){
                            if (task.data.status == list_type) {
                                console.log(`\tTask ID: ${task.id} | Task: ${task.data.description} | Status: ${task.data.status}`);
                            }
                        }
                        else {
                            console.log(`\tTask ID: ${task.id} | Task: ${task.data.description} | Status: ${task.data.status}`);
                        }
                    });
                }
            }
            );
        }
        else {// if file does not exists it means that database has not been created yet.
            throw new Error(`${task_db_fname} has not been created yet. Try creating a new task with add method first.`);
        }
    }
    );
}

module.exports = { ListTask }