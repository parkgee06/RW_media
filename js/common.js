var screenHeight = $(window).height();

//헤더 스크롤 처리
  $(window).on('scroll',function(){//스크롤의 거리가 발생하면
    var scroll = $(window).scrollTop();  
  
    //스크롤의 거리를 리턴하는 함수
    //console.log(scroll);
  
    if(scroll>screenHeight-165){//스크롤이 비주얼의 높이-header높이 까지 내리면
      $('#headerArea').css('background','rgba(27, 67, 99, .8)');
      $('#headerArea').css('backdrop-filter','blur(15px)');
  
    }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
      $('#headerArea').css('background','rgba(0,0,0,0)');
      $('#headerArea').css('backdrop-filter','blur(0)');
    }; 
  
  });
  
  window.addEventListener('load', loadE => {
    let prevScrollVal = 0;
    let headerArea = document.getElementById('headerArea');
  
    window.addEventListener('scroll', scrollE => {
      // console.log(window.scrollY);
  
      if(window.scrollY > prevScrollVal) {
        // console.log('커짐');
        headerArea.style.transform = 'translateY(-165px)';
      } else {
        // console.log('작아짐');
        headerArea.style.transform = 'translateY(0)';
      }
  
      prevScrollVal = window.scrollY;
    });
  });
  

  

   //상단이동 코드
//    $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
//     var scroll = $(window).scrollTop(); //스크롤의 거리
//     // $('.text').text(scroll);

//     if(scroll>7050){ //7000이상의 거리가 발생되면
//         $('.move_top').fadeIn('slow');  //top보여라~~~~
//     }else{
//         $('.move_top').fadeOut('fast');//top안보여라~~~~
//     }
// });

$('.move_top').click(function(e){
  e.preventDefault();
    //상단으로 스르륵 이동합니다.
   $("html,body").stop().animate({"scrollTop":0},1000); //해당 위치로 스크롤 탑값을 부드럽게 이동시키는 코드
});


//햄버거 메뉴 처리
var onoff = false; //false(메뉴열림) true(메뉴닫힘)
$(".menuOpen").click(function(e){
  e.preventDefault();
  if(onoff == false){
    $("#gnb").slideDown('slow');
    $('#headerArea').addClass('mn_open');//메뉴모양변경
    onoff = true;
  }else{
    $("#gnb").slideUp('fast');
    $('#headerArea').removeClass('mn_open');
    onoff = false;
  }
});

//  네비높이 맞추기(페이지 로딩시 1회)
var screenSize = $(window).width();
var winh =  $(document).height();

if( screenSize > 768){
  $("#gnb").height('auto');
}else{
  $("#gnb").height(winh);
}

var current2=0; // 0(해상도가 모바일), 1(소형테블릿이상)

$(window).resize(function(){ 
   var screenSize = $(window).width();  //가로 해상도
   if( screenSize > 768){  //소형테블릿 이상이면
    $("#gnb").show();
    $("#gnb").height('auto');
         current2=1; //소형테블릿이상
        }
        if(current2==1 && screenSize <= 768){
          $("#gnb").hide();
          $("#gnb").height(winh);
      current2=0; //모바일
      onoff = false;
    }
  }); 



