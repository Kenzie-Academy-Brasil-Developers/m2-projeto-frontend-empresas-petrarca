const homeBtn = document.querySelector('.go-home-btn')
const registerBtn = document.querySelectorAll('.go-register-btn')

export function redirectBtns(){
    homeBtn.addEventListener('click', (event) => {
        event.preventDefault()
        window.location.assign("../../index.html")
    })

    registerBtn.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault()
            window.location.assign("../register/register.html")
        })
    })
}