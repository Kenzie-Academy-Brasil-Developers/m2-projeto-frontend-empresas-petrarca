import { baseUrl } from "../sectors.js";

export async function requestDeleteUser(userId) {
    const urlTarget = `${baseUrl}admin/delete_user/${userId}`
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
            console.log("Retorno API deletar usuário", res)
            // return res
        })
        .catch(err => err)
    return request
}