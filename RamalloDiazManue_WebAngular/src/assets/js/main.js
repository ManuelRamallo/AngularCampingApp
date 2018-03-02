
var listadoCampanyas;

//Muestra el nombre y el grupo
$(document).ready(function(){

  var nombre = localStorage.getItem("nombre");
    $('#nombre').text(nombre);

  var grupo = localStorage.getItem("grupo");
   $('#grupo').text(grupo);


});

//Definicion objeto tipo campaña
function Campanya(nombre){
  this.nombre = nombre
}

//Mostrar las campañas
function mostrarCampanyas(){
  $("#listaCampañas").html("");
  listadoCampanyas.forEach(function(Campanya){
    let htmlCampanya = `<div class="col-lg-3 mb-3 alineado" id="campanya">
      <div class="card">
        <div class="card-header titulo">${Campanya.nombre}</div>
        <div class="card-block">
          <p class="contenido">Cantidad Total</p>
          <h3 class="contenido"></h3>
        </div>
        <div class="card-header titulo">
          <a href="#" data-toggle="modal" data-target="#modalUnirseCampaña" class="btn-unir"><i class="fa fa-plus icon" aria-hidden="true"> UNIRSE</i></a>
        </div>
      </div>
    </div>`;
    $("#listaCampanyas").append(htmlCampanya);
  });
}

$.ajax({
  method: "GET",
  data: {},
  url: "http://localhost:8080/campaign/list"
})
.done(function(respuesta) {
  // respuesta > es un objeto JSON que recibo del servidor
  console.log(respuesta);
  listadoCampanyas = respuesta;
  mostrarCampanyas();
})
.fail(function( error){
  console.log(error);
});



// UNIRSE A UNA CAMPAÑA
var key = localStorage.getItem("key");

$(document).on("click", "#btn-unirse-campanya", function(){


$.ajax({
  method: "POST",
  url: "http://localhost:8080/campaign/join",
  headers: {key: key, codigo: $("#codigo-campanya").val() }
})
  .done(function(respuesta) {
    alert("Te has unido satisfactoriamente");
    window.location.href = "misCampañas.html";

  })
  .fail(function(error){
    alert("Lo siento, no se ha unido a la campaña, recuerde escribir el codigo en mayusculas");
  });
});
