var store = require("../util/store.js");

var productService = {
    // 获取商品列表
    getProductList : function(listParam, resolve, reject){
        store.request({
            url: store.getServerUrl("/product/list.do"),
            data: listParam,
            success: resolve,
            error: reject
        });
    },
    // 获取商品详细信息
    getProductDetail : function(productId, resolve, reject){
        store.request({
            url: store.getServerUrl("/product/detail.do"),
            data: {
                productId : productId
            },
            success: resolve,
            error: reject
        });
    }
}
module.exports = productService;