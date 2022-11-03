import { baseUrl } from "../requests/sectors.js";

export async function requestEnterprises(){
    const urlTarget = `${baseUrl}companies`

    let request = fetch(urlTarget, {
        method: "GET"
    })
    .then(res => res.json())
    .then(res => res)
    .then(res => {
        return res
    })
    .catch(err => {
        console.log("Erro API todas empresas",err)
    })

    return request
}