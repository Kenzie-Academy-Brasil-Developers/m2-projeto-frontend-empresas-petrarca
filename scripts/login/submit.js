import { requestLogin } from "../requests/login.js"
const loginEmail = document.querySelector('#login-email-input')
const loginPassword = document.querySelector('#login-password-input')
const loginBtn = document.querySelector('.submit-login-btn')

export async function dataCatcher() {

    loginBtn.addEventListener('click', async (event) => {
        event.preventDefault()
        if (loginEmail.value != '' && loginEmail.value.includes('@') && loginEmail.value != ('@') && loginPassword.value != '') {
            let infosCatcher = {
                email: loginEmail.value,
                password: loginPassword.value,
            }           
            requestLogin(infosCatcher)
        }       
    })
}