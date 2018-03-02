$(document).ready(function(){

var listadoCampanyas;
var listadoAportacion;
var idCamp;
var key = localStorage.getItem("key");

$(document).ready(function(){

  var nombre = localStorage.getItem("nombre");
    $('#nombre').text(nombre);

  var grupo = localStorage.getItem("grupo");
   $('#grupo').text(grupo);

   console.log(key);
});

function Campanya(nombre){
  this.nombre = nombre
  this.id = id
}


function mostrarMisCampanyas(){
  listadoCampanyas.forEach(function(Campanya){
    var htmlCampanyas = `<div class="col-lg-3 mb-3 alineado datoCamp" id="`+Campanya.id+`">
      <div class="card">
        <div class="card-header titulo">${Campanya.nombre}</div>
        <div class="card-block">
          <p class="contenido">Cantidad Aportada</p>
          <h3 class="contenido"></h3>
        </div>
        <div class="card-header titulo">
          <a href="#" data-toggle="modal" data-target="#modalAportaciones" class="agregarDato"><i class="fa fa-plus icon" aria-hidden="true">APORTAR</i></a>
          <a href="#" class="info"><i class="fa fa-info-circle icon" aria-hidden="true">INFO</i></a>
          <a href="#"><i class="fa fa-star icon" aria-hidden="true">RANKING</i></a>
        </div>
      </div>
    </div>`;
    $("#listaMisCampanyas").append(htmlCampanyas);
  });
}

$.ajax({
  method: "GET",
  headers: {key, key},
  url: "http://localhost:8080/campaign/myList"
})
.done(function(respuesta) {
  // respuesta > es un objeto JSON que recibo del servidor
  console.log(respuesta);
  listadoCampanyas = respuesta;
  mostrarMisCampanyas();
})
.fail(function( error){
  console.log(error);
});



//Mostrar los datos para misAportaciones
function listaDatosMaestros(nombre,id){
  this.nombre = nombre
  this.id = id

}

//Muestra los datos maestros en el option
function mostrarDatosMaestros(){
  $("#listaAportaciones").html("");
  console.log("aportaciones: "+listadoAportacion);
  listadoAportacion.forEach(function(listaDatosMaestros){
    let htmlAportaciones = `<option value="${listaDatosMaestros.id}">${listaDatosMaestros.nombre}</option>`;

    $("#listaAportaciones").append(htmlAportaciones);
  });
}

//Mostrar datos maestros
$(document).on("click", ".agregarDato", function(){

    idCamp=$(this).closest(".datoCamp").attr("id");

    $.ajax({
      method: "GET",
      url: "http://localhost:8080/campaign/datosgrupo",
      headers: {id : idCamp, key: key}
    })
      .done(function(respuesta) {

        console.log(respuesta);
        listadoAportacion=respuesta;
        mostrarDatosMaestros();
    })
    .fail(function(error){
        alert("Error");
    });

});


//Agregar una aportacion
$(document).on("click", "#btn-guardar-aportacion", function(){

console.log($("#cantidad-aportacion").val());

console.log($("#listaAportaciones").val());


var cantidad =$("#cantidad-aportacion").val();
var idDato=$("#listaAportaciones").val();




$.ajax({
  method: "POST",
  url: "http://localhost:8080/campaign/add",
  headers: {cantidad: cantidad, key: key, id_campanya: idCamp, id_dato: idDato}

})
  .done(function(respuesta) {
    alert("Aportado satisfactoriamente");
    $("#modalAportaciones").modal("hide");
  })
  .fail(function(error){
    alert("Lo siento, no se ha podido aportar nada");
  });


});



//Ir a tus aportaciones
$(document).on("click", ".info", function(){
  window.location.href = "#";

  idCampan=$(this).closest(".datoCamp").attr("id")

  localStorage.setItem("idCamp",idCamp);


});

});
