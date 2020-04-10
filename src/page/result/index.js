require("../common/index.js");
require("./index.css");
require("../common/nav-simple/index.js");
var store=require("../../util/store.js");
$(function(){
    var type=store.getUrlParam("type");
    $ele=$("."+type);
    $ele.show();
});