const taskModel = require('../models/taskModel');

class taskController extends taskModel{
    constructor(){
        super();
    }

    async addNewTask(newTask, res){
        this.addTask(newTask).then(addedTask =>{
            console.log("Task's been added!");
            console.log(addedTask);
            res.redirect('/tasks');
        })
        .catch(err =>{
            console.log(err);
            res.redirect('/tasks');
        });
    }

    deleteSelectedTask(id, res){
        this.deleteTask(id).then(()=>{
            res.redirect('/tasks');
        })
        .catch(err =>{
            console.log(err);
        })
    }

    async showAllTasks(){
        let tasks = await this.getAllTasks();

        return new Promise(async function(resolve, reject){            
            if(tasks) resolve(tasks);
            else reject(new Error("Error happend!"));
        })
    }
}
module.exports = taskController;