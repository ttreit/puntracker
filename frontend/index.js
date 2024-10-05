//access button in JS (Dom element)
const addPunButton = document.getElementById('add-pun-button');
const fetchPunsButton = document.getElementById('fetch-puns-button');
const punList = document.getElementById('pun-list');
const baseApiUrl = 'http://localhost:7171'
const defaultHeaders = {
    'Content-Type': 'application/json',
}

//add click listener for post request
addPunButton.addEventListener('click', async () => {
    try {
        const res = await fetch(`${baseApiUrl}/puns`, {
            headers: { ...defaultHeaders },
            method: 'POST',
            body: JSON.stringify({ pun: 'I can not think of a pun' })
        })
        console.log(res)
    } catch (error) {
        console.error(error)
    }
})

//add click listener for get request
fetchPunsButton.addEventListener('click', async () => {
    try {
        const res = await fetch(`${baseApiUrl}/puns`)
        const data = await res.json()
        for (let pun of data) {
            punList.innerHTML += `<p>${pun.pun}</p>`
        }
    }
    catch (error) {
        console.error(error)
    }
})
