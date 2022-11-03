import { verifyUserType } from "../requests/userVerify.js"

export async function userRedirect(){
    let token = localStorage.getItem('token')
    if(token != null){
        let userIsAdm = await verifyUserType()
        console.log(userIsAdm)
        if(userIsAdm.is_admin == true){
            console.log("HIHII")
            window.location.replace('../adminPage/admin.html')
        } else if(userIsAdm.is_admin == false) {
            window.location.replace('../userPage/user.html')
        }
    }
} 
