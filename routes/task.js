const express        = require('express'),
      router         = express.Router(),
      mongoose       = require('mongoose');
      task           = require('../controllers/taskController');
      TaskController = new task();

router.get('/tasks', function (req, res) {
      TaskController.showAllTasks().then(tasks =>{
            res.render('home', {tasks: tasks});
      }).catch(err =>{
            throw err;
      });  
})

router.get('/tasks/new', function (req, res) {
      res.render('task/new');
})

router.get('/tasks/:id', function (req, res) {

})

router.post('/tasks', function (req, res) {
      let newTask = req.body.task;
      task.create(newTask, function (err, addedTask) {
            if (err) throw err;
            else {
                  console.log(addedTask);
                  res.redirect('/tasks');
            }
      })
})

router.delete('/tasks/:id', function (req, res) {
      let id = mongoose.Types.ObjectId(req.params.id);
      
      TaskController.deleteSelectedTask(id);     
})

module.exports = router;