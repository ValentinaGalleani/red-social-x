/*vista splash*/
$(document).ready(function(){
  $('.vista-principal, header, .elige, .espacio, .cultura').hide();
	setInterval(function(){
		$('.pantalla-inicio').fadeOut();
    $('.vista-principal, header, .elige, .espacio, .cultura').show();
	}, 1000);
});

$('#acceder').click(function () {
  window.location = 'index.html';
  return false;
})

$('#ingresar').click(function () {
  window.location = 'principal.html';
  return false;
})

$('.espacio').click(function () {
  window.location = 'muro.html';
  return false;
})














/**
console.log(data);



var musica = $('.Música');
var cine = $('.Cine');
var diseño = $('.Diseño');
var teatro =$('.Teatro');
var danza = $('.Danza');
var literatura = $('.Literatura');
var allCategories = $('.all-categories');
*/



