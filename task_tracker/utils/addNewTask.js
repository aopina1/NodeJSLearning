// filename: addNewTask.js
/*
This function opens the task registers and append a new task.
If task register does not exist, the function creates it
*/

// import Node.js modules
var fs = require('fs');

function addNewTask(task_name, task_db_fname){
    fs.exists(task_db_fname,function(exists) {
        if (exists) {// append object
            fs.readFile(task_db_fname, function(err, data) {
                if (err) {throw err;}
                else {
                    existingData = JSON.parse(data);
                    let existing_ids = [];
                    existingData.forEach(function(task,arrIdx){existing_ids.push(task['id']);});
                    let new_id = 0
                    for (;;new_id++) {
                        if (!(existing_ids.includes(new_id))) {
                            break;
                        }
                    }
                    let taskObj = {
                        id:new_id,
                        data:{
                            description:task_name,
                            status:"todo",
                            createdAt:new Date(),
                            updatedAt:new Date(),
                        }
                    };
                    existingData.push(taskObj);
                    let existingDataStr = JSON.stringify(existingData);
                    fs.writeFile(task_db_fname, existingDataStr, function(err){
                        if (err) {throw err};
                    });
                }
            }
            );
        }
        else {// insert first object with id=0
            let taskObj = {
                id:0,
                data:{
                    description:task_name,
                    status:"todo",
                    createdAt:new Date(),
                    updatedAt:new Date(),
                }
            };
            let taskStr = "["+JSON.stringify(taskObj)+"]";
            fs.appendFile(task_db_fname, taskStr, function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
        }
    }
    );

}

module.exports = { addNewTask }