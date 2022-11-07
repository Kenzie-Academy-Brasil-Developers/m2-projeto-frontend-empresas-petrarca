import { requestCoWorkers } from "../requests/coWorkers.js"
import { userInfosFunc } from "../requests/userInfos.js"
import { requestEnterprises } from "../../scripts/requests/allEnterprises.js"

const coWorkersBox = document.querySelector('.user-employment-state')

export async function insertCoWorkers() {
    let user = await userInfosFunc()
    let team = await requestCoWorkers()
    let enterprises = await requestEnterprises()
    if (user.department_uuid == null) {
        const unEmployed = document.createElement('h4')
        unEmployed.classList.add('unemployed-state')
        unEmployed.innerText = "Você ainda não foi contratado"
        // coWorkersBox.append(unEmployed)
    } else {
        const header = document.createElement('div')
        const companyName = document.createElement('h4')
        const headerDivisor = document.createElement('h4')
        const departmentName = document.createElement('h4')

        header.classList.add('employment-state-header')


        enterprises.forEach(company => {
            if(company.uuid == team[0].company_uuid){
                companyName.innerText = company.name
            }
        });
        headerDivisor.innerText = "-"
        departmentName.innerText = team[0].name

        header.append(companyName, headerDivisor, departmentName)
        coWorkersBox.append(header)
        renderCoworkers(team[0].users)
    }

}

function renderCoworkers(coworkers) {
    const cardReceiver = document.createElement('div')
    cardReceiver.classList.add('coworker-card-box')

    coworkers.forEach(coworker => {
        const card = document.createElement('div')
        const coworkerName = document.createElement('h5')
        const coworkerStack = document.createElement('p')

        card.classList.add('coworker-card')
        
        coworkerName.innerText = coworker.username
        coworkerStack.innerText = coworker.professional_level
        
        card.append(coworkerName, coworkerStack)
        cardReceiver.append(card)
        coWorkersBox.append(cardReceiver)
    })
}