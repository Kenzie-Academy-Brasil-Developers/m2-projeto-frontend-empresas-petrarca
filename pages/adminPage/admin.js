import { currentLoginVerify } from "../../scripts/pageProtection/loginCheck.js"
import { selectEnterpriseAdm, enterpriseDepartmentFilter } from "../../scripts/adminPage/enterpriseSectors.js"

window.onload = () => {
    currentLoginVerify()
    enterpriseDepartmentFilter("Todos")
}
selectEnterpriseAdm()