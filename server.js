const express = require ('express');
const app = express ();
const bodyParser = require('body-parser');


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

app.listen(3000, function(){
    console.log('listening on 3000')
});
