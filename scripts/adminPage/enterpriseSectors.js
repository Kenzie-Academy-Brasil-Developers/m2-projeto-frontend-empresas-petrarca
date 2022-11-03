import { requestEnterprises } from "../requests/allEnterprises.js"
import { requestSectors } from "../requests/sectors.js";

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
    console.log(enterpriseId)
}






















// function sectorPrinterAdm(companies) {    
//     companies.forEach((company) => {
//         const card = document.createElement('li')
//         const name = document.createElement('h3')
//         const openingHour = document.createElement('p')
//         const sectorDisplay = document.createElement('div')
//         const sector = document.createElement('p')

//         name.innerText = company.name
//         openingHour.innerText = company.opening_hours
//         sector.innerText = company.sectors.description


//         sectorDisplay.append(sector)
//         card.append(name, openingHour, sectorDisplay)
//         displayEnterprises.append(card)
//     })
// }
