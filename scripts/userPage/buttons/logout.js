const logoutBtn = document.querySelector('.logout-btn')

export function logout() {
    logoutBtn.addEventListener('click', (event) => {
        event.preventDefault()
        localStorage.removeItem('token')
        window.location.reload()
    })
}