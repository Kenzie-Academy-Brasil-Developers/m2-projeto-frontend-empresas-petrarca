import { sectorPrinter } from "../render/filteredEnterprises.js"
import { requestEnterprisesBySector } from "../../requests/enterpriseBySector.js"
import { requestEnterprises } from "../../requests/allEnterprises.js"

export async function sectorCaller(value) {
    if (value == "Todos") {
        let request = await requestEnterprises()
        sectorPrinter(request)
    } else {
        let request = await requestEnterprisesBySector(value)
        sectorPrinter(request)
    } 
}