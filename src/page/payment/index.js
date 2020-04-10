require("../common/index.js");
require("./index.css");
require("../common/nav/index.js");
require("../common/header/index.js");
var _payment = require("../../service/payment-service.js");
var store = require("../../util/store.js");
var templateHtml = require("./index.string");

var page = {
    data: {
        orderNumber: ""
    },
    init: function () {
        this.data.orderNumber = store.getUrlParam("orderNumber");
        this.loadPaymentInfo();
    },
    //获取支付信息
    loadPaymentInfo: function () {
        var _this = this,
            paymentHtml = "",
            $pageWrap = $(".page-wrap");
        store.showLoading($pageWrap);
        _payment.getPaymentInfo(this.data.orderNumber, function (res) {
            console.log(res);
            paymentHtml = store.renderHtml(templateHtml, res);
            $pageWrap.html(paymentHtml);
            _this.listenOrderStatus();
        }, function (errMsg) {
        });
    },
    //监听订单状态
    listenOrderStatus: function () {
        var _this = this;
        window.setInterval(function () {
            _payment.getPaymentStatus(_this.data.orderNumber, function (res) {
                if (res == true) {
                    window.location.href = "./result.html?type=payment&orderNumber=" + _this.data.orderNumber;
                }
            });
        }, 5000)

    }
};
$(function () {
    page.init();
});