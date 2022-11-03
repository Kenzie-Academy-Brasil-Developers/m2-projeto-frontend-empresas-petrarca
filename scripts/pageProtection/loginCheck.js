import { verifyUserType } from "../requests/userVerify.js"

export async function currentLoginVerify(){
    let tokenTest = await verifyUserType()
    if (tokenTest == undefined || tokenTest == null){
        window.location.replace('../login/login.html')
    }
}