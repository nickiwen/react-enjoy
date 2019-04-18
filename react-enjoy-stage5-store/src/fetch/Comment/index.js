import { getHttp } from "../http"

export async function getCommentData(goods_id){
    const result = await getHttp(`/api/comment?id=`+goods_id)
    .then(res => {
        return res;
    })
    .catch(error => {
        return error;
    })

    return result.json();
}