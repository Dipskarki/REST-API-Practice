const express = require('express');
const mongoose = require('mongoose');
//const routes = require('./routes/api');
//set up express app 
const app = express();
const bodyParser = require('body-parser');

// app.get('/api', function(req, res){
//   console.log("GET request");
//   //res.end(); //to end loading page sign
//   res.send({name: "Dips"});
// });

//app.use('/api', routes);
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

//Initialize routes
app.use('/api', require('./routes/api'));

//Error handling middleware
app.use(function(err, req, res, next){
  //console.log(err);
  res.status(422).send({error: err.message})
});

//listen for requests
app.listen(process.env.port || 4000, function(){
  console.log('Listening on port 4000');
});