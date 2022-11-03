export const loginBtn = document.querySelector('.go-login-btn') 
export const registerBtn = document.querySelector('.go-register-btn') 

export function redirectBtns() {
    loginBtn.addEventListener('click', (event) => {
        event.preventDefault()
        window.location.assign("./pages/login/login.html")
    })

    registerBtn.addEventListener('click', (event) => {
        event.preventDefault()
        window.location.assign("./pages/register/register.html")
    })
}