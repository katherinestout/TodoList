//PUT request when the update button is clicked
//const up = document.getElementById('update');
const del= document.getElementById('delete');
//const update = document.getElementById('update');
/*
update.addEventListener('click', function () {
    fetch('quotes', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'name': 'Darth Vader',
        'quote': 'I find your lack of faith disturbing.'
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
    })
  }) */
  
  del.addEventListener('click', function () {
    fetch('items', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'item': 'Walk the dog'
 
      })
    }).then(function (response) {
      window.location.reload();
    });
  });