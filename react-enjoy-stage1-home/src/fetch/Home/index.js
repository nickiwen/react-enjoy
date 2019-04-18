// 处理网络请求
import { getHttp } from "../http"

export async function getHomeHotPart1(city){
    const result = await getHttp("/api/homehot?city="+city).then(data => {
        return data
    })
    .catch(error => {
        return error
    })
    
    return result.json()
}

export async function getHomeHotPart2(city){
    const result = await getHttp("/api/homehot2?city="+city).then(data => {
        return data
    })
    .catch(error => {
        return error;
    })
    return result.json();
}