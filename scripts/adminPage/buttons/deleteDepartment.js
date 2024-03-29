import { requestDeleteDep } from "../../../scripts/requests/adminRequests/department/deleteDepartment.js"
import { enterpriseDepartmentFilter } from "../enterpriseSectors.js"
import { select } from "./createDepartment.js"
import { renderAllUsers } from "../registeredUsers.js"


const bodySelect = document.querySelector('body')

export async function deleteDepartment(departmentId, name){
    const background = document.createElement('div')
    const modalCard = document.createElement('div')

    const title = document.createElement('h3')
    const closeModal = document.createElement('button')
    const confirm = document.createElement('button')

    background.classList.add('modal-background')
    closeModal.classList.add('close-delete-modal')
    modalCard.classList.add('modal-card', 'delete-modal-card')
    confirm.classList.add('delete-confirm-btn')
    title.classList.add("delete-department-advice")

    closeModal.innerText = "X"
    title.innerText = `Realmente deseja deletar o departamento ${name} e demitir seus funcionários?`
    confirm.innerText = "Confirmar"

    modalCard.append(closeModal, title, confirm)
    background.append(modalCard)
    bodySelect.append(background)

    closeModal.addEventListener('click', (event) => {
        event.preventDefault()
        background.remove()
    })
    confirm.addEventListener('click', async (event) => {
        event.preventDefault()
        await requestDeleteDep(departmentId)
        await enterpriseDepartmentFilter(select.value)
        await renderAllUsers()
    background.remove()
    })
}