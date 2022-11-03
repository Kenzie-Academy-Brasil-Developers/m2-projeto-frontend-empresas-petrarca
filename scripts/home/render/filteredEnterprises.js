const displayEnterprises = document.querySelector(".enterprises-by-sector-display")

export async function sectorPrinter(companies){
    displayEnterprises.innerText = ""
    companies.forEach((company) => {
        const card = document.createElement('li')
        const name = document.createElement('h3')
        const openingHour = document.createElement('p')
        const sectorDisplay = document.createElement('div')
        const sector = document.createElement('p')

        name.innerText = company.name
        openingHour.innerText = company.opening_hours
        sector.innerText = company.sectors.description


        sectorDisplay.append(sector)
        card.append(name, openingHour, sectorDisplay)
        displayEnterprises.append(card)
    })
}