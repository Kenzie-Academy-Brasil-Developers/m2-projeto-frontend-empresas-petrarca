const displayEnterprises = document.querySelector(".enterprises-by-sector-display")

export async function sectorPrinter(companies){
    displayEnterprises.innerText = ""
    companies.forEach((company) => {
        const card = document.createElement('li')
        const name = document.createElement('h3')
        const infoDiv = document.createElement('div')
        const openingHour = document.createElement('p')
        const sectorDisplay = document.createElement('div')
        const sector = document.createElement('p')

        card.classList.add('filtered-enterprise-card')
        sectorDisplay.classList.add('sector-wrapper')
        infoDiv.classList.add('filtered-enterprise-infos')

        name.innerText = company.name
        openingHour.innerText = company.opening_hours
        sector.innerText = company.sectors.description


        sectorDisplay.append(sector)
        infoDiv.append(openingHour, sectorDisplay)
        card.append(name, infoDiv)
        displayEnterprises.append(card)
    })
}