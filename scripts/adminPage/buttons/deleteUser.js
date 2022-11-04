import { renderAllUsers } from "../registeredUsers.js"
import { requestDeleteUser } from "../../requests/adminRequests/deleteUser.js"
const bodySelect = document.querySelector('body')


export function deleteUser(id, username){

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
    title.innerText = `Realmente deseja remover o usuário ${username}?`
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
        console.log("De")
        await requestDeleteUser(id)
        await renderAllUsers()
        background.remove()
    })
}