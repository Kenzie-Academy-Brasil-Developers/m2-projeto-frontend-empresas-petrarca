import { requestUnhiredUsers } from "../../requests/adminRequests/usersWithoutWork.js"
import { hireUserRequest } from "../../requests/adminRequests/hireUser.js"
import { requestDismissUser } from "../../requests/adminRequests/dismissUser.js"
import { requestAllUsers } from "../../requests/adminRequests/allUsers.js"


const bodySelect = document.querySelector('body')

export async function openSectorFunc(department) {
    let openToWork = await requestUnhiredUsers()

    const background = document.createElement('div')
    const modalCard = document.createElement('div')
    const header = document.createElement('div')
    const title = document.createElement('h3')
    const closeModal = document.createElement('button')

    const modalBody = document.createElement('div')
    const sectionOne = document.createElement('div')
    const sectionTwo = document.createElement('div')

    const depDiv = document.createElement('div')
    const departmentDesc = document.createElement('h5')
    const departmentEnterprise = document.createElement('p')

    const hireDiv = document.createElement('div')
    const userSelect = document.createElement('select')
    const blankUser = document.createElement('option')
    const hireBtn = document.createElement('button')

    background.classList.add('modal-background')
    modalCard.classList.add('modal-card', 'bigger-modal')
    closeModal.classList.add('close-modal')
    header.classList.add('modal-header')
    modalBody.classList.add('modal-body', 'admin-modal-department')
    sectionOne.classList.add('hire-user-modal')
    depDiv.classList.add('hire-user-part-one')
    hireDiv.classList.add('hire-user-part-two')
    sectionTwo.classList.add('admin-department-modal-second')

    closeModal.innerText = "X"
    title.innerText = department.name
    departmentDesc.innerText = department.description
    departmentEnterprise.innerText = department.companies.name
    blankUser.innerText = "Selecionar usuário"
    blankUser.value = ""
    hireBtn.innerText = "Contratar"


    header.append(title, closeModal)
    depDiv.append(departmentDesc, departmentEnterprise)
    userSelect.append(blankUser)
    hireDiv.append(userSelect, hireBtn)
    sectionOne.append(depDiv, hireDiv)
    modalBody.append(sectionOne, sectionTwo)
    modalCard.append(header, modalBody)
    background.append(modalCard)
    bodySelect.append(background)
    dismissUsersFunc(department.uuid, department.companies.name)

    openToWork.forEach(user => {
        const option = document.createElement('option')
        option.innerText = user.username
        option.value = user.uuid
        userSelect.append(option)

    });

    closeModal.addEventListener('click', (event) => {
        event.preventDefault()
        background.remove()
    })


    hireBtn.addEventListener('click', (event) => {
        event.preventDefault()
        if (userSelect.value != "") {

            hireUserRequest(userSelect.value, department.uuid)  
            background.remove()
        }
    })

}

async function dismissUsersFunc(departmentId, enterpriseName) {
    const background = document.querySelector('.modal-background')
    const sectionTwo = document.querySelector('.admin-department-modal-second')
    sectionTwo.innerText = ""

    let users = await requestAllUsers()

    users.forEach(user => {
        if (user.department_uuid == departmentId) {
            const employeeCard = document.createElement('div')
            const username = document.createElement('h5')
            const userStack = document.createElement('p')
            const companyName = document.createElement('p')
            const dismissBtn = document.createElement('button')

            employeeCard.classList.add('dismiss-employee-card')

            username.innerText = user.username
            userStack.innerText = user.professional_level
            companyName.innerText = enterpriseName
            dismissBtn.innerText = "Desligar"

            employeeCard.append(username, userStack, companyName, dismissBtn)
            sectionTwo.append(employeeCard)

            dismissBtn.addEventListener('click', (event) => {
                requestDismissUser(user.uuid)
                .then(background.remove())
            })
        }
    })
    
}