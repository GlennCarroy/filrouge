//HEADER
//Smooth scroll navigation

$(document).ready(function() {
		$('.js-scrollTo').click(function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 1000; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Fonction "scrollTop"
			return false;
		});
	});
