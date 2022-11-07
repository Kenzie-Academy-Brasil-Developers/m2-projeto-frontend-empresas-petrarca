import { baseUrl } from "../sectors.js";

export async function hireUserRequest(userId, departmentId) {
    const urlTarget = `${baseUrl}departments/hire/`
    const token = JSON.parse(localStorage.getItem('token'))
    const changes = {
        user_uuid: userId,
        department_uuid: departmentId,
    }

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
            // console.log("Retorno API contratar user", res)
            return res
        })
        .catch(err => console.log("Erro API editar user", err))
    return request
}
