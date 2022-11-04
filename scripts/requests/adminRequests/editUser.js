import { baseUrl } from "../sectors.js";

export async function requestEditUser(changes, userId) {
    const urlTarget = `${baseUrl}admin/update_user/${userId}`
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
            // console.log("Retorno API editar user", res)
            return res
        })
        .catch(err => console.log("Erro API editar user", err))
    return request
}