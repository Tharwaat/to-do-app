//Seeding the DB with dummy data at server initialization

const Task      = require('./schemas/task'),
      DummyData = [
        {
        name: 'task1',
        desc: 'some text',
        priority: 2,
        dueto: new Date().toLocaleDateString()
        },
        {
        name: 'task2',
        desc: 'some text',
        priority: 1,
        dueto: new Date().toLocaleDateString()
        },
        {
        name: 'task3',
        desc: 'some text',
        priority: 3,
        dueto: new Date().toLocaleDateString()
        }
    ];

function SeedDB(){
    Task.remove({}, function(err){
        if(err) throw err;
    });

    DummyData.forEach(function(task){
        Task.create(task, function(err, task){
            if(err) throw err;
            else console.log('Task has been added');
        })
    });
}

module.exports = SeedDB;