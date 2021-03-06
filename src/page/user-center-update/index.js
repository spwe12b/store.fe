require("../common/index.js");
require("../common/nav/index.js");
require("../common/header/index.js");
require("./index.css");
var navSide=require("../common/nav-side/index.js");
var store=require("../../util/store.js");
var userService=require("../../service/user-service.js");
var template=require("./index.string");
// page 逻辑部分
var page = {
    init: function(){
        this.onLoad();
        this.bindEvent();
    },
    onLoad : function(){
        // 初始化左侧菜单
        navSide.init({
            name: "user-center"
        });
        // 加载用户信息
        this.loadUserInfo();
    },
    bindEvent : function(){
        var _this = this;
        // 点击提交按钮后的动作
        $(document).on("click", ".btn-submit", function(){
            var userInfo = {
                phone       : $.trim($("#phone").val()),
                email       : $.trim($("#email").val()),
                question    : $.trim($("#question").val()),
                answer      : $.trim($("#answer").val())
            },
            validateResult = _this.validateForm(userInfo);
            if(validateResult.status){
                // 更改用户信息
                userService.updateUserInfo(userInfo, function(res, msg){
                    store.successTips(msg);
                    window.location.href = "./user-center.html";
                }, function(errMsg){
                    store.errorTips(errMsg);
                });
            }
            else{
                store.errorTips(validateResult.msg);
            }
        });
    },
    // 加载用户信息
    loadUserInfo : function(){
        var userHtml = "";
        userService.getUserInfo(function(res){
            userHtml = store.renderHtml(template, res);
            $(".panel-body").html(userHtml);
        }, function(errMsg){
            store.errorTips(errMsg);
        });
    },
    // 验证字段信息
    validateForm : function(formData){
        var result = {
            status  : false,
            msg     : ""
        };
        // 验证手机号
        if(!store.validate(formData.phone, "phone")){
            result.msg = "手机号格式不正确";
            return result;
        }
        // 验证邮箱格式
        if(!store.validate(formData.email, "email")){
            result.msg = "邮箱格式不正确";
            return result;
        }
        // 验证密码提示问题是否为空
        if(!store.validate(formData.question, "require")){
            result.msg = "密码提示问题不能为空";
            return result;
        }
        // 验证密码提示问题答案是否为空
        if(!store.validate(formData.answer, "require")){
            result.msg = "密码提示问题答案不能为空";
            return result;
        }
        // 通过验证，返回正确提示
        result.status   = true;
        result.msg      = "验证通过";
        return result;
    }
};
$(function(){
    page.init();
});