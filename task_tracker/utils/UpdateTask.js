// filename: UpdateTask.js
/*
This function opens the task registers and updates an existing task.
If task register does not exist, the function throws an error.
*/

// import Node.js modules
var fs = require('fs');

function UpdateTask(id, updatedTaskName, task_db_fname){
    fs.exists(task_db_fname, function(exists) {
        if (exists) {// search for task and update
            fs.readFile(task_db_fname, function(err, data) {
                if (err) {throw err;}
                else {
                    existingData = JSON.parse(data);
                    let flag = 0;
                    existingData.forEach(function(task,arrIdx){
                        if (task.id == id){
                            if (updatedTaskName == 'mark-in-progress') {
                                task.data.status = 'in-progress';
                            }
                            else if (updatedTaskName == 'mark-done') {
                                task.data.status = 'done';
                            }
                            else {
                                task.data.description = updatedTaskName;
                            }
                            flag = 1;
                        }
                    });
                    if (flag == 0) {
                        throw new Error(`ID N° ${id} does not exists. Please use list method to see existing tasks.`)
                    }
                    let existingDataStr = JSON.stringify(existingData);
                    fs.writeFile(task_db_fname, existingDataStr, function(err){
                        if (err) {throw err};
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

module.exports = { UpdateTask }