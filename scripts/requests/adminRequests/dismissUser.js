import { baseUrl } from "../sectors.js";

export async function requestDismissUser(userId) {
    const urlTarget = `${baseUrl}departments/dismiss/${userId}`
    const token = JSON.parse(localStorage.getItem('token'))

    let request = fetch(urlTarget, {
        method: "PATCH",
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    })
        .then(res => res.json())
        .then(res => res)
        .then(res => {
            // console.log("Retorno API demitir user", res)
            return res
        })
        .catch(err => console.log("Erro API editar user", err))
    return request
}