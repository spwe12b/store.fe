
var store = require("../util/store.js");

var orderService = {
    //获取未结算的商品信息
    getProductList: function (resolve, reject) {
        store.request({
            url: store.getServerUrl("/order/get_order_cart_product.do"),
            method: "POST",
            success: resolve,
            error: reject
        });
    },
    // 根据收货地址创建订单
    create: function (orderInfo, resolve, reject) {
        store.request({
            url: store.getServerUrl("/order/create.do"),
            data: orderInfo,
            method: "POST",
            success: resolve,
            error: reject
        });
    },
    // 获取当前登陆用户的订单列表
    getOrderList: function (orderInfo, resolve, reject) {
        store.request({
            url: store.getServerUrl("/order/list.do"),
            data: orderInfo,
            method: "POST",
            success: resolve,
            error: reject
        });
    },
    getOrderDetail: function (orderNumber, resolve, reject) {
        store.request({
            url: store.getServerUrl("/order/detail.do"),
            data: {
                orderNo: orderNumber
            },
            method: "POST",
            success: resolve,
            error: reject
        });
    },
    cancelOrder: function (orderNumber, resolve, reject) {
        store.request({
            url: store.getServerUrl("/order/cancel.do"),
            data: {
                orderNo: orderNumber
            },
            method: "POST",
            success: resolve,
            error: reject
        });
    }
};
module.exports = orderService;
