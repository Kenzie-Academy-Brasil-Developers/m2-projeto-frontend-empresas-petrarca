import { baseUrl } from "../../sectors.js";

export async function requestDeleteDep(postId) {
    const urlTarget = `${baseUrl}departments/${postId}`
    const token = JSON.parse(localStorage.getItem('token'))

    let request = fetch(urlTarget, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    })
        .then(res => res.json())
        .then(res => res)
        .then(res => {
            console.log("Retorno API deletar setor", res)
            // return res
        })
        .catch(err => err)
    return request
}