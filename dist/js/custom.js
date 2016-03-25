

		$(document).ready(function(){

			$("body").show();

			$("body").cssAnimate();

			var winwid = window.innerWidth;

			$('.bxslider').bxSlider({
				auto: false,
				autoControls: false,
				pager:false
			});

			$('.choose-us').bxSlider({
				auto: false,
				autoControls: false,
				pager:true,

				buildPager: function(slideIndex){
					switch(slideIndex){
						case 0:
							return '<div>We are good listener</div>';
						case 1:
							return '<div>We are creativer</div>';
						case 2:
							return '<div>We deliver on time</div>';
					}
				}
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


			function runcode(imgheight) {
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


			function stopSubNav(imgheight){

				var cr = $(".careers-head").height();

				imgheight -= cr;

				function stopNav(){
					if ($(this).scrollTop() > imgheight) {
						$(".careers-head").css({
							position:"fixed",
							top:"70px",
						});
					} else {
						$(".careers-head").css({
							position:"absolute",
							top:0,
						});
					}
				}



				$(window).scroll(function(){
					stopNav();
				});
				stopNav();


				$('.careers-head span').on("click",function(){

					var index = $(this).index();
					var topposition = $(".careers-body>div:eq('"+index+"')").offset().top;
					topposition -= 130;
					$('html, body').animate({scrollTop : topposition},500);
					return false;
				});
			}



			var imgheight;

			if($(".imgs").length){
				var theImage = new Image();
				theImage.src = $(".imgs").attr("src");
				theImage.onload = function() {
					imgheight = $(".imgs").height();
					runcode(imgheight);
					stopSubNav(imgheight);
				};
			}
			else{
				imgheight = winheight;
				runcode(imgheight);
				stopSubNav(imgheight);
			}







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


			$(".js-open-nav").click(function(){
				$(this).toggleClass("active");
				$(".menu-bar").toggleClass("active1");
			});


			$( ".menu-bar ul li").each(function( index ) {
				var text = $(">a",this).text();
				$(">a",this).append('<span class="nav-link-mask"><span class="nav-link-mask-text">'+ text +'</span></span>');
			});



			function shownav(options , element){
				if ($(window).scrollTop() > options ) {
					element.addClass("colored");
				} else {
					element.removeClass("colored");
				}
			}
			$(window).scroll(function(){
				var element = $("header");
				var options = $(".slider-area").height();
				shownav(options , element);
			});


			var footerheight = $("footer").height();
			$("<div></div>").insertBefore('footer').css("margin-bottom",footerheight);


		});
