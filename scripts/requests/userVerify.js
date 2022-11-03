import { baseUrl } from "./sectors.js";

export async function verifyUserType() {
    const urlTarget = `${baseUrl}auth/validate_user`
    const token = JSON.parse(localStorage.getItem('token'))

    if (token != null) {
        let request = fetch(urlTarget, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        })
            .then(res => res.json())
            .then(res => res)
            .then(res => {
                // console.log(res)
                return res
            })
            .catch(err => {
                console.log("Erro API userVerify", err)
            })
        return request
    }
}