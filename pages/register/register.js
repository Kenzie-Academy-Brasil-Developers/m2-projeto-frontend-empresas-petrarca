import { registerCatch } from "../../scripts/register/catchData.js"
import { redirectBtns } from "../../scripts/register/buttons.js"
import { userRedirect } from "../../scripts/login/redirect.js"

registerCatch()
redirectBtns()

window.onload = () => {
    userRedirect()
}