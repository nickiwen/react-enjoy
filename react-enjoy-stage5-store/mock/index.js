var express = require("express");
var app = express();
var router = require("./router.js");
var bodyParser = require("body-parser");

// 应用中间件
app.use(bodyParser.urlencoded({
	extended: true
}));


app.use("/api",router);


app.listen(3200,function(){
    console.log("服务器运行在3200端口上");
})