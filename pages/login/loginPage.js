import { requestLogin } from "../../scripts/requests/login.js";
import { redirectBtns } from "../../scripts/login/buttons.js"
import { dataCatcher } from "../../scripts/login/submit.js"
import { userRedirect} from "../../scripts/login/redirect.js"

window.onload = () => {
userRedirect()
}

redirectBtns()
dataCatcher()
// export let kenzinho = {
//     email: "kenzinho@mail.com",
//     password: "1234",
// }
// requestLogin(kenzinho)