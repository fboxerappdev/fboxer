

		$(document).ready(function(){

			$("body").show();

			var winwid = window.innerWidth;

			$('.bxslider').bxSlider({
				auto: false,
				autoControls: false,
				pager:false
			});


			function myscrool(){
				if(topval>0)
				{
					winheight = $(".slider-area").height();

					$(".slider-area").css({
						"height":winheight,
						"position":"relative",
					});
					$(".rel-box").css({
						"height":"0",
					});
				}
				else{
					$(".slider-area").css({
						"height":"100%",
						"position":"fixed",
					});
					$(".rel-box").css({
						"height":winheight,
					});
				}
			};


			var topval = $(this).scrollTop();

			var winheight = $(".slider-area").height();


			function runcode() {
				var imgheight;

				if($(".imgs").length){
					imgheight = $(".imgs").height();
				}
				else{
					imgheight = winheight;
				}



				var winw = window.innerWidth;


				if (winheight >= imgheight || winw < 768) {

					$(".slider-area").css({
						"height": imgheight,
						"position": "relative",
					});

				}
				else {

					$(window).resize(function () {
						if (screen.width > window.innerWidth) {
							var winheight = $(".slider-area").height();
						} else {
							var winheight = $(".slider-area").height();
						}
					});
					if (!$( ".rel-box" ).length ) {

						$("<div class='rel-box'></div>").insertBefore(".slider-area").css("height", winheight);

					}
					if($(".main-slider>.bx-wrapper").length)
					{
						$(".main-slider>.bx-wrapper").css("height", winheight);
					}

					if($(".portfolio-slider").length)
					{
						$(".portfolio-slider").css("height", winheight);
					}


					myscrool();

					$(window).scroll(function () {
						topval = $(this).scrollTop();
						myscrool();

					});
				}
			}


			//$(".imgs").ready(function(){
			//	runcode();
			//	setTimeout(function(){
			//		runcode();
			//	}, 300);
			//});

			runcode();

			$(".portfolio-slider").mousemove(function(e){

				var mouseX = e.pageX - $('.bg-images').offset().left;
				var mouseY = e.pageY - $('.bg-images').offset().top;
				var totalX = $('.bg-images').width();
				var totalY = $('.bg-images').height();
				var centerX = totalX / 2;
				var centerY = totalY / 2;
				var shiftX = centerX - mouseX;
				var shiftY = centerY - mouseY;

				var startX = ($('.bg-images').width() / 2) - ($('.bg-images img:eq(0)').width() / 2);
				var startY = ($('.bg-images').height() / 2) - ($('.bg-images img:eq(0)').height() / 2);

				$(".bg-images img:eq(0)").css({ 'left': startX + 900 + (shiftX/16) + 'px', 'top': startY + (shiftY/10) + 'px' });
				$(".bg-images img:eq(1)").css({ 'left': startX + 370 + (shiftX/14) + 'px', 'top': startY - 50 + (shiftY/12) + 'px' });
				$(".bg-images img:eq(2)").css({ 'left': startX - 300 + (shiftX/12) + 'px', 'top': startY - 40 + (shiftY/11) + 'px' });
				$(".bg-images img:eq(3)").css({ 'left': startX - 960 + (shiftX/11) + 'px', 'top': startY - 50 + (shiftY/10) + 'px' });
				$(".bg-images img:eq(4)").css({ 'left': startX + 550 + (shiftX/10) + 'px', 'top': startY + 500 + (shiftY/6) + 'px' });
				$(".bg-images img:eq(5)").css({ 'left': startX - 490 + (shiftX/9) + 'px', 'top': startY + 300 + (shiftY/8) + 'px' });
				$(".bg-images img:eq(6)").css({ 'left': startX - 840 + (shiftX/8) + 'px', 'top': startY + 800 + (shiftY/8) + 'px' });
				$(".bg-images img:eq(7)").css({ 'left': startX + 790 + (shiftX/7) + 'px', 'top': startY + 1000 + (shiftY/6) + 'px' });
				$(".bg-images img:eq(8)").css({ 'left': startX + 50 + (shiftX/5) + 'px', 'top': startY + 800 + (shiftY/4) + 'px' });
				$(".bg-images img:eq(9)").css({ 'left': startX - 250 + (shiftX/8) + 'px', 'top': startY + 60 + (shiftY/8) + 'px' });
				$(".bg-images img:eq(10)").css({ 'left': startX - 260 + (shiftX/8) + 'px', 'top': startY + 60 + (shiftY/8) + 'px' });
			});
		});
