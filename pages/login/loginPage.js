import { requestLogin } from "../../scripts/requests/login.js";
import { redirectBtns } from "../../scripts/login/buttons.js"
import { dataCatcher } from "../../scripts/login/submit.js"
import { userRedirect} from "../../scripts/login/redirect.js"

window.onload = () => {
userRedirect()
}

redirectBtns()
dataCatcher()
const hamburguerBtn = document.querySelector('.btn-mobile')

function toggleMenu (){
    const loginOptions = document.querySelector('.login-register-box')
    loginOptions.classList.toggle('active')
}

hamburguerBtn.addEventListener('click', event => toggleMenu())