const express = require ('express');
const app = express ();

//console.log('may the node be with you');



/*
app.get('/', (req, res) => {
    res.send('Hello World')
  }); */

  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')});


app.listen(3000, function(){
    console.log('listening on 3000')
});
