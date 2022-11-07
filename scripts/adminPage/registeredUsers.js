import { requestAllUsers } from "../requests/adminRequests/allUsers.js"
import { deleteUser } from "./buttons/deleteUser.js"
import { editUser } from "./buttons/editUser.js"
import { requestAllDepartments } from "../requests/adminRequests/enterpriseDepartments.js"

const allUsersDisplay = document.querySelector('.registered-users-display')

export async function renderAllUsers() {
    allUsersDisplay.innerText = ""
    const userList = await requestAllUsers()
    const departmentList = await requestAllDepartments()
    // console.log(enterprisesList,userList)
    userList.forEach(user => {
        if (user.is_admin == false) {
            const card = document.createElement('div')
            const userDataBox = document.createElement('div')
            const depName = document.createElement('h5')
            const depDescription = document.createElement('p')
            const companyName = document.createElement('p')
    
            const options = document.createElement('div')

            const edit = document.createElement('button')
            const exclude = document.createElement('button')
            const editImg = document.createElement('img')
            const excludeImg = document.createElement('img')
            
            card.classList.add("user-display-card")
            userDataBox.classList.add("department-description")
            options.classList.add("department-options")
    
            depName.classList.add('username-display')

            depName.innerText = user.username
            depDescription.innerText = user.professional_level
            
            
            departmentList.forEach(department => {
                if(user.department_uuid == department.uuid){
                    companyName.innerText = department.companies.name
                }
            })
            
            editImg.src = "../../src/edit.svg"
            excludeImg.src = "../../src/delete.svg"
    
            userDataBox.append(depName, depDescription, companyName)

            edit.append(editImg)
            exclude.append(excludeImg)
            options.append(edit, exclude)
            card.append(userDataBox, options)
            allUsersDisplay.append(card)

            edit.addEventListener('click', (event) => {
                event.preventDefault()
                editUser(user.uuid)
            })

            exclude.addEventListener('click', (event) => {
                event.preventDefault()
                deleteUser(user.uuid, user.username)
            })
        }
    });
}
