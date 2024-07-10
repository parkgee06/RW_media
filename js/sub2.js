//파라이터 2개 받기

    //ex2.html?num=1&name=홍길동
    var params='';
    var key, value;
    var img_num, link_num;
    function getParams2() {
      // 파라미터가 담길 배열
      var param = new Array();
   
      // 현재 페이지의 url
      var url = decodeURIComponent(location.href);
      // url이 encodeURIComponent 로 인코딩 되었을때는 다시 디코딩 해준다.
      url = decodeURIComponent(url);  //  ex2.html?num=1&name=홍길동
   
      
      // url에서 '?' 문자 이후의 파라미터 문자열까지 자르기
      params = url.substring( url.indexOf('?')+1, url.length );   // 'abcdefg'.substring(2,40);=> 'cdef'
      // params = "num=1&name=홍길동" 
      // 파라미터 구분자("&") 로 분리
      params = params.split("&"); // params[0]='num=1' , params[1]='name=홍길동'
   
     
      //params[0] =>  'num=100'    ,    params[1] => 'name=홍길동'  
       // params 배열을 다시 "=" 구분자로 분리하여 param 배열에 key = value 로 담는다.    
      var size = params.length;  //배열의 개수 2개
      for(var i=0 ; i < size ; i++) {
          key = params[i].split("=")[0];  //key ='num'
          value = params[i].split("=")[1];  //value = '100'
   
          param[key] = value;   // param['num'] = '100';   param['name'] = 홍길동; 
      }
        
        //console.log('num:' + param['num']);
        //console.log('tabc:'+ param['tabc']);
        img_num = param['num'];
        link_num = param['tabc'];
    }      
    getParams2();  //함수호출
  
    console.log(img_num , link_num);
  //상단 이미지 변경
  var screenSize, screenHeight;

  function screen_size(){
      screenSize = $(window).width(); //스크린의 너비
      screenHeight = $(window).height();  //스크린의 높이

      $("#content").css('margin-top',screenHeight);
      
      if( screenSize > 768){
          $("#imgBG").attr('src','./images/sub'+img_num+`/sub${img_num}_big.jpg`);
      }else{
          $("#imgBG").attr('src','./images/sub'+img_num+`/sub${img_num}_small.jpg`);
      }
  }

  screen_size();  //최초 실행시 호출
  
  $(window).resize(function(){ 
      screen_size();
  }); 
  
  $('.down').click(function(e){
    e.preventDefault();
      screenHeight = $(window).height();
      $('html,body').animate({'scrollTop':screenHeight}, 1000);
  });
  
  
  
  
  // dive map 유튜브

    $('.popup-youtube').magnificPopup({
        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: true,

        fixedContentPos: false
    });


    //아코디언 처리
    var onoff =[false, false, false, false, false, false, false, false, false, false];//각각 열리고 닫혔을때 상태 처리 false:닫힘 / true:열림
    var s_height=$('#content>section h3').outerHeight(); //닫혔을때 메뉴 높이(h3의 높이)
    $('#content>section').height(s_height+'px'); //섹션의 높이로 설정

    //해당 메뉴를 열고 출발~~~~
    var sec_height =$('#content>section:eq('+ (link_num-1) +')').find('.con_all').outerHeight();  
    var offset_top =$('#content>section:eq('+ (link_num-1) +')').offset().top; //해당 섹션의 위치 저장
    
    onoff[link_num-1]=true;
    $('#content>section:eq('+ (link_num-1) +')').css('height',sec_height+'px');
    $('#content>section:eq('+ (link_num-1) +')').addClass('on');
    //해당 섹션위치로 이동
    $("html,body").stop().animate({"scrollTop":offset_top},1000);
   
   
    $(window).on('resize', function(){ //윈도우 사이즈 변경 시 마다 높이 조절
      s_height=$('#content>section h3').outerHeight(); //닫혔을때 메뉴 높이(h3의 높이)
      $('#content>section').height(s_height+'px');
    });



    $('#content>section').click(function(e){
      e.preventDefault();
       
       var ind = $(this).index('#content>section'); // 0 1 2 3 4
       sec_height = $(this).find('.con_all').outerHeight();   //클릭한 섹션의 전체 높이
       //console.log(ind , sec_height);

       if(onoff[ind]==false){ //클릭한 메뉴가 닫혀있으면

          for(var i=0; i<onoff.length ; i++){
            onoff[i] =false;
          }
          $('#content>section').height(s_height+'px');
          $('#content>section').removeClass('on');

          $(this).css('height',sec_height+'px');
          $(this).addClass('on');
          onoff[ind]=true;
       }else if(onoff[ind]==true){ //클릭한 메뉴가 열려있으면
          $(this).height(s_height+'px');
          $(this).removeClass('on');
          onoff[ind]=false;
       }
    });

    $('#content>section').hover(function(){
          $(this).addClass('on');     
    },function(){
          $(this).removeClass('on');
    });

    