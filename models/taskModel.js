const task = require('../schemas/task');

class taskModel{
    constructor(){}

    getAllTasks(){
        return new Promise(function(resolve, reject){
            task.find({}, function (err, tasks) {
                ///console.log("visited");
                if (err) reject(err);
                else resolve(tasks);
            })
        })        
    }

    addTask(newTask){
        return new Promise(function(resolve, reject){
            task.create(newTask, function (err, addedTask) {
                if (err) reject (err);
                else resolve(addedTask);                 
            })
        })        
    }

    deleteTask(id){
        task.findByIdAndRemove(id, function(err){
            if(err) throw err;
            else console.log('Task removed successfuly!');
        }) 
    }
}

module.exports = taskModel;