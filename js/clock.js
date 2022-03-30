clock = function () {
	//private menbers

	//private methods
	function init() {



		console.log('clock is loaded.');

		$(window).scroll(function(){
		
		});

	}

	// append時間
	function createHour() {
		for (var i = 0; i <= 23; i++) {
			if (i < 10) {
				$(".personal__set .swiper-hour>.swiper-wrapper").append("<div class='swiper-slide' data-hour='" + i + "'>0"+i+"</div>")
			} else {
				$(".personal__set .swiper-hour>.swiper-wrapper").append("<div class='swiper-slide' data-hour='" + i + "'>"+ i + "</div>")
			}
		}
	}

	function createMinute() {
		for (var i = 0; i <= 59; i+=5) {
			if (i < 10) {
				$(".personal__set .swiper-minute>.swiper-wrapper").append("<div class='swiper-slide' data-minute='" + i + "'>0" + i + "</div>")
			} else {
				$(".personal__set .swiper-minute>.swiper-wrapper").append("<div class='swiper-slide' data-minute='" + i + "'>" + i + "</div>")
			}
		}
	}

	// Slider
// 小時滑動
function hourSlide() {
	var swiperHour = new Swiper('.personal__set .swiper-hour', {
		initialSlide: 0,
		direction: 'vertical',
		spaceBetween: 20,
		loop: true,
		allowTouchMove: true,
		centeredSlides: true,
		centeredSlidesBounds: true,
		freeMode: true,
		freeModeSticky: true,
	})
	swiperHour.slideTo(7, 0, false);
	setTimeout(() => {
		swiperHour.slideTo(9, 700, false);
	}, 300);
	
	
}

// Slider
// 分鐘滑動
function minuteSlide() {
	var swiperMinute = new Swiper('.personal__set .swiper-minute', {
		initialSlide: 10,
		direction: 'vertical',
		spaceBetween: 20,
		loop: true,
		allowTouchMove: true,
		centeredSlides: true,
		centeredSlidesBounds: true,
		freeMode: true,
		freeModeSticky: true,
	})
	swiperMinute.slideTo(2, 0, false);
	setTimeout(() => {
		swiperMinute.slideTo(1, 1000, false);
	}, 300);
	
}

	function intoPage(el,status="block"){
		gsap.fromTo(el,{autoAlpha: 0,display: status},{duration: 1.3,autoAlpha:1,ease: "power2.out",delay: 0.3})
	}

	function leavePage(el){
		gsap.fromTo(el,{autoAlpha: 1},{duration: 0.3,autoAlpha:0, 
			onComplete: function(){
				$(el).css("display","none");
			}
		})
	}

	{
		$(document).ready(function () {
			init();
		});
	}

	//public
	return {
		createHour: function(){
			createHour();
		},
		createMinute: function(){
			createMinute();
		},
		hourSlide: function(){
			hourSlide();
		},
		minuteSlide: function(){
			minuteSlide();
		},
	};
};

var clock = new clock();



