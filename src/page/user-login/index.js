require("../common/index.js");
require("./index.css");
require("../common/nav-simple/index.js");
var store=require("../../util/store.js");
var userService=require("../../service/user-service.js");
//错误栏提示
var errorItem={
    show:function(errorMsg){
        $(".error-item").show().find(".err-msg").text(errorMsg);
    },
    hide:function(){
        $(".error-item").hide();
    }
}
var page={
    init:function(){
      this.bindEvent(); 
    },
    bindEvent:function(){
       var _this=this;
       //点击输入框就隐藏错误栏
       $(".user-content").click(function(){
           errorItem.hide();
       })
       //登陆按钮提交
       $("#submit").click(function(){
           _this.submit();
       });
       //按下回车，提交
       $(".user-content").keyup(function(e){
            if(e.keyCode===13){
                _this.submit();
            }
       });
    },
    //提交
    submit:function(){
        var userInfo={
            username:$.trim($("#username").val()),
            password:$.trim($("#password").val())
        }
        if(!store.validate(userInfo.username,"require")){
            errorItem.show("请输入用户名！");
            return;
        };
        if(!store.validate(userInfo.password,"require")){
            errorItem.show("请输入密码！");
            return;
        };
        userService.login(userInfo,function(){
            window.location.href=store.getUrlParam("redirect"||"./index.html");
        },function(errorMsg){
            errorItem.show(errorMsg);
        });
    },
};
$(function(){
    page.init();
});