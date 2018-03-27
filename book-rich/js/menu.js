var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementsByTagName('nav');

btnMenu.addEventListener('click', function(){
	nav.classList.toggle('mostrar');
})