import qs from "querystring"

export function getHttp(url){
    var result = fetch(url)
    return result;
}

export function postHttp(url,params){
    console.log(params);
    
    var result = fetch(url,{
        method:"post",
        headers:{
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:qs.stringify(params)
    })
    return result;
}