import { requestEditDep } from "../../requests/adminRequests/department/editDepartment.js"
import { enterpriseDepartmentFilter } from "../enterpriseSectors.js"
import { select } from "./createDepartment.js"

const bodySelect = document.querySelector('body')
export async function editDepartments(postId, postDesc) {
    
    const background = document.createElement('div')
    const modalCard = document.createElement('div')
    const header = document.createElement('div')
    const title = document.createElement('h3')
    const closeModal = document.createElement('button')

    const bodyModal = document.createElement('div')
    const textArea = document.createElement('textarea')
    const saveBtn = document.createElement('button')

    background.classList.add('modal-background')
    closeModal.classList.add('close-modal')
    modalCard.classList.add('modal-card')
    header.classList.add('modal-header')
    bodyModal.classList.add('modal-body')
    textArea.classList.add('edit-textarea')
    saveBtn.classList.add('create-dep-btn')


    title.innerText = "Editar Departamento"
    closeModal.innerText = "X"
    textArea.innerText = postDesc
    saveBtn.innerText = "Salvar Alterações"


    header.append(title, closeModal)
    bodyModal.append(textArea)
    modalCard.append(header, bodyModal, saveBtn)
    background.append(modalCard)
    bodySelect.append(background)

    saveBtn.addEventListener('click', async (event) => {
        event.preventDefault()
        
        let changes = {
            description: textArea.value
        }
        await requestEditDep(changes, postId)
        enterpriseDepartmentFilter(select.value)
        .then(background.remove())
        
        
    })
    closeModal.addEventListener('click', (event) => {
        event.preventDefault()
        background.remove()
    })
}