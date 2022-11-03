import { requestSectors } from "../../requests/sectors.js"
import { sectorCaller } from "../filter/sector.js"

const sectorsOptions = document.querySelector('.enterprises-by-sector') 

export async function selectSector() {
    let sectors = await requestSectors()
    sectors.forEach(sector => {
    const sectorSelect = document.createElement('option')  
        sectorSelect.classList.add('sector-selection-option')    

        sectorSelect.innerText = sector.description
        sectorSelect.value = sector.description

        sectorsOptions.append(sectorSelect)
    });
    
    sectorsOptions.addEventListener('change', event => {
        sectorCaller(event.target.value)
    })
}