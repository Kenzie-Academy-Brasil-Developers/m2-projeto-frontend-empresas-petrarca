import { currentLoginVerify } from "../../scripts/pageProtection/loginCheck.js"
import { insertInfos } from "../../scripts/userPage/userData.js"
import { logout } from "../../scripts/userPage/buttons/logout.js"
import { editUserFunc } from "../../scripts/userPage/buttons/editUser.js"
import { insertCoWorkers } from "../../scripts/userPage/coWorkers.js"

window.onload = () => {
    currentLoginVerify()
    insertCoWorkers()
}
insertInfos()
logout()
editUserFunc()
