import { requestRegister } from "../requests/cadastro.js"

const registerName = document.querySelector('#register-name-input')
const registerEmail = document.querySelector('#register-email-input')
const registerPassword = document.querySelector('#register-password-input')
const registerStack = document.querySelector('.register-stack-select')
const registerBtn = document.querySelector('.submit-register-btn')

export async function registerCatch() {

    registerBtn.addEventListener('click', (event) => {
        event.preventDefault()
        if (registerName.value != "" && registerEmail.value != "" && registerEmail.value.includes("@") && registerPassword.value != "") {

            let infosCatcher = {
                username: registerName.value,
                password: registerPassword.value,
                email: registerEmail.value,
                professional_level: registerStack.value,
            }
            requestRegister(infosCatcher)
        }
    })
}