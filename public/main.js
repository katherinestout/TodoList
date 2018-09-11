//DELETE 
//const up = document.getElementById('update');


var del = document.getElementById('delete');
  
  del.addEventListener('click', function () {
    fetch({ /* request */ })
.then(res => {
  if (res.ok) return res.json()
})
.then(data => {
  console.log(data)
 // window.location.reload(true)
})});