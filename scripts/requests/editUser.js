import { baseUrl } from "./sectors.js";
import { insertInfos } from "../userPage/userData.js"

export async function editUserRequest(data) {
    const urlTarget = `${baseUrl}users`
    const token = JSON.parse(localStorage.getItem('token'))
  
        let request = fetch(urlTarget, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(res => res)
            .then(res => {
                // console.log(res)
                insertInfos()
                return res
            })
            .catch(err => {
                console.log("Erro API editUser", err)
            })
        return request  
}