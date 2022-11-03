import { baseUrl } from "../sectors.js";

export async function requestDepartment(enterpriseId) {
    let urlTarget = `${baseUrl}departments/${enterpriseId}`
    let token = JSON.parse(localStorage.getItem('token'))
    
    let request = fetch(urlTarget, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    })
    .then(res => res.json())
    .then(res => res)
    .then(res => {
        return res
    })
    .catch(err => {
        console.log("Erro API departamentos",err)
    })

    return request
}

export async function requestAllDepartments() {
    let urlTarget = `${baseUrl}departments`
    let token = JSON.parse(localStorage.getItem('token'))
    
    let request = fetch(urlTarget, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    })
    .then(res => res.json())
    .then(res => res)
    .then(res => {
        return res
    })
    .catch(err => {
        console.log("Erro API todos departamentos",err)
    })

    return request
}