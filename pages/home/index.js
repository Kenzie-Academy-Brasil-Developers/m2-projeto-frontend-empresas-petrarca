import { selectSector } from "../../scripts/home/render/selectSector.js"
import { sectorCaller } from "../../scripts/home/filter/sector.js"
import { redirectBtns } from "../../scripts/home/buttons/buttons.js"



redirectBtns()
selectSector()
sectorCaller("Todos")

const hamburguerBtn = document.querySelector('.btn-mobile')

function toggleMenu (){
    const loginOptions = document.querySelector('.login-register-box')
    loginOptions.classList.toggle('active')
}

hamburguerBtn.addEventListener('click', event => toggleMenu())