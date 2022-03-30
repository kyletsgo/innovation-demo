game = function () {

	// 第一題答案
	var A1;
	// 第二題答案
	var A2;
	// 第三題答案
	var A3;

	//private methods
	function init() {

		// 快速進入
		// leavePage(".start");
		// intoPage(".q3","flex")

		console.log('game is loaded.');

		// 點擊遊戲開始
		$(".start__cta").click(function () {
			if(userData.missionStatus == "Y" || userData.missionStatus == "N") {
				// 若任務進行中 跳出提醒視窗
				$("#popup .modal-body p").text("任務進行中，確定要重玩一次嗎？")
				$("#popup .modal-footer").html(`
					<button type="button" class="restart">重玩一次</button>
					<button type="button" data-dismiss="modal">取消</button>
				`);
				$("#popup").modal('show');
			}else {
				// 若任務已中斷或完成 進入遊戲
				leavePage(".start");
				intoPage(".q1", "flex")
			}
		});

		// 點擊第一道答案
		$(".q1 .question__item").click(function () {
			theme = $(this).data("theme");

			// 第一題答案
			if(theme == "base") {
				A1 = "A";
			}else if(theme == "asw") {
				A1 = "B";
			}else if(theme == "gum") {
				A1 = "C"
			}

			// 顯示第二道題目
			q2Show();

			leavePage(".q1");
			intoPage(".q2", "flex")

			console.log("q1 theme: " + theme)
		});

		// 點擊第二道答案
		$(".q2 .question__item").click(function () {
			let comfirm = $(this).data("option");

			if (comfirm == 1) {

				// 第二題答案
				A2 = "Y";
				A3 = "Y"

				// 送出答案
				sendAnswer();

				window.location.href = 'detect.html?theme=' + theme + '&lineid=' + lineid;

			} else if (comfirm == 0) {

				// 第二題答案
				A2 = "N";

				// 顯示第三道題目
				q3Show();

				leavePage(".q2");
				intoPage(".q3", "flex")
			}
			console.log("q2 theme: " + theme)

		});

		// 點擊第三道答案
		$(".q3 .question__item").click(function () {
			theme = $(this).data("theme");

			// 第三題答案
			if(theme == "base") {
				A3 = "A";
			}else if(theme == "asw") {
				A3 = "B";
			}else if(theme == "gum") {
				A3 = "C"
			}

			// 送出答案
			sendAnswer();

			console.log("q3 theme: " + theme)
			window.location.href = 'detect.html?theme=' + theme + '&lineid=' + lineid;
		});

	}

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

	function getRandom(num) {
		return Math.floor(Math.random() * num)
	}

	// 顯示第二道題目
	function q2Show() {
		if (theme == "base") {
			$(".q2 .question__topic").html(`
				<span>Q</span> : 生活上，你渴望一開口就散發清新口氣？
			`)
		} else if (theme == "asw") {
			$(".q2 .question__topic").html(`
				<span>Q</span> : 生活上，你追求更閃亮潔白的美齒？
			`)
		} else if (theme == "gum") {
			$(".q2 .question__topic").html(`
				<span>Q</span> : 生活上，你想先改善牙齦問題的困擾？
			`)
		}
	}

	// 顯示第三道題目或跳轉至拍攝
	function q3Show() {
		if (theme == "base") {
			$(".q3 .question__item:nth-child(1)").data("theme", "gum");
			$(".q3 .question__item:nth-child(1) .question__option").html(`
				<span>A</span>解決惱人的牙齦問題
			`)
			$(".q3 .question__item:nth-child(2)").data("theme", "asw");
			$(".q3 .question__item:nth-child(2) .question__option").html(`
				<span>B</span>閃亮潔白的美齒
			`)
			console.log('A: ' + $(".q3 .question__item:nth-child(1)").data("theme"))
			console.log('B: ' + $(".q3 .question__item:nth-child(2)").data("theme"))
		} else if (theme == "asw") {
			$(".q3 .question__item:nth-child(1)").data("theme", "base");
			$(".q3 .question__item:nth-child(1) .question__option").html(`
				<span>A</span>一開口就有清新
			`)
			$(".q3 .question__item:nth-child(2)").data("theme", "gum");
			$(".q3 .question__item:nth-child(2) .question__option").html(`
				<span>B</span>解決惱人的牙齦問題
			`)
			console.log('A: ' + $(".q3 .question__item:nth-child(1)").data("theme"))
			console.log('B: ' + $(".q3 .question__item:nth-child(2)").data("theme"))
		} else if (theme == "gum") {
			$(".q3 .question__item:nth-child(1)").data("theme", "base");
			$(".q3 .question__item:nth-child(1) .question__option").html(`
				<span>A</span>一開口就有清新
			`)
			$(".q3 .question__item:nth-child(2)").data("theme", "asw");
			$(".q3 .question__item:nth-child(2) .question__option").html(`
				<span>B</span>閃亮潔白的美齒
			`)
			console.log('A: ' + $(".q3 .question__item:nth-child(1)").data("theme"))
			console.log('B: ' + $(".q3 .question__item:nth-child(2)").data("theme"))
		} else {
			console.log('A: ' + $(".q3 .question__item:nth-child(1)").data("theme"))
			console.log('B: ' + $(".q3 .question__item:nth-child(2)").data("theme"))
		}
	}

	function sendAnswer(){
		data = {
			lineuserid: lineid,
			Q1:A1,
			Q2:A2,
			Q3:A3
		}
		console.log(data);

		$.ajax({
			url: "https://mouthpre.darlie.cecmartech.com/api2021/newmission",
			dataType: "json",
			data: data,
			type: "POST",
			success: function(_result) {
				console.log(_result);
				if(_result.succ) {

				}
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
	};
};

var game = new game();