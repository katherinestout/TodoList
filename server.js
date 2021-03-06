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
        console.log('Item saved to db');
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


//DELETE route 
//Delete first item on list

app.delete('/items', (req, res)=> {
    db.collection('items').findOneAndDelete({id: req.body._id}, (err, result) => {
        //{_id: 1}, {pop: {scores: -1}}
        if (err) return res.send(500, err);
        console.log('One item deleted');
       // console.log(result);
        res.redirect('/');
      
    });
});

//PUT route to replace first item

app.put('/updateitem', (req, res) => {
    db.collection('items').findOneAndUpdate({item: 'Walk the dog'}, {
        $set: {
            'item': 'Go shopping!'
        }
    },
        (err, result)=> {
        if (err) return res.send(500, err);
        console.log('You replaced walking the dog!');
        res.redirect('/');
    });

});


//DELETE ALL route
//clear the whole list

app.delete("/deleteitems", (req, res) => {
    db.collection('items').drop({}, (err, result) => {
        if(err) return console.log(err);
        console.log('You deleted everything!');
        res.redirect('/');
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
