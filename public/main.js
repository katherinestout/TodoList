//Delete one event

const del = document.getElementById('delete');
  
  del.addEventListener('click', () => {
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
    
  //Delete all event

  const clr = document.getElementById('clear');

  clr.addEventListener('click', () => {
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

//Replace 'Walk the dog' with shopping

const upd = document.getElementById('update');

upd.addEventListener('click', () => {
  fetch('updateitem', {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'item': 'Walk the dog'

    })
  }).then(response => {
    console.log(response);
    window.location.reload(response);
  });
});
    
    
 
