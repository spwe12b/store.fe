require("../common/index.js");
require("../common/nav/index.js");
require("../common/header/index.js");
require("../../util/slider/index.js")
require("./index.css");
var store=require("../../util/store.js");
var template=require("./banner.string");

$(function() {
    // 渲染banner的html
    var bannerHtml=store.renderHtml(template);
    $(".banner-con").html(bannerHtml);
    // 初始化banner
    var $slider= $(".banner").unslider({
        dots: true
    });
    // 前一张和后一张操作的事件绑定
    $(".banner-con .banner-arrow").click(function(){
        var forward = $(this).hasClass("prev") ? "prev" : "next";
        $slider.data("unslider")[forward]();
    });
});
