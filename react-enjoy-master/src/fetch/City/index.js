// http://localhost:3200/api/lbs?lat=39.984154&lng=116.307490

import { getHttp } from "../http"

export async function getCurrentLocation(lat,lng){
    const result = await getHttp("/api/lbs?lat="+ lat +"&lng="+lng).then(res => {
        return res;
    })
    .catch(error => {
        return error;
    })

    return result.json()
}