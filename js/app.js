/*vista splash*/
$(document).ready(function(){
  $('.vista-principal, header, .elige, .espacio, .cultura').hide();
	setInterval(function(){
		$('.pantalla-inicio').fadeOut();
    $('.vista-principal, header, .elige, .espacio, .cultura').show();
	}, 1000);
});

/**
console.log(data);


* Creo todas las variables que voy a utilizar
* y guardo en cada una de ellas los div vacíos del html donde irá
* toda la información sacada de la data

var musica = $('.Música');
var cine = $('.Cine');
var diseño = $('.Diseño');
var teatro =$('.Teatro');
var danza = $('.Danza');
var literatura = $('.Literatura');
var allCategories = $('.all-categories');
*/



