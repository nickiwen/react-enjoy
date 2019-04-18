import { postHttp } from "../http"

export async function getSubmitCommentData(params){
    const result = await postHttp("/api/submit/comment",params)
    .then(res => {
        return res;
    })
    .catch(error => {
        return error;
    })

    return result.json();
}