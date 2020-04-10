require("./index.css");
var store=require("../../../util/store.js");
var header={
    init:function(){
       this.bindEvent();
    },
    onload:function(){
        var keyword=store.getUrlParam("keyword");
        if(keyword){
            $("#search-input").val(keyword);
        }
    },
    bindEvent:function(){
        var _this=this;
        $("#search-btn").click(function(){
             _this.searchSubmit();
        });
        $("#search-input").keyup(function(e){
           if(e.keyCode===13){
            _this.searchSubmit();
           }
        });
    },
    //提交搜索内容
    searchSubmit:function(){
        var keyword=$("#search-input").val();
        if(keyword){
            window.location.href="./list.html?keyword="+keyword;
        }else{
            store.goHome;
        }
    },
}
module.exports=header.init();
