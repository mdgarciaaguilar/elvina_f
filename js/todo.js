var token = localStorage.getItem('token');
if (token) {
  token = token.replace(/^"(.*)"$/, '$1'); // Remove quotes from token start/end.
}


var todos = document.querySelectorAll("input[type=checkbox]");

function loadTodos() {
  $.ajax({
    //url: 'http://localhost:3000/todos',
    url: 'https://examen-final2019.herokuapp.com/todos',

    // url: 'https://tuapp.herokuapp.com/todos',
    headers: {
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + token
    },
    method: 'GET',
    dataType: 'json',
    success: function(data){
      //console.log(data)

      let newHtml = ''

      for( let i = 0; i < data.length; i++) {
        // aqui va su código para agregar los elementos de la lista
        //console.log(data[i].description)
        newHtml += `
          <li>
          <input type="checkbox" name="todo" value=${data.length + 1}>
          <span>${data[i].description}</span>

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
}

loadTodos()


// o con jquery
// $('input[name=newitem]').keypress(function(event){
//     var keycode = (event.keyCode ? event.keyCode : event.which);
//     if(keycode == '13'){
//         $.ajax({})
//     }
// });

var input = document.querySelector("input[name=newitem]");

input.addEventListener('keypress', function (event) {
  if (event.charCode === 13) {
    json_to_send = {
      "description" : input.value
    };
    json_to_send = JSON.stringify(json_to_send);
    $.ajax({
      url: 'https://examen-final2019.herokuapp.com/todos',

      headers: {
          'Content-Type':'application/json',
          'Authorization': 'Bearer ' + token
      },
      method: 'POST',
      dataType: 'json',
      data: json_to_send,
      success: function(data){
        console.log(data)
        // agregar código aqui para poner los datos del todolist en el el html

        let todolist =  $('#todo-list')
       todolist.append(
         `
           <li>
             <input type="checkbox" name="todo" value=${todolist.length + 1}>
             <span>${data.description}</span>
           </li>
         `
       )
     },

      error: function(error_msg) {
        alert((error_msg['responseText']));
      }
    });
    input.value = '';
  }
})


function addTodo(id, todoText, completed) {

}


$('#logout_button').on('click', function(){

  json_to_send = {

  };

  json_to_send = JSON.stringify(json_to_send)
  console.log(json_to_send)
  $.ajax({
    //url: 'http://localhost:3000/login',
    url: 'https://examen-final2019.herokuapp.com/logout',

    // url: 'https://tuapp.herokuapp.com/users/login',
    headers: {
        'Content-Type':'application/json',
        'Authorization': 'Bearer ' + token
    },
    method: 'POST',
    dataType: 'json',
    data: json_to_send,
    success: function(data){
      // guardar token en localstorage o cookie
      // localStorage.setItem('token', data.token)
      window.location = './index.html'
    },
    error: function(error_msg) {
      window.location = './index.html'
      //alert((error_msg["responseText"]))
    }
  })
})
