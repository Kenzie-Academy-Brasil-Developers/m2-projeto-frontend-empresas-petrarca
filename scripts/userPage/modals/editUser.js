import {editUserRequest} from "../../requests/editUser.js"

const bodyOrigin = document.querySelector('body')

export function modalEditUser() {
    const background = document.createElement('div')
    const modalBox = document.createElement('div')
    const header = document.createElement('div')
    const title = document.createElement('h4')
    const closeBtn = document.createElement('button')
    const nameInput = document.createElement('input')
    const emailInput = document.createElement('input')
    const passwordInput = document.createElement('input')
    const submitEdit = document.createElement('button')

    background.classList.add('modal-background')
    modalBox.classList.add('edit-user-modal')
    header.classList.add('edit-user-modal-header')
    submitEdit.classList.add('edit-user-submit')

    title.innerText = "Editar Perfil"
    closeBtn.innerText = "X"
    submitEdit.innerText = "Editar perfil"

    nameInput.placeholder = "Seu nome"
    emailInput.placeholder = "Seu e-mail"
    passwordInput.placeholder = "Sua senha"

    header.append(title, closeBtn)
    modalBox.append(header, nameInput, emailInput, passwordInput,submitEdit)
    background.append(modalBox)
    bodyOrigin.append(background)

    closeBtn.addEventListener('click', (event) => {
        event.preventDefault()
        background.remove()
    })

    submitEdit.addEventListener('click', async (event) => {
        event.preventDefault()
        let changes = {
            username: nameInput.value,
            password: passwordInput.value,
            email: emailInput.value,
        }
        await editUserRequest(changes)
        .then(background.remove())
    })
}