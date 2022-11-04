const logoutBtn = document.querySelector('.logout-btn')

export function logoutFunc(){
    logoutBtn.addEventListener('click', (event) =>  {
        event.preventDefault()
        localStorage.removeItem('token')
        window.location.reload()
    })
}