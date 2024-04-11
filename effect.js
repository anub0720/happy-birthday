$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		const images = [
			{ path: 'image1.jpeg', size: 'cover' },
            { path: 'image2.jpeg', size: 'contain' },
            { path: 'image3.jpeg', size: 'cover' },
            { path: 'image4.jpeg', size: 'contain' },
            { path: 'image5.png', size: 'contain' },
            { path: 'image6.png', size: 'contain' },
            { path: 'image7.png', size: 'contain' }
		];
	
		let currentIndex = 0;
	
		// Function to change the background image
		function changeBackground() {
			const currentImage = images[currentIndex];
			$('body').css({'background-image':`url('${currentImage.path}')`,'background-size': currentImage.size});
			currentIndex = (currentIndex + 1) % images.length; // Move to the next image
		}
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});

	$('#turn_on').click(function(){
		
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		setInterval(changeBackground, 3000);
		$('body').addClass('background-after-click');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			// No cake logic here
			$('#showCakeButton').fadeIn('slow');
		});
	});
	
	$('#wish_message').click(function(){
		vw = $(window).width()/2;

	   $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
	   $('#b1').attr('id','b11');
	   $('#b2').attr('id','b22')
	   $('#b3').attr('id','b33')
	   $('#b4').attr('id','b44')
	   $('#b5').attr('id','b55')
	   $('#b6').attr('id','b66')
	   $('#b7').attr('id','b77')
	   $('#b11').animate({top:240, left: vw-350},500);
	   $('#b22').animate({top:240, left: vw-250},500);
	   $('#b33').animate({top:240, left: vw-150},500);
	   $('#b44').animate({top:240, left: vw-50},500);
	   $('#b55').animate({top:240, left: vw+50},500);
	   $('#b66').animate({top:240, left: vw+150},500);
	   $('#b77').animate({top:240, left: vw+250},500);
	   $('.balloons').css('opacity','0.9');
	   $('.balloons h2').fadeIn(3000);
	   $(this).fadeOut('slow').delay(3000).promise().done(function(){
		   $('#story').fadeIn('slow');
	   });
	   $('.cake').fadeOut('slow');
	   $('.candle').fadeOut('slow');
   });
   $('#showCakeButton').click(function() {
    $('#cakeContainer').css('display', 'block');
    $(this).css('display', 'none'); // Hide the show cake button
    $('#lightCandleButton').css('display', 'block'); // Show the light candle button
});

  
  $('#lightCandleButton').click(function() {
    // Light the candle
	$('.flame').toggle(); // Show/hide the flame
    
    // Hide the light candle button
    $(this).fadeOut('slow').delay(500).promise().done(function() {
        // Show the "Happy Birthday" button after hiding the light candle button
        $('#wish_message').fadeIn('slow');
    });
});

		
	
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.message').fadeIn('slow');
		var i=0;

		function msgLoop(i) {
			$("p:nth-child(" + i + ")").fadeOut('slow').delay(800).promise().done(function () {
				i = i + 1;
				$("p:nth-child(" + i + ")").fadeIn('slow').delay(1000);
				if (i == 50) {
					$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
						// No cake logic here
						$('#story').fadeIn('slow');
					});
				} else {
					msgLoop(i);
				}
			});
		}
		msgLoop(0);
		
	});
});




//alert('hello');