import { baseUrl } from "../requests/sectors.js";

export async function requestEnterprisesBySector(sector){
    const urlTarget = `${baseUrl}companies/${sector}`

    let request = fetch(urlTarget, {
        method: "GET"
    })
    .then(res => res.json())
    .then(res => res)
    .then(res => {
        return res
    })
    
    return request
}