import { baseUrl } from "../sectors.js";

export async function requestAllUsers(){
    const urlTarget = `${baseUrl}users`
    const token = JSON.parse(localStorage.getItem('token'))
    
    let request = fetch(urlTarget, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        },
    })
    .then(res => res.json())
    .then(res => res)
    .then(res => {
        // console.log("Resposta API todos usuários", res)
        return res
    })
    .catch(err => console.log(err))
    return request
}