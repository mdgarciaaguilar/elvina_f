$('#get_button').on('click', function(){
  $.ajax({
    //url: 'http://localhost:3000/todos',
    url: 'https://elvina-pasteleria-back.herokuapp.com/products',

    // url: 'https://tuapp.herokuapp.com/todos',
    headers: {
        'Content-Type':'application/json'
    },
    method: 'GET',
    dataType: 'json',
    success: function(data){
      console.log(data)

      let newHtml = ''

      for( let i = 0; i < data.length; i++) {
        // aqui va su código para agregar los elementos de la lista
        //console.log(data[i].description)
        newHtml += `
          <li class="listReq" style="list-style-type:none">
          <legend name="producto" value=${data.length + 1}>
          <span>Categoría: ${data[i].categoria}</span>
          <br>
          <span>Nombre: ${data[i].nombre}</span>
          <br>
          <span>ID: ${data[i]._id}</span>
          <br>
          <span>Descripción: ${data[i].descripcion}</span>
          <br>
          <span>Presentación: ${data[i].presentacion}</span>
          <br>
          <span>Link: ${data[i].link}</span>
          <br>
          <div></div>
          </li>`
        // algo asi:
        // addTodo(data[i]._id, data[i].description, data[i].completed)
        // no tienen que usar la funcion de addTodo, es un ejemplo

      }
      $('#todo-list').append(newHtml)
    },
    error: function(error_msg) {
      alert((error_msg['responseText']));
    }
  });
})


$('#add_button').on('click', function(){
  window.location = './add.html'
})

$('#update_button').on('click', function(){
  window.location = './update.html'
})
$('#delete_button').on('click', function(){
  window.location = './delete.html'
})
