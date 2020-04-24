require("../common/index.js");
require("../common/nav/index.js");
require("../common/header/index.js");
require("./index.css");
var navSide=require("../common/nav-side/index.js");
var store=require("../../util/store.js");
var userService=require("../../service/user-service.js");
var template=require("./index.string");
var page={
    init:function(){
        this.onLoad();
    },
    onLoad:function(){
        // 初始化左侧菜单
        navSide.init({
            name: "user-center"
        });
        // 加载用户信息
        this.loadUserInfo();
    },
    // 加载用户信息
    loadUserInfo : function(){
        var userHtml = "";
        store.showLoading($(".panel-body"));
        userService.getUserInfo(function(data){
            userHtml = store.renderHtml(template,data);
            $(".panel-body").html(userHtml);
        }, function(errMsg){
            store.errorTips(errMsg);
        });
    }
};
$(function(){
    page.init();
});