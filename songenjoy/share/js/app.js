

(function() {
  "use strict";


  $(document).ready(function() {
    $('body').fadeIn(2000);
   });

  //pagetop
  $(".ari_song__pagetop").on("click", function(e) {
    e.preventDefault();
    var speed = 300;
    var position = 0;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  //smoothlink
  $('a[href^="#"].ari_song__smoothlink').on("click", function(e) {
    e.preventDefault();
    // $(".drawer").drawer("close");
    var speed = 300;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - 60;
    // var position = target.offset().top - ($(window).width() > 768 ? $(".ari_song__header").height() : 50);
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });



  


  $(function() {
    var headerHeight = 70;//固定ヘッダーの高さを入れる
    $('[href^="#"]').click(function(){
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top-headerHeight; 
      $("html, body").animate({scrollTop:position}, 500, "swing");//200はスクロールの移動スピードです
      return false;
    });
    
  });




  // var topBtn = $(".ari_song__pagetop");
  // topBtn.hide();
  // //スクロールが100に達したらボタン表示
  // $(window).scroll(function() {
  //   if ($(this).scrollTop() > 100) {
  //     topBtn.fadeIn();
  //   } else {
  //     topBtn.fadeOut();
  //   }
  // });
  // //スクロールしてトップ
  // topBtn.click(function() {
  //   $("body,html").animate(
  //     {
  //       scrollTop: 0,
  //     },
  //     500
  //   );
  //   return false;
  // });


    



})();


// アコーディオン

  $(function(){
    //.accordion_oneの中の.accordion_headerがクリックされたら
    $('.accordion .accordion_header').click(function(){
      //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
      $(this).next('.accordion_inner').slideToggle();
      $(this).toggleClass("open");
    });
  });


  // フェード

  $(window).scroll(function (){
    
    $('.fadein').each(function(){
        var elemPos = $(this).offset().top,
        scroll = $(window).scrollTop(),
        windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100){
            $(this).addClass('scrollin');
        }
    });


});





  // $(function(){
  //   //.accordion_oneの中の.accordion_headerがクリックされたら
  //   $('.ari_song__accordion_header').click(function(){
  //     //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
  //     $(this).next('.ari_song__accordion_inner').slideToggle();
  //     $(this).toggleClass("open");
  //     //クリックされた.accordion_oneの中の.accordion_header以外の.accordion_oneの中の.accordion_headerに隣接する.accordion_oneの中の.accordion_innerを閉じる
  //     $('.ari_song__accordion_header').not($(this)).next('.accordion_inner').slideUp();
  //     $('.ari_song__accordion_header').not($(this)).removeClass("open");
  //   });
  // });
//   jQuery(function ($) {  
//     //タイトルがクリックされたら
//     $(".ari_song__accordion_header").on('click', function () {
//       //クリックしたjs-accordion-title以外の全てのopenを取る
//       $(".ari_song__accordion_header").not(this).removeClass("open");
//       //クリックされたjs-accordion-title以外のcontentを閉じる
//       $(".ari_song__accordion_header").not(this).next().slideUp(300);
//       //thisにopenクラスを付与
//       $(this).toggleClass("open");
//       //thisのcontentを展開、開いていれば閉じる
//       $(this).next().slideToggle(300);
//     });
    
//     /* 下記でもOK
//      $(".js-accordion-title").on('click', function () {
//        $(".js-accordion-title").not(this).removeClass("open").next().slideUp(300);
//        $(this).toggleClass("open").next().slideToggle(300);
//      });
//      */
// });

  // jQuery(function ($) {  
  //   //タイトルがクリックされたら
  //   $(".ari_song__accordion_header").on('click', function () {
  //     //クリックしたak-accordion_header以外の全てのopenを取る
  //     $(".ari_song__accordion_header").not(this).removeClass("open");
  //     //クリックされたak-accordion_header以外のcontentを閉じる
  //     $(".ari_song__accordion_header").not(this).next().slideUp(300);
  //     //thisにopenクラスを付与
  //     $(this).toggleClass("open");
  //     //thisのcontentを展開、開いていれば閉じる
  //     $(this).next().slideToggle(300);
  //   });
    
  // });

