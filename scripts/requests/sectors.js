export const baseUrl = "http://localhost:6278/"

export async function requestSectors () {
    const urlTarget = `${baseUrl}sectors`

    let request = await fetch(urlTarget, {
        method: "GET"
    })
    .then(res => res.json())
    .then(res => res)
    .then(res => {
        // console.log(res, "Resposta API post")
        return res
    })
    .catch(err => console.log(err, "Erro API setores"))

    return request
}