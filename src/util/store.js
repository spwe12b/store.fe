
var conf={
    serverHost:""
};
var hogan=require("hogan.js");
var store={
    //网络请求
    request:function(param){
        var _this=this;
        $.ajax({
            type : param.method||"get",
            url : param.url||"",
            datatype : param.type||"json",
            data : param.data||"",
            success:function(res){
                if(0===res.status){
                    if(typeof param.success==="function") param.success(res.data,res.msg);
                }else if(10===res.status){
                    _this.doLogin;
                }else if(1===res.status){
                    if(typeof param.error==="function") param.error(res.msg);
                }
            },
            error:function(err){
                if(typeof param.error==="function") param.error(err.statusText);
            }
        })
    },
    // 获取服务器地址
    getServerUrl : function(path){
    return conf.serverHost + path;
    },
    //获取URL参数
    getUrlParam:function(name){
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var result = window.location.search.substr(1).match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    },
    //渲染html模板
    renderHtml:function(htmlTemplate,data){
        var template=hogan.compile(htmlTemplate);
        var result=template.render(data);
        return result;
    },
    successTips:function(msg){
        alert(msg||"操作成功");
    },
    errorTips:function(msg){
        alert(msg||"操作失败");
    },
    //字段验证，空判断，手机，邮箱
    validate:function(value,type){
        var value=$.trim(value);
       if("require"===type){
        return !!value;
       }
       if("email"===type){
        return /^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/.test(value);
       }
       if("phone"===type){
        return /^1\d{10}$/.test(value);
       }
       return false;
    },
    showLoading: function (target) {
        if (target instanceof jQuery) {
            target.html("<div class=\"loading\"></div>");
        } else {
            $(target).html("<div class=\"loading\"></div>");
        }
    },
    //登陆处理
    doLogin:function(){
        window.location.href="./user-login.html?redirect="+encodeURIComponent(window.location.href);
    },
    //返回主页
    goHome:function(){
        window.location.href="./index.html";
    }
}
module.exports=store;
