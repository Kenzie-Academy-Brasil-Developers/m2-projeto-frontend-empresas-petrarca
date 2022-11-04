import { baseUrl } from "../../sectors.js";

export async function requesCreateDep(changes) {
    const urlTarget = `${baseUrl}departments`
    const token = JSON.parse(localStorage.getItem('token'))

    let request = fetch(urlTarget, {
        method: "POST",
        body: JSON.stringify(changes),
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    })
        .then(res => res.json())
        .then(res => res)
        .then(res => {
            console.log("Retorno API Criar setor", res)
        })
        .catch(err => console.log("Erro API criar Setor", err))
    return request
}