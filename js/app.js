window.addEventListener('load', function(){
	new Glider(document.querySelector('.slider__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		arrows: {
			prev: '.slider__anterior',
			next: '.slider__siguiente'
		},
		responsive: [
			{
			breakpoint: 450,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
			},{
			breakpoint: 800,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
			}
		]
	});
	var btnAbrirPopup = document.getElementById('play'),
    ventana_emergente = document.getElementById('ventana_emergente'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn_cerrar');

    btnAbrirPopup.addEventListener('click', function(){
	    ventana_emergente.classList.add('active');
	    popup.classList.add('active');
    });

    btnCerrarPopup.addEventListener('click', function(){
	    ventana_emergente.classList.remove('active');
	    popup.classList.remove('active');
    });

});




window.addEventListener('load', function(){
	new Glider(document.querySelector('.slider__lista2'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		arrows: {
			prev: '.slider__anterior2',
			next: '.slider__siguiente2'
		},
		responsive: [
			{
			breakpoint: 450,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
			},{
			breakpoint: 800,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			}
			}
		]
	});


	new Glider(document.querySelector('.slider__lista3'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		arrows: {
			prev: '.slider__anterior3',
			next: '.slider__siguiente3'
		},
		responsive: [
			{
			breakpoint: 450,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
			},{
			breakpoint: 800,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
			}
		]
	});
});




new Glider(document.querySelector('.slider__lista_tienda'), {
	slidesToShow: 1,
	draggable: true,
	dots: '.indicadores',
	arrows: {
	}
});
new Glider(document.querySelector('.slider__listaTienda'), {
	slidesToShow: 1,
	slidesToScroll: 1,
	draggable: true,
	arrows: {
		prev: '.slider__anteriorTienda',
		next: '.slider__siguienteTienda'
	},
	responsive: [
		{
		breakpoint: 450,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		}
		},{
		breakpoint: 800,
		settings: {
			slidesToShow: 6,
			slidesToScroll: 1
		}
		}
	]
});
