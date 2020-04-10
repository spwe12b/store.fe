var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin= require("html-webpack-plugin");
// 环境变量配置，dev/online
var WEBPACK_ENV = process.env.WEBPACK_ENV||"dev";
// 获取html-webpack-plugin参数的方法 
var getHtmlConfig = function(name){
    return {
        template    : "./src/view/" + name + ".html",
        filename    : "view/" + name + ".html",
        inject      : true,
        chunks      : [name]
    };
};
var config={
    entry:{
        "common":["./src/page/common/index.js"],
        "index":["./src/page/index/index.js"],
        "list":["./src/page/list/index.js"],
        "result":["./src/page/result/index.js"],
        "user-login":["./src/page/user-login/index.js"],
        "user-register":["./src/page/user-register/index.js"],
        "user-pass-reset":["./src/page/user-pass-reset/index.js"],
        "user-center":["./src/page/user-center/index.js"],
        "user-center-update":["./src/page/user-center-update/index.js"],
        "user-pass-update":["./src/page/user-pass-update/index.js"],
        "detail":["./src/page/detail/index.js"],
        "cart":["./src/page/cart/index.js"],
        "order-confirm":["./src/page/order-confirm/index.js"],
        "order-detail":["./src/page/order-detail/index.js"],
        "order-list":["./src/page/order-list/index.js"],
        "payment":["./src/page/payment/index.js"],
    },
    output:{
        path:"./dist",
        publicPath :"../",
        filename:"js/[name].js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader","css-loader") },
            { test: /\.(gif|png|jpg|woff|svg|eot|ttf)\??.*$/, loader: "url-loader?limit=100&name=resource/[name].[ext]" },
            { test: /\.string$/, loader: 'html-loader'}
        ]
    },
    plugins: [
        // 把css单独打包到文件里
        new ExtractTextPlugin("css/[name].css"),
        //加载html
        new HtmlWebpackPlugin(getHtmlConfig("index")),
        new HtmlWebpackPlugin(getHtmlConfig("result")),
        new HtmlWebpackPlugin(getHtmlConfig("user-login")),
        new HtmlWebpackPlugin(getHtmlConfig("user-register")),
        new HtmlWebpackPlugin(getHtmlConfig("user-pass-reset")),
        new HtmlWebpackPlugin(getHtmlConfig("user-center")),
        new HtmlWebpackPlugin(getHtmlConfig("user-center-update")),
        new HtmlWebpackPlugin(getHtmlConfig("user-pass-update")),
        new HtmlWebpackPlugin(getHtmlConfig("list")),
        new HtmlWebpackPlugin(getHtmlConfig("detail")),
        new HtmlWebpackPlugin(getHtmlConfig("cart")),
        new HtmlWebpackPlugin(getHtmlConfig("order-confirm")),
        new HtmlWebpackPlugin(getHtmlConfig("order-detail")),
        new HtmlWebpackPlugin(getHtmlConfig("order-list")),
        new HtmlWebpackPlugin(getHtmlConfig("payment")),

    ]
};
if("dev" === WEBPACK_ENV){
    config.entry.common.push('webpack-dev-server/client?http://localhost:8080/');
}
module.exports=config;