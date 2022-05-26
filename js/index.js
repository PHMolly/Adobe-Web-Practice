
const isMobile = $(window).width() <= 480;
// 利用此變數控制瀏覽器視窗自動辨讀是否為手機版,如果是就以手機版版面去呈現
// 測試變數是否成功用console.log(isMobile);
const $ul = $('#SlideLs');
const $Nav = $('#Nav');


// init -------------------------
$('#Btn1').addClass('js-nav-btn');

// ==用來判斷是否為true的寫法,也可省略僅寫isMoblie
if (isMobile == true) {
    console.log('手機版會做的事');
    $ul.find('.slide-item').scroll(function () {
        // console.log($(this).scrollTop());
        if ($(this).scrollTop() == 0) {
            $Nav.removeClass('js-nav');

        } else {
            $Nav.addClass('js-nav')
        }
        // } else {
        //     console.log('電腦版會做的事');
        // }
    })
}
// event ---------------------
$('#Btn1').click(function () {
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
    $ul.css({
        top: 0,
        left: 0,
    });
});

$('#Btn2').click(function () {
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
    $ul.css({
        top: 0,
        left: '-100%',
    });
});

$('#Btn3').click(function () {
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
    $ul.css({
        top: 0,
        left: '-200%',
    });
});

$('#Btn4').click(function () {
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
    $ul.css({
        top: '-100%',
        left: 0,
    });
});

$('#Btn5').click(function () {
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
    $ul.css({
        top: '-100%',
        left: '-100%',
    });
});

$('#Btn6').click(function () {
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn');
    $ul.css({
        top: '-200%',
        left: '-100%',
    });
});

$('.pd-item >a').fancybox({
    protect:true,
    loop:true,
    // animationDuration:500,
    transitionDuration:1000,
    transitionEffect:'circular',
    toolbar:true,
    fullScreen:{
        autoScreen:true,
        speed:3000,},
    trumbs:{autoStart:true,
    speed:3000,},
    buttons:['zoom','download','slideShow','close'],
    media:{youtube:{
        params:{
            autoplay:false,
        }
    }}


});