
$('#getID_button').on('click', function(){


  $.ajax({
    url: 'https://elvina-pasteleria-back.herokuapp.com/products/' + $('#_id').val(),
    //url: 'http://localhost:3000/products',

    headers: {
        'Content-Type':'application/json'
    },
    method: 'GET',
    dataType: 'json',

    success: function(data){
      //alert("Producto eliminado con exito");
      console.log('success: '+ data);
      //window.location = './index.html'
      $('#categoria').val(data.categoria);
      $('#nombre').val(data.nombre);
      $('#descripcion').val(data.descripcion);
      $('#presentacion').val(data.presentacion);
      $('#link').val(data.link);
    },
    error: function(error_msg) {
      alert((error_msg['responseText']));
    }
  });

});

$('#saveChanges_button').on('click', function(){

  json_to_send = {
    "categoria" : $('#categoria').val(),
    "nombre": $('#nombre').val(),
    "descripcion": $('#descripcion').val(),
    "presentacion": $('#presentacion').val(),
    "link": $('#link').val()
  };

  json_to_send = JSON.stringify(json_to_send);

  $.ajax({
    url: 'https://elvina-pasteleria-back.herokuapp.com/products/' + $('#_id').val(),
    //url: 'http://localhost:3000/products',

    headers: {
        'Content-Type':'application/json'
    },
    method: 'PATCH',
    dataType: 'json',
    data: json_to_send,
    success: function(data){
      alert("Producto modificado con exito");
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

$('#get_button').on('click', function(){
  window.location = './index.html'
})
$('#delete_button').on('click', function(){
  window.location = './delete.html'
})
