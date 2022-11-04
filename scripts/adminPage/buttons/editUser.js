import { requestEditUser } from "../../requests/adminRequests/editUser.js"
import { renderAllUsers } from "../registeredUsers.js"

const bodySelect = document.querySelector('body')

export async function editUser(userId){
    const background = document.createElement('div')
    const modalCard = document.createElement('div')
    const header = document.createElement('div')
    const title = document.createElement('h3')
    const closeModal = document.createElement('button')

    const modalBody = document.createElement('div')
    const modalitySelect = document.createElement('select')
    const blankModality = document.createElement('option')
    const modalityPresencial = document.createElement('option')
    const modalityHomeoffice = document.createElement('option')
    const modalityHibrido = document.createElement('option')
    const professionalLevel = document.createElement('select')
    const blankStack = document.createElement('option')
    const senior = document.createElement('option')
    const pleno = document.createElement('option')
    const junior = document.createElement('option')
    const estagiario = document.createElement('option')

    const saveBtn = document.createElement('button')

    background.classList.add('modal-background')
    header.classList.add('modal-header')
    closeModal.classList.add('close-modal-edit-user')
    modalCard.classList.add('modal-card', 'modal-edit-user')
    modalBody.classList.add('edit-user-adm')
    saveBtn.classList.add('create-dep-btn')

    title.innerText = "Editar Usuário"
    closeModal.innerText = "X"
    saveBtn.innerText = "Editar"


    blankModality.innerText = "Selecionar modalidade de trabalho"
    modalityPresencial.innerText = "Presencial"
    modalityHomeoffice.innerText = "Home Office"
    modalityHibrido.innerText = "Híbrido"
    
    blankModality.value = ""
    modalityPresencial.value = "presencial"
    modalityHomeoffice.value = "home office"
    modalityHibrido.value = "hibrido"

    blankStack.innerText = "Selecionar nível profissional"
    estagiario.innerText = "Estágio"
    junior.innerText = "Júnior"
    pleno.innerText = "Pleno"
    senior.innerText = "Sênior"
    
    blankStack.value = ""
    estagiario.value = "estágio"
    junior.value = "júnior"
    pleno.value = "pleno"
    senior.value = "sênior"

  
    header.append(title, closeModal)
    modalitySelect.append(blankModality, modalityHibrido, modalityHomeoffice, modalityPresencial)
    professionalLevel.append(blankStack, estagiario, junior, pleno, senior)
    modalBody.append(modalitySelect, professionalLevel)
    modalCard.append(header, modalBody, saveBtn)
    background.append(modalCard)
    bodySelect.append(background)

    closeModal.addEventListener('click', (event) => {
        event.preventDefault()
        background.remove()
    })

    saveBtn.addEventListener('click', async (event) => {
        event.preventDefault()
        let changes = {
            kind_of_work: modalitySelect.value,
            professional_level: professionalLevel.value,
        }
        await requestEditUser(changes ,userId)
        await renderAllUsers()
        background.remove()  
    })
}