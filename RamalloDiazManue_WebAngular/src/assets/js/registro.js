
$(document).on("click","#btnRegistro",function(){
  var e = $("#inputGmail").val();
  var n = $("#inputNombre").val();
  var p = $("#inputPassword").val();
  var g = $("#inputGrupo").val();

  $.ajax({
    method: "POST",
    url: "http://localhost:8080/auth/register",
    data: { gmail: e, password: p, nombre: n, grupo: g }
  })
  .done(function(respuesta) {

    let key = respuesta.key;
    let nombre = respuesta.nombre;
    let gmail = respuesta.email;
    let grupo = respuesta.grupo;

    localStorage.setItem("key",key);
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("grupo", grupo);

    console.log(nombre);
    window.location.href = "index.html";
    //window.location.replace("index.html");
  })

  .fail(function(error){
    alert("Faltan datos por completar o el grupo está ya en uso");
    console.log(error);
  });


});
