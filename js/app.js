/*vista splash*/
$(document).ready(function(){
  $('.vista-principal, header, .elige, .espacio, .cultura').hide();
	setInterval(function(){
		$('.pantalla-inicio').fadeOut();
    $('.vista-principal, header, .elige, .espacio, .cultura').show();
	}, 1000);
});

