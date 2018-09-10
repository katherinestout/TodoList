const express = require ('express');
const app = express ();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

/*
MongoClient.connect('link-to-mongodb', (err, database)=>{
    'mongodb://katie:katiekatie1@ds161059.mlab.com:61059/ktcrudmeantodo'
});*/


//body parser middleware
/*side note: the url encoded method within bodyparser tells bodyparser to extract
data from the form element and then add it to the body property in the REQUEST object*/
app.use(bodyParser.urlencoded({extended: true}));

//console.log('may the node be with you');



/*
app.get('/', (req, res) => {
    res.send('Hello World')
  }); */


  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')});

    app.post('/submit', (req, res) => {
        console.log(req.body)
      });

    


MongoClient.connect('mongodb://katie:katiekatie1@ds161059.mlab.com:61059/ktcrudmeantodo', 
(err, client)=> {
    if (err) return console.log(err);
    db = client.db('ktcrudmeantodo');
             
app.listen(3000, () => {
    console.log('listening on 3000 may the node be with you');
});
});
