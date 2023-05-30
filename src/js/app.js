import Swiper from 'swiper'

let menuBurger = document.querySelector(".menu-burger");
if (menuBurger != null) {

	let overlay = document.querySelector(".overlay");
	menuBurger.addEventListener("click", function () {
		document.querySelector('.menu-burger__btn').classList.toggle("active");
		document.querySelector('.nav-hidden').classList.toggle("active");
		overlay.classList.toggle("active");
		document.body.classList.toggle("_lock")
	});
};


 const swiperServices = new Swiper('.services-slider', {
	direction: 'horizontal',
	loop: true,
	spaceBetween: 20,
	grabCursor: true,
	touchAngle: 45,
	slidesPerView: 1.2,

	navigation: {
		nextEl: '.next-arrow',
		prevEl: '.prev-arrow',
	},

	breakpoints: {
		320: {
			slidesPerView: 1.2,
			spaceBetween: 10,

		},
		420:{
			slidesPerView: 1.8,

		},
		576: {
			slidesPerView: 2.2,
			// spaceBetween: 20,
		},
		768: {
			// spaceBetween: 20,
			loop: true,

			slidesPerView: 3,
		},
		992: {
			slidesPerView: 4,
			// centeredSlides: true,
		},
		1200:{
			slidesPerView: 5,
			// spaceBetween: 20,

		}
	},
});

const swiperCooperation = new Swiper('.cooperation__slider', {
	direction: 'horizontal',
	loop: true,
	spaceBetween: 20,
	grabCursor: true,
	touchAngle: 45,
	navigation: {
		nextEl: '.next-arrow',
		prevEl: '.prev-arrow',
	},
		pagination: {
	  el: '.swiper-pagination',
	  clickable: true
	},

	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 10,

		},
		450: {
			slidesPerView: 2,

		},
		768: {
			slidesPerView: 3,
		},
		992: {
			slidesPerView: 5,
			spaceBetween: 30,
		},
		1200:{
			slidesPerView: 5,
		}
	},
});

const swiperEvents = new Swiper('.events__slider', {
	direction: 'horizontal',
	loop: true,
	spaceBetween: 20,
	grabCursor: true,
	touchAngle: 45,
	slidesPerView: 1.2,

	breakpoints: {
		320: {
			slidesPerView: 1.2,
			spaceBetween: 10,

		},
		420:{
			slidesPerView: 1.6,

		},
		576: {
			slidesPerView: 2.1,
		},
		768: {
			slidesPerView: 2.5,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
			
		}
	},
});

const swiperTeam = new Swiper('.team__slider', {
	direction: 'horizontal',
	loop: true,
	spaceBetween: 20,
	grabCursor: true,
	touchAngle: 45,
	slidesPerView: 1.2,

	navigation: {
		nextEl: '.next-arrow',
		prevEl: '.prev-arrow',
	},

	breakpoints: {
		320: {
			slidesPerView: 1.2,
			spaceBetween: 10,

		},
		420:{
			slidesPerView: 1.6,

		},
		576: {
			slidesPerView: 2.1,
		},
		768: {
			slidesPerView: 2.5,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 20,
			
		}
	},
});


var input = document.querySelector("#phone");
window.intlTelInput(input, {
	initialCountry: "in",
	separateDialCode: true,
  utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
});




function initMap() {
	const map = new google.maps.Map(document.getElementById("map"), {
	  mapId: "57a5c071d1cc5fd6",
	  center: { lat:  25.08532357151705, lng: 55.1465258273694 },
	  zoom: 14,
	  zoomControl: true,
	  mapTypeControl: false,
	  scaleControl: false,
	  streetViewControl: false,
	  rotateControl: false,
	  fullscreenControl: true
	});
	

	const markers = [
		["First mark name!", 25.082819424079762, 55.13700937332397, "../images/map-pin.png" ],
		["Second mark name!",  25.088642943801784, 55.14543272116148, "../images/map-pin.png"],
		["Third mark name!",  25.096620715937195, 55.16015750478583, "../images/map-pin.png"],
		["Fourth Beach",  25.074957232972427, 55.143889512397365, "../images/map-pin.png"],
	 ];
	 for (let i = 0; i < markers.length; i++) {
		const currMarker = markers[i];
		
		new google.maps.Marker({
			position: { lat: currMarker[1], lng: currMarker[2] },
			map,
			title: currMarker[0],
			icon:{
				url:currMarker[3],
				scaledSize: new google.maps.Size(40, 45),
			},
		 });
	 }
 }
 
 window.initMap = initMap;
//  25.08532357151705, 55.1465258273694
//  25.081712924009167, 55.1474260324818
// 25.082819424079762, 55.13700937332397  first marker