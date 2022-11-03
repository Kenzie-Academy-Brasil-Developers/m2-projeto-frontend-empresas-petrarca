import { editUserRequest } from "../../requests/editUser.js"
import { modalEditUser } from "../modals/editUser.js"
 
const editUserBtn = document.querySelector('.edit-infos')

export async function editUserFunc(){
    editUserBtn.addEventListener('click', (event) => {
        event.preventDefault()
        modalEditUser()
    })
}