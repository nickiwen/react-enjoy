import { getHttp } from "../http"

export async function getDetailsData(goods_id){
    const result = await getHttp(`/api/details?id=`+goods_id)
    .then(res => {
        return res;
    })
    .catch(error => {
        return error;
    })

    return result.json();
}