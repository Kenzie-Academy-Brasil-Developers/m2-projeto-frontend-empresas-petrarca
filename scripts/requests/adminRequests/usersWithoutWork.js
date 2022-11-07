import { baseUrl } from "../sectors.js";

export async function requestUnhiredUsers(){
    const urlTarget = `${baseUrl}admin/out_of_work`
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
        // console.log("Resposta API todos usuários não contratados", res)
        return res
    })
    .catch(err => console.log(err))
    return request
}