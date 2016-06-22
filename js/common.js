/**
 * Created by liliy_000 on 2016/6/17.
 */
// nav
var $nav = $("#nav");
if ( $nav.length > 0 ) {
    $nav.find("a").hover (function () {
        $(this).find("i").animate({"top":"-45px"},100);
    },function () {
        $(this).find("i").animate({"top":"0px"},100);
    });
}
// share
var $footer = $("#footer");
if ( $footer.length > 0 ) {
    // fb
    function dolog(_info, _callback) {
        var img = new Image();
        img.onload = img.onerror = _callback;
        img.src = 'http://www.jq-school.com/images/logo.gif';
    }

    var layerWxcode = document.getElementById('layerWxcode');
    function onMouseoverXCode() {
        layerWxcode.className = 'towdimcodelayer js-transition js-show-up';
    }
    function onMouseoutXCode() {
        layerWxcode.className = 'towdimcodelayer js-transition';
    }
    // wx
    $footer.find("a").eq(1).hover(function () {
        $(this).find("i").fadeIn(300);
    },function () {
        $(this).find("i").fadeOut(300);
    });
}
// 滚动加载
var $news = $(".js-news");
if ( $news.length > 0 ) {
    $news.eq("0").show().removeClass("js-news").animate({"opacity": "1"},1000);
}
var docH = $(document).height();
var winH=$(window).height();
var winT = $(window).scrollTop();
calculation (winT,winH,winT);
$(window).scroll(function(){
    docH = $(document).height();
    winH=$(window).height();
    winT = $(window).scrollTop();
    calculation(docH,winH,winT);
});
function calculation ( docH,winH,winT ) {
    if ( docH == winH + winT ) {
        $news = $(".js-news");
        if ( $news.length > 0 ) {
            $news.eq(0).show().removeClass("js-news").animate({"opacity": "1"},1000);
        }
    }
}