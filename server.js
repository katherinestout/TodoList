const express = require ('express');
const app = express ();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ejs = require('ejs');

app.set('view engine', 'ejs');
//res.render(view, locals);

app.get('/', (req, res) => {
    db.collection('items').find().toArray((err, result) =>{
if (err) return console.log(err);
res.render('index.ejs', {items: result});
    });
});

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

//getting the index file
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')});

/*post route to the submit button
    app.post('/submit', (req, res) => {
        console.log(req.body)
      });*/


//post route to submit a to do item and using insertOne to save to the db
app.post('/items', (req, res)=> {
    db.collection('items').insertOne(req.body, (err, result) =>
    {
        if (err) return console.log(err);
        console.log('saved to db');
        res.redirect('/');
    });
});

//
app.get('/', (req, res) => {
    const cursor = db.collection('items').find().toArray(function(err, results){
    console.log(results);
});
});    





//connection to mlab
MongoClient.connect('mongodb://katie:katiekatie1@ds161059.mlab.com:61059/ktcrudmeantodo', 
(err, client)=> {
    if (err) return console.log(err);
    db = client.db('ktcrudmeantodo');
             
app.listen(3000, () => {
    console.log('listening on 3000 may the node be with you');
});
});
