require("../common/index.js");
require("./index.css");
require("../common/nav/index.js");
require("../common/header/index.js");
var _order = require("../../service/order-service.js");
var navSide = require("../common/nav-side/index.js");
var Pagination = require("../../util/pagination/index.js");
var store = require("../../util/store.js");
var templateHtml = require("./index.string");

var page = {
    data: {
        listParams: {
            pageNum: 1,
            pageSize: 5
        }
    },
    init: function () {
        this.onLoad();
    },
    onLoad: function () {
        this.loadOrderList();
        //加载侧面导航栏
        navSide.init({
            name: "order-list"

        });
    },
    loadOrderList: function () {
        var _this = this,
            orderListHtml = "",
            $orderList = $(".order-list-con");
        store.showLoading($orderList);
        _order.getOrderList(this.data.listParams, function (res) {
            var orderListHtml = store.renderHtml(templateHtml, res);
            $orderList.html(orderListHtml);
            _this.loadpagination({
                hasPreviousPage: res.hasPreviousPage,
                prePage: res.prePage,
                hasNextPage: res.hasNextPage,
                nextPage: res.nextPage,
                pageNum: res.pageNum,
                pages: res.pages
            });
        }, function (errMsg) {
        });
    },
    //加载分页信息
    loadpagination: function (pageInfo) {
        var _this = this;
        this.pagination ? "" : (this.pagination = new Pagination());
        this.pagination.render($.extend({}, pageInfo, {
            container: $(".pagination"),
            onSelectPage: function (pageNum) {
                _this.data.listParams.pageNum = pageNum;
                _this.loadOrderList();
            }
        }));
    }
};

$(function () {
    page.init();
});