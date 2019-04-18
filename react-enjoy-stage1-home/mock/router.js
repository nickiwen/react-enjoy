var express = require("express");
var router = express.Router();
var homeHot = require("./data/home/homehot.js");
var homeHot2 = require("./data/home/homehot2.js");
var url = require("url");

// 热门数据 1
router.get("/homehot",function(req,res){
    // get参数
    var query = url.parse(req.url,true).query;
    console.log("城市：" +query.city);
    res.send(homeHot);
})


// 热门数据 2
router.get("/homehot2",function(req,res){
    var query = url.parse(req.url,true).query;
    console.log("城市：" +query.city);
    res.send(homeHot2);
})


module.exports = router;