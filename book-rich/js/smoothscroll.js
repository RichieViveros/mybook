/*
FUNCIÓN PARA DARLE UN EFECTO ANIMADO
AL CAMBIAR DE SECCIÓN
*/

$(document).ready(function() {
	var scrollLink = $('.scroll');
	//Smooth scrolling

	scrollLink.click(function(e) {
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top	
		});
	});
});