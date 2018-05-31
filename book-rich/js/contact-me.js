$(document).ready(function(){
       $("#Formulario").submit(function( event ){
		event.preventDefault();

		$.ajax({
			type: 'POST',
			url: 'contacto.php',
			data: $(this).serialize(),
			success: function(data){
				$("#respuesta").slideDown();
				$("#respuesta").html(data);
                $('#respuesta2').modal('show');
                document.getElementById('Formulario').reset();
			}
		});
		return false;
	});
});