import { requestEnterprises } from "../requests/allEnterprises.js"
import { requestDepartment, requestAllDepartments } from "../requests/adminRequests/enterpriseDepartments.js"
import { editDepartments } from "./buttons/editDepartment.js"
import { deleteDepartment } from "./buttons/deleteDepartment.js"
 
const selectEnterprise = document.querySelector('#select-enterprise-adm')

export async function selectEnterpriseAdm() {
    const enterprises = await requestEnterprises()
    enterprises.forEach(sector => {
    const sectorSelect = document.createElement('option')  
        sectorSelect.classList.add('sector-selection-option')    

        sectorSelect.innerText = sector.name
        sectorSelect.value = sector.uuid
        
        selectEnterprise.append(sectorSelect)
    });
    
    selectEnterprise.addEventListener('change', event => {
        enterpriseDepartmentFilter(event.target.value)        
    })
}

export async function enterpriseDepartmentFilter(enterpriseId) {
    if(enterpriseId == "Todos"){
        let request = await requestAllDepartments()
        departmentInsert(request)
    } else {
        let request = await requestDepartment(enterpriseId)
        departmentInsert(request)
    }
}

const departmentDisplay = document.querySelector(".department-display")

export function departmentInsert(departments){
    departmentDisplay.innerText = ""
    departments.forEach(department => {
        const card = document.createElement('div')
        const userDataBox = document.createElement('div')
        const depName = document.createElement('h5')
        const depDescription = document.createElement('p')
        const companyName = document.createElement('p')

        const options = document.createElement('div')
        const view = document.createElement('button')
        const edit = document.createElement('button')
        const exclude = document.createElement('button')
        const viewImg = document.createElement('img')
        const editImg = document.createElement('img')
        const excludeImg = document.createElement('img')
        
        card.classList.add("department-card")
        userDataBox.classList.add("department-description")
        options.classList.add("department-options")

        depName.innerText = department.name
        depDescription.innerText = department.description
        companyName.innerText = department.companies.name


        viewImg.src = "../../src/view.svg"
        editImg.src = "../../src/edit.svg"
        excludeImg.src = "../../src/delete.svg"

        userDataBox.append(depName, depDescription, companyName)
        view.append(viewImg)
        edit.append(editImg)
        exclude.append(excludeImg)
        options.append(view, edit, exclude)
        card.append(userDataBox, options)
        departmentDisplay.append(card)

        edit.addEventListener('click', (event) => {
            // console.log()
            editDepartments(department.uuid, department.description)
        })
        exclude.addEventListener('click', (event)=> {
            event.preventDefault()
            deleteDepartment(department.uuid, department.name)
        })
    })
}