var store=require("../util/store.js");
var userService={
    //用户登录
    login:function(userInfo,resolve,reject){
        store.request({
            url:store.getServerUrl("/user/login.do"),
            method:"POST",
            data:userInfo,
            success:resolve,
            error:reject
        });
    },
    //用户注册
    register:function(userRegister,resolve,reject){
        store.request({
            url:store.getServerUrl("/user/register.do"),
            method:"POST",
            data:userRegister,
            success:resolve,
            error:reject
        });
    },
    //验证用户名是否存在
    checkUsername:function(username,resolve,reject){
        store.request({
            url:store.getServerUrl("/user/check_valid.do"),
            method:"POST",
            data:{
                type:"username",
                str: username
            },
            success:resolve,
            error:reject
        });
    },
      // 获取用户密码提示问题
      getQuestion : function(username, resolve, reject){
        store.request({
            url: store.getServerUrl("/user/forget_get_question.do"),
            data: {
                username : username
            },
            method: "POST",
            success: resolve,
            error: reject
        });
    },
    // 检查密码提示问题答案
    checkAnswer : function(userInfo, resolve, reject){
        store.request({
            url: store.getServerUrl("/user/forget_check_answer.do"),
            data: userInfo,
            method: "POST",
            success: resolve,
            error: reject
        });
    },
    // 重置密码
    resetPassword : function(userInfo, resolve, reject){
        store.request({
            url: store.getServerUrl("/user/forget_reset_password.do"),
            data: userInfo,
            method: "POST",
            success: resolve,
            error: reject
        });
    },
    // 获取用户信息
    getUserInfo : function(resolve, reject){
        store.request({
            url: store.getServerUrl("/user/get_information.do"),
            method: "POST",
            success: resolve,
            error: reject
        });
    },
    // 更新个人信息
    updateUserInfo : function(userInfo, resolve, reject){
        store.request({
            url: store.getServerUrl("/user/update_information.do"),
            data: userInfo,
            method: "POST",
            success: resolve,
            error: reject
        });
    },
    // 登录状态下更新密码
    updatePassword : function(userInfo, resolve, reject){
        store.request({
            url: store.getServerUrl("/user/reset_password.do"),
            data: userInfo,
            method: "POST",
            success: resolve,
            error: reject
        });
    },
    // 登出
    logout : function(resolve, reject){
        store.request({
            url: store.getServerUrl("/user/logout.do"),
            method: "POST",
            success: resolve,
            error: reject
        });
    }

}
module.exports=userService;