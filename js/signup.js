


$('#signup_button').on('click', function(){

  json_to_send = {
    "categoria" : $('#categoria').val(),
    "nombre": $('#nombre').val(),
    "descripcion": $('#descripcion').val(),
    "presentacion": $('#presentacion').val(),
    "link": $('#link').val()
  };

  json_to_send = JSON.stringify(json_to_send);

  $.ajax({
    url: 'https://elvina-pasteleria-back.herokuapp.com/products',
    //url: 'http://localhost:3000/products',

    headers: {
        'Content-Type':'application/json'
    },
    method: 'POST',
    dataType: 'json',
    data: json_to_send,
    success: function(data){
      alert("Producto creado con exito");
      console.log('success: '+ data);
      window.location = './signup.html'
    },
    error: function(error_msg) {
      alert((error_msg['responseText']));
    }
  });

});
