require("./index.css");
var store=require("../../../util/store.js");
var userService=require("../../../service/user-service.js");
var cartService=require("../../../service/cart-service.js");
// 导航
var nav = {
    init : function(){
        this.bindEvent();
        // this.loadUserInfo();
        // this.loadCartCount();
        return this;
    },
    bindEvent : function(){
        //测试
        $(".test-account").click(function(){
            alert("用户名:123  密码:123123");
        })
        // 登录点击事件
        $(".js-login").click(function(){
            store.doLogin();
        });
        // 注册点击事件
        $(".js-register").click(function(){
            window.location.href = "./user-register.html";
        });
        // 退出点击事件
        $(".js-logout").click(function(){
            userService.logout(function(res){
                window.location.reload();
            }, function(errMsg){
                store.errorTips(errMsg);
            });
        });
    },
    //加载用户信息
    loadUserInfo : function(){
        userService.checkLogin(function(res){
            $(".user.not-login").hide().siblings(".user.login").show()
                .find(".username").text(res.username);
        }, function(errMsg){
            // do nothing
        });
    },
    // 加载购物车数量
    loadCartCount : function(){
        cartService.getCartCount(function(res){
            $(".nav .cart-count").text(res || 0);
        }, function(errMsg){
            $(".nav .cart-count").text(0);
        });
    }
};

module.exports = nav.init();