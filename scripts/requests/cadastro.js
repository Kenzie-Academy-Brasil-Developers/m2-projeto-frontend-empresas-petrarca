import { baseUrl } from "../requests/sectors.js";

export async function requestRegister(data) {
    const urlTarget = `${baseUrl}auth/register`

    let request = fetch(urlTarget, {
        method:"POST", 
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    })
    .then(res => res.json())
    .then(res => res)
    .then(res => {
        console.log("Resposta API LOGIN", res)
        window.location.assign('../login/login.html')
        return res
    })
    .catch((err) => {
        console.log("Erro API LOGIN", err)
    })
    
    return request
}