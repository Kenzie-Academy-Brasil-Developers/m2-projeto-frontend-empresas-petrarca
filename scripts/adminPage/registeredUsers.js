import { requestAllUsers } from "../requests/adminRequests/allUsers.js"

const allUsersDisplay = document.querySelector('.registered-users-display')

export async function renderAllUsers(){
    const userList = await requestAllUsers()    
    userList.forEach(user => {
        
    });
}
