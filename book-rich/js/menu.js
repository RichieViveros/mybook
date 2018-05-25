
/* Muestra y esconde el menú*/

var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav');

btnMenu.addEventListener('click', function(){
	nav.classList.toggle('mostrar');
});

/* Cambia la forma de la hamburguesa a la X */

$(function () {
	$('.hamburger').click(function () {
	    $('.hamburger').toggleClass('open');
	});
});

/* Función para activar elemento li */

$("document").ready(function(e) {
	$("nav ul li a").click(function(e) {
		$("nav ul li a").removeClass('active');
		$(this).addClass('active');
	});
});

/* Función para elegir elemento li escondiendo el menú */

$(function (){
	$('nav ul li a').click(function () {
		nav.classList.toggle('mostrar');
		/* Al mismo tiempo regresa al icono de hamburguesa 
		cuando se elige un elemento li */
		$('.hamburger').toggleClass('open');
	})
})

/* $('.filter-btn a').click(function(){
	$('.filter-btn').removeClass('open');
 });
});
*/