import { selectEnterpriseAdm, enterpriseDepartmentFilter } from "../../scripts/adminPage/enterpriseSectors.js"
import { currentLoginVerify } from "../../scripts/pageProtection/loginCheck.js"
import { renderAllUsers } from "../../scripts/adminPage/registeredUsers.js"
import { logoutFunc } from "../../scripts/adminPage/buttons/logout.js"
import { createDepartment } from "../../scripts/adminPage/buttons/createDepartment.js"
import { insertCoWorkers } from "../../scripts/userPage/coWorkers.js"

window.onload = () => {
    currentLoginVerify()
    enterpriseDepartmentFilter("Todos")
}
logoutFunc()
selectEnterpriseAdm()
renderAllUsers()
createDepartment()
insertCoWorkers()