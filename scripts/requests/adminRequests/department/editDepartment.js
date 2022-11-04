import { baseUrl } from "../../sectors.js";

export async function requestEditDep(changes, postId) {
    const urlTarget = `${baseUrl}departments/${postId}`
    const token = JSON.parse(localStorage.getItem('token'))

    let request = fetch(urlTarget, {
        method: "PATCH",
        body: JSON.stringify(changes),
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    })
        .then(res => res.json())
        .then(res => res)
        .then(res => {
            // console.log("Retorno API editar setor", res)
            return res
        })
        .catch(err => console.log("Erro API editar setor", err))
    return request
}