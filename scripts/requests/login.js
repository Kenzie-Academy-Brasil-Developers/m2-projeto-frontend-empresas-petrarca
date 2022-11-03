import { baseUrl } from "../requests/sectors.js";
import { userRedirect } from "../login/redirect.js"

export async function requestLogin(data) {
    const urlTarget = `${baseUrl}auth/login`

    let request = fetch(urlTarget, {
        method:"POST", 
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
    })
    .then(res => res.json())
    .then(res => res)
    .then(res => {
        let token = JSON.stringify(res.token)
        localStorage.setItem('token', token)
        // console.log("Resposta API LOGIN", res)
        userRedirect()
    })
    .catch((err) => {
        console.log("Erro API LOGIN", err)
        // Codar toast de erro aqui
    })
    
    return request
}


