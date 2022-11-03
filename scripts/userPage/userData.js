import {userInfosFunc} from "../requests/userInfos.js"

const userName = document.querySelector('.infos-username')
const userEmail = document.querySelector('.infos-user-email')
const userStack = document.querySelector('.infos-user-stack')
const userModality = document.querySelector('.infos-user-modality')


export async function insertInfos(){
    const user = await userInfosFunc()
    
    userName.innerText = user.username
    userEmail.innerText = user.email
    userStack.innerText = user.professional_level
    userModality.innerText = user.kind_of_work

    if(user.professional_level == null) {
        userStack.innerText = ""
    }
    if(user.kind_of_work == null) {
        userModality.innerText = ""
    }

}

