var store = require("../util/store.js");

var paymentService = {
    //获取支付信息
    getPaymentInfo: function (orderNumber, resolve, reject) {
        store.request({
            url: store.getServerUrl("/order/pay.do"),
            data: {
                orderNo: orderNumber
            },
            method: "POST",
            success: resolve,
            error: reject
        });
    },
    //获取订单支付状态
    getPaymentStatus: function (orderNumber, resolve, reject) {
        store.request({
            url: store.getServerUrl("/order/query_order_pay_status.do"),
            data: {
                orderNo: orderNumber
            },
            method: "POST",
            success: resolve,
            error: reject
        });
    }
};
module.exports = paymentService;
