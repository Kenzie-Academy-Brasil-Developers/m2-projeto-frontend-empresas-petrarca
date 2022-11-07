import { registerCatch } from "../../scripts/register/catchData.js"
import { redirectBtns } from "../../scripts/register/buttons.js"
import { userRedirect } from "../../scripts/login/redirect.js"

registerCatch()
redirectBtns()

window.onload = () => {
    userRedirect()
}

const hamburguerBtn = document.querySelector('.btn-mobile')

function toggleMenu (){
    const loginOptions = document.querySelector('.login-register-box')
    loginOptions.classList.toggle('active')
}

hamburguerBtn.addEventListener('click', event => toggleMenu())