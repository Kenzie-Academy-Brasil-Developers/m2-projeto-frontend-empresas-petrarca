import { baseUrl } from "./sectors.js";

export async function requestCoWorkers() {
    const urlTarget = `${baseUrl}users/departments/coworkers`
    const token = JSON.parse(localStorage.getItem('token'))

    let request = fetch(urlTarget, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    })
        .then(res => res.json())
        .then(res => res)
        .then(res => {
            // console.log("Resposta API co-workers", res)
            return res
        })
        .catch(err => console.log(err))

    return request
}