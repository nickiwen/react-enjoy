var express = require("express");
var request = require("request");
var router = express.Router();
var homeHot = require("./data/home/homehot.js");
var homeHot2 = require("./data/home/homehot2.js");
var searchData = require("./data/search");
var detailsData = require("./data/details");
var commentData = require("./data/comment");
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


// 地理定位
router.get("/lbs",function(req,res){
    var query = url.parse(req.url,true).query;
    var lat = query.lat;
    var lng = query.lng;

    request.get({
        uri:"https://apis.map.qq.com/ws/geocoder/v1/",
        json:true,
        qs:{
            location:`${lat},${lng}`,
            key:"24EBZ-QOT3V-RN3P2-ULHSA-D6KIH-FEFB4"
        }
    },(err,response,data) => {
        if(response.statusCode === 200){
            res.send(data)
        }else{
            res.send({
                msg:"定位失败"
            })
        }
    })
})

// search
router.get("/search",function(req,res){
    var query = url.parse(req.url,true).query;
    // 获取参数
    console.log("搜索关键字:"+query.keywords);
    console.log("城市:"+query.city);
    res.send(searchData)
})

// 详情
router.get("/details",function(req,res){
    var query = url.parse(req.url,true).query;
    console.log("goods_id:"+query.id);
    res.send(detailsData)
})

// 评价 
router.get("/comment",function(req,res){
    var query = url.parse(req.url,true).query;
    console.log("goods_id:"+query.id);
    res.send(commentData)
})

module.exports = router;