import { requestEnterprises } from "../../requests/allEnterprises.js"
import { requesCreateDep } from "../../requests/adminRequests/department/createDepartment.js"
import { enterpriseDepartmentFilter } from "../enterpriseSectors.js"


const bodySelect = document.querySelector('body')
const createDepBtn = document.querySelector('.create-department-btn') 
let select = document.querySelector('#select-enterprise-adm')

export async function createDepartment(){
    createDepBtn.addEventListener('click', async (event) =>{
        event.preventDefault()
        let enterprises = await requestEnterprises()
        
        const background = document.createElement('div')
        const modalCard = document.createElement('div')
        const header = document.createElement('div')
        const title = document.createElement('h3')
        const closeModal = document.createElement('button')

        const bodyModal = document.createElement('div')
        const departmentName = document.createElement('input')
        const description = document.createElement('input')
        const selectEnterprise = document.createElement('select')
        const createBtn = document.createElement('button')
        
        background.classList.add('modal-background')
        closeModal.classList.add('close-modal')
        modalCard.classList.add('modal-card')
        header.classList.add('modal-header')
        bodyModal.classList.add('modal-body')
        createBtn.classList.add('create-dep-btn')
        
        enterprises.forEach(async (company) => {
            const option = document.createElement('option')
            option.innerText = company.name
            option.value = company.uuid
            selectEnterprise.append(option)
        });


        title.innerText = "Criar departamento"
        closeModal.innerText = "X"
        createBtn.innerText = "Criar o departamento"

        header.append(title, closeModal)
        bodyModal.append(departmentName, description, selectEnterprise)
        modalCard.append(header, bodyModal, createBtn)
        background.append(modalCard)
        bodySelect.append(background)

        // selectEnterprise.addEventListener('change', (event) => {
        //     console.log(event.target.value)
        // })

        closeModal.addEventListener('click', (event) =>{ 
            event.preventDefault()
            background.remove()
        })

        createBtn.addEventListener('click', async (event) => {
            event.preventDefault()

            let request = {
                name: departmentName.value,
                description: description.value,
                company_uuid: selectEnterprise.value
            }
            await requesCreateDep(request)
            .then(
                enterpriseDepartmentFilter(select.value)
            )
            .then(background.remove())
        })
    })
}

