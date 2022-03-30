
var theme = "base";

// 使用者line Id
var lineid;

// 使用者資料
var userData;

var cancelAlarm = "";

// casvas寬度
var canvasW = 640 / 1080; // 鎖屏寬度／canvas寬度

main = function () {
	//private menbers

	//private methods
	function init() {

		console.log('main is loaded.');

		// lineid = getUrlParam("lineid");
		// console.log("lineid: "+lineid);

		// 點擊漢堡
		menuToggle();

		// 點擊"再玩一次"按鈕
		$('.wrapper').on('click','.restart',function(){
			if(userData.missionStatus == "" || userData.missionStatus == "C"){
				window.location.href='index.html?lineid='+lineid
			}else if(userData.missionStatus == "F" || userData.missionStatus == "Y" || userData.missionStatus == "N") {
				cancelAlarm = "Y"
				main.closeAlarm();
				console.log("restart")
				window.location.href='index.html?lineid='+lineid+"&restart=true";
			}else {
				console.log("再玩一次 其他")
			}
		});

		// 點擊設定鬧鐘
		$(".set__cta").click(function(){
			setAlarm();
		});

	}

	// Menu收合
	function menuToggle() {
		$(".hamburger").click(function () {
			if (!$(this).hasClass("active")) {
				$(this).addClass("active");
				$(".header .overlay").fadeIn();
				gsap.to(".nav", {
					duration: 0.3,
					x: -410,
					delay: 0.2
				});
			} else {
				$(this).removeClass("active");
				$(".header .overlay").fadeOut();
				gsap.to(".nav", {
					duration: 0.3,
					x: 0,
					delay: 0.2
				});
			}
		});
	}

	// 取得使用者資料
	function getData() {
		$.ajax({
			// 測試用url
			url: "https://mouthpre.darlie.cecmartech.com/api2021/userinfo/"+lineid,
			dataType: "json",
			type: "GET",
			success: function (_result) {
				console.log(_result);
				if (_result.succ) {
					console.log("傳送成功")

					userData = _result.data[0];
					if(userData != undefined) {
						// 若第一次玩設定預設資料
						if(userData.missionCheckInCount == ""){
							userTimes = 0
						}else {
							userTimes = userData.missionTime;
						}
						if(userData.product == ""){
							theme = "base"
						}else {
							theme = userData.product.toLowerCase();
						}
					}
					
					console.log(userData)
					console.log("theme: "+theme)
					// 頁面進入
					pagesInto();
				} else {
					console.log(_result.err)
				}
			},
			error: function(_result) {
				// alert("無法傳送，請再試一次");
				console.log(_result);
			}
		})
	}

	// 頁面進入判斷
	function pagesInto(){
		console.log("getUrlParam: "+getUrlParam("result"));

		// 若進入index頁面
		if(window.location.pathname.indexOf('detect') == -1) {
			// 若有result值進入結果頁
			if (getUrlParam("result") != null) {

				// 套用使用者主題
				useUserTheme();

				// play__cta 設定鬧鐘鈕 鬧鐘動態
				setTimeout(function () {
					alarmShake(".play__cta");
				}, 1000);
	
				setTimeout(function () {
					intoPage(".themeinfo", "flex");
				}, 500);
	
				// 結果頁點擊進入鬧鐘設定頁
				$(".play__cta").click(function () {
					leavePage(".themeinfo");
					intoPage(".setclock", "flex");
	
					setTimeout(function () {
						clock.createHour();
						clock.createMinute()
						setTimeout(function () {
							clock.hourSlide();
							clock.minuteSlide()
						}, 100);
					}, 100);
	
					// set__cta 設定鬧鐘鈕 鬧鐘動態
					setTimeout(function () {
						alarmShake(".set__cta");
					}, 1000);
				});
	
			} else {
				// 最初開始頁
				intoPage(".start");
	
				$("body").css("background-color", "#afd07b");
	
				$(".banner__pic").attr("src", "./images/banner/index/banner.png");
	
				setTimeout(function(){
					// 執行index bannerH5動畫
					init_canvas("canvas_index","animation_container_index","dom_overlay_container_index","indexAn")
					// canvas resize
					TweenMax.set('#animation_container_index', {
						scale: canvasW,
						transformOrigin: 'left top'
					});
					// 重複播放
					setInterval(function(){
						exportRoot.play()
					},1000);
				},500);
	
				// start__cta 遊戲開始鈕 鬧鐘動態
				setTimeout(function () {
					alarmShake(".start__cta");
				}, 1000);
	
				// 若任務進行中跳出提醒視窗
				if(userData.missionStatus == "Y" || userData.missionStatus == "N") {
					$("#popup .modal-body p").text("任務進行中，確定要重玩一次嗎？")
					$("#popup .modal-footer").html(`
						<button type="button" class="restart">重玩一次</button>
						<button type="button" data-dismiss="modal">取消</button>
					`);
					$("#popup").modal('show');
				}
			}
		}
	}
	
	function useUserTheme(){

		$(".frame01").css("padding-top", "440px");

		// 結果依序顯示
		gsap.fromTo(".personal__box", {
			opacity: 0
		}, {
			duration: 1,
			opacity: 1,
			stagger: 1
		})

		// 確認result結果主題
		function checkThemeFianl(theme,color){
			if (getUrlParam("result") == theme) {
				// 更換樣式
				$("body").css("background-color", color);

				$(".frame01").removeClass("base");
				$(".frame01").addClass(theme);

				$(".banner__pic").attr("src", "./images/banner/"+theme+"/banner.png");

				$(".personal__hr img").attr("src", "./images/hr-"+theme+".png");

				setTimeout(function(){
					// 執行index bannerH5動畫
					init_canvas("canvas_"+theme,"animation_container_"+theme,"dom_overlay_container_"+theme,theme+"An")
					// canvas resize
					TweenMax.set('#animation_container_'+theme, {
						scale: canvasW,
						transformOrigin: 'left top'
					});
					// 重複播放
					setInterval(function(){
						exportRoot.play()
					},1000);
				},500);
				console.log("result: "+theme);
			}
		}

		// 若result結果為 "base"
		checkThemeFianl("base","#afd07b");
	
		// 若result結果為 "gum"
		checkThemeFianl("gum","#9761b8");

		// 若result結果為 "asw"
		checkThemeFianl("asw","#a3ceed");
	
		// 帶入line使用者大頭照
		$(".personal__headshot").css("background", "url("+userData.linePicUrl+") no-repeat center center/cover");

		// 帶入line使用者名稱
		$(".personal__name").text(userData.lineName);
		$(".personal__num").text(userData.missionCheckInCount);

		// 抓資料庫的圖
		$(".personal__product img").attr("src", userData.productImg)

		// 抓資料庫的主題文案
		$(".personal__slogan h3").html(userData.productWord);

	}


	// 鬧鐘搖動動態
	function alarmShake($el) {
		var alarmtl = gsap.timeline({
			repeat: -1,
			repeatDelay: 3
		});
		alarmtl.to($el, {
			duration: 0.3,
			scale: 1.05,
		})
		alarmtl.fromTo($el, {
			rotate: 1
		}, {
			duration: 0.003,
			rotate: -1,
			repeat: 400,
			yoyo: true
		}, 0)
		alarmtl.to($el, {
			duration: 0.4,
			rotate: 0,
			scale: 1,
			ease: "power2.out"
		})
	}

	// 關閉鬧鐘
	function closeAlarm(){
		$.ajax({
			url: "https://mouthpre.darlie.cecmartech.com/api2021/alarmcloseorcancel",
			dataType: "json",
			type: "POST",
			data: {
				lineuserid: lineid,
				cancel: cancelAlarm,
			},
			success: function(_result){
				console.log(_result);
			},
			error: function(_result){
				conosole.log(_result)
			}
		});
	}

	// 傳送鬧鐘設定資料
	function setAlarm(){

		var setHour = $(".swiper-hour .swiper-slide-active").text();
		var setMinute = $(".swiper-minute .swiper-slide-active").text();
		var setTime = setHour+":"+setMinute
		console.log(setTime)

		$.ajax({
			url: 'https://mouthpre.darlie.cecmartech.com/api2021/modifyalarm',
			dataType: 'json',
			type: 'POST',
			data: {
				lineuserid: lineid,
				missionTime: setTime
			},
			success: function(_result) {
				$("#popup .modal-body p").text("鬧鐘設定成功")
				$("#popup .modal-footer").html("");
				$("#popup").modal('show');
				console.log(_result);
			},
			error: function(_result){
				console.log(_result);
			}
		});
	}

	function intoPage(el, status = "block") {
		gsap.fromTo(el, {
			autoAlpha: 0,
			display: status
		}, {
			duration: 1.3,
			autoAlpha: 1,
			ease: "power2.out",
			delay: 0.3
		})
	}

	function leavePage(el) {
		gsap.fromTo(el, {
			autoAlpha: 1
		}, {
			duration: 0.3,
			autoAlpha: 0,
			onComplete: function () {
				$(el).css("display", "none");
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
		intoPage: function () {
			intoPage();
		},
		leavePage: function () {
			leavePage();
		},
		getData: function(){
			getData();
		},
		closeAlarm: function(){
			closeAlarm();
		},
	};
};

var main = new main();