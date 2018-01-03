/*vista splash*/
$(document).ready(function(){
  $('.vista-principal, header').hide();
	setInterval(function(){
		$('.pantalla-inicio').fadeOut();
    $('.vista-principal, header').show();
	}, 1000);
});

