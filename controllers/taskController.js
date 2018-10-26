const taskModel = require('../models/taskModel');

class taskController extends taskModel{
    constructor(){
        super();
    }

    addNewTask(newTask, callback){
        this.addTask(newTask);
    }

    deleteSelectedTask(id, callback){
        this.deleteTask(id);
    }

    async showAllTasks(){
        let tasks = await this.getAllTasks();

        return new Promise(async function(resolve, reject){            
            if(tasks) resolve(tasks);
            else reject(new Error("Error happend!"));
        })
        //let tasks = await this.getAllTasks();
        //console.log(tasks);
    }
}
module.exports = taskController;