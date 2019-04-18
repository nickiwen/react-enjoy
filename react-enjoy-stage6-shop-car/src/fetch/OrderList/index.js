import { getHttp } from "../http"

export async function getOrderListData(user){
    const result = await getHttp('/api/orderlist?user='+user)
    .then(res => {
        return res;
    })
    .catch(error => {
        return error;
    })
    return result.json();
}