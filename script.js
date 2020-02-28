$(function() {

  $(window).scroll(function() {

    var position = $(window).scrollTop();

    if(position > 0 && position < 600) {
      //$('body').css('background', 'white');
      $('.block1').css({opacity: '1'});
      $('.stick1, .stick2, .stick3, .stick4').css('background', 'white');

      $('.stick1').css({
        transform:'rotate(0deg)',
        left: '0px',
        top: '0px',
        height: '200px'
      });
      $('.stick2').css({
        transform:'rotate(0deg)',
        left: '0px',
        top: '0px',
        height: '200px'
      });
      $('.stick3').css({
        transform:'rotate(0deg)',
        left: '0px',
        top: '0px',
        height: '200px'
      });
      $('.stick4').css({
        transform:'rotate(0deg)',
        left: '0px',
        top: '0px',
        height: '200px'
      });

    } else if (position > 600 && position < 1200 ) {

      // $('body').css('background', 'blue');
      $('.block1').css({opacity: '0'});
      $('.block2').css({ opacity: '1'});
      $('.stick1, .stick2, .stick3, .stick4').css('background', 'orange');

      $('.stick1').css({
        transform:'rotate(5deg)',
        left: '-550px',
        top: '-50px',
        height: '800px'
      });
      $('.stick2').css({
        transform:'rotate(-30deg)',
        left: '-374px',
        top: '-90px',
        height: '800px'
      });
      $('.stick3').css({
        transform:'rotate(15deg)',
        left: '-167px',
        top: '52px',
        height: '630px'
      });
      $('.stick4').css({
        transform:'rotate(-60deg)',
        left: '0px',
        top: '-4px',
        height: '450px'
      });

    } else if (position > 1200 && position < 1800) {

      // $('body').css('background', 'red');
      $('.block2').css({ opacity: '0' });
      $('.block3').css({ opacity: '1' });

      $('.stick1, .stick2, .stick3, .stick4').css('background', 'magenta');

      $('.stick1').css({
        transform:'rotate(15deg)',
        left: '84px',
        top: '-45px',
        height: '630px'
      });
      $('.stick2').css({
        transform:'rotate(-40deg)',
        left: '335px',
        top: '-105px',
        height: '790px'
      });
      $('.stick3').css({
        transform:'rotate(-15deg)',
        left: '467px',
        top: '-27px',
        height: '650px'
      });
      $('.stick4').css({
        transform:'rotate(-50deg)',
        left: '480px',
        top: '-50px',
        height: '375px'
      });

    } else if (position > 1800 && position < 2400) {
      // $('body').css('background', 'yellow');
      $('.block3').css({ opacity: '0'});
      $('.block4').css({ opacity: '1'});
      $('.stick1, .stick2, .stick3, .stick4').css('background', 'peachpuff');

      $('.stick1').css({
        transform:'rotate(25deg)',
        left: '-550px',
        top: '-50px',
        height: '420px'
      });
      $('.stick2').css({
        transform:'rotate(-20deg)',
        left: '-398px',
        top: '-58px',
        height: '800px'
      });
      $('.stick3').css({
        transform:'rotate(10deg)',
        left: '-250px',
        top: '88px',
        height: '640px'
      });
      $('.stick4').css({
        transform:'rotate(-50deg)',
        left: '-88px',
        top: '35px',
        height: '520px'
      });
    } else if (position > 2400 && position < 3000) {
      // $('body').css('background', 'white');
      $('.block4').css({ opacity: '0'});
      $('.stick1, .stick2, .stick3, .stick4').css('background', 'white');

      $('.stick1').css({
        transform:'rotate(0deg)',
        left: '0px',
        top: '0px',
        height: '200px'
      });
      $('.stick2').css({
        transform:'rotate(0deg)',
        left: '0px',
        top: '0px',
        height: '200px'
      });
      $('.stick3').css({
        transform:'rotate(0deg)',
        left: '0px',
        top: '0px',
        height: '200px'
      });
      $('.stick4').css({
        transform:'rotate(0deg)',
        left: '0px',
        top: '0px',
        height: '200px'
      });
    }
  });

  $('.stick1, .stick2, .stick3, .stick4').mouseenter(function(){
				$('.stick1, .stick2, .stick3, .stick4').addClass('flash'); }).mouseleave(function() {
					$('.stick1, .stick2, .stick3, .stick4').removeClass('flash');
	});
});

//кружочки
$(function(){
  $("#target1").css({'opacity':0});
  $("#target2").css({'opacity':0});
  $(window).scroll(function (){
    $("#target1").each(function(){
      var imgPos = $(this).offset().top - 300;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/6){
        $("#target1").css({'opacity':1});
        if(scroll + 200 - imgPos < 97){
          $(this).css({'left': scroll + 200 - imgPos,'top': '500px'});
        }
      } else {
       $("#target1").css({'opacity':0});
      }
    });
    $("#target2").each(function(){
      var imgPos = $(this).offset().top - 300;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/6){
        $("#target2").css({'opacity':1});
          $(this).css({'right': scroll + 320 - imgPos,'top': '500px'});
      } else {
        $("#target2").css({'opacity':0});
      }
    });
  });
});

//мячи
$(function(){
  const obj = $(".scroll-animation-obj");
  const hopIn = $(".scroll-animation-hop");
  const leftIn = $(".scroll-animation-left");
  const rightIn = $(".scroll-animation-right");
  $(window).on('scroll',function(){
    obj.each(function(){
      const objPos = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowH = $(window).height();
      if(scroll > objPos - windowH){
        $(this).css({
          'opacity': '1'
        });
      } else {
        $(this).css({
          'opacity': '0'
        });
      }
    });
    hopIn.each(function(){
      const objPos = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowH = $(window).height();
      if(scroll > objPos - windowH){
        $(this).css({
          'transform': 'translate(0,0)'
        });
      } else {
        $(this).css({
          'transform': 'translate(0,60px)'
        });
      }
    });
    leftIn.each(function(){
      const objPos = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowH = $(window).height();
      if(scroll > objPos - windowH){
        $(this).css({
          'transform': 'translate(0,0)'
        });
      } else {
        $(this).css({
          'transform': 'translate(-120px,0)'
        });
      }
    });
    rightIn.each(function(){
      const objPos = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowH = $(window).height();
      if(scroll > objPos - windowH){
        $(this).css({
          'transform': 'translate(0,0)'
        });
      } else {
        $(this).css({
          'transform': 'translate(120px,0)'
        });
      }
    });
  });
});
