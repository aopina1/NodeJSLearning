// filename: DeleteTask.js
/*
This function opens the task registers and deletes an existing task.
*/

// import Node.js modules
var fs = require('fs');

function DeleteTask(id, task_db_fname){
    fs.exists(task_db_fname, function(exists) {
        if (exists) {// search for task and delete object
            fs.readFile(task_db_fname, function(err, data) {
                if (err) {throw err;}
                else {
                    existingData = JSON.parse(data);
                    let flag = 0;
                    existingData.forEach(function(task,arrIdx){
                        if (task.id == id){
                            existingData.splice(arrIdx,1);
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

module.exports = { DeleteTask }