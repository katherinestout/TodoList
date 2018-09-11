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
    
    
    
 
