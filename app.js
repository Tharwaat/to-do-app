//Dependencies
const express        = require('express'),
      app            = express(),
      mongoose       = require('mongoose'),
      methodOverride = require('method-override'),
      BodyParser     = require('body-parser'),
      seed           = require('./seed'),
      dbUrl          = 'mongodb://mongo:27017/todoApp',
      TaskRoutes     = require('./routes/task');

//Db Connection
mongoose.connect(dbUrl, {useNewUrlParser: true}, function(err, db){
    if(err) throw err;
    else console.log('DB Connected!');
});

//Adding dummy data
seed();

//App configurations
app.set('view engine', 'ejs');
app.use(BodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

//Routes
app.use(TaskRoutes);

app.get('/', function(request, response){
    response.render('main');
})

//Starting server
process.env.port = 3000;
app.listen(process.env.port, function(){
    console.log('Server is running on ' + process.env.port);
});