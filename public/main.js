//DELETE 
//const up = document.getElementById('update');


var del = document.getElementById('delete');
  
  del.addEventListener('click', function () {
    fetch('items',{
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'id': 'req.body._id'
      })
    }).then(response => {
      //console.log(response);
      window.location.reload(response);
    });
  });
    

  var clr = document.getElementById('clear');

  clr.addEventListener('click', function () {
  fetch('deleteitems', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    'items': 'req.body.items'

    })
  }).then(response => {
    window.location.reload(response);
  });
});

    
    
 
