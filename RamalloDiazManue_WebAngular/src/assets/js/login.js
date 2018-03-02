
$(document).on("click","#btnLogin",function() {
  var e = $("#inputEmail").val();
  var p = $("#inputPassword").val();

  $.ajax({
    method: "POST",
    url: "http://localhost:8080/auth/login",
    data: { gmail: e, password: p }
  })
  .done(function( respuesta ) {
    let key = respuesta.key;
    let nombre = respuesta.nombre;
    let email = respuesta.email;
    let grupo = respuesta.grupo;

    localStorage.setItem("key",key);
    localStorage.setItem("nombre",nombre);
    localStorage.setItem("grupo",grupo);
    window.location.href = "index.html";
  })
  .fail(function( error){
    alert("Login incorrecto");
    console.log(error);
  });

});
