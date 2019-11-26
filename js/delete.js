
console.log('https://elvina-pasteleria-back.herokuapp.com/products/' + $('#_id').val())

$('#signup_button').on('click', function(){

  json_to_send = {
    "_id" : $('#_id').val()
  };

  json_to_send = JSON.stringify(json_to_send);

  $.ajax({
    url: 'https://elvina-pasteleria-back.herokuapp.com/products/' + $('#_id').val(),
    //url: 'http://localhost:3000/products',

    headers: {
        'Content-Type':'application/json'
    },
    method: 'DELETE',
    dataType: 'json',
    data: json_to_send,
    success: function(data){
      alert("Producto eliminado con exito");
      console.log('success: '+ data);
      window.location = './index.html'
    },
    error: function(error_msg) {
      alert((error_msg['responseText']));
    }
  });

});


$('#add_button').on('click', function(){
  window.location = './add.html'
})

$('#update_button').on('click', function(){
  window.location = './update.html'
})
$('#get_button').on('click', function(){
  window.location = './get.html'
})
