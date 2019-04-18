import { getHttp } from "../http"

export async function getSearchData(city,keywords){
    const result = await fetch(`/api/search?keywords=${keywords}&city=${city}`)
    .then(res =>{
        return res;
    })
    .catch(error => {
        return error;
    })

    return result.json();
}