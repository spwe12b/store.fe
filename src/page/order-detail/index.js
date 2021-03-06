require("../common/index.js");
require("./index.css");
require("../common/nav/index.js");
require("../common/header/index.js");
var _order = require("../../service/order-service.js");
var navSide = require("../common/nav-side/index.js");
var store = require("../../util/store.js");
var templateHtml = require("./index.string");

var page = {
    data: {
        orderNumber: store.getUrlParam("orderNumber")
    },
    init: function () {
        this.onLoad();
        this.bindEvent();
    },
    onLoad: function () {
        //加载侧面导航栏
        navSide.init({
            name: "order-list"

        });
        this.loadDetail();
    },
    bindEvent: function () {
        var _this = this;
        $(document).on("click", ".order-cancel", function () {
            store.confirmTips("确认取消订单？", function () {
                _order.cancelOrder(_this.data.orderNumber, function (res) {
                    _this.loadDetail();
                    store.successTips("该订单取消成功");
                }, function (errMsg) {
                    store.errorTips(errMsg);
                });
            });
        });
    },
    //加载订单数据
    loadDetail: function () {
        var _this = this,
            orderDatailHtml = "",
            $content = $(".content");
        store.showLoading($content);
        _order.getOrderDetail(this.data.orderNumber, function (res) {
            _this.dataFilter(res);
            orderDatailHtml = store.renderHtml(templateHtml, res);
            $content.html(orderDatailHtml);
        }, function (errMsg) {
        });
    },
    dataFilter: function (data) {
        data.needPay = data.status == 10;
        data.isCancelable = data.status == 10;
    }
};

$(function () {
    page.init();
});