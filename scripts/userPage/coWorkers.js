import { requestCoWorkers } from "../requests/coWorkers.js"
import { userInfosFunc } from "../requests/userInfos.js"

const coWorkersBox = document.querySelector('.co-workers-box')

export async function insertCoWorkers(){
    let user = await userInfosFunc()
    let team = await requestCoWorkers()
    if(user.department_uuid == null){
        const unEmployed = document.createElement('h4')
        unEmployed.innerText = "Você ainda não foi contratado"
        coWorkersBox.append(unEmployed)
    }
    
}