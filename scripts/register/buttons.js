const homeBtn = document.querySelector('.go-home-btn')
const loginBtn = document.querySelectorAll('.go-login-btn')
const returnBtn = document.querySelector('.return-btn')

export function redirectBtns(){
    homeBtn.addEventListener('click', (event) => {
        event.preventDefault()
        window.location.assign("../../index.html")
    })

    loginBtn.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault()
            window.location.assign("../login/login.html")
        })
    })

    returnBtn.addEventListener('click', (event) => {
        event.preventDefault()
        window.history.back()
    })
}