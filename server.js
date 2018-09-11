const express = require ('express');
const app = express ();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ejs = require('ejs');
//const axios = require('axios');



//setting ejs, dynamically generated
app.set('view engine', 'ejs');
//body parser middleware
/*side note: the url encoded method within bodyparser tells bodyparser to extract
data from the form element and then add it to the body property in the REQUEST object*/
app.use(bodyParser.urlencoded({extended: true}));
//express.static middleware, tells Express to make public folder acessible to public
app.use(express.static('public'));
app.use(bodyParser.json());

//GET request
//rendering the index.ejs file so it is dynamically generated
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


//console.log('may the node be with you');

//GET request
//getting the index file
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')});

//POST request
//submit a to do item and using insertOne to save to the db
app.post('/items', (req, res)=> {
    db.collection('items').insertOne(req.body, (err, result) =>
    {
        if (err) return console.log(err);
        console.log('saved to db');
        res.redirect('/');
    });
});

//GET request
//getting all of the todo items
app.get('/', (req, res) => {
    const cursor = db.collection('items').find().toArray(function(err, results){
    console.log(results);
});
});    

/*
app.put('/items', (req, res) => {
    db.collection('items').findOneAndUpdate()
}) */
//app.updateOne('/items', ())

/*
app.delete('/items', (req, res) => {
    db.collection('items').findOneAndDelete({item: req.body.item}, (err, result) => {
      if (err) return res.send(500, err);
     console.log('Your first item was deleted');
     //res.redirect('/');
    });
  });
*/
  /* - - - -
app.delete('/items', (req, res)=> {
    db.collection('items').findOneAndDelete({_id: 1}, {pop: {scores: -1}}, (err, result) =>{
        if (err) return res.send(500, err);
        console.log('one deleted');
       
        //console.log(items);

    } );
   
});
*/
app.delete('/items', (req, res)=> {
    db.collection('items').findOneAndDelete({id: req.body._id}, (err, result) => {
        //{_id: 1}, {pop: {scores: -1}}
        if (err) return res.send(500, err);
        console.log('one deleted');
       // console.log(result);
      
    });
});


//connection to mlab, listening on PORT 3000
MongoClient.connect('mongodb://katie:katiekatie1@ds161059.mlab.com:61059/ktcrudmeantodo', 
(err, client)=> {
    if (err) return console.log(err);
    db = client.db('ktcrudmeantodo');

             
app.listen(3000, () => {
    console.log('listening on 3000 may the node be with you');
});
});
